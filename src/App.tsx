import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  GridItem,
  Grid,
  theme,
  Flex,
  Button
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" templateRows="50px 1fr" p={3}>
        {/* <Flex color="blue" justifyContent="flex-end">
          <Button justifySelf="flex-start">Connect Web3</Button>
        </Flex> */}
        <Grid templateColumns="1fr 1fr 30px" gap="20" marginRight="15okay i">
          <Button>Connect Web3</Button>
          <Button>Connect Web3</Button>
          <ColorModeSwitcher />
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" 
        gap={4} templateRows="repeat(3, 1fr)">
          <GridItem rowSpan={2} bg="purple.500"> Hello </GridItem>
          <GridItem bg="blue.500"> Hello </GridItem>
          <GridItem bg="red.500"> Hello </GridItem>
          <GridItem colSpan={2} bg="yellow.500"> Hello </GridItem>
          <GridItem colSpan={2} bg="green.500"> Hello </GridItem>
          <GridItem bg="orange.500"> Hello </GridItem>
        </Grid>
      </Grid>
    </Box>
  </ChakraProvider>
)
