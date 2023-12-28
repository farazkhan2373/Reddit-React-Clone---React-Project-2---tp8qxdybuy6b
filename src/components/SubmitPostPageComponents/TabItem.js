import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'

export const TabItem = ({item, isSelected, setSelectedTab}) => {
  return (
    <Flex
     justify="center"
     align="center"
     flexGrow={1}
     p="14px 0px"
     fontWeight={700}
     cursor="pointer"
     _hover={{bg: "gray.100"}}
     color={isSelected ? "brand.100" : "gray.500"}
     borderWidth={isSelected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
     borderBottomColor={isSelected ? "brand.100" : "gray.200"}
     onClick={()=>setSelectedTab(item.title)}
    >
       <Flex align="center" height="20px" mr={2}>
             <Icon as={item.icon} />
       </Flex>
       <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  )
}
