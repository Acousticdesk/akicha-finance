import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";

export function CategoryDetails() {
  const { categoryLabel } = useParams();
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
        {[
          { name: "Celebrating Graduation", amount: 115, date: "24.06.23" },
        ].map(({ name, amount, date }) => (
          <Flex
            key={`${name}_${amount}`}
            justify="space-between"
            borderBottom="1px solid"
            borderColor="black"
            py={4}
          >
            <Box>
              <Heading size="lg">{amount}</Heading>
              <Heading size="sm">{categoryLabel}</Heading>
              <Text mt={4}>{name}</Text>
            </Box>
            <Heading size="sm">{date}</Heading>
          </Flex>
        ))}
      </Container>
    </Box>
  );
}
