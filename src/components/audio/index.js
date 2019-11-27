import React , { useRef }     from 'react';
import usePlayer  from './usePlayer';
import { useStore } from '../../store';

  

export const Audio = (props) => {


  const playerRef = useRef()
  const buttonRef = useRef()

  const { 
    className,
    loopcount,
    maxloops,
    mediaReady,
    playing,
    setPlaying,
    iOS,
    media,
    mediaB,
  } = props

  // usePlayer({...props, playerRef, buttonRef, mode })  
  const [{ mode, audio: { url } }, dispatch] = useStore();
  return (

    <div>
     {media && mediaB && 
      <div>
        <button ref={buttonRef} format="gradient" size="normal" label={` ${(maxloops || 4) - (loopcount || 0)}`} className={`fas ${(!playing ? 'fa-play' : 'fa-pause')}`} color={!playing ? 'green' : 'red'} ></button>
      </div>
     }
     {media && iOS && <video playsInline ref={playerRef} src={url}/>}
     {(!url) && <div>Audio Loading ...</div>}
     {url && <div>{url}</div>}
    </div>
  )
  
}
