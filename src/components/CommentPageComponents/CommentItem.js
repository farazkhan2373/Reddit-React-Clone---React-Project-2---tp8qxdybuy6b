import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaReddit } from 'react-icons/fa'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'

export const CommentItem = ({comment, deleteComment}) => {

    const {isLoggedIn} = userLogInStore();
    const loggedInUserDetails = JSON.parse(sessionStorage.getItem('loggedInUserDetails') ) ;
    return (
        <Flex ml={8}>
            <Box mr={2}>
                <Icon as={FaReddit} fontSize={30} color="gray.300" />
            </Box>

            <Stack spacing={1}>
                <Stack direction="row" align="center" fontSize="8pt">
                    <Text fontWeight={700}>{comment.author}</Text>
                    <Text color="gray.600">times ago</Text>
                </Stack>

                <Text fontSize="10pt">{comment.content}</Text>

                <Stack direction="row" align="center" cursor="pointer" color="gray.500">
                  <>
                   {/* <Text fontSize="9pt" _hover={{ color: "blue.500" }}>
                    Edit
                   </Text> */}
                  {isLoggedIn && loggedInUserDetails._id === comment.author && <Text
                     fontSize="9pt"
                     _hover={{color: "blue.500"}}
                     onClick={()=>deleteComment(comment._id)}
                   >
                     Delete
                   </Text>}
                  </>
                </Stack>
            </Stack>
        </Flex>
    )
}
