import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UseQuiz } from "../Contexts/QuizContext";

export default function FinishedQuiz(){
const {points, maxPossiblePoints, highScore, dispatch}=UseQuiz();

    return(
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant="body1" gutterBottom>You Scored {points} Out Of {maxPossiblePoints}</Typography>
            <Typography variant="body1" gutterBottom>(HighScore: {highScore}Points)</Typography>
            <Button sx={{backgroundColor: '#1098ad', ":hover": {backgroundColor: '#1098ad'}}} 
             variant='contained' onClick={() => dispatch({ type: "restart" })}>Restart</Button>
        </Box>
    )
}