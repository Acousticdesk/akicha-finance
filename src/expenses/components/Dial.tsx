import { Flex, Button, Box, Text } from "@chakra-ui/react";

export function Dial() {
  return (
    <Flex wrap="wrap" justify="center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((key) => {
        return (
          <Box position="relative" w="30.3%" mx="1.5%" my="1.5%">
            <Button w="100%" pb="100%" key={key} />
            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              <Text>{key}</Text>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}
