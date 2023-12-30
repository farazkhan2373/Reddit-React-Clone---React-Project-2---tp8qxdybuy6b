import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { BiPoll } from "react-icons/bi"
import { BsLink45Deg, BsMic } from "react-icons/bs"
import { IoDocumentText, IoImageOutline } from "react-icons/io5"
import { AiFillCloseCircle } from "react-icons/ai"
import { TabItem } from './TabItem'
import { TextInputs } from './PostForms/TextInputs'
import { ImageUpload } from './PostForms/ImageUpload'
import { getHeadersWithUserToken } from '../utils/headersWithUserToken'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const formTabs = [
    {
        title: "Post",
        icon: IoDocumentText,
    },
    {
        title: "Images & Video",
        icon: IoImageOutline,
    },
    {
        title: "Link",
        icon: BsLink45Deg,
    },
    {
        title: "Poll",
        icon: BiPoll,
    },
    {
        title: "Talk",
        icon: BsMic,
    },
]

export const NewPostForm = ({ channelId, postDetails }) => {

    const [selectedTab, setSelectedTab] = useState(formTabs[0].title); // post tab will be selected default

    const [textInputs, setTextInputs] = useState({
        title: "",
        content: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);

    const navigateTo = useNavigate();


    useEffect(()=>{
      console.log(postDetails);

      if(postDetails){

         if(postDetails.title){
           setTextInputs((prev)=>{
             return {...prev, title: postDetails.title}
           })
         }

         if(postDetails.content){
            setTextInputs((prev)=>{
                return {...prev, content: postDetails.content}
              })
         }
 

        //  WE CAN'T EDIT IMAGE WE CAN ONLY EDIT TITLE AND CONTENT
        //  if(postDetails.images.length > 0){
        //     setSelectedFile(postDetails.images[0]);
        //     setUploadedImage(postDetails.images[0]);
        //  }

      }

    }, []);

    async function createPost(postData) {
        const config = getHeadersWithUserToken();
        try {
            let response

            // postDetails -> contains edited post details if it's true than PATCH request else new POST request
            if(postDetails){        
             console.log("in patch request");
             response = await axios.patch(`https://academics.newtonschool.co/api/v1/reddit/post/${postDetails._id}`, postData, config);
            }else{
             console.log("working fine in post request")
             response = await axios.post('https://academics.newtonschool.co/api/v1/reddit/post/', postData, config);
            }

            console.log("post success", response.data);
            setIsLoading(false);
            if(channelId){
            navigateTo(`/community/${channelId}`);
            }
            else{
                navigateTo('/');
            }

        }
        catch (err) {
            console.log("error in creating post", err)
            setIsLoading(false);
        }
    }

    function handleCreatePost() {
        setIsLoading(true);
        const postData = new FormData();

        postData.append('title', textInputs.title);
        postData.append('content', textInputs.content);
        if(!postDetails){
        postData.append('channel', channelId);
        }

        
        if (uploadedImage) {
            
            postData.append('images', uploadedImage, uploadedImage.name);
            console.log("uploading image", uploadedImage);
          }


        createPost(postData);

    }

    function onSelectImage(e) {
        const reader = new FileReader();

        if (e.target.files?.[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setUploadedImage(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            if (readerEvent.target?.result) {
                setSelectedFile(readerEvent.target.result);
            }
        };



    };

    function handleInputChange(e) {
        const { name, value } = e.target;

        setTextInputs((prev) => {
            return { ...prev, [name]: value }
        })


    }


    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2}>
            <Flex width="100%">
                {formTabs.map((item, index) => (
                    <TabItem item={item} key={index} isSelected={item.title === selectedTab} setSelectedTab={setSelectedTab} />
                ))}
            </Flex>

            <Flex p={4}>
                {selectedTab === "Post" && <TextInputs
                    textInputs={textInputs}
                    handleInputChange={handleInputChange}
                    handleCreatePost={handleCreatePost}
                    isLoading={isLoading}
                />}

                {selectedTab === "Images & Video" && <ImageUpload
                    selectedFile={selectedFile}
                    onSelectImage={onSelectImage}
                    setSelectedTab={setSelectedTab}
                    setSelectedFile={setSelectedFile}
                    setUploadedImage={setUploadedImage}
                />}
            </Flex>

        </Flex>
    )
}
