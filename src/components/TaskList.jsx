import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Box, Heading, Text } from "@chakra-ui/react";

function TaskList() {

    const { tasks, dispatch } = useContext(TaskContext);

    return (
        <Box h="100%" bg="green.50" onClick={() => {
            dispatch({type: 'ADD_TASK'});
        }}>
            <Heading size="xl">Task List!</Heading>
            {
                tasks.map((task) => (
                    <Text key={task.id}>{task.title}</Text>
                ))
            }
        </Box>
    );
}

export default TaskList;