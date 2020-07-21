import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function SeoPage() {
    return (
    <Layout>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
          <h3>SEO</h3>
      </section>
    </Layout>
    )
}