import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UseQuiz } from "../Contexts/QuizContext";

export default function Question() {
  const commonStyles = {
    border: '1px solid #495057',
    marginBottom: '1rem',
    backgroundColor: '#495057',
    padding: '0.5rem',
    width: '33rem',
    textAlign: 'left',
    ":hover": {
      backgroundColor: '#495057',
    }
  };

  const answerStyles={
    transform: 'translateX(2rem)',
  };

  const correctStyles={
    backgroundColor: '#1098ad',
    border: '1px solid #1098ad',
    color: '#f1f3f5'
  }

  const wrongStyles={
    backgroundColor: '#ffa94d',
    border: '1px solid #ffa94d',
    color: '#343a40'
  }

  const { questions, dispatch, answer, index } = UseQuiz();
  const hasAnswer = answer !== null;

  const currentQuestion = questions[index];

  return (
    <Box sx={{width: '33rem', marginTop: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'left', width: '100%' }}>{currentQuestion.question}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {currentQuestion.options.map((option, index) => (
          <Button sx={{...commonStyles, ...(index===answer? answerStyles: {}), 
                ':disabled': {
                    ...(hasAnswer && index === currentQuestion.correctOption ? correctStyles : {}),
                    ...(hasAnswer && index !== currentQuestion.correctOption ? wrongStyles : {}),
                  },
    }}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
            variant="contained"
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
