import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/aksiyon');
    const data = await res.json();

    return {
       props: { aksiyonlar: data }
    }
}

const Aksiyon = ({ aksiyonlar }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Aksiyon</h1>
      <div className="movies">
          {aksiyonlar.map (aksiyon => (
              <Link href={'/Aksiyon/' + aksiyon.id} key={aksiyon.id}>
                <div className='card'>
                    <div className='info'>
                      <Image className='movie-image' src={aksiyon.image} alt="/" objectFit='cover' width='170' height='270' />
                      <h3> {aksiyon.name} </h3>
                      <Link href={'/Aksiyon/' + aksiyon.id}><a><button>İncele</button></a></Link>
                    </div>
                </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Aksiyon
