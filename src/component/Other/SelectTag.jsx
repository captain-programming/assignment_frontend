import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const SelectTag = ({day, setDay}) => {
  const [toggle, setToggle] = useState(false);

  const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return (
    <>
    <Box>
      <Flex boxShadow="rgb(203,213,224) 0px 1px 3px 0px, rgb(203,213,224) 0px 0px 0px 1px" p={"5px 14px"} borderRadius="3px" alignItems={'center'} justifyContent="space-between" width={"200px"} onClick={()=>setToggle(true)} cursor="pointer">
        <Text cursor="pointer">{day}</Text>
        {toggle ? <MdOutlineKeyboardArrowUp fontSize={"20px"}/> : <MdOutlineKeyboardArrowDown fontSize={"20px"}/>}
      </Flex>

      {toggle && <Flex direction={"column"} boxShadow="rgb(203,213,224) 0px 1px 3px 0px, rgb(203,213,224) 0px 0px 0px 1px" p={"5px 14px"} borderRadius="3px" alignItems={'center'} justifyContent="space-between" width={"200px"} onMouseLeave={()=> setToggle(false)} position="absolute" bg={"white"}>
        {
          daysArr.map((day)=> (
            <Text cursor={"pointer"} p={2} textAlign="center" _hover={{bg: "blue.300", color: "white"}} borderRadius="10" width={"100%"} key={day} onClick={() => setDay(day)}>{day}</Text>
          ))
        }
      </Flex>}
    </Box>
    </>
  )
}

export default SelectTag