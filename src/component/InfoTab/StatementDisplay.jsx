import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPen, FaQuoteLeft } from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const StatementDisplay = () => {
  return (
    <>
    <Box boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" p={6} borderRadius="10px" >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <FaQuoteLeft color='rgb(197,197,196)' fontSize={"20px"}/>
        <Flex gap={5} color="rgb(189,31,43)" alignItems={"center"}>
          <RiDeleteBin5Fill fontSize={"22px"} cursor="pointer"/>
          <FaPen fontSize={"16px"} cursor="pointer"/>
        </Flex>
      </Flex>
      <Text mt={4} width="82%" fontWeight={400} fontSize="17px">eg. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in enim doloribus error iusto natus sint minus cum maiores. Temporibus.</Text>
    </Box>
    </>
  )
}

export default StatementDisplay