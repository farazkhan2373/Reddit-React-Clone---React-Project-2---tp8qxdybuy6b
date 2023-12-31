import { Flex, Icon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoDocumentText } from "react-icons/io5"
import { CiEdit } from "react-icons/ci"
import { EditTextInput } from './EditTextInput'
import { getHeadersWithUserToken } from '../utils/headersWithUserToken'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const EditPostForm = ({channelId, postDetails}) => {

    console.log("channelId", channelId);
    console.log("postDetails", postDetails);

    const [textInputs, setTextInputs] = useState({
        title: postDetails.title,
        content: postDetails.content,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const navigateTo = useNavigate();

    function handleInputChange(e) {
        if(errorMsg){
        setErrorMsg('');
        }
        const { name, value } = e.target;

        setTextInputs((prev) => {
            return { ...prev, [name]: value }
        })


    }

    async function editPost(postData){
        const config = getHeadersWithUserToken();
        try{
            const response = await axios.patch(`https://academics.newtonschool.co/api/v1/reddit/post/${postDetails._id}`, postData, config);
            console.log('post edited successfully', response);
            setIsLoading(false); // after successfull button loading false

            if(channelId){
              navigateTo(`/community/${channelId}`); // redirect to community page
            }
            else{
                navigateTo('/'); // redirect to home page
            }
        }
        catch(error){
            console.log("failed to edit post", error);
            setIsLoading(false); // after fail also button loading false
        }
    }

    function handleEditPost(){

        if(textInputs.title.length > 100){
            setErrorMsg("Title characters can't be greater than 100");
            return;
        }

        setIsLoading(true); // post button loading true
        const postData = new FormData();
        
        postData.append('title', textInputs.title);
        postData.append('content', textInputs.content);

        editPost(postData);
    }

    
    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2}>
            <Flex width="100%">
                <Flex
                    justify="center"
                    align="center"
                    flexGrow={1}
                    p="14px 0px"
                    fontWeight={700}
                    color="brand.100"
                    borderWidth="0px 1px 2px 0px"
                    borderBottomColor="brand.100"
                >
                    <Flex align="center" height="20px" mr={2}>
                        <Icon as={CiEdit} />
                    </Flex>
                    <Text fontSize="10pt">Edit</Text>
                </Flex>

            </Flex>

            <Flex p={4}>
                <EditTextInput errorMsg={errorMsg} textInputs={textInputs} handleInputChange={handleInputChange} handleEditPost={handleEditPost} isLoading={isLoading}/>
            </Flex>

        </Flex>
    )
}
