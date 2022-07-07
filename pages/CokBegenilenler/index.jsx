import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/begenilenler');
    const data = await res.json();

    return {
       props: { begenilenler: data }
    }
}

const Begenilenler = ({ begenilenler }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Çok Beğenilen Filmler</h1>
      <div className="movies">
          {begenilenler.map (begenilen => (
              <Link href={'/CokBegenilenler/' + begenilen.id} key={begenilen.id}>
                  <div className='card'>
                    <div className='info'>
                      <Image className='movie-image' src={begenilen.image} alt="/" objectFit='cover' width='170' height='270' />
                      <h3> {begenilen.name} </h3>
                      <Link href={'/CokBegenilenler/' + begenilen.id}><a><button>İncele</button></a></Link>
                    </div>
                  </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Begenilenler
