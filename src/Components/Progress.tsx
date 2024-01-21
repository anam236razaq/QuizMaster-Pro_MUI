import { Box, Typography } from "@mui/material";
import { UseQuiz } from "../Contexts/QuizContext"
import React from "react";

export default function Progress(){
    const {index, questionsLength, points, answer, maxPossiblePoints}=UseQuiz();
    return(
        <Box sx={{marginTop: '3rem', width: '33rem', position: 'relative'}}>
            <Box sx={{width: '100%', position: 'absolute', bottom: '3rem'}}>
                <progress style={{width:'100%'}} value={index+Number(answer!==null)} max={questionsLength}/>
            </Box>
            <Typography variant="body2" gutterBottom>Question {index+1}/{questionsLength}</Typography>
            <Typography variant="body2">{points}/{maxPossiblePoints}</Typography>
        </Box>
    )
}