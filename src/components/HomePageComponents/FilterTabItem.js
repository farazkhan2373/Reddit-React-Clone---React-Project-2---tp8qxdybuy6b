import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react'


export const FilterTabItem = ({ item, isSelected, setSelectedFilterTab }) => {
    return (
        <Flex
            justify="center"
            align="center"
            p="4px 6px"
            fontWeight={700}
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
            color={isSelected ? "blue.500" : "gray.500"}
            borderRadius={20}
            bg={isSelected && "gray.100"}
            onClick={()=> setSelectedFilterTab(item.tabName)}
          
        >
            <Icon as={item.icon} fontSize="24px" mr={1}/>
            <Text fontSize="12pt">{item.tabName}</Text>
        </Flex>
    )
}
