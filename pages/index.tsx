import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ARLiveshare</title>
        <meta name="description" content="sharing ar content " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          ARLiveshare
        </h1>
        <Image width={400} height={400} src="/logo-plain.svg"></Image>
        <p className={styles.description}>
          Stuck in line? Want to watch a video with a friend? Share your web browser and videos to your friends in AR
        </p>
      </main>
      <footer className={styles.footer}>
        <Image width={30} height={30} src="/androidrobot.svg"></Image>
        <Image width={25} height={30} src="/applewhite.svg"></Image>
      </footer>
    </div>
  )
}
