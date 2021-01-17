import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Box, Button, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from "./Task";
import NewTaskModal from "./NewTaskModal";

function TaskList() {

    const { state } = useContext(TaskContext);
    const { tasks } = state;
    const { isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box p={4} h="100%" borderWidth="1px" borderRadius="lg">
                <Flex alignItems="center">
                    <Heading size="xl">Tasks</Heading>
                    <Spacer />
                    <Button colorScheme="purple" onClick={onOpen}>Add Task</Button>
                </Flex>
                <Droppable droppableId="task-list">
                    {(provided) => (
                        <Box minH="300px" className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided) => (
                                    <Task task={task} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </Box>
                    )}
                </Droppable>
            </Box>

            <NewTaskModal isOpen={isOpen} onClose={onClose}/>
        </>
    );
}

export default TaskList;