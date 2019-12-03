import React , { useRef }     from 'react';
import usePlayer  from './usePlayer';
import { useStore } from '../../store';

  

export const Audio = (props) => {

  const playerRef = useRef()
  const buttonRef = useRef()

  let { 
    // className,
    // loopcount,
    // maxloops,
    // mediaReady,
    // playing,
    // setPlaying,
    // iOS,
    playspeed=4.0,
    active=true,
  } = props

    
  // const [{ mode, audio: { url = '' } = {url:''} }, ] = useStore();
  const [{ mode, current, ] = useStore();

  // const mediaPathStereo = `./media/${(mode || 'POR').toUpperCase()}/`
  const { audioTrackURL } = usePlayer({...props, active, current, playerRef, buttonRef, mode, playspeed })
  if(active) return (
    <div>

     {url && <video playsInline ref={playerRef} src={`${audioTrackURL}`} preload autoPlay loop controls height={'72'}/>}
     {(!url) && <div>Audio Loading ...</div>}
     {url && <div>{url}</div>}
   
      </div>
  )
    return (<div />)
  
}
