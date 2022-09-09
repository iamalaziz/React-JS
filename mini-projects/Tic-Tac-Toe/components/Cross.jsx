import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const CrossLines = styled(motion.div)`
  width: 3px;
  height: 0px;
  background-color: #36dbd7;
  border-radius: 4px;
  position: absolute;
`
const Cross = () => {
  return (
    <React.Fragment>
      <CrossLines style={{transform: "rotate(45deg)"}} initial={{height: 0}} animate={{height: "100px"}} transition={{delay: 0.25}}/>
      <CrossLines style={{transform: "rotate(135deg)"}} initial={{height: 0}} animate={{height: "100px"}} transition={{delay: 0.25}}/>
    </React.Fragment>
  )
}

export default Cross