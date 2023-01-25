import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import {RiDashboardFill} from "react-icons/ri";
import {GiCardboardBoxClosed} from "react-icons/gi";
import {FaUserFriends, FaHandsHelping} from "react-icons/fa";
import {CiBoxes} from "react-icons/ci";
import {BsTrophyFill, BsQuestionCircleFill} from "react-icons/bs";
import {TbMessageReport} from "react-icons/tb";
import {MdPayments} from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Flex boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" width="16%" bg={'white'} borderRadius="10" minH={"88vh"} direction='column' justifyContent={'space-between'}>
      <Box>
        <Flex alignItems='center' p={6} gap={2}>
          <Img src='https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png' alt='logo' width={"50px"} height="50px" border={"1px solid rgb(244,239,242)"} borderRadius="50px" p={1}/>
          <Heading size={'sm'} >A.T. Inks</Heading>
        </Flex>
        <Flex p={6} direction="column" gap={6} >
          <Link to={'/'}> 
            <Flex gap={3} alignItems='center' color={"rgb(180,184,200)"} >
              <RiDashboardFill fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Dashboard</Heading>
            </Flex>
          </Link>
          <Link to={'/orders'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <GiCardboardBoxClosed fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Orders</Heading>
            </Flex>
          </Link>
          <Link to={'/team-members'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <FaUserFriends fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Team Members</Heading>
            </Flex>
          </Link>
          <Link to={'/partners'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <FaHandsHelping fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Partners</Heading>
            </Flex>
          </Link>
          <Link to={'/product-listing'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <CiBoxes fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Product Listings</Heading>
            </Flex>
          </Link>
          <Link to={'/award-honars'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <BsTrophyFill fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Award & Honours</Heading>
            </Flex>
          </Link>
          <Link to={'/about'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <TbMessageReport fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">About Us</Heading>
            </Flex>
          </Link>
          <Link to={'/payment'}>
            <Flex gap={3} alignItems='center' color={"rgb(185,184,184)"}>
              <MdPayments fontSize={"25px"}/>
              <Heading fontWeight={500} size={"sm"} cursor="pointer">Payment info</Heading>
            </Flex>
          </Link>
        </Flex>
      </Box>
      <Box p={6}>
        <Flex alignItems={'center'} direction="column" border="1px solid rgb(180,184,200)" borderRadius={10} p={2}>
          <BsQuestionCircleFill color="rgb(180,184,200)" fontSize={"25px"}/>
          <Heading size={'sm'}>Need Help?</Heading>
          <Text p={3} textAlign={'center'} fontSize="14px" color="rgb(180,184,200)">Out supports team is at your disposal.</Text>
          <Box bg={"black"} color="white" p={"2px 25px"} borderRadius="5px">Get Help</Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Sidebar;