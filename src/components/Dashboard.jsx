import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TaskContext } from "../contexts/TaskContext";
import Schedule from "./Schedule";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UnityWrapper from "./UnityWrapper";

function Dashboard() {

    const { state, dispatch } = useContext(TaskContext);
    const { tasks, schedule } = state;

    const handleOnDragEnd = (result) => {
        console.log(result);

        if(!result.destination) {
            return;
        } else if(result.destination.droppableId === 'task-list' && result.source.droppableId === 'task-list') {
            // Reorder task list

            const items = Array.from(tasks);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            dispatch({type: 'REORDER_TASKS', newTasks: items})

        } else if(result.destination.droppableId.startsWith('s') && result.source.droppableId === 'task-list') {
            // Transfer from task list to schedule

            const items = Array.from(tasks);
            const [reorderedItem] = items.splice(result.source.index, 1);
            dispatch({type: 'ADD_TO_SCHED', task: reorderedItem, schedId: parseInt(result.destination.droppableId.split('-')[1])});
        } else if(result.destination.droppableId === 'task-list' && result.source.droppableId.startsWith('s')) {
            // Move task from schedule back to task list

            const schedId = parseInt(result.source.droppableId.split('-')[1]);
            const movedItem = schedule[schedId].schedTasks[result.source.index];
            let newSched = schedule;
            newSched[schedId].schedTasks.splice(result.source.index, 1);

            const newTasks = Array.from(tasks);
            newTasks.splice(result.destination.index, 0, movedItem);

            dispatch({type: 'SCHED_TO_TASK', newSched, newTasks});
        }
    }

    return (
        <Box className="dashboard-container">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Grid h="92vh" templateRows="repeat(4, 1fr)" templateColumns="repeat(12, 1fr)">
                    <GridItem p="6" rowSpan={4} colSpan={3} bg="red.500">
                        <TaskList />
                    </GridItem>
                    <GridItem p="6" rowSpan={4} colSpan={3} bg="tomato">
                        <Schedule />
                    </GridItem>
                    <GridItem p="6" rowSpan={1} colSpan={6} bg="papayawhip">
                        <Timer />
                    </GridItem>
                    <GridItem p="6" rowSpan={3} colSpan={6} bg="teal.200">
                        <UnityWrapper />
                    </GridItem>
                </Grid>
            </DragDropContext>
        </Box>
    )
}

export default Dashboard;