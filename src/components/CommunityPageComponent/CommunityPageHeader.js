import { Box, Button, Flex, Icon, Image, Text, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaReddit } from 'react-icons/fa'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore';
import useSignUpModalStore from '../../store/ModalStore/SignUpModalStore';
import useThemeStore from '../../store/ThemeStore/useThemeStore';

export const CommunityPageHeader = ({ communityData }) => {

  const [isJoined, setIsJoined] = useState(false);
  const { isLoggedIn } = userLogInStore();
  const { setSignUpModal } = useSignUpModalStore();

  const {isDarkMode} = useThemeStore();

  function removeSpace(str) {
    let removedSpacesText = str.split(" ").join("");
    return removedSpacesText
  }

  function handleJoinCommunityButton() {
    if (!isLoggedIn) {
      setSignUpModal(true);
      return;
    }

    setIsJoined(!isJoined);
  }

  return (
    <Flex direction="column" width="100%">
      {isDarkMode ? <Box height="80px" bg="brand.100" /> :
      <Image src='/images/bannerBackgroundImage.jpg' height="180px" objectFit="cover" borderTop="2px solid" borderTopColor="gray.200"/>}
      <Flex justify="center" bg={isDarkMode ? "#1a1a1b" :"white"} flexFlow={1} height="70px">
        <Flex width="95%" maxWidth="860px" >
          {
            communityData.image ? (<Image src={communityData.image}
              height={20}
              width={20}
              position="relative"
              top={-4}
              border={isDarkMode ? "4px solid #1a1a1b" : "4px solid white"}
              borderRadius="50%"
            />
            ) : (<Icon as={FaReddit}
              fontSize={64}
              position="relative"
              top={-4}
              color="brand.100"
              border="4px solid white"
              borderRadius="50%"
            />
            )}

          <Flex padding="10px 15px">
            <Flex direction="column" mr={6}>
              <Text
                fontWeight={800}
                fontSize="16pt"
                color={isDarkMode && "#d7dadc"}
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
              {isLoggedIn ? isJoined ? 'Joined' : 'Join' : 'Join'}
            </Button>
          </Flex>

        </Flex>
      </Flex>


    </Flex>
  )
}
