import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const SearchTabItem = ({item, isSelected, setSelectedTab}) => {
  return (
    <Flex
     justify="center"
     align="center"
     flexGrow={1}
     p="14px 0px"
     fontWeight={700}
     cursor="pointer"
     _hover={{bg: "gray.100"}}
     bg={isSelected && "white"}
     onClick={()=>setSelectedTab(item.title)}
    >
       <Text fontSize="12pt">{item.title}</Text>
    </Flex>
  )
}
