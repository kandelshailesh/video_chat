import React,{useState} from 'react';
import './video_sidebar.css';
import Heart from '@material-ui/icons/Favorite';
import Comment from '@material-ui/icons/Comment';
import Share from '@material-ui/icons/Share';



const Video_Sidebar = () => {

 const [liked, setliked] = useState(false)
  return (
 <div className="video__sidebar">
       <div className="video__sidebar__option">
     <div className="sidebar_img_div">
<img  className= "sidebar_img" src="https://www.tiktok.com/api/img/?itemId=6854800457374633221&location=0"></img>
</div>
<div style={{display:'grid',placeContent:'center',backgroundColor:'rgba(255,0,0,0.8)',marginTop:-10,marginLeft:10,zIndex:20000,position:'absolute',width:15,height:15,borderRadius:"50%"}}>
<label style={{color:'white',fontSize:13,fontWeight:'bold'}}>+</label>
</div>
</div>

     <div className="video__sidebar__option">
{liked ?
<Heart color="error" onClick = {()=> setliked(false)} fontSize="large" className="video__sidebar__icon"></Heart>:<Heart fontSize="large" onClick = {()=> setliked(true)}  className="video__sidebar__icon"></Heart>
}
<p>{liked ? 123+1 :123}</p>
</div>
<div className="video__sidebar__option">
<Comment fontSize="large" className="video__sidebar__icon"></Comment>
<p>120</p>
</div>
<div className="video__sidebar__option">
<Share fontSize="large" className="video__sidebar__icon"></Share>
<p>120</p>

</div>

 </div>
  )
}

export default Video_Sidebar
