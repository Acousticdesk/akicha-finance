import {
  Container,
  Box,
  Heading,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { ExpensesStripe } from "./ExpensesStripe.tsx";
import { CategoriesList } from "./CategoriesList.tsx";

export function App() {
  const navigate = useNavigate();

  return (
    <Container h="100%">
      <Flex flexDirection="column" h="100%" pb={24}>
        <header>
          <Heading size="lg">June</Heading>
        </header>
        <ExpensesStripe />
        <Spacer />
        <Box my={4}>
          <CategoriesList />
        </Box>
      </Flex>
      <IconButton
        position="fixed"
        bottom={2}
        right={2}
        w={24}
        h={24}
        fontSize={24}
        borderRadius="50%"
        aria-label="Add expenses"
        icon={<AddIcon />}
        colorScheme="red"
        onClick={() => navigate("/create-expense")}
      />
    </Container>
  );
}
