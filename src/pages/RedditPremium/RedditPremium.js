import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PremiumLandingImage } from '../../components/PremiumPageComponents/PremiumLandingImage'
import { JoinReddit } from '../../components/PremiumPageComponents/JoinReddit'
import { PremiumFooter } from '../../components/PremiumPageComponents/PremiumFooter'

export const RedditPremium = () => {
  return (
     <>
      <PremiumLandingImage/>  
      <JoinReddit/>
      <PremiumFooter/>
    </>
  )
}
