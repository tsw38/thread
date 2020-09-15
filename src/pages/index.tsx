import {NextSeo} from 'next-seo'
import styles from 'styles/pages/Home.module.scss'
import {Logo} from 'components/Icon';

const tagline = 'A place your needlecraft projects will call home';

export default function Home() {
  return (
      <div className={styles.container}>
          <NextSeo
              title="Thread"
              description={tagline}
              canonical="https://thread.community"
              additionalMetaTags={[
                  {
                      name: 'viewport',
                      content:
                          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                  },
              ]}
          />
          <Logo color="tapestry" mono className={styles.Logo} />
          <div className={styles.mask}>
              <h1 className={styles.heading}>Thread</h1>
              <p className={styles.description}>{tagline}</p>
          </div>
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
