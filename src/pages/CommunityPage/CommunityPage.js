import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeadersWithUserToken } from '../../components/utils/headersWithUserToken';
import axios from 'axios';
import { CommunityNotFound } from '../../components/CommunityPageComponent/CommunityNotFound';
import { Heading } from '@chakra-ui/react';
import { CommunityPageHeader } from '../../components/CommunityPageComponent/CommunityPageHeader';
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout';
import { AboutCommunityRHS } from '../../components/CommunityPageComponent/AboutCommunityRHS';
import { getHeadersWithProjectID } from '../../components/utils/projectID';
import useMenuButtonTextStore from '../../store/NavigatorStore/useMenuButtonTextStore';
import { CreatePostLink } from '../../components/CommunityPageComponent/CreatePostLink';
import { CommunityPosts } from '../../components/CommunityPageComponent/CommunityPosts';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';


export const CommunityPage = () => {

  const [communityData, setCommunityData] = useState(null);
  const [communityPosts, setCommunityPosts] = useState(null);
  const { channelId } = useParams();
  // console.log("channelId", channelId);
  const {menuButtonText, setMenuButtonText} = useMenuButtonTextStore();
  const {showSignUpModal, setSignUpModal} = useSignUpModalStore();
  const {isLoggedIn} = userLogInStore();

  const navigateTo = useNavigate();


  const getCommunity = async (channelId) => {
    const config = getHeadersWithProjectID();

    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/channel/${channelId}`, config);
      console.log("single community data", response.data.data);
      setCommunityData(response.data.data);

      sessionStorage.setItem('menuButtonText', `r/${response.data.data.name}`);
      const updatedText = sessionStorage.getItem('menuButtonText');
      setMenuButtonText(updatedText);
    }
    catch (err) {
      console.log("error is fetching community");
      console.log(err);
      setCommunityData('Community not found');

    }
  }

  const getPostsOfCommunity = async ()=>{
    const config = getHeadersWithProjectID();
    try{
         const response = await axios.get('https://academics.newtonschool.co/api/v1/reddit/post?limit=1000', config);
         console.log("all posts fetched successfully", response.data.data);
         const allPosts = response.data.data;
         const channelPosts = allPosts.filter((post)=>{
          if(post.channel){
            return channelId === post.channel._id; 
          }
         });
         console.log("posts of a community", channelPosts);
         setCommunityPosts(channelPosts);



    }
    catch(error){
         console.log("error in fetching posts", error);
    }
  }

  useEffect(() => {
    //  getCommunity function is working fine geting response
    getCommunity(channelId);
    getPostsOfCommunity();



  }, [channelId]);

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
       getPostsOfCommunity();  //  after Upvoting, fetch post again to show the correct count
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
     getPostsOfCommunity();  //  after downVoting, fetch post again to show the correct count
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
     getPostsOfCommunity();   //  after deleting, fetch posts again to remove the deleted post
  }
  catch(error){
      console.log('error in deleting post', error);
  }

}

function editPost(postDetails){
  navigateTo('/editpost', {state: {postDetails, channelId}});
      
}


  return communityData ? communityData === 'Community not found' ? <CommunityNotFound /> :

    <>
      <CommunityPageHeader communityData={communityData}/>
      <AllPagesLayout>
        {/* below fragment will go into all pages layout flex children[0] LHS */}
        <>
        <CreatePostLink channelId={channelId}/>
        <CommunityPosts 
          communityPosts={communityPosts} 
          increaseVote={increaseVote} 
          decreaseVote={decreaseVote} 
          channelId={channelId} 
          deletePost={deletePost}
          editPost={editPost}
        />
        </>
          
         {/* below fragment will go into all pages layout flex children[1] RHS */}
        <>
        <AboutCommunityRHS communityData={communityData}/>
        </>
      </AllPagesLayout>
    </>
    :
    (<Heading>Loading...</Heading>)


}
