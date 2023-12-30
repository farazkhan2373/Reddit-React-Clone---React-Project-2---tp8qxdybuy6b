import { Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PostItem } from '../HomePageComponents/PostItem'
import { PostLoader } from '../LoadingComponents/PostLoader'
import { useNavigate } from 'react-router-dom'

export const CommunityPosts = ({communityPosts, increaseVote, decreaseVote, channelId, deletePost, editPost}) => {

    const navigateTo = useNavigate();

    
  return (
    <>
    <Stack>
        {communityPosts ? communityPosts.length > 0 ? communityPosts.map((post, index)=>(
            <PostItem key={index} post= {post}  increaseVote={increaseVote} decreaseVote={decreaseVote} deletePost={deletePost} editPost={editPost}/>
             
        )) : (
            // IF THERE ARE NO POSTS SHOW ADD A POST BUTTON
            <Stack padding={10} align="center" justify="center">
                <Text fontSize="15pt" fontWeight={700}>There are no posts in this subreddit</Text>
                <Button height="34px" onClick={()=>navigateTo(`/submitpost`, {state: {channelId}})}>Add a post</Button>
            </Stack>
        ) : (
        <PostLoader/>
        )
        }
    </Stack>
    </>
  )
}
