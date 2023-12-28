import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'

export const TextInputs = ({textInputs, handleInputChange, handleCreatePost, isLoading}) => {
  return (
   <Stack spacing={3} width="100%">

    {/* TITLE INPUT */}
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

       {/* CONTENT INPUT */}
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
          disabled={!textInputs.title}
          isLoading={isLoading}
          onClick={()=>{}}

        >Post</Button>
       </Flex>
   </Stack>
  )
}
