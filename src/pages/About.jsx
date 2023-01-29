import { Box, Flex, Heading, Img, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import TermsCondition from '../component/TermsCondition';
import PrivacyPolicy from '../component/PrivacyPolicy';
import { TiTick } from 'react-icons/ti';
import Info from '../component/InfoTab/Info';

const About = () => {
  const [description, setDiscription] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic in quas doloribus quia eveniet veritatis quae esse.");
  const [edit, setEdit] = useState(false);

  const changeDiscription = () =>{
    setEdit(!edit)
  }

  return (
    <>
    <Box width="84%" minH={"88vh"} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" bg={'white'} borderRadius="10" padding={10}>
      <Heading fontSize={"25px"}>About Us</Heading>
      <Flex alignItems={"flex-start"} mt={10} gap={5}>
        <Img src='https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png' alt='logo' width={"60px"} height="60px" border={"1px solid rgb(244,239,242)"} borderRadius="50px" p={1}/>
          <Box>
            <Heading size={'md'} mb={1}>A.T. Inks</Heading>
            <Text fontWeight={"medium"} color='rgb(130,131,131)'>Digital Inks</Text>
          </Box>
          <Flex alignItems={'center'} gap={2} ml={4}>
            <MdVerified fontSize={"25px"} color="rgb(205,205,204)"/>
            <Link href='#' isExternal textDecoration={"underline"} color="rgb(81,148,231)">Verify Company</Link>
          </Flex>
      </Flex>
      <Flex m={"20px 0px"} gap={2}>
        {
          edit ? 
          <Textarea value={description} onChange={(e)=> setDiscription(e.target.value)} minH={"100px"} width="70%"/> 
          :
          <Text color={'rgb(98,99,98)'} fontSize='17px' width={"650px"}>{description}</Text>
        }
        {
          edit ? 
          <TiTick fontSize={"25px"} color='green' cursor={'pointer'} onClick={changeDiscription}/>
          :
          <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick = {changeDiscription}/>
        }
      </Flex>

      <Box>
        <Tabs>
          <TabList gap={8} color="gray.500">
            <Tab _selected={{fontWeight: "500", borderBottomColor: "rgb(164,16,18)", color: "black"}}>Info</Tab>
            <Tab _selected={{fontWeight: "500", borderBottomColor: "rgb(164,16,18)", color: "black"}}>FAQ</Tab>
            <Tab _selected={{fontWeight: "500", borderBottomColor: "rgb(164,16,18)", color: "black"}}>Complaints and feedback</Tab>
            <Tab _selected={{fontWeight: "500", borderBottomColor: "rgb(164,16,18)", color: "black"}}>Privacy Policy</Tab>
            <Tab _selected={{fontWeight: "500", borderBottomColor: "rgb(164,16,18)", color: "black"}}>Terms & Conditions</Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Info /> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> <PrivacyPolicy /> </TabPanel>
            <TabPanel> <TermsCondition /> </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
    </>
  )
}

export default About