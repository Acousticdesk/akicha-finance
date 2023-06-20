import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface DialProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Dial({ onClick }: DialProps) {
  const actionIcons: { [key: string]: string } = {
    delete: "⬅️",
  };
  return (
    <Flex wrap="wrap" justify="right">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"].map((key) => {
        return (
          <Box key={key} position="relative" w="30.3%" mx="1.5%" my="1.5%">
            <Button
              w="100%"
              pb="100%"
              onClick={onClick}
              data-dial={typeof key === "number" ? key : null}
              data-action={typeof key === "string" ? key : null}
            />
            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              <Text>{typeof key === "number" ? key : actionIcons[key]}</Text>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}
