import { Box, Grid, GridItem } from "@chakra-ui/react";
import Schedule from "./Schedule";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UnityWrapper from "./UnityWrapper";

function Dashboard() {
    return (
        <Box className="dashboard-container">
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
        </Box>
    )
}

export default Dashboard;