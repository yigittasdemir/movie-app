import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/bilimkurgu');
    const data = await res.json();

    return {
       props: { bilimkurgular: data }
    }
}

const BilimKurgu = ({ bilimkurgular }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Bilim Kurgu</h1>
      <div className="movies">
          {bilimkurgular.map (bilimkurgu => (
              <Link href={'/BilimKurgu/' + bilimkurgu.id} key={bilimkurgu.id}>
                  <div className='card'>
                    <div className='info'>
                      <Image className='movie-image' src={bilimkurgu.image} alt="/" objectFit='cover' width='170' height='270' />
                      <h3> {bilimkurgu.name} </h3>
                      <Link href={'/BilimKurgu/' + bilimkurgu.id}><a><button>İncele</button></a></Link>
                    </div>
                  </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default BilimKurgu
