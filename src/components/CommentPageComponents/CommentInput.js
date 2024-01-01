import { Button, Flex, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { setCommentRange } from 'typescript'

export const CommentInput = ({ commentText, setCommentText, handleCommentClick, btnLoading }) => {
    const loggedInUserDetails = JSON.parse( sessionStorage.getItem('loggedInUserDetails') );
    return (
        <Flex direction="column" position="relative">
            <>
               {loggedInUserDetails && <Text mb={1} color="gray.500">
                    Comment as {loggedInUserDetails.name}
                   
                </Text>}
                <Textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    fontSize="10pt"
                    borderRadius={4}
                    minHeight="160px"
                    pb={10}
                    placeholder='What are your thoughts?'
                    _placeholder={{ color: "gray.500" }}
                    _focus={{
                        outline: "none",
                        bg: "white",
                        border: "1px solid black"
                    }}
                />

                <Flex
                    position="absolute"
                    left="1px"
                    right={0.1}
                    bottom="1px"
                    justify="flex-end"

                    p="6px 6px"
                    borderRadius="0px 0px 4px 4px"
                    zIndex={5}
                >
                    <Button
                        height="26px"
                          isDisabled={!commentText.length}
                        isLoading={btnLoading}
                        onClick={() => handleCommentClick()}
                    >
                        Comment
                    </Button>

                </Flex>


            </>
        </Flex>
    )
}
