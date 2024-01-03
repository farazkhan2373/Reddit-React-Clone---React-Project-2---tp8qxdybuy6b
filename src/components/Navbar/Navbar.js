import { Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SearchInput } from './SearchInput'
import { RightContent } from './RightContent/RightContent'
import { Directory } from './Directory/Directory'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getHeadersWithProjectID } from '../utils/projectID'
import axios from 'axios'
import useMenuButtonTextStore from '../../store/NavigatorStore/useMenuButtonTextStore'

export const Navbar = () => {

  const {isLoggedIn} = userLogInStore();
  const {menuButtonText, setMenuButtonText} = useMenuButtonTextStore();
  const location = useLocation();
  const navigateTo = useNavigate();

  function handleLogoClick(){
      navigateTo('/');
      sessionStorage.setItem('menuButtonText', 'Home');
      setMenuButtonText('Home');
  }

  useEffect(()=>{
    if(location.pathname === '/'){
      setMenuButtonText('Home');
    }
  }, [location.pathname])


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
       {isLoggedIn && <Directory />}
       
       {/* NAVBAR -> SEARCHINPUT */}
       <SearchInput/>

       {/* LOGIN LOGOUT BUTTON OR USER PROFILE */}
       <RightContent/>

    </Flex>
  )
}
