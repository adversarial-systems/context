import React , { useRef, useState }     from 'react';
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
    active=true,
    media='',
    mediaB='', 
  } = props

    
  const [{ mode, audio: { url = '' } = {url:''} }, ] = useStore();
  media = url;
  mediaB = url;
  // const mediaPathStereo = `./media/${(mode || 'POR').toUpperCase()}/`
  const { audioTrackURL } = usePlayer({...props, media, mediaB, playerRef, buttonRef, mode })
  if(active) return (
    <div>

     {url && <video playsInline ref={playerRef} src={`${audioTrackURL}`} preload autoPlay loop controls height={'72'}/>}
     {(!url) && <div>Audio Loading ...</div>}
     {url && <div>{url}</div>}
   
      </div>
  )
    return (<div />)
  
}
