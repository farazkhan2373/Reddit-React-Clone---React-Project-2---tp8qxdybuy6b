import { Box, Button, Flex, Icon, Text, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaReddit } from 'react-icons/fa'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';

export const CommunityPageHeader = ({communityData}) => {
    
    const [isJoined, setIsJoined] = useState(false);
    const {isLoggedIn} = userLogInStore();
    const {setSignUpModal} = useSignUpModalStore();

    function removeSpace(str){
      let removedSpacesText = str.split(" ").join("");
      return removedSpacesText
  }

    function handleJoinCommunityButton(){
      if(!isLoggedIn){
          setSignUpModal(true);
          return;
      }

      setIsJoined(!isJoined);
    }

  return (
    <Flex direction="column" width="100%" height="146px" >
        <Box height="50%" bg="brand.100" />
        <Flex justify="center" bg="white"  flexFlow={1}>
            <Flex width="95%" maxWidth="860px" >
              <Icon as={FaReddit}
                fontSize={64}
                position="relative"
                top={-3}
                color="brand.100"
                border="4px solid white"
                borderRadius="50%"
                />
            
            <Flex padding="10px 15px">
                <Flex direction="column" mr={6}>
                    <Text 
                    fontWeight={800} 
                    fontSize="16pt"
                    >
                    {removeSpace(communityData.name)}
                    </Text>

                    <Text 
                    fontWeight={600}
                    fontSize="10pt"
                    color="gray.400"
                    >
                    r/{removeSpace(communityData.name)}
                    </Text>
                </Flex>

                <Button 
                variant={isLoggedIn ? isJoined ? "outline" : "solid" : 'solid'}
                height="30px"
                pr={6}
                pl={6}
                onClick={handleJoinCommunityButton}

                >
                   {isLoggedIn ? isJoined ? 'Joined' : 'Join'  : 'Join'}   
                </Button>
            </Flex>

            </Flex>
        </Flex>


    </Flex>
  )
}
