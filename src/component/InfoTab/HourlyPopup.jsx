import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsArrowLeftShort, BsDashLg } from 'react-icons/bs';
import SelectTag from '../Other/SelectTag';

const HourlyPopup = ({setPopupToggle}) => {
  const [startingDay, setStartigDay] = useState("Monday");
  const [endingDay, setEndingDay] = useState("Friday");
  
  return (
    <>
    <Box bg={"white"} width="34%" height={"100vh"} position="fixed" right={0} top={0} boxShadow="rgba(0, 0, 0, 0.24) 0px 5px 20px" borderRadius={10} p={10}>
      <Flex gap={2} alignItems={"center"}>
        <BsArrowLeftShort  fontSize={"40px"} onClick={() => setPopupToggle(null)} cursor="pointer"/>
        <Heading fontSize={"27px"} fontWeight="medium">Hours of operations</Heading>
      </Flex>
      <Text p={"10px 0px"} width="79%" color={"rgb(135,143,149)"}>Please provide the working time to the company</Text>

      <Box mt={5}>
        <Text>Select starting day to ending day</Text>
        <Flex justifyContent={"space-between"} mt={5} alignItems="center">
          <SelectTag day={startingDay} setDay={setStartigDay}/>
          <BsDashLg />
          <SelectTag day={endingDay} setDay={setEndingDay}/>
        </Flex>
      </Box>
      <Box mt={5}>
        <Text>Select working hours</Text>
        <Flex justifyContent={"space-between"} mt={5} alignItems="center">
          <Input type={"time"} />
          <Input type={"time"} />
        </Flex>
      </Box>
    </Box>
    </>
  )
}

export default HourlyPopup