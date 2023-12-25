import React from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { HomePagePosts } from '../../components/HomePageComponents/HomePagePosts'
import { CommunityRecommendation } from '../../components/HomePageComponents/CommunityRecommendation'

export const HomePage = () => {
  return (
    <AllPagesLayout>

        {/* LHS */}
        <>
         {/* FEED POSTS */}
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
