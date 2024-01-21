import { createContext, useContext, useEffect, useReducer } from "react";


const QuizContext=createContext();

const SECS_PER_QUESTION=30;
const initialState={
    questions: [],
    status: 'loading',
    answer: null,
    index: 0,
    points: 0,
    secondsRemaining: null,
    highScore: 0,
}

function reducer(state, action){
switch(action.type){
    case "dataReceived":
        return {
            ...state,
            questions: action.payload,
            status:"ready",
        };
    case "dataFailed":
        return{
            ...state,
            status: "error",
        };
    case "start":
        return{
            ...state,
            status: 'active',
            secondsRemaining: state.questions.length*SECS_PER_QUESTION,
        };
    case "newAnswer":{
        const question=state.questions[state.index];
        return{
            ...state,
            answer: action.payload,
            points: action.payload===question.correctOption? state.points+question.points : state.points,
        }
    }
    case "nextQuestion":
        return{
            ...state,
            index: state.index+1,
            answer: null,
        };
    case "quizFinished":
        return{
            ...state,
            status: "finished",
            highScore: state.points>state.highScore? state.points: state.highScore,
        };
    case "restart":
        return{
            ...state,
            status: 'ready',
            answer: null,
            index: 0,
            points: 0,
            highScore: 0,
        }
    case 'tick':
        return{
            ...state,
            secondsRemaining: state.secondsRemaining-1,
            status: state.secondsRemaining===0? 'finished':state.status,
        };
    default: throw new Error("Action Unknown")
    }
}

function QuizProvider({children}){
    const[{questions, status, index, answer, points, secondsRemaining, highScore}, dispatch]=useReducer(reducer, initialState);
    const questionsLength=questions.length;
    const maxPossiblePoints=questions.reduce((prev, cur)=>prev+cur.points, 0);

    useEffect(function(){
        async function fetchQuestions(){
            try{
                const res=await fetch("http://localhost:9000/questions");
                const data=await res.json();
                dispatch({type: "dataReceived", payload: data});
            }catch(e){
                dispatch({type: "dataFailed"});
            }
        }
        fetchQuestions();
    }, [])

    return <QuizContext.Provider value={{questions, status, dispatch, questionsLength, index, answer, 
        points, secondsRemaining, highScore, maxPossiblePoints}}>{children}</QuizContext.Provider>
}

function UseQuiz(){
    const context=useContext(QuizContext);
    if(context===undefined) throw new Error("QuizContext is used outside the QuizProvider");
    return context;
}

export {QuizProvider, UseQuiz}