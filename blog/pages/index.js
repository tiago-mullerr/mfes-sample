import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogCard from '../components/BlogCard/BlogCard'
import { useEffect, useState } from 'react'

export default function Home({ movies }) {

  const [posts, setPosts] = useState([]);

  useEffect((e) => {
    setPosts(movies);
  }, [movies]);

  return (
    <div className={styles.App}>
      <h1>Últimos Reviews do blog</h1>
      {
        movies.map((m) => {
          return (
            <BlogCard key={m.episode_id} title={m.title} content={m.opening_crawl}></BlogCard>
          )
        })
      }
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://swapi.dev/api/films`)
  const data = await res.json()
  const movies = data.results;
  return { props: { movies } }
}