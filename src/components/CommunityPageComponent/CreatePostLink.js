import React from 'react'
import { Flex, Icon, Input } from '@chakra-ui/react'
import {FaReddit} from "react-icons/fa"
import {BsLink45Deg} from "react-icons/bs"
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore'
import { useNavigate } from 'react-router-dom'

export const CreatePostLink = ({channelId}) => {

 
    const {setSignUpModal} = useSignUpModalStore();
    const {isLoggedIn} = userLogInStore();
    const navigateTo = useNavigate();

    function redirectToSubmitPost(){
      
         if(!isLoggedIn){
           setSignUpModal(true);
           return;
         }
      
        //  if a logged in user
        navigateTo('/submitpost', {state: {channelId}});

    }

  return (
    <Flex
     justify="space-evenly"
     align='center'
     bg="white"
     height="56px"
     borderRadius={4}
     border="1px solid"
     borderColor="gray.300"
     p={2}
     mb={4}
    >
        <Icon as={FaReddit} fontSize={36} color="gray.300" mr={4}/>
        <Input
          placeholder="Create a Post"
          fontSize="10pt"
          _placeholder={{color: "gray.500"}}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
          borderColor="gray.200"
          borderRadius={4}
          mr={4}
          onClick={redirectToSubmitPost}
        />
        <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer"/>

    </Flex>
  )
}
