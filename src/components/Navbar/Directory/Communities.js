import React, { useEffect, useState } from 'react'
import { CreateCommunityModal } from '../../Modal/CreatCommunity/CreateCommunityModal'
import { Box, Flex, Icon, MenuItem, Text } from '@chakra-ui/react'
import {GrAdd} from 'react-icons/gr'
import { CreatedCommunityList } from './CreatedCommunityList'
import { getHeadersWithProjectID } from '../../utils/projectID'
import axios from 'axios'


export const Communities = () => {


  const [showCommunityModal, setCommunityModal] = useState(false);
  const [createdCommunityData, setCreatedCommunityData] = useState(null);

  const loggedInUserDetails = JSON.parse(sessionStorage.getItem('loggedInUserDetails'));

  const getCreatedCommunityList = async ()=>{
    const config = getHeadersWithProjectID();

    try{
      const response = await axios.get('https://academics.newtonschool.co/api/v1/reddit/channel?limit=1000', config); // fetching all channels list
      //console.log("all communities list", response.data.data);
      const allChannels = response.data.data;
      const userCreatedChannels = allChannels.filter((item)=>{   // filtering user created channels only
        return item.owner._id === loggedInUserDetails._id;
      })
      console.log('created channels', userCreatedChannels);
      setCreatedCommunityData(userCreatedChannels);             // seting user created channels to state
    }
    catch(error){
      console.log("error in fetching communities", error.response);
    }
  }

  useEffect(()=>{
    getCreatedCommunityList();
  }, []);
  return (
    <>
    <CreateCommunityModal showCommunityModal={showCommunityModal} handleClose={()=>setCommunityModal(false)}/>
    <Box mt={3} mb={3}>
      <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
       MODERATING
      </Text>

     {createdCommunityData && createdCommunityData.length > 0 && 
      createdCommunityData.map((community, index)=>(
     
        <CreatedCommunityList key={index} community={community}/>
      ))
     
     }
    
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
    
    </Box>
    </>
  )
}
