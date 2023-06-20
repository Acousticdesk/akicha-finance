import { Box, Container, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { ExpensesCategoryList } from "../expenses";

export function ManageCategory() {
  const navigate = useNavigate();
  return (
    <Box>
      <header>
        <Box p={4} background="green.400">
          <IconButton
            onClick={() => navigate("/")}
            icon={<ArrowBackIcon />}
            colorScheme="black"
            variant="outline"
            aria-label="Back"
          />
        </Box>
      </header>
      <Container h="100%" p={4}>
        <ExpensesCategoryList />
      </Container>
    </Box>
  );
}
