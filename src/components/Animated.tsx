
import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Animated = () => {
  return (
<motion.div animate={{ opacity: 0.5 }}
  >
    <Box h={40} w={40} bg={"red"}></Box>
</motion.div> )
}

export default Animated