import React, { useEffect } from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useMenuButtonTextStore from '../../store/NavigatorStore/useMenuButtonTextStore';

export const CommunityNotFound = () => {

  const {menuButtonText, setMenuButtonText} = useMenuButtonTextStore();

  useEffect(()=>{
   setMenuButtonText('Oops!!!')
  }, [])

  
  return (
    <Flex
     direction="column"
     justifyContent='center'
     alignItems='center'
     minHeight='60vh'
    >
      Sorry, that community does not exist or has been banned
      <Link to='/'>
        <Button mt={4}>
            GO HOME
        </Button>
      </Link>
    </Flex>
  )
}
