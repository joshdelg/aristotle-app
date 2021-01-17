import { forwardRef, useContext } from "react";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { TaskContext } from "../contexts/TaskContext";

const Task = forwardRef(({task, ...rest}, ref) => {

    const { dispatch } = useContext(TaskContext);

    const handleClick = () => {
        dispatch({type: 'SET_TIMED_TASK', task});
    }

    return(
        <Box ref={ref} my="4" p="4" borderWidth="1px" borderRadius="lg" {...rest}>
            <Flex>
                <Text>{task.title}</Text>
                <Spacer />
                <Text>{task.priority}</Text>
            </Flex>
            <Flex>
                <Text>{task.dueDate}</Text>
                <Spacer />
                <Text>{task.estTime}</Text>
            </Flex>
            <Button onClick={handleClick} >Add to timer</Button>
        </Box>
    );
});


export default Task;