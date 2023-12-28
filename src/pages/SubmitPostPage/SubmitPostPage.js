import React from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Box, Text } from '@chakra-ui/react'
import { NewPostForm } from '../../components/SubmitPostPageComponents/NewPostForm'

export const SubmitPostPage = () => {
  return (
   <AllPagesLayout>

     {/* LHS */}
     <>
      <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
        <Text>Create a Post</Text>
      </Box>
      <NewPostForm/>
     </>

     {/* RHS */}
     <>RHS</>

   </AllPagesLayout>
  )
}
