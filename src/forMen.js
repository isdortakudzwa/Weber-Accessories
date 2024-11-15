import React from 'react';
import tracker from '../src/components/images/gps tracker.png';
import waterproof from '../src/components/images/waterproof.png';
import camera from '../src/components/images/camera.png';
import breath from '../src/components/images/steam.png';
import aluminium from '../src/components/images/alucase.png';
import fitness from '../src/components/images/fitnes tracker.png';
import big2 from '../src/components/images/Double watch.png';



  const Features = [

      { id: 1, 
        image: tracker,
        description: "GPS Tracker" 
      },
  
      { id: 2, 
        image: waterproof, 
        description: "Waterproof Tracker" 
      },
  
      { id: 3, 
        image: camera,
        description: "Camera Tracker"
     },
    

  ]

    const Colors = [

      { id: 7,
        image: 
        big2,
       },
   
  ]

  const Trending = [
    { id: 4, image: breath, 
      description: "Breathable Silicon Watchband" 
    },

    { id: 5, image: aluminium,
      description: "Aluminium Case"
     },

    { id: 6, image: fitness,
     description: "Fitness Tracker" 
    },
  ]



function ForMen() {


  return (
    <div className='Men-watch'>
      <h2>For Men</h2>
      <div className="mare">
        <p className='fif-p'>Features</p>
        <p >Colors</p>
        <p >Trending</p>
      </div>

      <div className="gallery">
        <div className="watch-gallery">
          <div className="gps1">
          { Features.map(izzy => (
              <div className="imga" key={izzy.id} >
                <img src={izzy.image} alt="/" className='small-details' />
                <p>{izzy.description}</p>
              </div>
              ))}

          </div>

          <div className="gps2">
             { Colors.map(izzy => (
              <div className="imgay" key={izzy.id}>
                <img src={izzy.image} alt="/" className='big2'/>
              </div>
              ))}
            </div>

          <div className="gps3">
          { Trending.map(izzy => (
              <div className="imga" key={izzy.id}>
                <img src={izzy.image} alt="/" className='small-details' />
                <p>{izzy.description}</p>
              </div>
              ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default ForMen;
