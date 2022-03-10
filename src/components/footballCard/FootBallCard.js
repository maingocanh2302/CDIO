import React from 'react'
import './FootBallCard.css'

const FootBallCard = () => {
  return (
    <div>
         <div className='productCard'>
            <div className='productCard__body'>
              <div className='image'>
                <img src='https://htsport.vn/wp-content/uploads/2020/06/anh-bia-danh-sach-san-bong-o-quan-binh-tan.jpg' />
              </div>
                <h2 className='productCard__body--title'>
                  Sân bóng đá Yên Hòa-Cầu Giấy  
                </h2>
                <div className='productCard__body--describe'>
                  <div>số người: 7</div>
                  <div>⭐⭐⭐⭐⭐</div>
                </div>
                <div className='productCard__body--price'>
                  <h2>Giá: <p></p></h2>
                </div>
                <div className='productCard__body--additional'>
                  
                </div>
                
            </div>   
        </div>
    </div>
  )
}

export default FootBallCard
