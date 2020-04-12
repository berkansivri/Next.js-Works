import Layout from '../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Link from 'next/link'
import slug from 'slug'

function Home({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="title">Rick and Morty</h1>

      <ul>
        {characters.results.map((char) => (
          <li key={char.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(char.name)}-${char.id}`}
            >
              <a>{char.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

export default Home
