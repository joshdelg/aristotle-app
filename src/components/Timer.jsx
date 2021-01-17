import { Box, Button, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

function Timer() {

    const { state, dispatch } = useContext(TaskContext);

    const [secondsLeft, setSecondsLeft] = useState(state.activeTask.estTime * 60);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setSecondsLeft(60);
        setIsActive(false);
    }

    useEffect(() => (
        setSecondsLeft(state.activeTask.estTime * 60)
    ), [state.activeTask.estTime])

    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                setSecondsLeft(secondsLeft => secondsLeft - 1);
            }, 1000);
        } else if(!isActive && secondsLeft !== 60) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, secondsLeft]);

    return (
        <Box h="100%" bg="green.50">
            <Heading size="xl">Timer! {`${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`} left</Heading>
            <Button onClick={toggle}>{(isActive) ? 'Pause' : 'Start'}</Button>
            <Button onClick={reset}>Reset</Button>
        </Box>
    );
}

export default Timer;