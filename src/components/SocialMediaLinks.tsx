import { Button, HStack, Icon, Link, color } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
<HStack  w={40} display={"flex"} justifyContent={"space-between"} >
<Link color={"#686E79"} _hover={{
    color: "#006a67",
  }}  href='https://github.com/nealphi'><Icon  boxSize={6} as={FaGithub}/></Link>
  <Link  color={"#686E79"} _hover={{
    color: "#006a67",
  }}  href='http://linkedin.com/in/negin-alipanahi'><Icon boxSize={6} as={FaLinkedin}/></Link>
<Link  color={"#686E79"} _hover={{
    color: "#006a67",
  }}  href='https://www.youtube.com/channel/UC7HuDqoVYuXIVbM_QT54nCg'><Icon boxSize={6} as={FaYoutube}/></Link>
<Link  color={"#686E79"} _hover={{
    color: "#006a67",
  }}  href='https://www.instagram.com/negin.alphi/'><Icon boxSize={6} as={FaInstagram}/></Link>




</HStack>  )
}

export default SocialMediaLinks