import React from 'react'
import testImg from '../public/foo/test-rect.jpg'
import Image from 'next/future/image'

import testJPG from '../public/test.jpg'
import testPNG from '../public/test.png'
import testWEBP from '../public/test.webp'
import testAVIF from '../public/test.avif'
import testSVG from '../public/test.svg'
import testGIF from '../public/test.gif'
import testBMP from '../public/test.bmp'
import testICO from '../public/test.ico'

import TallImage from '../components/TallImage'

const Page = () => {
  return (
    <div>
      <h1 id="page-header">Static Image</h1>
      <Image id="basic-static" src={testImg} placeholder="blur" />
      <TallImage />
      <Image id="defined-size-static" src={testPNG} height="150" width="150" />
      <Image id="require-static" src={require('../public/foo/test-rect.jpg')} />
      <Image
        id="basic-non-static"
        src="/test-rect.jpg"
        width="400"
        height="300"
      />
      <br />
      <Image id="blur-png" src={testPNG} placeholder="blur" />
      <Image id="blur-jpg" src={testJPG} placeholder="blur" />
      <Image id="blur-webp" src={testWEBP} placeholder="blur" />
      <Image id="blur-avif" src={testAVIF} placeholder="blur" />
      <Image id="static-svg" src={testSVG} />
      <Image id="static-gif" src={testGIF} />
      <Image id="static-bmp" src={testBMP} />
      <Image id="static-ico" src={testICO} />
      <br />
      <Image id="static-unoptimized" src={testJPG} unoptimized />
    </div>
  )
}

export default Page
