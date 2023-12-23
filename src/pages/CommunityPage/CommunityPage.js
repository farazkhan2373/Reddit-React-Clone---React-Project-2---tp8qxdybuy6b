import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getHeadersWithUserToken } from '../../components/utils/headersWithUserToken';
import axios from 'axios';

export const CommunityPage = () => {

    const {channelId} = useParams();
    console.log("channelId", channelId);

    const getCommunity = async (channelId)=>{
      const config = getHeadersWithUserToken();

      try{
         const response = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/channel/${channelId}`, config);
         console.log("fetch successfull", response);
      }
      catch(err){
         console.log("error is fetching community")
      }
    }

    useEffect(()=>{
      //  get community function is working fine geting response
      // getCommunity(channelId);


    })

  return (
    <div>CommunityPage</div>
  )
}
