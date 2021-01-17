import { forwardRef } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const Task = forwardRef(({task, ...rest}, ref) => {
    return(
        <Box bg="gray.50" ref={ref} my="4" p="4" boxShadow="base" borderRadius="lg" {...rest}>
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
    );
});

export default Task;