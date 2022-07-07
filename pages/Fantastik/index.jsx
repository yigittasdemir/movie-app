import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/fantastik');
    const data = await res.json();

    return {
       props: { fantastikler: data }
    }
}

const Fantastik = ({ fantastikler }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Fantastik</h1>
      <div className="movies">
          {fantastikler.map (fantastik => (
              <Link href={'/Fantastik/' + fantastik.id} key={fantastik.id}>
                  <div className='card'>
                    <div className='info'>
                        <Image className='movie-image' src={fantastik.image} alt="/" objectFit='cover' width='170' height='270' />
                        <h3> {fantastik.name} </h3>
                        <Link href={'/Fantastik/' + fantastik.id}><a><button>İncele</button></a></Link>
                    </div>
                  </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Fantastik
