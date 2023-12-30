import React, { useEffect } from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Box, Text } from '@chakra-ui/react'
import { NewPostForm } from '../../components/SubmitPostPageComponents/NewPostForm'
import { useLocation } from 'react-router-dom'

export const SubmitPostPage = () => {
  const location = useLocation();
  console.log("current data", location.state);
  // const channelId = location.state.channelId;

  
  return (
   <AllPagesLayout>

     {/* LHS */}
     <>
      <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
        <Text>Create a Post</Text>
      </Box>
      <NewPostForm channelId={location.state.channelId && location.state.channelId} postDetails={location.state.postDetails && location.state.postDetails}/>
     </>

     {/* RHS */}
     <>RHS</>

   </AllPagesLayout>
  )
}
