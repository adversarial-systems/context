import { useEffect, useState, useCallback } from 'react';

const isSafari = (function (p) { return p && (p.toString() === "[object SafariRemoteNotification]") })(window['safari'] && window['safari']['pushNotification'] );
const ua = window.navigator.userAgent;
const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i); 

export default function usePlayer(props) {

  const { 
    active=true,
    className,
    loopcount,
    maxloops,
    current,
    onloopstart=()=>{}, 
    setLoopCount=()=>{},
    playspeed=2.0,
    audio, 
    dichotic=true,
    playerRef,
    buttonRef,
    mode,
    debug=true,
  } = props

  const [playing, setPlaying] = useState(true);
  const mediaPathStereo = `./media/${(mode || 'POR').toUpperCase()}/`
  const mediaPathDichotic = `./media/${(mode || 'POR').toUpperCase()}_ENG/`
  const [audioTrack, setAudioTrack] = useState()
  const [audioTrackURL, setAudioTrackURL] = useState('')
  const [looped, setLooped] = useState(true)
  const [mediaReady, setMediaReady] = useState(false)
  


  const startPlayer = useCallback(() => {
    
    const setPlaying = () => {
      if(playerRef && playerRef.current) {
        
        playerRef.current.play()
                       .then(
                         ()=>{
                           if(playerRef && playerRef.current) {
                             playerRef.current.playbackRate = ((0.6+(playspeed*0.2)) || 1)
                           }
                         },
                         (err)=>{
                           console.log(err)
                         })
      }
    }

    setPlaying()
    
    return () => {
      console.log('cleanup callback for audioPlayer 02')
    }
  },[ loopcount, onloopstart, playerRef, playspeed, setLoopCount])

  const stopPlayer = useCallback(() => {
    if(playerRef && playerRef.current && playerRef.current){
      playerRef.current.pause()
    }
        return () => {
      console.log('cleanup callback for audioPlayer 03')
    }
  }, [playerRef, audioTrack])

  useEffect(() => {
    const { audio_dichotic_url, audio_stereo_url } = current;
    if(!audio_dichotic_url && !audio_stereo_url) {
      // stopPlayer();
      setAudioTrackURL(null)
      return;
    }
    const audioTrackURL = dichotic ? `${mediaPathDichotic}${current.audio_dichotic_url.replace(/-/g,'-')}` : `${mediaPathStereo}${current.audio_stereo_url.replace(/-/g,'-')}`
    setAudioTrackURL(audioTrackURL)
    const newAudioTrack = new Audio(audioTrackURL)
    newAudioTrack.muted = true
    setAudioTrack(newAudioTrack)
    return(()=>{
      setAudioTrackURL(null)
      setAudioTrack(null)

    })
    
  },[dichotic, mediaPathDichotic, mediaPathStereo, current, setAudioTrack])


  return {
    active,
    className,
    loopcount,
    maxloops,
    audioTrack,
    setAudioTrack,
    audioTrackURL,
    setAudioTrackURL,
    // mediaReady,
    // setMediaReady,
    looped,
    setLooped,
    startPlayer,
    stopPlayer,
    playing,
    setPlaying,
    iOS,
    playerRef,
    buttonRef,
    current,
  }
}