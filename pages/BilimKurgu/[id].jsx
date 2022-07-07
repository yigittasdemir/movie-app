import React from 'react'
import Image from 'next/image';
import Head from 'next/head'

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/aksiyon');
    const data = await res.json();

    const paths = data.map(aksiyon => {
        return {
            params: { id: aksiyon.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/bilimkurgu/' + id);
    const data = await res.json();

    return{
        props: { bilimkurgu: data }
    }
}

const geriGit = (e) => {
    window.history.back()
}

const Details = ({ bilimkurgu }) => {
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
                <Image src={bilimkurgu.image} alt="/" objectFit='cover' width='170' height='270' />
                <h2> { bilimkurgu.name } </h2>
                <div className="text">
                    <p><strong>Oyuncular:</strong> {bilimkurgu.oyuncular} </p>
                    <p><strong>Konu:</strong> {bilimkurgu.konu} </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details
