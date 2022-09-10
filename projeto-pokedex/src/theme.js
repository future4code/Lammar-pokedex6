
import { border, extendTheme } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'
//import { Image } from '@chakra-ui/react'
import { Box, Flex, Text } from "@chakra-ui/layout"
//import{pokedex_redimensionado} from '.img/pokedex_redimensionado'

// 2. Call `extendTheme` and pass your custom values
export const Theme = extendTheme({
  colors: {
    blue: {
      "600": "#2B6CB0",
      "300": "#63B3ED",
      },
    yellow:{
      "200":"FAF089",
      "300":"#F6E05E",
    },
    blackAlpha:{
      "800":"(0,0,0,0.80)"
    },
  },
 
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },

  styles: {
    global: {
      body: {
        bg: "blue.300",
      },

 h1:{
    fontSize:['45px'],
    align:'center',
    lineHeight: '110%',
    letterSpacing: '-2%',
 
 },
 h2:{
    fontSize:['30px'],
    align:'center',
    lineHeight: '110%',
    letterSpacing: '-2%',
 },
      button:{
        size:'lg', 
        background:'yellow', 
        variant:'solid',
        mt:'24px',
        border:'2px',
      },
     
     
  },
}

})

    
    export default Theme
 
