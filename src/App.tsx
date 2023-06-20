import { Container, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { ExpensesStripe, ExpensesCategoryList } from "./expenses";
import { AppDrawer } from "./components";

// todo akicha: create a separate component for the header
// todo akicha: create a separate component for the Add button
export function App() {
  const navigate = useNavigate();

  return (
    <Box h="100%">
      <Flex flexDirection="column" h="100%" pb={24} justify="space-between">
        <header>
          <Flex p={4} background="green.400" justify="flex-end">
            <AppDrawer />
          </Flex>
        </header>
        <Container>
          <Heading size="lg">June</Heading>
          <ExpensesStripe />
          <Box mt={8} mb={4}>
            <ExpensesCategoryList />
          </Box>
          <IconButton
            position="fixed"
            bottom={2}
            right={2}
            w={20}
            h={20}
            fontSize={20}
            borderRadius="50%"
            aria-label="Add expenses"
            icon={<AddIcon />}
            colorScheme="red"
            onClick={() => navigate("/expense/create")}
          />
        </Container>
      </Flex>
    </Box>
  );
}
