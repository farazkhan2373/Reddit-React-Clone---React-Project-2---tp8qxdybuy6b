import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHeadersWithUserToken } from '../../components/utils/headersWithUserToken';
import axios from 'axios';
import { CommunityNotFound } from '../../components/CommunityPageComponent/CommunityNotFound';
import { Heading } from '@chakra-ui/react';
import { CommunityPageHeader } from '../../components/CommunityPageComponent/CommunityPageHeader';
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout';


export const CommunityPage = () => {

  const [communityData, setCommunityData] = useState(null);
  const { channelId } = useParams();
  console.log("channelId", channelId);


  const getCommunity = async (channelId) => {
    const config = getHeadersWithUserToken();

    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/channel/${channelId}`, config);
      console.log("fetch successfull", response.data.data);
      setCommunityData(response.data.data);
    }
    catch (err) {
      console.log("error is fetching community");
      console.log(err);
      setCommunityData('Community not found');

    }
  }

  useEffect(() => {
    //  get community function is working fine geting response
    getCommunity(channelId);


  }, []);

  return communityData ? communityData === 'Community not found' ? <CommunityNotFound /> :

    <>
      <CommunityPageHeader communityData={communityData}/>
      <AllPagesLayout>
        {/* below fragment will go into all pages layout flex children[0] LHS */}
        <>
        <div>LHS</div>
        <div>LHS</div>
        <div>LHS</div>
        <div>LHS</div>
        <div>LHS</div>
        </>
          
         {/* below fragment will go into all pages layout flex children[1] RHS */}
        <>
        <div>RHS</div>
        </>
      </AllPagesLayout>
    </>
    :
    (<Heading>Loading...</Heading>)


}
