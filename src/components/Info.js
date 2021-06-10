import React from 'react';
import Popup from 'reactjs-popup';
import logo from '../components/img/logos/info-circle-solid.svg'
import '../styles/Info.css'

export default () =>(
    <Popup
    trigger={<button className="logo"></button>}
    modal
  >
       {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
       <div className="content">
           <p>It takes on average <span className="minutes">15 minutes</span> to fall asleep.</p>
           <p>If you go to sleep <span className="right-now">Right now</span> </p>
           <p>You will wake up at <span className="two">two</span> of the following times</p>
           <p>this will make you feel <span className="rested">well rested</span> for the day.</p>
       </div>
      </div>
    )}

</Popup>
);