import styles from '../styles/Home.module.css'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO pageTitle={"Glitch Game"} pageDescription={"A 3D rhythm game"}></SEO>
        <h1 className={styles.title}>
          Glitch Game
        </h1>
        <p className={styles.description}>
          A 3D rhythm game
        </p>

    </div>
  )
}
