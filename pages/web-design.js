import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function WebDesignPage() {
    return (
    <Layout>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
          <h3>Web Design</h3>
      </section>
    </Layout>
    )
}