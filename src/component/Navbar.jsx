import { Flex, Heading, Img, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react';
import {BiChevronDown} from "react-icons/bi";
import {BsCart3, BsSearch} from "react-icons/bs";

const Navbar = () => {
  let checkout = 200;

  return (
    <>
    <Flex boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" justifyContent={'space-between'} alignItems='center' p={2} bg="white">
      <Flex gap={"150px"}>
        <Flex  alignItems='center' pl={8}>
          <Img src='https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png' alt='logo' width={"50px"} height="50px" />
          <Heading size={'sm'} color="red.600">Logo</Heading>
        </Flex>
        <InputGroup width={'450px'} color="gray.300" alignItems={'center'}>
          <InputLeftElement 
            pointerEvents='none'
            mt={"6px"}
            children={<BsSearch fontSize={'20px'}/>}
          />
          <Input type={'text'} placeholder='Search...' bg={'rgb(239,242,249)'} height='33px'/>
        </InputGroup>
      </Flex>
      <Flex gap={14}>
        <Flex alignItems='center' color={'white'} bg='black' borderRadius={'5px'} p={"6px 30px"} gap='10px'>
          <BsCart3 />
          <Text fontSize={'14px'} m={0}>Checkout ({checkout})</Text>
        </Flex>
        <Flex alignItems={'center'} gap={2} pr={8}>
          <Img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt='' borderRadius={"50%"} width="30px" height={"30px"}/>
          <Text fontWeight={'500'}>User Admin</Text>
          <BiChevronDown fontSize={"30px"}/>
        </Flex>
      </Flex>
    </Flex></>
  )
}

export default Navbar