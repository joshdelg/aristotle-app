import { forwardRef } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const Task = forwardRef(({task, ...rest}, ref) => (
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
    </Box>
));


export default Task;