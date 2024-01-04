import React from 'react'
import { Flex, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { FaReddit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const PostSearchItem = ({ post }) => {

    const navigateTo = useNavigate();

    function removeSpace(str) {
        let removedSpacesText = str.split(" ").join("");
        return removedSpacesText
      }

    function handleCommunityClick(channelId, e){
         navigateTo(`/community/${channelId}`);
        e.stopPropagation();
    }

    return (
        <Flex width="100%"
            bg="white"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            p="14px"
            _hover={{
                border: "1px solid gray"
            }}
            justify="space-between"
            cursor="pointer"
            onClick={()=>navigateTo(`/comment/${post._id}`)}
        >

            <Stack spacing={1} justify="space-between">

                {/* CHANNEL NAME, POSTED BY AND POST TITLE */}
                <Stack>
                    <Flex
                        spacing={0.6}
                        align="center"
                        fontSize="9pt"
                    >

                        {post.channel ? post.channel.image ? <Image src={post.channel.image}
                            height={6}
                            width={6}
                            borderRadius='50%'
                            objectFit='cover'
                            mr={1}
                        />
                            :
                            <Icon as={FaReddit} fontSize={20} mr={1} color="brand.100" /> : <Icon as={FaReddit} fontSize={20} mr={1} color="brand.100" />}
                        {post.channel && <Text
                            mr={1}
                            cursor="pointer"
                            _hover={{ color: "blue.500" }}
                            onClick={(e)=> handleCommunityClick(post.channel._id, e)}
                       
                        >
                            r/{removeSpace(post.channel.name)}
                        </Text>}
                        <Text color="gray.500">posted by {post.author.name}</Text>
                    </Flex>

                    {/* Post Title */}
                    {post.title && <Text fontSize="16px">{post.title}</Text>}
                </Stack>


                {/* UPVOTES AND COMMENTS */}
                <Flex gap={2} bottom={0}>
                    <Text fontSize="9pt" color="gray.500">{post.likeCount} upvotes</Text>
                    <Text fontSize="9pt" color="gray.500">{post.commentCount} comments</Text>
                </Flex>

            </Stack>


            {/* IMAGE */}

            {post.images.length > 0 && <Stack p="8px 0px" alignSelf="flex-end" ml={2}>
                <Image src={post.images[0]}
                    height="98px"
                    minWidth="134px"
                    maxWidth="134px"
                    objectFit="cover"
                    borderRadius="4px"
                />
            </Stack>}

        </Flex>
    )
}
