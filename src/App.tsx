import {
  Container,
  Box,
  Heading,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ExpensesStripe } from "./ExpensesStripe.tsx";
import { CategoriesList } from "./CategoriesList.tsx";

export function App() {
  return (
    <Container>
      <Flex flexDirection="column" h="100vh" pb={16}>
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
        bottom="16px"
        right="16px"
        borderRadius="50%"
        aria-label="Add expenses"
        icon={<AddIcon />}
        colorScheme="red"
      />
    </Container>
  );
}
