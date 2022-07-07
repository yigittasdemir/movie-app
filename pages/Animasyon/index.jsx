import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/animasyon');
    const data = await res.json();

    return {
       props: { animasyonlar: data }
    }
}

const Animasyon = ({ animasyonlar }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Animasyon</h1>
      <div className="movies">
          {animasyonlar.map (animasyon => (
              <Link href={'/Animasyon/' + animasyon.id} key={animasyon.id}>
                  <div className='card'>
                    <div className='info'>
                        <Image className='movie-image' src={animasyon.image} alt="/" objectFit='cover' width='170' height='270' />
                        <h3> {animasyon.name} </h3>
                        <Link href={'/Animasyon/' + animasyon.id}><a><button>İncele</button></a></Link>
                  </div>
              </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Animasyon
