import { Box, Flex, Heading, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

var termsConditonArr = [
  {
    id: 1,
    heading: "Agreement",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit assumenda, dolor debitis voluptates neque accusantium ipsam labore voluptate maxime fuga. Ullam corrupti excepturi nostrum sunt unde expedita accusamus quod odit architecto, ab molestiae obcaecati blanditiis voluptate odio deserunt quos ratione! Debitis commodi sed, quam dolor provident labore cum veniam maxime explicabo enim nam rem. Sit totam error officiis porro fuga nam eum recusandae deleniti provident iure? Id et itaque accusantium voluptatibus, aliquam illo libero, necessitatibus eos ea amet quae accusamus tempora aperiam laudantium iusto! Fugiat, accusamus! Sunt asperiores aut porro pariatur repudiandae modi, eaque laborum cumque labore. Minima inventore voluptatum, minus nesciunt reprehenderit fugiat quaerat possimus ad dignissimos, nulla vitae provident voluptate architecto blanditiis magnam quasi facere, ex ducimus in labore! Cumque accusamus non reiciendis numquam ab ullam officiis explicabo ipsam quae neque temporibus id autem ducimus dolorem, optio harum expedita sapiente architecto quisquam quas rerum dolores adipisci ipsum. Error, cupiditate! Nemo modi vitae impedit odit eveniet soluta, magni deleniti maiores. Cupiditate, ab ad sunt numquam, non magni sit aperiam nam nulla iusto, eum distinctio cum explicabo? Facilis voluptate qui sunt unde fugiat excepturi laborum consequatur facere officiis libero odit doloribus, eaque ducimus! Hic suscipit nulla quis id perspiciatis?",
  },{
    id: 2,
    heading: "Services & Paid Subscription",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quia ipsam eveniet labore veritatis molestiae possimus ipsum nobis quasi magni alias quo commodi provident, maiores inventore? Dolor debitis asperiores ex qui nihil ipsa, voluptatem architecto, temporibus numquam cum earum voluptate minus sequi nostrum autem cumque quisquam laborum dolores doloribus, ipsum soluta ab ut! Quisquam recusandae voluptatem aut error autem optio iure quasi? Nesciunt maiores laboriosam repellendus dignissimos repellat at doloribus facilis facere! Voluptas itaque repellat molestias nostrum, perferendis dolor rerum cum voluptate quis libero hic, numquam id quam, similique consequatur officiis temporibus! Nesciunt, architecto? Sint ut fugiat hic vitae voluptate.",
  },{
    id: 3,
    heading: "Rights & Laws",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero vel doloribus eum eos doloremque non, eligendi mollitia maiores magni suscipit odio, blanditiis minus repudiandae perferendis. Modi nesciunt dicta eum? Aperiam exercitationem quas inventore alias amet quos deserunt rem velit? Porro totam nemo, similique optio iure laborum reprehenderit quis libero consectetur.",
  },{
    id: 4,
    heading: "3rd Party Applications",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iste facilis cumque excepturi maxime aspernatur? Ducimus nulla sunt consequuntur quasi qui illum itaque, ex dicta corrupti tempore aliquam voluptate nemo.",
  },{
    id: 5,
    heading: "Rights you grant us",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores eum accusamus beatae saepe, dolorem voluptatem? Iusto sint, sunt, soluta, eligendi eum delectus recusandae tenetur iste debitis temporibus sit deleniti libero provident quaerat enim dolorum ut sapiente ipsam! Debitis expedita harum optio et inventore totam mollitia! Aspernatur modi eius debitis.",
  }
]

const TermsCondition = () => {
  const [termsToggle, setTermsToggle] = useState(termsConditonArr[0]);
  const [editDescription, setEditDescription] = useState(false);

  // console.log(termsToggle);

  const editOn = () =>{

    if(editDescription){
      let update = termsConditonArr.map((term) => {
        if(termsToggle.id === term.id){
          return termsToggle;
        }
        return term;
      })

      termsConditonArr=update;
    }

    setEditDescription(!editDescription);
  }

  const changeText = (e) => {
    // console.log(e);

    setTermsToggle({
      ...termsToggle,
      description: e.target.value,
    })
  }

  return (
    <>
    <Flex justifyContent={"space-between"} mt={2}>
      <Box width={"70%"}>
        <Flex gap={6} alignItems='center'>
          <Heading size={"md"} fontWeight={500}>Terms & Conditions</Heading> 
          {
            editDescription ? 
            <TiTick fontSize={"25px"} color='green' cursor={'pointer'} onClick={editOn}/>
            :
            <FaPen color='rgb(196,62,62)' cursor={'pointer'} onClick={editOn}/> 
          }
        </Flex>
        <Heading fontSize={"19px"} m={"30px 0px"} fontWeight={500}>{termsToggle?.id}. {termsToggle?.heading}</Heading>
        {
          editDescription ? 
          <Textarea value={termsToggle?.description} onChange={changeText} minH={"200px"}/> 
          :
          <Text color={'rgb(98,99,98)'} fontSize={"18px"}>{termsToggle?.description}</Text>
        }
      </Box>

      {/* TABLE */}
      <Box width={"25%"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p={6}>
        <Heading fontSize={"19px"} mt={2}>Table of Contents:</Heading>
        {termsConditonArr?.map((term) => (
          <Text key={term?.id} color={termsToggle.heading===term?.heading ? "black" : "rgb(98,99,98)"} size={"sm"} m={"30px 0px"} fontWeight={termsToggle.heading===term?.heading && "bold"} cursor="pointer" onClick={()=> setTermsToggle(term)}>{term?.heading}</Text>
        ))}
      </Box>
    </Flex>
    </>
  )
}

export default TermsCondition;