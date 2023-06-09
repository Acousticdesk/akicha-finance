import { Container, Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import { ExpensesStripe } from "./ExpensesStripe.tsx";
import { CategoriesList } from "./CategoriesList.tsx";

export function App() {
  return (
    <Container>
      <Flex flexDirection="column" h="100vh">
        <header>
          <Heading size="lg">June</Heading>
        </header>
        <ExpensesStripe />
        <Spacer />
        <Box my={4}>
          <CategoriesList />
        </Box>
      </Flex>
    </Container>
  );
}
