import { useEffect, useState, useCallback } from 'react';

const isSafari = (function (p) { return p && (p.toString() === "[object SafariRemoteNotification]") })(window['safari'] && window['safari']['pushNotification'] );
const ua = window.navigator.userAgent;
const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i); 

export default function usePlayer(props) {

  const { 
    className,
    loopcount,
    maxloops,
    media,
    mediaB,
    onloopscomplete, 
    onloopstart=()=>{}, 
    setLoopCount=()=>{},
    playspeed,
    audio, 
    dichotic,
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

  const startPlayer = useCallback(() => {
    // if(loopcount>((maxloops || 50)-1)) {
    //   onloopscomplete()
    //   return
    // }

    onloopstart()
    setLoopCount(loopcount+1)
    if(iOS) {
      playerRef && playerRef.current && 
      playerRef.current.play()
                       .then(
                         ()=>{
                           playerRef.current.playbackRate = ((0.6+(playspeed*0.2)) || 1)
                         },
                         (err)=>{
                           console.log(err)
                         })
    }

    if(!iOS && audioTrack && audioTrack.play){
      let audioPlayerPromise = audioTrack.play();
      audioPlayerPromise && audioPlayerPromise.then(()=>{
      },(err)=>{console.log(err)})
    }

  },[audioTrack, loopcount, maxloops, onloopscomplete, onloopstart, playerRef, playspeed, setLoopCount])

  const stopPlayer = useCallback(() => {
    if(playerRef && playerRef.current && playerRef.current){
      playerRef.current.pause()
    }
    // audioTrack.pause()
  }, [playerRef])

  const handleAudioKeyDown = useCallback((event) => {
    switch( event.keyCode ) {
      case 32: // SPACE KEY
        debug && console.log(`SPACE key down in audio player`)
        // buttonRef.current.props.onClick()
        event.preventDefault();
        setPlaying(!playing);  
        break;
      default: 
        // this.props.debug && console.log(`clicked code-${event.keyCode} key handled by AudioPlayer`)
        break;
    }
  },[ setPlaying, playing, debug])

  useEffect(() => { // ON CHANGE OF [audioTrack] ONLY
    const currentRef = playerRef;
    const handleMediaPaused = () => {
      if(isSafari || iOS) { onloopstart() }
      setLooped(false) // this false then true setting helps loop efficiently
      setLooped(true)
    }
    
    if(audioTrack && audioTrack.addEventListener){
      onloopstart()
      setMediaReady(true)
      // audioTrack.addEventListener("ended", handleMediaPaused,false)
      startPlayer()
    }
    if(iOS &&  playerRef && playerRef.current && 
      playerRef.current.play) {
      playerRef.current.addEventListener("pause", handleMediaPaused,false)
      
    }
    window.addEventListener("keydown", handleAudioKeyDown, false);

    return () => {
      window.removeEventListener("keydown", handleAudioKeyDown, false);
      if(audioTrack && audioTrack.removeEventListener){
        audioTrack.removeEventListener("ended", handleMediaPaused,false)
        // setAudioTrack(null)
      }
      if(iOS &&  currentRef && currentRef.current && 
        currentRef.current.play) {
        currentRef.current.removeEventListener("pause", handleMediaPaused,false)
      }
    };
    }
  ,[handleAudioKeyDown, onloopstart, audioTrack, playerRef, startPlayer]) // ON CHANGE OF [audioTrack] ONLY

  useEffect(() => { // ON CHANGE OF [playing,looped] ONLY
     if(playing ){
      console.log('starting player')
      startPlayer()
      return
    }
    if(!playing){
      console.log('stopping player')
      stopPlayer()
      return
    }     
    },[playing,looped,startPlayer,stopPlayer] // ON CHANGE OF [playing,looped] ONLY
  )

  useEffect(() => {
    if(audioTrack) {
      if(!audio){
        audioTrack.muted = true
        return
      }
      audioTrack.muted = false
    }
  },[audio, audioTrack])
  
  useEffect(() => {
    const audioTrackURL = dichotic ? `${mediaPathDichotic}${media.replace(/-/g,'-')}` : `${mediaPathStereo}${mediaB.replace(/-/g,'-')}`
    // setAudioTrackURL(audioTrackURL)
    const newAudioTrack = new Audio(audioTrackURL)
    newAudioTrack.muted = true
    setAudioTrack(newAudioTrack)

  },[dichotic, mediaPathDichotic, mediaPathStereo, media, mediaB])

  const [mediaReady, setMediaReady] = useState()

  useEffect(() => { // ON CHANGE OF [media] ONLY
    const audioTrackURL = dichotic ? `${mediaPathDichotic}${media.replace(/-/g,'-')}` : `${mediaPathStereo}${mediaB.replace(/-/g,'-')}`
    setAudioTrackURL(audioTrackURL)
    setAudioTrack(new Audio(audioTrackURL))
    // console.log('media change')
  },[dichotic, media, mediaB, mediaPathDichotic, mediaPathStereo]) // ON CHANGE OF [media] ONLY

  return {
    className,
    loopcount,
    maxloops,
    audioTrack,
    setAudioTrack,
    audioTrackURL,
    setAudioTrackURL,
    mediaReady,
    setMediaReady,
    looped,
    setLooped,
    startPlayer,
    stopPlayer,
    playing,
    setPlaying,
    iOS,
    playerRef,
    buttonRef,
    media,
    mediaB,
  }
}