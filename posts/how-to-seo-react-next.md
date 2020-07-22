---
title: 'How To Optimize SEO With React and Next'
date: '2020-07-21'
---

How to test your SEO
1. Google Dev Tools
2. Lighthouse
3. Check "Accessibility" and SEO"
4. Click "Generate Report" button
- 70 acc and 89 seo for queencitytehnicalservices.com
- problems with shrimptastic as it seems to continuously load

5. checklist
- make sure you have a main
- make sure your h1 starts the page (change attributes via css)
- add alt to all images

* for individual pages

```
import Head from "next/head"
<Head>
<title>Queen City Technical Services - Home Page</title>
<meta name="description" 
content="This is an example of a meta description between 50–160 characters." />

</Head>
// etc...
```

- for all pages - create pages/_document.js
```
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {  
    render() {
      return (
        <Html lang="en">
          <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument
  ```



