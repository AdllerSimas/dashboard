import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
   showProfileData?: boolean; 
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (

        <Flex align="center">

            { showProfileData && (

                <Box mr="4" textAlign="right">
                    <Text>Adller Simas</Text>
                    <Text color="gray.300" fontSize="small" >
                        adller.eel.ufsc@gmail.com
                    </Text>
                </Box>

            )}
            

            <Avatar size="md" name="Adller Simas" src="https://media-exp1.licdn.com/dms/image/C4D03AQHLccqRsD64Dg/profile-displayphoto-shrink_200_200/0/1598112584877?e=1635984000&v=beta&t=0MJEeUnUpbFnAH5hVeVNRXRPvURPNul37qG4Xw-6BxU"/>
        </Flex>

  );  
}