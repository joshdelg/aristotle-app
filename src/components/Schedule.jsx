import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TaskContext } from "../contexts/TaskContext";

function Schedule() {

    const {state, dispatch} = useContext(TaskContext);
    const {tasks, schedule} = state;

    return (
        <Box h="100%" bg="green.50">
            <Heading size="xl">Schedule!</Heading>
            {schedule.map((sched) => (
                <Droppable key={sched.dropId} droppableId={sched.dropId}>
                    {(provided) => (
                        <Box h="200px" bg="purple.50" {...provided.droppableProps} ref={provided.innerRef}>
                            <Text>{sched.time}</Text>
                            {sched.schedTasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <h3 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{task.title}</h3>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Box>
                    )}
                </Droppable>
            ))}
        </Box>
    );
}

export default Schedule;