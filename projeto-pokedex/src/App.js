
import RoutesPokedex from './Routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';
import{Theme}from './theme.js'
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider theme={Theme} reset css= 'false'>
    <div>
      <Header></Header>
      <RoutesPokedex></RoutesPokedex>
    </div>
    </ChakraProvider>
  );
}

export default App;
