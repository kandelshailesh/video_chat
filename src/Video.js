import React,{useRef,useState} from 'react';
import './Video.css';
import Video_Footer from './Video_Footer';
import Video_Sidebar from './Video_Sidebar';


const Video = () => {
  const video_ref= useRef(null);
const [playing, setplaying] = useState(false)
const videoPress = () =>
{
    if(playing)
    {
        video_ref.current.pause();
        setplaying(false);
    }
    else
    {
        video_ref.current.play();
        setplaying(true);
    }
}
  return (
    <div className="video">

      <video onClick={videoPress} ref={video_ref} className="video__player"  loop src="/mercy-education.mp4" alt="hello "></video>
     <Video_Sidebar></Video_Sidebar>
     <Video_Footer></Video_Footer>
     
    </div>
  )
}

export default Video
