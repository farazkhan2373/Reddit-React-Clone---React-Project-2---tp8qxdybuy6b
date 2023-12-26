import React, { useEffect, useState } from 'react';
import {
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {TiHome} from 'react-icons/ti';
import { FaReddit } from 'react-icons/fa'
import userLogInStore from '../../../store/AuthenticationStore/userLogInStore';
import { Communities } from './Communities';
import { useNavigate } from 'react-router-dom';
import { getHeadersWithProjectID } from '../../utils/projectID'
import axios from 'axios'


export const Directory = ({selectedItem, setSelectedItem}) => {
  const { isLoggedIn, setIsLoggedIn } = userLogInStore();
  
  const [createdCommunityData, setCreatedCommunityData] = useState(null);

  const navigateTo = useNavigate();

  // this handleCommunityClick function passing it as prop in Communities.js this from there to CreatedCommunityList.js
  function handleCommunityClick(e, communityID){
    
    console.log(e.target.innerText);
    const selectedRoute = e.target.innerText;

    if(selectedRoute === 'Home'){
      setSelectedItem(e.target.innerText);
      navigateTo('/')
      return;
    }

    navigateTo(`/community/${communityID}`);
    setSelectedItem(selectedRoute); // setting the text of menu button on selecting community
  }


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
    <Menu>
      {/* IF USER IS LOGGED IN THEN SHOW MENU BUTTON */}
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius={4}
        mr={2}
        ml={{base: 0, md: 2}}
        _hover={{ outline: "1px solid", outlineColor: "gray.300" }}
      >
        {isLoggedIn &&
          <Flex align='center' 
            justify='space-between'
            width={{base: "auto", lg: '200px'}}  
          >
            <Flex align='center'>
             <Icon as={selectedItem === 'Home' ? TiHome : FaReddit} fontSize={24} mr={{base: 1, md: 2}} color={selectedItem !== 'Home' && "blue.500"}/>
             <Flex display={{base: "none", lg: 'flex'}}>
              {/* BELOW IS MENU BUTTON TEXT */}
              <Text fontWeight={600} fontSize='10pt'>{selectedItem}</Text> 
             </Flex>

            </Flex>
              {/* DROP-DOWN ARROW */}
              <ChevronDownIcon />
          </Flex>
        }
      </MenuButton>
      <MenuList>
        <Communities createdCommunityData={createdCommunityData} handleCommunityClick={handleCommunityClick}/>
      </MenuList>
    </Menu>
  )
}
