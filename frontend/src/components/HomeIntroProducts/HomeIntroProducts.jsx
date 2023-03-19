import React from 'react'
import './HomeIntroProducts.css'
export default function HomeIntroProducts({PersianName,EnglishName,Img,Intro}) {
  return (
    <div className='HomeIntroProducts'>
        <img src={Img}width={71} height={85} alt="" />
        <p className="mt-3 vazir">{PersianName}</p>
        <p className='vazirlight'>{EnglishName}</p>
        <p className='mt-4 fs-9 vazirlight'>{Intro}</p>
        </div>
  )
}
