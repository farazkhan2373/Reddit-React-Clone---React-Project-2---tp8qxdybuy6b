import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {RiCakeLine} from 'react-icons/ri'

import React from 'react'

export const AboutCommunityRHS = ({communityData}) => {

     function getFormattedDate(timeStamp){
        const date = new Date(timeStamp);
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        return formattedDate;
     }

  return (
    <Box position="sticky" top="14px">
       <Flex
        justify="space-between"
        align="center"
        bg="brand.100"
        color="white"
        p={3}
        borderRadius="4px 4px 0px 0px"
       >
        <Text fontSize="10pt" fontWeight={700}>About Community</Text>
        <Icon as={HiOutlineDotsHorizontal}/>
       </Flex>

       <Flex
        direction="column"
        bg="white"
         padding={3}
         borderRadius="0px 0px 4px 4px"
       >
        <Stack>
            <Flex align={'center'} width="100%" p={1} fontSize="10pt" fontWeight={500}>
             <Icon as={RiCakeLine} fontSize={18} mr={2}/>
             <Text>Created at {getFormattedDate(communityData.createdAt)}</Text>
            </Flex>
        </Stack>

       </Flex>
    </Box>
  )
}
