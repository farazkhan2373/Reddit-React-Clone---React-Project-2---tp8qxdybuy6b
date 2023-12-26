import { Flex, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoArrowUpCircleSharp, IoArrowRedoOutline, IoBookmarkOutline} from 'react-icons/io5'
import {BsChat} from 'react-icons/bs';
import {FaReddit} from 'react-icons/fa';
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';
import { getHeadersWithUserToken } from '../utils/headersWithUserToken';
import axios from 'axios';

export const PostItem = ({post, increaseVote, decreaseVote}) => {

  const token = sessionStorage.getItem('userToken');
  const {isLoggedIn, setIsLoggedIn} = userLogInStore();
  const {setSignUpModal} = useSignUpModalStore();

 

  return (
    <Flex
      border='1px solid'
      bg='white'
      borderColor='gray.300'
      borderRadius={4}
      _hover={{borderColor: "gray.500"}}
      

     >
        {/* VOTING BUTTON COLUMN */}
        <Flex
         direction="column"
         align="center"
         bg="gray.100"
         p={2}
         width="40px"
         borderRadius={4}
        >
          

         <Icon as={IoArrowUpCircleOutline}
           color="gray.400"
           fontSize={24}
           cursor="pointer"    
           _hover={{ color: "brand.100"}}
           onClick={()=> increaseVote(post._id)}
           />
           <Text fontSize="9pt" fontWeight={600}>{post.likeCount}</Text>
           <Icon as={IoArrowDownCircleOutline}
           color="gray.400"
           cursor="pointer"
           _hover={{ color: "brand.100"}}
           fontSize={24}
           onClick={()=>decreaseVote(post._id)}
           />

        </Flex>

        {/* POSTS COLUMN */}
        <Flex direction="column" width="100%">
            <Stack spacing={1} p="10px">
          <Stack
            direction="row"
            spacing={0.6}
            align="center"
            fontSize="9pt"
          >
            <Image src={post.author.profileImage}
             height={6} 
             width={6} 
             borderRadius='50%'
            objectFit='cover'
            mr={1}
            />
           {/* <Icon as={FaReddit} fontSize={20} mr={1} color="gray.400"/> */}
          <Text>Posted by r/{post.channel.name}</Text>
          </Stack>
          {/* <Text fontSize="12pt">Post title</Text> */}
          <Text fontSize="10pt">{post.content}</Text>
          <Flex justify="center" align="center" p={2}>
            <Image height="300px" maxWidth='100%' objectFit='cover'
            src={post.channel.image}
            alt='Post-Image'
            />
          </Flex>
          </Stack>

          {/* COMMENT SHARE SAVE BUTTON */}
           <Flex ml={1} mb={0.5} color="gray.500" >

             <Flex
              align="center"
              padding="8px 10px"
              borderRadius={4}
              _hover={{bg: "gray.200"}}
              cursor="pointer"
              >
             <Icon as={BsChat} mr={2} />
             <Text fontSize="9pt">{post.commentCount}</Text>
             </Flex>

             <Flex
              align="center"
              padding="8px 10px"
              borderRadius={4}
              _hover={{bg: "gray.200"}}
              cursor="pointer"
              >
             <Icon as={IoArrowRedoOutline} mr={2} />
             <Text fontSize="9pt">Share</Text>
             </Flex>

             <Flex
              align="center"
              padding="8px 10px"
              borderRadius={4}
              _hover={{bg: "gray.200"}}
              cursor="pointer"
              >
             <Icon as={IoBookmarkOutline} mr={2} />
             <Text fontSize="9pt">Save</Text>
             </Flex>

           </Flex>



        </Flex>
    </Flex>
  )
}
