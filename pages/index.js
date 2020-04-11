import Layout from '../components/layout'
import Head from 'next/head'

function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="title">Home</h1>

      <style jsx>{`
        .title {
          color: white;
          background-color: blue;
        }
      `}</style>

      <style global jsx>{`
        body {
          background-color: yellow;
        }
        html {
          color: deepskyblue;
        }
      `}</style>
    </Layout>
  )
}

export default Home
