import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

function Schedule() {

    const {state, dispatch} = useContext(TaskContext);
    const {tasks, schedule} = state;

    return (
        <Box p={4} h="100%" borderWidth="1px" borderRadius="lg">
            <Heading mb={2} size="xl">Schedule</Heading>
            <Grid h="90%" templateRows="repeat(3, 1fr)" templateColumns="repeat(1, 1fr)" gap={2} overflowY="scroll">
            {schedule.map((sched) => (
                    <Droppable flex="1" key={sched.dropId} droppableId={sched.dropId}>
                        {(provided) => (
                            <GridItem p={2} rowSpan={1} colSpan={1}>
                                <Box h="100%" p={4} borderWidth="1px" borderRadius="lg" {...provided.droppableProps} ref={provided.innerRef}>
                                    <Text fontSize="xl">{sched.time}</Text>
                                    {sched.schedTasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided) => (
                                                <Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} task={task} />
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            </GridItem>
                        )}
                    </Droppable>
            ))}
            </Grid>
        </Box>
    );
}

export default Schedule;