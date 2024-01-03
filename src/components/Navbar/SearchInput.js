import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'

export const SearchInput = () => {
    const {isLoggedIn} = userLogInStore();
    return (
        <Flex flexGrow={1} maxWidth={isLoggedIn ? 'auto' : '600px'} align='center' mr={2}>
            
            <InputGroup >
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.400' mb={1}/>
                </InputLeftElement>
                <Input type='text' placeholder='Search Reddit' fontSize='10pt' _placeholder={{color: "gray.500"}}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: "blue.500",
                }} 
                _focus={{
                    outline: 'none',
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                height='34px'
                bg='gray.50'
                />

                <InputRightElement>
                 <Button height="24px" mb={1} width="300px">Search</Button>
                </InputRightElement>
                
            </InputGroup>
        </Flex>
    )
}
