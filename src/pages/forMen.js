import React from 'react';
import tracker from '../components/images/gps tracker.png';
// import tracker from '../components/images/gps tracker.png';
import waterproof from '../components/images/waterproof.png';
import camera from '../components/images/camera.png';
import breath from '../components/images/steam.png';
import aluminium from '../components/images/alucase.png';
import fitness from '../components/images/fitnes tracker.png';
import big2 from '../components/images/Double watch.png';

function ForMen() {
  return (
    <div className='Men-watch'>
        <h2>For Men</h2>
        <div className="mare">
            <p className='fif-p'>Features</p>
            <p>Colors</p>
            <p>Trending</p>
        </div>

     <div className="gallery">

        <div className="watch-gallery">

            <div className="gps1">
                <img src={tracker} alt="pics" className='small-details' />
                <p>GPS Tracker</p>
            </div>

            <div className="gps2">
               <img src={waterproof} alt="pics" className='small-details' />
               <p>GPS Tracker</p>
            </div>

            <div className="gps3">
               <img src={camera} alt="pics" className='small-details' />
               <p>GPS Tracker</p>
            </div>


        </div>

        <div className="watch-gallery2">
            <img src={big2 } alt="pics"  className='big2' />
        </div>

        <div className="watch-gallery3">

            <div className="gps1">
                <img src={breath} alt="pics" className='small-details' />
                <p>Breathable Silicon Watchband</p>
            </div>

            <div className="gps2">
               <img src={aluminium} alt="pics" className='small-details' />
               <p>Aluminium Case</p>
            </div>

            <div className="gps3">
               <img src={fitness} alt="pics" className='small-details' />
               <p>Fitness Tracker</p>
            </div>

       </div>

     </div>

    </div>
  )
}

export default ForMen