import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Movies App</title>
    </Head>
    <div className='anasayfa'>
      <div className='billboard-container'>
        <div className='billboard'>
          <Link href={'/CokBegenilenler'}>
            <a>
              <div className='begenilenler'>
              <h3>Çok Beğenilen Filmler</h3>
              </div>
            </a>
          </Link>
          <Link href={'/Populer'}>
            <a>
              <div className='populerler'>
                <h3>Popüler Filmler</h3>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
