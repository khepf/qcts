import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function LinksPage() {
    return (
    <Layout>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
          <h3>Useful Links</h3>
          <a href="https://usbrandcolors.com/youtube-colors/">U.S. Brand Colors</a>
          <a href="https://www.icoconverter.com/">ICO Converter</a>
          <a href="https://www.icoconverter.com/">PNG Optimizer</a>
      </section>
    </Layout>
    )
}
