import React from 'react'
import Image from 'next/image';
import Head from 'next/head'

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/korku');
    const data = await res.json();

    const paths = data.map(korku => {
        return {
            params: { id: korku.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/korku/' + id);
    const data = await res.json();

    return{
        props: { korku: data }
    }
}

const geriGit = (e) => {
    window.history.back()
}

const Details = ({ korku }) => {
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
                <Image src={korku.image} alt="/" objectFit='cover' width='170' height='270' />
                <h2> { korku.name } </h2>
                    <div className="text">
                        <p> <strong>Oyuncular:</strong> {korku.oyuncular} </p>
                        <p> <strong>Konu:</strong> {korku.konu} </p>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details
