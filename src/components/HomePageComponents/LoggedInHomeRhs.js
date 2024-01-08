import { Stack } from '@chakra-ui/react';
import React from 'react';
import { RedditPrimiumBox } from './RhsComponents/RedditPrimiumBox.js';
import { RedditHomeBox } from './RhsComponents/RedditHomeBox.js';
import { CopyRightBox } from './RhsComponents/CopyRightBox.js';



export const LoggedInHomeRhs = () => {
  return (
    <Stack>
      
     <RedditPrimiumBox/>

     <RedditHomeBox/>

     <CopyRightBox/>

    </Stack>
  )
}
