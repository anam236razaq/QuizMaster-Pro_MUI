import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { UseQuiz } from "../Contexts/QuizContext";

export default function Ready(){
    const {questionsLength, dispatch}=UseQuiz();
    return(
        <Stack sx={{marginTop: '2rem', display: "flex", alignItems: "center"}}>
            <Typography variant="h4" sx={{fontWeight: "600"}} gutterBottom>Welcome to The React Quiz!</Typography>
            <Typography variant="h6" sx={{marginBottom: '2rem'}}>{questionsLength} Questions to test your React mastery</Typography>
            <Button variant="contained" sx={{border: '1px solid #495057', backgroundColor: '#495057',
                ":hover": {backgroundColor: '#495057'}}} onClick={()=>dispatch({type: 'start'})}>Let's Start</Button>
        </Stack>
    )
}