import { Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PostItem } from './PostItem';
import { getHeadersWithProjectID } from '../utils/projectID';
import axios from 'axios';
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';
import { getHeadersWithUserToken } from '../utils/headersWithUserToken';

export const HomePagePosts = () => {

   const [postData, setPostData] = useState(null);

  const {isLoggedIn, setIsLoggedIn} = userLogInStore();
  const {setSignUpModal} = useSignUpModalStore();

   const increaseVote = async (postId)=>{

      if(!isLoggedIn){
         setSignUpModal(true);
         return;
      }
  
      const config = getHeadersWithUserToken();
      const userDetails = {
        appType: "reddit"
      }

      try{
         const response = await axios.post(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`, userDetails, config);
         console.log("upVoted post successfully", response.data);
         fetchPosts();  //  after Upvoting, fetch post again to show the correct count
      }
      catch(error){
        console.log('fail to upvote', error.response);
      }
   }

    const fetchPosts = async ()=>{
        const config = getHeadersWithProjectID();
        try{
            const response = await axios.get('https://academics.newtonschool.co/api/v1/reddit/post', config);
            console.log("posts", response.data.data);
            setPostData(response.data.data);
        }
        catch(error){
            console.log('error');
        }
    }

    useEffect(()=>{
        fetchPosts();

    }, [])
  return (
    <>
    <Stack>
        {postData ? postData.length > 0 && postData.map((post, index)=>(
            <PostItem post= {post} key={index} increaseVote={increaseVote}/>
             
        )) : <Heading>Loading...</Heading>}
    </Stack>
    </>
  )
}
