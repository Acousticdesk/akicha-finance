import { useRef } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button,
  IconButton,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function AppDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        colorScheme="black"
        variant="outline"
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Personal Finance PWA</DrawerHeader>

          <DrawerBody>
            <Text>
              <Link to="/category/manage">Manage Categories</Link>
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Text>By Andrii Kicha</Text>
            <Spacer />
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
