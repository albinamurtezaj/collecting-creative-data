import styles from '../styles/Home.module.css'

import {
    Grid,
    Text,
    Tooltip,
    Textarea,
    Button,
    Spacer,
    Link as GeistLink,
    Progress,
    Dot,
    Avatar,
  } from '@geist-ui/react'

function Use(){
    
    return (
    <>
    <container className={styles.container}>
    <p className={styles.use}>How to use this Tool</p>
    
    <p className={styles.infotext}>
        If you want to use the creative math tool, start by solving your tasks in the Section "Get started!" After completing one task 
        you can submit your solution. You can submit as many solutions as you want. For exmaple you can submit a soultion that you think is not creative at all. After that you can think about more creative ones and submit them one after one. 
        <Spacer w={5} />

        You will be given with a topic to write a novel and creative equation or questions based on your knowledge in maths. Below the math task, there will be a text editor section, 
        where you are allowed to add, modify, or delete your text. 
        </p>
    </container>
    </>
    )
}

export default Use