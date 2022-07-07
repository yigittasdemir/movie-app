import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/gerilim');
    const data = await res.json();

    return {
       props: { gerilimler: data }
    }
}

const Gerilim = ({ gerilimler }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='movies-container'>
      <h1>Gerilim</h1>
      <div className="movies">
          {gerilimler.map (gerilim => (
              <Link href={'/Gerilim/' + gerilim.id} key={gerilim.id}>
                  <div className='card'>
                    <div className='info'>
                        <Image className='movie-image' src={gerilim.image} alt="/" objectFit='cover' width='170' height='270' />
                        <h3> {gerilim.name} </h3>
                        <Link href={'/Gerilim/' + gerilim.id}><a><button>İncele</button></a></Link>
                    </div>
                  </div>
              </Link>
          ))}
      </div>
    </div>
    </>
  )
}

export default Gerilim
