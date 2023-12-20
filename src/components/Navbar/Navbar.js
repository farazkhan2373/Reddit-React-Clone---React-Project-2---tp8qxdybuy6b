import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { SearchInput } from './SearchInput'
import { RightContent } from './RightContent/RightContent'

export const Navbar = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>

       {/* NAVBAR -> LOGO DIV  */}
       <Flex align='center'>
        <Image src="/images/redditFace.svg" height='30px'/>
        <Image src="/images/redditText.svg" 
        height='46px'
        //media query [base -> mobile screen, md: unset = oposite of none
        display={{base: 'none', md: 'unset'}}/>
       </Flex>
       
       {/* NAVBAR -> SEARCHINPUT */}
       <SearchInput/>
       <RightContent/>

    </Flex>
  )
}
