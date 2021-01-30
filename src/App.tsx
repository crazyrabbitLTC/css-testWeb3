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
import Footer from './components/Footer';
import Center from './components/Center';

// Hooks
import { Web3Provider } from './common/hooks/useWeb3';


export const App = () => {


  return (<Web3Provider>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" templateRows="50px 1fr 50px" p={3}>
          <Header />
          <Grid templateColumns="1fr 2fr 1fr"
            gap={4} templateRows="1fr 2fr 1fr">
            <GridItem bg="purple.500">  </GridItem>
            <GridItem bg="blue.500">  </GridItem>
            <GridItem bg="red.500">  </GridItem>
            <GridItem bg="yellow.500">  </GridItem>
            <Center/>
            <GridItem bg="orange.500">  </GridItem>
            <GridItem bg="purple.500">  </GridItem>
            <GridItem bg="green.500">  </GridItem>
            <GridItem bg="orange.500">  </GridItem>
          </Grid>
          <Footer/>
        </Grid>
      </Box>
    </ChakraProvider>
  </Web3Provider>)
}
