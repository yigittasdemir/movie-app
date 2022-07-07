import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/korku');
    const data = await res.json();

    return {
       props: { korkular: data }
    }
}

const Korku = ({ korkular }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Korku</h1>
      <div className="movies">
        {korkular.map (korku => (
            <Link href={'/Korku/' + korku.id} key={korku.id}>
                <div className='card'>
                  <div className='info'>
                      <Image className='movie-image' src={korku.image} alt="/" objectFit='cover' width='170' height='270' />
                      <h3> {korku.name} </h3>
                      <Link href={'/Korku/' + korku.id}><a><button>İncele</button></a></Link>
                  </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Korku
