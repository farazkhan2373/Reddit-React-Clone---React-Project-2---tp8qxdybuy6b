import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import {BiPoll} from "react-icons/bi"
import {BsLink45Deg, BsMic} from "react-icons/bs"
import {IoDocumentText, IoImageOutline} from "react-icons/io5"
import {AiFillCloseCircle} from "react-icons/ai"
import { TabItem } from './TabItem'
import { TextInputs } from './PostForms/TextInputs'
import { ImageUpload } from './PostForms/ImageUpload'

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

export const NewPostForm = () => {
 
    const [selectedTab, setSelectedTab] = useState(formTabs[0].title); // post tab will be selected default
    
    const [textInputs, setTextInputs] = useState({
        title: "",
        content: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [selectedFile, setSelectedFile] = useState();

    function handleCreatePost(){

    }

    function onSelectImage(e){
       const reader = new FileReader();

       if(e.target.files?.[0]){
         reader.readAsDataURL(e.target.files[0]);
       }

       reader.onload = (readerEvent) =>{
        if(readerEvent.target?.result){
            setSelectedFile(readerEvent.target.result);
        }
       };

       

    };

    function handleInputChange(e){
         const {name, value} = e.target;

         setTextInputs((prev)=>{
            return {...prev, [name]: value}
         })

        
    }

   
  return (
    <Flex direction="column" bg="white" borderRadius={4} mt={2}>
        <Flex width="100%">
              {formTabs.map((item, index)=>(
               <TabItem item={item} key={index} isSelected={item.title === selectedTab} setSelectedTab={setSelectedTab}/>
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
            />}
        </Flex>

    </Flex>
  )
}
