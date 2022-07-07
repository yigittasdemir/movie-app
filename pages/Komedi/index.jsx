import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/komedi');
    const data = await res.json();

    return {
       props: { komediler: data }
    }
}

const Komedi = ({ komediler }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Komedi</h1>
      <div className="movies">
          {komediler.map (komedi => (
              <Link href={'/Komedi' + komedi.id} key={komedi.id}>
                  <div className='card'>
                    <div className='info'>
                        <Image className='movie-image' src={komedi.image} alt="/" objectFit='cover' width='170' height='270' />
                        <h3> {komedi.name} </h3>
                        <Link href={'/Komedi/' + komedi.id}><a><button>İncele</button></a></Link>
                    </div>
                  </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Komedi
