import { Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PostItem } from './PostItem';
import { getHeadersWithProjectID } from '../utils/projectID';
import axios from 'axios';
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';
import { getHeadersWithUserToken } from '../utils/headersWithUserToken';
import { PostLoader } from '../LoadingComponents/PostLoader';
import { useNavigate } from 'react-router-dom';

export const HomePagePosts = () => {

   const [postData, setPostData] = useState(null);

  const {isLoggedIn, setIsLoggedIn} = userLogInStore();
  const {setSignUpModal} = useSignUpModalStore();
  const navigateTo = useNavigate();

  const fetchPosts = async ()=>{
    const config = getHeadersWithProjectID();
    try{
        const response = await axios.get('https://academics.newtonschool.co/api/v1/reddit/post?limit=1000', config);
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

   const increaseVote = async (postId)=>{

      if(!isLoggedIn){
         setSignUpModal(true);
         return;
      }
  
      const config = getHeadersWithUserToken();
       // in newton doc body is not given but here it's failing if we don't pass body
      const body = {
        appType: "reddit"
      }

      try{
         const response = await axios.post(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`, body, config);
         console.log("upVoted post successfully", response.data);
         fetchPosts();  //  after Upvoting, fetch post again to show the correct count
      }
      catch(error){
        console.log('fail to upvote', error.response);
      }
   }

   const decreaseVote = async (postId)=>{

      if(!isLoggedIn){
         setSignUpModal(true);
         return;
      }
  
      const config = getHeadersWithUserToken();
      // in newton doc body is not given but here it's failing if we don't pass body
      const body = {
        appType: "reddit"
      }

      try{
         const response = await axios.delete(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`, config);
         console.log("downVoted post successfully", response.data);
         fetchPosts();  //  after downVoting, fetch post again to show the correct count
      }
      catch(error){
        console.log('fail to downVote', error.response);
      }
   }

   async function deletePost(postId){
         
         const config = getHeadersWithUserToken();

         try{
            const response = await axios.delete(`https://academics.newtonschool.co/api/v1/reddit/post/${postId}`, config);
            console.log("post deleted successfully",  response);
            fetchPosts();  //  after deleting, fetch posts again to remove the deleted post
         }
         catch(error){
             console.log('error in deleting post', error);
         }

   }

   function editPost(postDetails){

      navigateTo('/editPost', {state: {postDetails}});
          
    }

    
  return (
    <>
    <Stack>
        {postData ? postData.length > 0 && postData.map((post, index)=>(
            <PostItem post= {post} key={index} increaseVote={increaseVote} decreaseVote={decreaseVote} deletePost={deletePost} editPost={editPost}/>
             
        )) : <PostLoader/>}
    </Stack>
    </>
  )
}
