import { Progress, Box, Text } from "@chakra-ui/react";

export function CategoriesList() {
  return (
    <Box>
      {[
        { value: 50, label: "Rent" },
        { value: 30, label: "Food" },
        { value: 10, label: "Eating Out" },
        { value: 5, label: "Car" },
        { value: 5, label: "Pets" },
      ].map(({ value, label }) => (
        <Box mt={2}>
          <Text>{label}</Text>
          <Progress
            colorScheme="green"
            hasStripe
            value={value}
            mt={2}
            h="24px"
          />
        </Box>
      ))}
    </Box>
  );
}
