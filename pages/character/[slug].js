import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function Character({ character }) {
  return (
    <Layout>
      <Head>
        <title>Character Page</title>
      </Head>
      <div>{character.name}</div>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    paths: characters.results.map((char) => {
      return { params: { slug: `${slug(char.name)}-${char.id}` } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + params.slug.split("-").pop())
  const character = await data.json()
  return {
    props: {
      character
    }
  }
}

export default Character
