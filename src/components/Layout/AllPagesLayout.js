import { Flex } from '@chakra-ui/react'
import React from 'react'

export const AllPagesLayout = ({ children }) => {
    return (
        <Flex justify="center" p="16px 0px" border="1px solid black">

            <Flex
             width="95%"
             justify="center"
             maxWidth="860px"
             border="1px solid red"
             padding={2}
            >
                {/* LHS */}
                <Flex
                 direction='column'
                 width={{base: "100%", md: "65%"}}
                 mr={{base: 0, md: 6}}
                 border="1px solid blue"
                >
                    {children && children[0]}
                </Flex>

                {/* RHS */}
                <Flex
                  direction="column"
                  display={{base: "none", md: "flex"}}
                  flexGrow={1}
                  border="1px solid green"
                >
                    {children && children[1]}
                </Flex>
            </Flex>

        </Flex>
    )
}


// SO WE WILL HAVE TWO CHILDREN IN ALLPAGESLAYOUT
// LHS DIV AND RHS DIV