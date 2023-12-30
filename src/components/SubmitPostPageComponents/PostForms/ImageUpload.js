import { Button, Flex, Image, Stack } from '@chakra-ui/react'
import React, { useRef } from 'react'

export const ImageUpload = ({ selectedFile, onSelectImage, setSelectedTab, setSelectedFile, setUploadedImage }) => {

    const selectedFileRef = useRef(null);
    return (
        <Flex direction="column" justify="center" align="center" width="100%">
            {selectedFile ? (
            // if image is selected show image
            <>

             <Image src={selectedFile} 
                maxWidth="400px" 
                maxHeight="400px"
                objectFit="cover"    
            />
            <Stack  direction="row" mt={4}>
              <Button height="28px" onClick={()=> setSelectedTab("Post")}>
                Back to Post
              </Button>
              <Button
               variant="outline"
               height="28px"
               onClick={()=> {
                setSelectedFile(null);
                setUploadedImage(null);

               }}
              >
                Remove
              </Button>
            </Stack>
            
            </> 
            ) : (
            // If image is not selected show upload button
             <Flex
                justify="center"
                align="center"
                p={20}
                border="1px dashed"
                width="100%"
                borderRadius={4}
            >

                <Button
                    variant="outline"
                    height="28px"
                    onClick={() => selectedFileRef.current?.click()}
                >
                    Upload
                </Button>

                <input
                    ref={selectedFileRef}
                    type='file'
                    hidden
                    onChange={onSelectImage}
                />

            </Flex>
            )
           }

        </Flex>
    )
}
