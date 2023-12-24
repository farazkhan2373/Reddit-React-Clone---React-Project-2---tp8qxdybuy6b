import React from 'react'
import { AllPagesLayout } from '../../components/Layout/AllPagesLayout'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { HomePagePosts } from '../../components/HomePageComponents/HomePagePosts'

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
         <Stack border='2px solid red'>
          <Text>Community Recommendation</Text>
          <Text>Community Recommendation</Text>
          <Text>Community Recommendation</Text>
          <Text>Community Recommendation</Text>
         </Stack>
        </>

    </AllPagesLayout>
  )
}
