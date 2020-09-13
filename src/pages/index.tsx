import styles from 'styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      Hello All the content in here is for the index
    </div>
  )
}

export const getStaticProps = async (appContext) => {
  return {
    props: {
      navigation: {
        color: 'tapestry'
      }
    }
  }
}
