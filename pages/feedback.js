import styles from '../styles/Home.module.css'
import { useRouter} from 'next/router'
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

function Feedback(){
    const router = useRouter()

    const handleClick = () => {
        console.log('Submitted')
        router.replace('/solutions')
    }
    return (
    <>
    <container className={styles.containerFeedback}> 

    
     <p className={styles.feedback}>Submitted! &#128161; </p>
     <p className={styles.feedbacktext}>Thank you for your solution!</p>
     <div className={styles.container}>
     <Button id='btn' type="secondary-light" onClick={handleClick} className={styles.buttonSubmit}>
              Try Again!
     </Button>
     </div>

     </container>
     <Spacer w={5} />

     
    </>
    )
}

export default Feedback