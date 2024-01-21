import { Typography } from "@mui/material";
import React from "react";

export default function Error(){
    return (
        <Typography variant="body1" sx={{fontSize: '1.2rem', padding: '0.8rem', backgroundColor: '#495057',
            borderRadius: '100px', marginTop: '2rem'}}>
            There was an Error in fetching questions.
        </Typography>
    )
}