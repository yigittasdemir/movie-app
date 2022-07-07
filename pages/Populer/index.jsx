import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/populer');
    const data = await res.json();

    return {
       props: { populerler: data }
    }
}

const Populer = ({ populerler }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Popüler Filmler</h1>
      <div className="movies">
          {populerler.map (populer => (
              <Link href={'/Populer/' + populer.id} key={populer.id}>
                  <div className='card'>
                    <div className='info'>
                        <Image className='movie-image' src={populer.image} alt="/" objectFit='cover' width='170' height='270' />
                        <h3> {populer.name} </h3>
                        <Link href={'/Populer/' + populer.id}><a><button>İncele</button></a></Link>
                  </div>
              </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Populer
