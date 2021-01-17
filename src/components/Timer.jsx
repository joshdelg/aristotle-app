import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { TaskContext } from "../contexts/TaskContext";

function Timer() {

    const { state, dispatch } = useContext(TaskContext);

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        if(!state.activeTask.estTime) return;
        setIsActive(!isActive);
    }

    const reset = () => {
        if(!state.activeTask.estTime) return;
        dispatch({type: 'ADD_TASK', task: state.activeTask});
        dispatch({type: 'REMOVE_ACTIVE_TASK'})
        setSeconds(0);
        setIsActive(false);
    }

    const complete = () => {
        if(!state.activeTask.estTime) return;
        setIsActive(false);
        //const completetionTime = seconds;
        setSeconds(0);
        dispatch({type: 'COMPLETE_TASK'});

    }

    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if(!isActive && seconds !== 60) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <Droppable droppableId="timer">
            {(provided) => (
                <Flex {...provided.droppableProps} ref={provided.innerRef} p={4} h="100%" direction="column" justifyContent="space-between" borderWidth="1px" borderRadius="lg">
                    <Box>
                        <Heading size="xl">Timer</Heading>
                        <Box>
                            {(state.activeTask.estTime) ?
                                <Box>
                                    <Text fontSize="xl">Task: {state.activeTask.title}</Text>
                                    <Text fontSize="xl">Est Time: {state.activeTask.estTime} mins</Text>
                                    {(isActive || seconds > 0) && <Text fontSize="2xl">{`${Math.floor(seconds / 60)}:${(seconds % 60 >= 10 ) ? seconds % 60 : '0' + seconds % 60}`}</Text>}
                                </Box>
                                : <Text size="xl">Drag a Task to Start</Text>}
                        </Box>
                    </Box>
                    <Box my={2}>
                        <Button mr={4} colorScheme="pink" onClick={toggle}>{(isActive) ? 'Pause' : 'Start'}</Button>
                        <Button mr={4} colorScheme="pink" onClick={complete}>Complete</Button>
                        <Button colorScheme="pink" variant="outline" onClick={reset}>Reset</Button>
                    </Box>
                    {provided.placeholder}
                </Flex>
            )}
        </Droppable>
    );
}

export default Timer;