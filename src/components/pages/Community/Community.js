import React from 'react';
import './Community.css';
import tc from '../../../assets/img/tc.png';
function Community(){

    const handleClick = ()=>{
        window.open("https://chat.whatsapp.com/H1qQxZ2iv5y0x5XE4dOG0b","_blank");
    }
    return(
        <div className="container">
            <div className="start-wrapper">
                <div className="start-img">
                    <img src={tc} alt="img"/>
                </div>
                <div className="start-content">
                    <h2 className="section-title">Join Our Free Tech Community</h2>
                    <p>Unlock the power of Knowledge and innovation by joining our vibrant and free WhatsApp tech community</p>
                    <button className="register-btn" onClick={handleClick}>Join now</button>
                </div>
            </div>
        </div>
    )
}



export default Community