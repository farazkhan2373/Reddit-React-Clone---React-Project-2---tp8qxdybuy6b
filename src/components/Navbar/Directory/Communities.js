import React, { useState } from 'react'
import { CreateCommunityModal } from '../../Modal/CreatCommunity/CreateCommunityModal'
import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import {GrAdd} from 'react-icons/gr'

export const Communities = () => {
  const [showCommunityModal, setCommunityModal] = useState(false);
  return (
    <>
    <CreateCommunityModal 
    showCommunityModal={showCommunityModal}
    handleClose={()=>setCommunityModal(false)}
    />
    <MenuItem
      width='100%'
      fontSize='10pt'
      _hover={{bg: "gray.100"}}
      onClick={()=>setCommunityModal(true)}
    >
     <Flex align='center'>
        <Icon as={GrAdd} 
           fontSize={20}
           mr={2}
         />
         Create Community
     </Flex>
    </MenuItem>
    </>
  )
}
