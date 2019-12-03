import React , { useRef }     from 'react';
import usePlayer  from './usePlayer2';
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

  const [{ mode, current={audio_stereo_url:'', audio_dichotic_url:''} },] = useStore();
  const { audioTrack, audioTrackURL } = usePlayer({...props, active, current, playerRef, buttonRef, mode, playspeed })
  if(active && audioTrack && audioTrackURL) return (
    <div>

     {audioTrack && <video playsInline ref={playerRef} src={`${audioTrackURL}`} preload="true" autoPlay loop controls height={'0'}/>}
     {(!audioTrack) && <div>Audio Loading ...</div>}
     {audioTrackURL && <div>{audioTrackURL}</div>}
   
      </div>
  )
    return (<div />)
  
}
