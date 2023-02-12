import React, { useState } from 'react'
import { Background } from '../../Component'
import {i1, i2, i3, i4, i5} from '../../Assets'
import './Home.css'




const Home = () => {

  
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const images = [i1, i2, i3, i4, i5  ];




  return (
    <div>
        <Background images={images}>
        <div className='cupid__landing'>
          <div className='cupid__content'>
          <h1>Dear Pampared 💕...</h1>

          <hr></hr>
          <p>My dearest Oluwafolakemi,</p>

          <p>
            As we approach this special day of love, 
            I can't help but think about all the amazing memories we've shared together. 
          </p>

          <p> 
          You have brought so much joy and happiness into my life and I feel incredibly lucky to have you by my side.
          Would you be my girlfriend and continue this journey with me?
          </p>
          
          <p>
          Yours always,
          <br></br>
          Olumide</p>

          <button onClick={() => setShowPopup1(!showPopup1)}>I'm Always Yours</button>
          {showPopup1 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>I'm Always Yours</h3>
          <p>Roses are red, violets are blue,<br></br>
            I never knew love until I met you.<br></br>
            Your smile lights up my day,<br></br>
            Every moment with you is a holiday.
          </p>
          <p>
            So on this Valentine's Day, I want to say,<br></br>
            How much I love you and always will,<br></br>
            You are my everything, my world, my way,<br></br>
            And I can't imagine life without you still.
          </p>
          <p>...Olumide</p>
          <button onClick={() => setShowPopup1(!showPopup1)}>Close</button>
        </div>
        </div>
      )}

          <button onClick={() => setShowPopup2(!showPopup2)}>Sorry, not Interested</button>
          {showPopup2 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>Oops!!!</h3>
          <p>This option is not available</p>
          <button onClick={() => setShowPopup2(!showPopup2)}>Close</button>
        </div>
        </div>
      )}


          </div>
          
        </div>

        </Background>
        
    </div>
  )
}

export default Home