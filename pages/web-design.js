import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function WebDesignPage() {
    return (
    <Layout>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
          <h3>Web Design That Brings Your Online Presence To Life</h3>
          <p>We create beautiful, engaging websites. With the use of 
              animation and interactive elements, ensuring a flawless user 
              experience and seamless integration with your business.</p>
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