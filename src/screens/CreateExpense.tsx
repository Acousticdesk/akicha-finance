import {
  Container,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Dial } from "../expenses";
import { useState } from "react";

export function CreateExpense() {
  const navigate = useNavigate();
  const [expenseInputValue, setExpenseInputValue] = useState("");
  function handleSubmit() {
    navigate("/");
  }
  function handleDialClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;

    if (target.dataset.dial) {
      const value = target.dataset.dial;
      setExpenseInputValue((previousValue) => previousValue + value);
    }

    if (target.dataset.action) {
      const action = target.dataset.action;

      if (action === "delete") {
        setExpenseInputValue((previousValue) =>
          previousValue.substring(0, previousValue.length - 1)
        );
      }
    }
  }
  return (
    <Container h="100%">
      <Flex direction="column" justify="space-between" pt={4} pb={8} h="100%">
        <NumberInput
          value={expenseInputValue}
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
        <Dial onClick={handleDialClick} />
        <Button h={16} colorScheme="green" onClick={handleSubmit}>
          Add
        </Button>
      </Flex>
    </Container>
  );
}
