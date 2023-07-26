import '@/styles/globals.css'
import AuthWrapper from '@/components/AuthWrapper'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return(
  <div>
    <Component {...pageProps} />
    
    <Footer />

  </div> )
}
