import React from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { HomePagePosts } from '../../components/HomePageComponents/HomePagePosts'
import { CommunityRecommendation } from '../../components/HomePageComponents/CommunityRecommendation'
import { CreatePostLink } from '../../components/CommunityPageComponent/CreatePostLink'

export const HomePage = () => {
  return (
    <AllPagesLayout>

        {/* LHS */}
        <>
         {/* FEED POSTS */}
         <CreatePostLink/>
        <HomePagePosts/>
        </>

        {/* RHS */}
        <>
         {/* COMMUNITY RECOMENDATION */}
          <CommunityRecommendation/>
        </> 

    </AllPagesLayout>
  )
}
