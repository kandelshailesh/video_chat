import React from 'react';
import MusicIcon from  '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const Video_Footer = () => {
  return (

      <div className="video__footer" >
<div className ="video__footertext">
    <h5>@Shailesh Kandel</h5>
    <p>
       What's up Guys
    </p>
    <div className="footer__ticker">
        <div className="footer_icon_div">
    <MusicIcon className="footer__icon" fontSize="inherit"></MusicIcon>
    </div>
    <Ticker className="ticker"  mode="smooth">
        {({index})=>(
            <>
            <p>Hello how r u</p>
            </>
        )

        }
    </Ticker>
    
</div>
</div>
<div className="spinning_div">
<img  className= "footer_img" src="https://www.tiktok.com/api/img/?itemId=6854800457374633221&location=0"></img>
</div>

</div>

  )
}

export default Video_Footer
