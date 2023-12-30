import { Flex, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoArrowUpCircleSharp, IoArrowRedoOutline, IoBookmarkOutline } from 'react-icons/io5'
import { BsChat } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';
import { getHeadersWithUserToken } from '../utils/headersWithUserToken';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PostItem = ({ post, increaseVote, decreaseVote, deletePost, editPost }) => {

  const token = sessionStorage.getItem('userToken');
  const { isLoggedIn, setIsLoggedIn } = userLogInStore();
  const { setSignUpModal } = useSignUpModalStore();
  const loggedInUserDetails = JSON.parse(sessionStorage.getItem('loggedInUserDetails'));
  const navigateTo = useNavigate();





  return (
    <Flex
      border='1px solid'
      bg='white'
      borderColor='gray.300'
      borderRadius={4}
      _hover={{ borderColor: "gray.500" }}


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
          _hover={{ color: "brand.100" }}
          onClick={() => increaseVote(post._id)}
        />
        <Text fontSize="9pt" fontWeight={600}>{post.likeCount}</Text>
        <Icon as={IoArrowDownCircleOutline}
          color="gray.400"
          cursor="pointer"
          _hover={{ color: "brand.100" }}
          fontSize={24}
          onClick={() => decreaseVote(post._id)}
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
            {post.author.profileImage ? <Image src={post.author.profileImage}
              height={6}
              width={6}
              borderRadius='50%'
              objectFit='cover'
              mr={1}
            />
              :
              <Icon as={FaReddit} fontSize={20} mr={1} color="brand.100" />}
            {post.channel && 
            <Text 
              mr={1} 
              cursor="pointer"
              _hover={{color: "blue.500"}}
              onClick={()=> navigateTo(`/community/${post.channel._id}`)}
              >r/{post.channel.name}</Text>}
            <Text>posted by {post.author.name}</Text>
          </Stack>

          {/* TITLE AND CONTENT */}
          {post.title && <Text fontSize="13pt"  >{post.title}</Text>}
          {post.content && <Text fontSize="10pt">{post.content}</Text>}

          {/* POSTING IMAGE */}
          <Flex justify="center" align="center" p={2}>
            {post.images.length > 0 && <Image height="300px" maxWidth='100%' objectFit="contain"
              src={post.images[0]}
              alt='Post-Image'
            />}
          </Flex>
        </Stack>

        {/* COMMENT SHARE SAVE BUTTON */}
        <Flex ml={1} mb={0.5} color="gray.500" >

          <Flex
            align="center"
            padding="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">{post.commentCount}</Text>
          </Flex>

          <Flex
            align="center"
            padding="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize="9pt">Share</Text>
          </Flex>

          <Flex
            align="center"
            padding="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex>

          {isLoggedIn && post.author._id === loggedInUserDetails._id && (
            <Flex
            align="center"
            padding="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
            onClick={()=>editPost(post)}
          >
            <Icon as={CiEdit} mr={2} />
            <Text fontSize="9pt">Edit</Text>
          </Flex>
          )}

          {/* Delete icon User created channel can delete any of his channel post if */}
          {isLoggedIn && (
            (post.author._id === loggedInUserDetails._id) ||
            (post.channel && post.channel.owner === loggedInUserDetails._id)
          ) && (
              <Flex
              align="center"
              padding="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"
              onClick={()=>deletePost(post._id)}
            >
              <Icon as={MdDeleteOutline} mr={2} />
              <Text fontSize="9pt">Delete</Text>
            </Flex>

            )}

        </Flex>



      </Flex>
    </Flex>
  )
}
