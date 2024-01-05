import React, { useEffect, useState } from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { HomePagePosts } from '../../components/HomePageComponents/HomePagePosts'
import { CommunityRecommendation } from '../../components/HomePageComponents/CommunityRecommendation'
import { CreatePostLink } from '../../components/CommunityPageComponent/CreatePostLink'
import { FilterBox } from '../../components/HomePageComponents/FilterBox'
import axios from 'axios'
import { getHeadersWithProjectID } from '../../components/utils/projectID'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'

export const HomePage = () => {

  const [postData, setPostData] = useState(null);

  const [selectedFilterTab, setSelectedFilterTab] = useState('New');

  const {isLoggedIn} = userLogInStore();

  const fetchPosts = async (isVoteClicked = false)=>{
    
    if(!isVoteClicked){
    setPostData(null);
    }
    const config = getHeadersWithProjectID();
    try{
        const response = await axios.get('https://academics.newtonschool.co/api/v1/reddit/post/', config);
        // console.log("Home page posts", response.data.data);
        let allPosts = response.data.data;
        let bestPosts = [...allPosts].reverse();

        // IF NOT LOGGED IN SHOW NEW POSTS
        if(!isLoggedIn){
          console.log('user Not logged In posts reverse', bestPosts );
          setPostData(bestPosts); 
          return;
        }
          
        // IF SELECTED "BEST" SHOW REVERSE
        if(selectedFilterTab === "Best"){        
          console.log('reverse (best) home posts', bestPosts); 
          setPostData(bestPosts);
          return;
        }
        
        // IF SELECTED "HOT" SHOW MOST COMMENTS POSTS
        if(selectedFilterTab === "Hot"){
          let hotPosts = [...allPosts];
          hotPosts.sort((a, b) => b.commentCount - a.commentCount);
          console.log('hot posts home', hotPosts); 
          setPostData(hotPosts);  
          return;
        }
       
        // IF SELECTED "TOP" SHOW MOST LIKED POSTS
        if(selectedFilterTab === 'Top'){
          let topPosts = [...allPosts];
          topPosts.sort((a, b)=> b.likeCount - a.likeCount);
          console.log('top posts home', topPosts);
          setPostData(topPosts);  
          return;
        }

        // IF SELECTED "NEW" SHOW NEWEST POST
        if(selectedFilterTab === "New"){
          console.log('new posts home', allPosts);
          setPostData(allPosts); 
          return;
        }


        
    }
    catch(error){
        console.log('error');
    }
}

useEffect(()=>{
    fetchPosts();

}, [isLoggedIn, selectedFilterTab])


  return (
    <AllPagesLayout>

        {/* LHS */}
        <>
         
         <CreatePostLink/>

        {isLoggedIn && <FilterBox selectedFilterTab={selectedFilterTab} setSelectedFilterTab={setSelectedFilterTab}/>}

        {/* FEED POSTS */}
        <HomePagePosts postData={postData} setPostData={setPostData} fetchPosts={fetchPosts}/>
        </>

        {/* RHS */}
        <>
         {/* COMMUNITY RECOMENDATION */}
          <CommunityRecommendation/>
        </> 

    </AllPagesLayout>
  )
}
