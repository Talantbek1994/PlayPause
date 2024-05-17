import { AccessAlarmSharp, Dashboard } from '@material-ui/icons'
import { useState,useRef } from 'react'

import './App.css'

function App() {
const [videoSrc, setVideoSrc] = useState()
const [progress, setProgress] = useState(0)
const [isPlaying, setIsPlaying] = useState(false)
const videoRef = useRef(null)

  const handleUploadVideo = (event) => {   //Fileni kompdan yuklash
   const file = event.target.files[0]
   if(file) {
    const videoURL= URL.createObjectURL(file)
    setVideoSrc(videoURL)
   }
  }

  const handlePlay =() => {           //Play video
    if (videoRef.current) {
      videoRef.current.play()
      setIsShowButton(false)
    }
   
  }

const handlePlayPause = () => {
  if (videoRef.current) {       //Agar video bolsa
    if (isPlaying) {             //video ketyatgan bolsa
      videoRef.current.pause()   //pause metodi bolsin
    } else {                  
      videoRef.current.play();      //play bolsin
    }
    setIsPlaying(!isPlaying)     
  }
}

  const handleTimeUpdate = () =>{    //Progress Bar
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
     setProgress(currentProgress);
    }
  }

  return (
    <>
     <div className='App'>
         <h1>Video Player</h1>
         <input type="file" 
         accept='video'
         placeholder='Videoni kiriting'
          onChange={handleUploadVideo}/>
         <div className="video">
      { videoSrc &&  (
        <video 
        ref={videoRef}
        src={videoSrc}
        onTimeUpdate={handleTimeUpdate}
        width="100"
        height="100%" controls/>
      ) 
    
      
      }
          <button className='play'
           onClick={handlePlayPause}        
           type='button'>
            {isPlaying ? 'Pause' : 'Play'}
           </button>
          
         </div>
      </div>
     
    </>
  )
}

export default App
