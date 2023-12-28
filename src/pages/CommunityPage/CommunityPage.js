import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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


export const CommunityPage = () => {

  const [communityData, setCommunityData] = useState(null);
  const { channelId } = useParams();
  console.log("channelId", channelId);
  const {menuButtonText, setMenuButtonText} = useMenuButtonTextStore();


  const getCommunity = async (channelId) => {
    const config = getHeadersWithProjectID();

    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/channel/${channelId}`, config);
      console.log("fetch successfull", response.data.data);
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

  useEffect(() => {
    //  getCommunity function is working fine geting response
    getCommunity(channelId);


  }, [channelId]);

  return communityData ? communityData === 'Community not found' ? <CommunityNotFound /> :

    <>
      <CommunityPageHeader communityData={communityData}/>
      <AllPagesLayout>
        {/* below fragment will go into all pages layout flex children[0] LHS */}
        <>
        <CreatePostLink/>
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
