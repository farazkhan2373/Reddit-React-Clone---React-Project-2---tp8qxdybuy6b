import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentInput } from './CommentInput'
import { getHeadersWithProjectID } from '../utils/projectID';
import { getHeadersWithUserToken } from '../utils/headersWithUserToken';
import axios from 'axios';

export const Comments = ({postId, commentText, setCommentText, btnLoading,  handleCommentClick}) => {

 

  return (
    <Box bg="white" borderRadius="0px 0px 4px 4px" p={2}>
      <Flex
        direction="column"
        pl={10}
        pr={4}
        mb={6}
        fontSize="10pt"
        width="100%"
        border="1px solid red"
      >
        <CommentInput 
          commentText={commentText}
          setCommentText={setCommentText}  
          handleCommentClick={handleCommentClick}
          btnLoading={btnLoading}
        />

      </Flex>

    </Box>
  )
}
