import React from 'react';
import hands from '../src/components/images/hands.png'
import fixed from '../src/components/images/fixed.png'
import flowers from '../src/components/images/flowers.png'
import  big from '../src/components/images/big image.png'



const data = [
  {
    image: fixed,
    text : 'Floral Elegance',
    Id: 1
  },

  {
    image: flowers,
    text : 'Apple Smart for Ldies',
    Id: 2
  },

  {
    image: big,
    text : 'Ultra Series 4 for her',
    Id: 3
  }
]
function ForLadies() {
  return (
    <div className='ladies-main'>

        <div className="lady-text">
            
         <div className="ladies1">
           <h2>Ladies <span>Smart Watches</span> </h2>
            <p className='combine-p'>Wearing Your Tech - Smartwatches that Combine Style and Innovation</p>
            <button className='lad-btn'>Order Now</button>
         </div>

         <div className="ladies2">

            <div className="srore-text">
               <h3 className='score-h3'>Newest in Store <br />for Ladies</h3>
                <h4 className='score-h3-2'>$89,99</h4>


                <div className="colors2">
                   <p>Color</p>
                   <span className='colorhunt1'></span>
                   <span className='colorhunt2'></span>
                   <span className='colorhunt3'></span>
               </div>

            </div>

            <img src={hands} alt="hands-text" className='hand-img' />
         </div>

     </div>
    

    <div className="small-gallery">
    {data.map(izzy=> (
      <div className="cards1" key={izzy.id}>
         <p className='cards-text'>{izzy.text}</p>
        <img src={izzy.image} alt="/build" className='cards1-img' />
      </div>
    ))}
    </div>

    </div>
  )
}

export default ForLadies;