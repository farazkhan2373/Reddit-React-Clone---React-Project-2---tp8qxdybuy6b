import React from 'react';
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
import userLogInStore from '../../../store/AuthenticationStore/userLogInStore';
import { Communities } from './Communities';


export const Directory = () => {
  const { isLoggedIn, setIsLoggedIn } = userLogInStore();


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
             <Icon as={TiHome} fontSize={24} mr={{base: 1, md: 2}}/>
             <Flex display={{base: "none", lg: 'flex'}}>
              <Text fontWeight={600} fontSize='10pt'>Home</Text>
             </Flex>

            </Flex>
              {/* DROP-DOWN ARROW */}
              <ChevronDownIcon />
          </Flex>
        }
      </MenuButton>
      <MenuList>
        <Communities/>
      </MenuList>
    </Menu>
  )
}
