import { forwardRef } from "react";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

const Task = forwardRef(({task, ...rest}, ref) => {
    return(
        <Box bg="gray.50" ref={ref} my="4" p="4" boxShadow="base" borderRadius="lg" {...rest}>
            <Flex>
                <Heading size="md">{task.title}</Heading>
                <Spacer />
                <Text>Priority: {task.priority}</Text>
            </Flex>
            <Flex>
                <Text>Due: {task.dueDate}</Text>
                <Spacer />
                <Text>Est. Time: {task.estTime}</Text>
            </Flex>
        </Box>
    );
});

export default Task;