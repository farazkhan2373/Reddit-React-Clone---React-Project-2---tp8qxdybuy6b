import { Flex } from '@chakra-ui/react'
import React from 'react'
import { AuthButton } from './AuthButton'

export const RightContent = () => {
  return (
    <>
    {/* <AuthModal/> */}
    <Flex justify='center' align='center'>
     <AuthButton/>
    </Flex>
    </>
  )
}
