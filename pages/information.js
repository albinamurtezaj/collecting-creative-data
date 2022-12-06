import styles from '../styles/Home.module.css'


function Information(){
    return (
    <>
    <container className={styles.container}>
    <p className={styles.information}>
      Information about this Tool  
    </p>
    <p className={styles.infotext}> 
      We are collecting some creative data for a greater study. For now, we want to collect some answers to the task, so we can define and train a model for you to get adative feedback and see if you improve your answers regarding creativity. 
    </p>
    </container>
    </>
    )
    }

export default Information