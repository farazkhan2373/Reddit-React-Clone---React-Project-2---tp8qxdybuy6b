import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Icon,
  Text,
  Center,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import userLogInStore from '../../../store/AuthenticationStore/userLogInStore'
import { FaRedditSquare, FaRedditAlien } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";


export const UserMenuModal = () => {
  const { isLoggedIn, setIsLoggedIn } = userLogInStore();

  function handleLogout(){
    // sessionStorage.removeItem('userToken');
    // sessionStorage.removeItem('loggedInUserDetails');
    sessionStorage.clear();
    setIsLoggedIn(false); 
  }

  function getUserName(){
   const userDetails = JSON.parse(sessionStorage.getItem('loggedInUserDetails'));
   return userDetails.name;
  }

  return (
    <Menu>
      {/* IF USER IS LOGGED IN THEN SHOW MENU BUTTON */}
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.300" }}
      >
        {isLoggedIn &&
          <Flex align='center'>
            <Flex align='center'>
              <>
                {/* LOGO */}
                <Icon as={FaRedditSquare}
                  fontSize={24}
                  color="gray.300"
                />
                {/* NAME AND KARMA */}
                <Flex
                   direction='column'
                   display={{base: 'none', lg: 'flex'}}
                   fontSize='8pt'
                   align='flex-start'
                   mr={8}
                   ml={1}

                  >
                   <Text fontWeight={700} fontSize='10pt'>
                    {getUserName()}
                   </Text>
                   <Flex>
                    <Icon as={IoSparkles} color='brand.100' mr={1}/>
                    <Text color='gray.400'>1 karma</Text>
                   </Flex>
                </Flex>
              </>

              {/* DROP-DOWN ARROW */}
              <ChevronDownIcon />
            </Flex>
          </Flex>
        }
      </MenuButton>
      <MenuList>
        <MenuItem
          fontSize='10pt'
          fontWeight={700}
          _hover={{ bg: "blue.500", color: 'white' }}
        >
          <Flex align="center">
            <Icon as={CgProfile}
              fontSize={20} mr={2}
            />
            Profile
          </Flex>
        </MenuItem>
         <MenuDivider/>
        <MenuItem
          fontSize='10pt'
          fontWeight={700}
          _hover={{ bg: "blue.500", color: 'white' }}
          onClick={handleLogout}
        >
          <Flex align="center">
            <Icon as={MdOutlineLogin}
              fontSize={20} mr={2}
            />
            Log Out
          </Flex>
        </MenuItem>



      </MenuList>
    </Menu>
  )
}
