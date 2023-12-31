import { Button, Flex, Input, Stack, Textarea, Text } from '@chakra-ui/react'
import React from 'react'

export const EditTextInput = ({errorMsg, textInputs, handleInputChange, handleEditPost, isLoading}) => {
  return (
    <Stack spacing={3} width="100%">

    {/* TITLE INPUT */}
     <Text color="gray.500" ml={2}>Edit Title</Text>
       <Input
        name='title'
        value={textInputs.title}
        onChange={handleInputChange}
        fontSize="10pt"
        borderRadius={4}
        placeholder='Title'
        _placeholder={{color: "gray.500"}}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black"
        }}
        />

        {errorMsg && <Text fontSize="9pt" color="red" ml={2}>{errorMsg}</Text>}
       {/* CONTENT INPUT */}
       <Text color="gray.500" ml={2}>Edit Content</Text>
       <Textarea
        name='content'
        value={textInputs.content}
        onChange={handleInputChange}
        fontSize="10pt"
        borderRadius={4}
        height="100px"
        placeholder='Text (Optional)'
        _placeholder={{color: "gray.500"}}
        _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "black"
        }}
       />
 
     {/* POST BUTTON */}
       <Flex justify="flex-end"> 
        <Button
          height="34px"
          padding="0px 30px"
          isDisabled={!textInputs.title}
          isLoading={isLoading}
          onClick={handleEditPost}
        >Post</Button>
       </Flex>
   </Stack>
  )
}
