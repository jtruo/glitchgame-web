import styles from '../styles/Home.module.css'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO pageTitle={"Beat FX"} pageDescription={"AR/VR rhythm game inspired by Sound Voltex"}></SEO>
        <h1 className={styles.title}>
          Beat FX
        </h1>
        <p className={styles.description}>
          A rhythm game inspired by Sound Voltex
        </p>
    </div>
  )
}
