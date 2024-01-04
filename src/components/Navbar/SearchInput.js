import React, { useState } from 'react'
import { Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import userLogInStore from '../../store/AuthenticationStore/userLogInStore'
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const SearchInput = () => {
    const { isLoggedIn } = userLogInStore();

    const navigateTo = useNavigate();

    const [searchText, setSearchText] = useState('');

   

    function handleSearch() {
       
        navigateTo(`/search?q=${encodeURIComponent(searchText)}`);       
        // navigateTo(`/search?q=${searchText}`); // this line is also working      

    }

    return (

        <Flex flexGrow={1} maxWidth={isLoggedIn ? 'auto' : '600px'} align='center' mr={2}>

            <InputGroup >

                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.400' mb={1} />
                </InputLeftElement>

                <Input type='text'
                    placeholder='Search Reddit'
                    fontSize='10pt'
                    _placeholder={{ color: "gray.500" }}
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
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

            </InputGroup>

            <Button
                height="36px"
                borderRadius="6px"
                ml={1}
                onClick={handleSearch}
                isDisabled={!searchText.length}
            >
                Search
            </Button>
        </Flex>
    )
}
