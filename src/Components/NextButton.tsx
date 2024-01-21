import React from 'react'
import { UseQuiz } from '../Contexts/QuizContext';
import { Button } from '@mui/material';


export default function NextButton() {
    const { dispatch, answer, index, questionsLength } = UseQuiz();
    if (answer === null) return null;
    if (index < questionsLength - 1){
        return (
            <Button sx={{backgroundColor: '#1098ad', ":hover": {backgroundColor: '#1098ad'}}} 
            variant='contained' onClick={() => dispatch({ type: "nextQuestion" })}>Next</Button>
        ) 
    }
    if (index === questionsLength - 1){
        return (
            <Button sx={{backgroundColor: '#1098ad', ":hover": {backgroundColor: '#1098ad'}}} 
             variant='contained' onClick={() => dispatch({ type: "quizFinished" })}>Finish</Button>
        ) 
    }
    return null
}
