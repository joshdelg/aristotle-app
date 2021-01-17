import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
    return (
        <Flex bgGradient="linear(to-l, #7928CA, #FF0080)" justify="space-between" h="100%">
            <Box p="4">
                <Heading size="xl">Aristotle</Heading>
            </Box>
            <Box p="4">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Account
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log Out</MenuItem>
                        <MenuItem>Profile</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default Navbar;