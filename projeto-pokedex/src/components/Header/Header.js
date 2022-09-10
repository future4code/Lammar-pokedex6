import{Flex, Image} from'@chakra-ui/react';
import logo from '../img/logo.png'


export function Header() {
    return(
        <Flex p="5" gap="1" bg="blue.900">
       
            <Image 
             boxSize='80%'
             objectFit='cover' 
             align='center'
             justify='center' 
               
            src={logo}/>
           
           </Flex>
    )
}
