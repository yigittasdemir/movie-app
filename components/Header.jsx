import React from 'react'
import Link from 'next/link'

const myFunction = (e) =>  {
  var x = document.getElementById("toggle-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}

const Header = () => {
  return (
    <header>
        <ul>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/Aksiyon'}><a>Aksiyon</a></Link>
            <Link href={'/Animasyon'}><a>Animasyon</a></Link>
            <Link href={'/BilimKurgu'}><a>Bilim Kurgu</a></Link>
            <Link href={'/Fantastik'}><a>Fantastik</a></Link>
            <Link href={'/Gerilim'}><a>Gerilim</a></Link>
            <Link href={'/Komedi'}><a>Komedi</a></Link>
            <Link href={'/Korku'}><a>Korku</a></Link>
            <Link href={'mailto:yigittasdemir350@gmail.com'}><a>İletişim</a></Link>
        </ul>
        <a href="javascript:void(0);" className='icon' onClick={myFunction}>
          <p>Menü</p>
        </a>
        <div id='toggle-menu'>
        <ul>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/Aksiyon'}><a>Aksiyon</a></Link>
            <Link href={'/Animasyon'}><a>Animasyon</a></Link>
            <Link href={'/BilimKurgu'}><a>Bilim Kurgu</a></Link>
            <Link href={'/Fantastik'}><a>Fantastik</a></Link>
            <Link href={'/Gerilim'}><a>Gerilim</a></Link>
            <Link href={'/Komedi'}><a>Komedi</a></Link>
            <Link href={'/Korku'}><a>Korku</a></Link>
            <Link href={'mailto:yigittasdemir350@gmail.com'}><a>İletişim</a></Link>
       </ul>
        </div>
    </header>
  )
}

export default Header
