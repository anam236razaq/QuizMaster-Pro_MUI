import { useEffect } from "react";
import { UseQuiz } from "../Contexts/QuizContext";
import { Box } from "@mui/material";
import React from "react";


export default function Timer(){
    const {secondsRemaining, dispatch}=UseQuiz();
    const mins=Math.floor(secondsRemaining/60);
    const seconds=secondsRemaining%60;

    useEffect(()=>{
        const id=setInterval(function(){
            dispatch({type: 'tick'})
        }, 1000);

        return ()=>clearInterval(id);
    }, [dispatch])

    return <Box sx={{float: 'left', fontSize: '1.5rem', color: '#495057', marginRight: '1rem'}}>
        {mins<10 && "0"}{mins}:{seconds<10 && "0"}{seconds}
    </Box>

}