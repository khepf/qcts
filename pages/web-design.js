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
      <section>
          <div><h4>Our Clients</h4></div>
          <div>
              <div>Nick Erdy Foundation</div>
              <div>ShrimpTastic</div>
          </div>

      </section>
    </Layout>
    )
}