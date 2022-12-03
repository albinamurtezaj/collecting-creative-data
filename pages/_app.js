import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import styles from '../styles/layout.css'
import '../styles/overwrite.scss'
import Image from 'next/image'


function MyApp({ Component, pageProps }) {


  
  return (
  <>
  <Header />
  <Component  {...pageProps} />
  <Footer />
  </>
    )
  }


export default MyApp
