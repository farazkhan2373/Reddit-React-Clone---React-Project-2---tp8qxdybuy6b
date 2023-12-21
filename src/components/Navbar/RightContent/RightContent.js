import { Button, Flex } from '@chakra-ui/react'
import { AuthButton } from './AuthButton'
import { SignUpModal } from '../../Modal/SignUpModal/SignUpModal'
import { LoginModal } from '../../Modal/LoginModal/LoginModal'
import userLogInStore from '../../../store/AuthenticationStore/userLogInStore'

export const RightContent = () => {
  // const {showSignUpModal, setSignUpModal} = useSignUpModalStore
  const {isLoggedIn, setIsLoggedIn} = userLogInStore();
   
  function handleLogout(){
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('loggedInUserDetails');
    setIsLoggedIn(false); 
  }

  return (
    <>
     <SignUpModal/>
    <LoginModal/>

    <Flex justify='center' align='center'>
    {isLoggedIn ? 
    <Button onClick={handleLogout}>Logout</Button>
    :
     <AuthButton/>}
    </Flex>
    </>
  )
}
