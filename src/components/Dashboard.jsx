import { Box, Grid, GridItem } from "@chakra-ui/react";

function Dashboard() {
    return (
        <Box className="dashboard-container">
            <Grid h="92vh" templateRows="repeat(4, 1fr)" templateColumns="repeat(12, 1fr)">
                <GridItem rowSpan={4} colSpan={3} bg="red.500" />
                <GridItem rowSpan={4} colSpan={3} bg="tomato" />
                <GridItem rowSpan={1} colSpan={6} bg="papayawhip" />
                <GridItem rowSpan={3} colSpan={6} bg="teal.200" />
            </Grid>
        </Box>
    )
}

export default Dashboard;