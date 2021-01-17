import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Box, Button, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Task from "./Task";
import NewTaskModal from "./NewTaskModal";

function TaskList() {

    const { tasks, dispatch } = useContext(TaskContext);
    const { isOpen, onOpen, onClose} = useDisclosure();

    const handleOnDragEnd = (result) => {
        console.log(result);

        if(!result.destination) {
            return;
        }

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        dispatch({type: 'REORDER_TASKS', newTasks: items})
    }

    return (
        <>
            <Box h="100%" bg="green.50">
                <Flex alignItems="center">
                    <Heading size="xl">Task List!</Heading>
                    <Spacer />
                    <Button onClick={onOpen}>Add Task</Button>
                </Flex>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="task-list">
                        {(provided) => (
                            <Box className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
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
                </DragDropContext>
            </Box>

            <NewTaskModal isOpen={isOpen} onClose={onClose}/>
        </>
    );
}

export default TaskList;