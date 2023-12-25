import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { FaReddit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const CreatedCommunityList = ({community}) => {

  const navigateTo = useNavigate();

  return (
   <MenuItem
    width="100%"
    fontSize="10pt"
    _hover={{bg: "gray.100"}}
    onClick={()=> navigateTo(`/community/${community._id}`)}
     >
      <Flex align="center"> 
        <Icon as={FaReddit} fontSize={20} mr={2} color="blue.500" />
        {community.name}
      </Flex>

   </MenuItem>
  )
}
