import { Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SearchInput } from './SearchInput'
import { RightContent } from './RightContent/RightContent'
import { Directory } from './Directory/Directory'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getHeadersWithProjectID } from '../utils/projectID'
import axios from 'axios'

export const Navbar = () => {


  const {isLoggedIn} = userLogInStore();
  const [selectedItem, setSelectedItem] = useState('Home');
  const navigateTo = useNavigate();

  function handleLogoClick(){
      navigateTo('/');
      setSelectedItem('Home');
  }


  return (
    <Flex bg='white' height='44px' 
          padding='6px 12px'
          justify={{md: 'space-between'}}
          >

       {/* NAVBAR -> LOGO DIV  */}
       <Flex align='center'
             width={{base: "40px", md: "auto"}}
             mr={{base: 0, md: 2}}
             cursor='pointer'
             onClick={handleLogoClick}
             >
        <Image src="/images/redditFace.svg" height='30px'/>
        <Image src="/images/redditText.svg" 
        height='46px'
        //unset = oposite of none
        display={{base: 'none', md: 'unset'}}/>
       </Flex>
       
       {/* HOME ICON AND DIRECTORY */}
       {isLoggedIn && <Directory selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
       {/* NAVBAR -> SEARCHINPUT */}
       <SearchInput/>

       {/* LOGIN LOGOUT BUTTON OR USER PROFILE */}
       <RightContent/>

    </Flex>
  )
}
