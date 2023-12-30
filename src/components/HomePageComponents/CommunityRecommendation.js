import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHeadersWithProjectID } from '../utils/projectID'
import axios from 'axios'
import { CommunitySuggestionLoader } from '../LoadingComponents/CommunitySuggestionLoader'

export const CommunityRecommendation = () => {

    const [communitySuggestion, setCommunitySuggestion] = useState(null);

    function removeSpace(str) {
        let removedSpacesText = str.split(" ").join("");
        return removedSpacesText
    }

    const getTop5Community = async () => {
        const config = getHeadersWithProjectID();
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/reddit/channel?limit=1000', config);
            const allCommunity = response.data.data;

            const top5Community = [];
            for (let i = 0; i < 5; i++) {
                top5Community.push(allCommunity[i]);
            }
            console.log("top 5 community", top5Community);

           setCommunitySuggestion(top5Community);

        }
        catch (error) {
            console.log('error in fetching top 5 community', error.response);
        }
    }

    useEffect(() => {
        getTop5Community();
    }, [])

    return (
        <Flex
            direction="column"
            bg="white"
            borderRadius={4}
            border="1px solid"
            borderColor="gray.300"
            position='sticky'
            top='20px'
        >
            <Flex
                align="flex-end"
                color="white"
                p="6px 10px"
                height="70px"
                borderRadius="4px 4px 0px 0px"
                fontWeight={700}
                bgImage="url(/images/recComsArt.png)"
                backgroundSize="cover"
                bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url('images/recCommsArt.png')"
            >
                Top Communities
            </Flex>
            <Flex direction="column">
                <>

                    {communitySuggestion ? communitySuggestion.length > 0 &&
                        communitySuggestion.map((community, index) => (
                            <Link to={`/community/${community._id}`} key={index}>
                                <Flex
                                    align="center"
                                    fontSize="10pt"
                                    borderBottom="1px solid"
                                    borderColor="gray.200"
                                    p="10px 12px"
                                    _hover={{ color: "blue.500" }}

                                >
                                    <Flex width="100%" align="center">
                                        <Flex width="15%">
                                            <Text>{index + 1}</Text>
                                        </Flex>
                                        <Flex align="center" width="80%">
                                            <Image
                                                src={community.image}
                                                borderRadius="full"
                                                boxSize="28px"
                                                mr={2}
                                                objectFit='cover'
                                            />
                                            <span
                                                style={{
                                                    whiteSpace: 'nowrap',
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",

                                                }}
                                            >r/{removeSpace(community.name)}</span>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Link>
                        ))
                        :
                        <CommunitySuggestionLoader/>
                    }



                </>
            </Flex>
        </Flex>
    )
}
