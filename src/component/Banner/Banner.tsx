import React from 'react'
import style from './Banner.module.css'


function Banner() {
  return (
    <div className='h-[100vh] flex flex-col w-full bg-center bg-cover relative items-start align-middle justify-center gap-[25px] ps-5 lg:ps-40' style={{backgroundImage: `url('/noroot.png')`}}>
      <div className={style.overlay}></div>
        <h1 className=' relative'>Увеличение губ</h1>
        <button className={style.btn}>Записаться на прием</button>
    </div>
  )
}

export default Banner