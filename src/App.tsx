import * as React from "react"
import {
  ChakraProvider,
  Box,
  GridItem,
  Grid,
  theme,
  Button
} from "@chakra-ui/react"

// Components
import Header from './components/Header';

// Hooks
import { Web3Provider } from './common/hooks/useWeb3';


export const App = () => {


  return (<Web3Provider>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" templateRows="50px 1fr" p={3}>
          <Header />
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
  </Web3Provider>)
}
