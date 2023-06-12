import {
  Container,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Dial } from "./Dial.tsx";

export function CreateExpense() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/");
  }
  return (
    <Container h="100%">
      <Flex direction="column" justify="space-between" pt={4} pb={8} h="100%">
        <NumberInput
          isReadOnly
          display="block"
          mx="auto"
          w={160}
          name="amount"
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              handleSubmit();
            }
          }}
        >
          <NumberInputField h={24} fontSize={40} textAlign="center" />
        </NumberInput>
        <Dial />
        <Button h={16} colorScheme="green" onClick={handleSubmit}>
          Add
        </Button>
      </Flex>
    </Container>
  );
}
