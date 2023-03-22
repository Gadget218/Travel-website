import React from 'react'
import { Button } from './Button'
import './Vid.css'
import "../App.css"

function Vid() {
    return (
        <div className='vid-container'/*to put video*/> {/*div divides page content into sections, and applies styles */}
         <video src="/videos/video-2.mp4" autoPlay loop muted />{/*video will be looping and muted*/}
         <h1>ADVENTURE AWAITS</h1>{/*title or header/heading*/}
         <p>What are you waiting for?</p>{/*paragraph*/}
         <div className="vid-btns">
            <Button
            className='btns'
            buttonStyle='btn--outline'
         buttonSize='btn--large'>
            GET STARTED
         </Button>
         <Button
            className='btns'
            buttonStyle='btn--primary'
         buttonSize='btn--large'>
            WATCH TRAILER<i className='far fa-play-circle' />
         </Button>
         </div> 
        </div>
    )
}

export default Vid