import { useRef, useEffect } from "react";
import { Container, Button, Flex, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function CreateExpense() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  function handleSubmit() {
    navigate("/");
  }
  return (
    <Container>
      <Flex direction="column" h="100vh" justify="space-between" py={4}>
        <Input
          display="block"
          mx="auto"
          w="160px"
          ref={inputRef}
          type="number"
          name="amount"
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              handleSubmit();
            }
          }}
        />
        <Button colorScheme="green" onClick={handleSubmit}>
          Add
        </Button>
      </Flex>
    </Container>
  );
}
