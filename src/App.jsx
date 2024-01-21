import { Box, CircularProgress } from '@mui/material';
import Header from './Components/Header';
import { UseQuiz } from './Contexts/QuizContext';
import Main from './Components/Main';
import Error from './Components/Error';
import Ready from './Components/Ready';
import Question from './Components/Question';
import Progress from './Components/Progress';
import NextButton from './Components/NextButton';
import Timer from './Components/Timer';
import FinishedQuiz from './Components/FinishedQuiz';

function App(){
    const {status}=UseQuiz();

    return(
        <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%'}}>
            <Header />
            <Main>
                {status=== "loading" && <CircularProgress color='inherit' /> }
                {status=== "error" && <Error />}
                {status==="ready" && <Ready />}
                {status==="active" && (
                    <>
                        <Progress />
                        <Question />
                        <footer>
                            <Timer />
                            <NextButton />
                        </footer>
                    </>
                )}
                {status==="finished" && <FinishedQuiz />}
            </Main>
        </Box>
    )
}
export default App;