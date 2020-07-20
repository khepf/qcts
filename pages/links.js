import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Links() {
    return (
    <Layout>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <h3>Useful Links</h3>
          <a href="https://usbrandcolors.com/youtube-colors/">U.S. Brand Colors</a>
      </section>
    </Layout>
    )
}