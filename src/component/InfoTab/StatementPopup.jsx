import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiPlusCircle } from 'react-icons/bi';
import StatementDisplay from './StatementDisplay';

const StatementPopup = ({setPopupToggle}) => {
  return (
    <>
    <Box bg={"white"} width="34%" height={"100vh"} position="fixed" right={0} top={0} boxShadow="rgba(0, 0, 0, 0.24) 0px 5px 20px" borderRadius={10} p={10}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={2} alignItems={"center"}>
          <BsArrowLeftShort  fontSize={"40px"} onClick={() => setPopupToggle(null)} cursor="pointer"/>
          <Heading fontSize={"27px"} fontWeight="medium">Statement</Heading>
        </Flex>
        <Flex gap={2} color="rgb(189,31,43)" alignItems={"center"}>
          <BiPlusCircle  fontSize={"20px"} cursor="pointer"/>
          <Heading size={"sm"} cursor="pointer">Add</Heading>
        </Flex>
      </Flex>
      <Text p={"10px 0px"} width="82%" color={"rgb(135,143,149)"}>Write down the statements of the company in to convey your vision to the potential customer</Text>

      <Box mt={5}>
        <StatementDisplay />
        <StatementDisplay />
      </Box>
    </Box>
    </>
  )
}

export default StatementPopup;