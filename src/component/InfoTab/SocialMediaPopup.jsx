import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';

const SocialMediaPopup = ({setPopupToggle}) => {
  return (
    <>
    <Box bg={"white"} width="34%" height={"100vh"} position="fixed" right={0} top={0} boxShadow="rgba(0, 0, 0, 0.24) 0px 5px 20px" borderRadius={10} p={10}>
      <Flex gap={2} alignItems={"center"}>
        <BsArrowLeftShort  fontSize={"40px"} onClick={() => setPopupToggle(null)} cursor="pointer"/>
        <Heading fontSize={"27px"} fontWeight="medium">Social Media & Links</Heading>
      </Flex>
      <Text p={"10px 0px"} width="79%" color={"rgb(135,143,149)"}>Please provide the links to the social media accounts & website of the company</Text>

      <Box mt={5}>
        <Heading size={"sm"} m={"30px 0px 10px 0px"}>Instagram</Heading>
        <Input type={"text"} placeholder="eg.www.instagram.com/companyname" p={5}/>
        <Heading size={"sm"} m={"30px 0px 10px 0px"}>Facebook</Heading>
        <Input type={"text"} placeholder="eg.www.facebook.com/companyname" p={5}/>
        <Heading size={"sm"} m={"30px 0px 10px 0px"}>Twitter</Heading>
        <Input type={"text"} placeholder="eg.www.twitter.com/companyname" p={5}/>
        <Heading size={"sm"} m={"30px 0px 10px 0px"}>website</Heading>
        <Input type={"text"} placeholder="eg.www.companyname.com" p={5}/>
      </Box>
    </Box>
    </>
  )
}

export default SocialMediaPopup