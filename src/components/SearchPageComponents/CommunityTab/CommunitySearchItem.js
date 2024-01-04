import React from 'react'
import { Flex, Icon, Text, Image} from '@chakra-ui/react'
import { FaReddit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export const CommunitySearchItem = ({community}) => {

    function removeSpace(str) {
        let removedSpacesText = str.split(" ").join("");
        return removedSpacesText
      }

      const navigateTo = useNavigate();

    return (
        <Flex width="100%"
            bg="white"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            p="14px"
            _hover={{
                border: "1px solid gray"
            }}
            cursor="pointer"
            align="center"
            onClick={() => navigateTo(`/community/${community._id}`)}
        >
            {community.image ? <Image src={community.image} height="40px" width="40px" objectFit="cover" borderRadius="50%"/> 
            : 
            <Icon as={FaReddit} fontSize="40px" mr={4} color="blue.400" />}
            <Text _hover={{color: "blue.500"}}>r/{removeSpace(community.name)}</Text>

        </Flex>
    )
}
