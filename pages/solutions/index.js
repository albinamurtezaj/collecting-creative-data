import styles from '../../styles/Home.module.css'
import { solutions } from '../../data/solutions'
import Router, { useRouter} from 'next/router'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import parse from 'html-react-parser'
import axios from 'axios'

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
    Color,
  } from '@geist-ui/react'



  function submitSolution(value, router) {
    console.log(value)
    router.replace('/feedback')
    let data={content : value }
    axios.post('/api/sendpost', data)
    .then((response) => {
      const router = useRouter();

      console.log(response)

    })
    router.replace('/feedback')
    .catch((e) => {console.log(e)})
    
}

 

export default function Start(){
 const router = useRouter()
  const [value, setValue] = useState('');

  return (
    <Grid.Container justify="center" height="100%">
        <Grid>
            <container className={styles.container}>
              <div className={styles.taskdiv}>
                <p className={styles.taskpage}>Your Math Task</p>
                  
                <p className={styles.task}>What is the most creative way you can use what you know in maths to write some maths questions or equations where the answer is 8?</p>
                <p className={styles.task2}>Please start solving the task below and submit your solution.</p>
                <Spacer w={3} />
                <Textarea
                  width="100%"
                  height="200px"
                  placeholder='...'
                  onChange= {setValue}
                  id='txt'
                />    

                <Spacer w={2} />
                <p>
              

                  <a onClick={() => submitSolution(document.getElementById("txt").value, router)} >
                    Submit solution!
                  </a>
                </p>
              </div>
            </container>
        </Grid>
    </Grid.Container>
    
    )
}


