import styles from '../../styles/Home.module.css'
import { solutions } from '../../data/solutions'
import { useRouter} from 'next/router'
import { useState } from 'react'
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

function Start(){
  const router = useRouter()
  const [solutions, setSolutions] = useState([]) 
  const [solution, setSolution] = useState([])

  const fetchSolution = async() => {
    const response = await fetch('/api/solutions')
    const data = await response.json()
    setSolutions(data)
  }

  const submitSolution = async() => {
        const response = await fetch('/api/solutions', {
         method: 'POST',
         body: JSON.stringify({ solution }),
         headers: {
          'Content-Type': 'application/json'
         }
        })
        const data = await response.json()
        console.log(data)

        router.replace('../feedback')
    } 


    return (
    <>
    
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
                  placeholder="..."
                  // value={''}
                  onChange={e => e.target.value}
                />
                <Spacer w={2} />

                <p>
                  <Button id='btn' type="secondary-light" /*onClick={submitSolution}*/>
                    Submit solution!
                  </Button>
                </p>
              </div>
            </container>
        </Grid>
    </Grid.Container>
    </>
    )
}

export default Start