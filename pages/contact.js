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


function Contact(){
  const router = useRouter()

    const handleClick = () => {
        console.log('Submitted')
        router.replace('/thanks')
    }
    return (
    <>
    <container className={styles.container}>
    <p className={styles.use}>Contact</p>
        <h2>For any questions and concerns, please contact</h2>
        <ul className={styles.contactlist}>
            <p>Albina Murtezaj</p>
            <p>Student Assistant Humbodt-University of Berlin</p>
            <p>Email: murtezaa@informatik.hu-berlin.de </p>

       
    </ul>
  
  
  </container>
  
        </>
    )
}

export default Contact