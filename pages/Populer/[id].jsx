import React from 'react'
import Image from 'next/image';
import Head from 'next/head'

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/populer');
    const data = await res.json();

    const paths = data.map(populer => {
        return {
            params: { id: populer.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/populer/' + id);
    const data = await res.json();

    return{
        props: { populer: data }
    }
}

const geriGit = (e) => {
    window.history.back()
}

const Details = ({ populer }) => {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='details-container'>
        <div className='back'>
            <button onClick={geriGit}>Geri Dön</button>
        </div>
        <div className="details">
            <div className="card">
                <Image src={populer.image} alt="/" objectFit='cover' width='170' height='270' />
                    <h2> { populer.name } </h2>
                    <div className="text">
                        <p> <strong>Oyuncular:</strong> {populer.oyuncular} </p>
                        <p> <strong>Konu:</strong> {populer.konu} </p>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details
