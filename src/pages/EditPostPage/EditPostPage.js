import React, { useEffect } from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Box, Text, chakra } from '@chakra-ui/react'
import { EditPostForm } from '../../components/EditPostPageComponents/EditPostForm'
import { useLocation } from 'react-router-dom'
import useMenuButtonTextStore from '../../store/NavigatorStore/useMenuButtonTextStore'

export const EditPostPage = () => {
    const location = useLocation();
    // location.state.channelId
    // location.state.postDetails

    const {setMenuButtonText} = useMenuButtonTextStore();
  
  useEffect(()=>{
    setMenuButtonText('Edit Post');
    sessionStorage.setItem('menuButtonText', 'Edit Post');
  }, [])
    
    return (
        <AllPagesLayout>
            {/* LHS */}
            <>
                <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
                    <Text>Edit a Post</Text>
                </Box>
                <EditPostForm  postDetails={location.state.postDetails} channelId={location.state.channelId} postId={location.state.postId} />
            </>

            {/* RHS */}
            <>

            </>
        </AllPagesLayout>
    )
}
