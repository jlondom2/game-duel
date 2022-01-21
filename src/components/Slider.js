import Slide from "react-slick";

export default function Slider() {
  var settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slide {...settings}>
      <div className="post-preview picture big gaming-news">
          <div className="post-preview-img-wrap">
               
                <figure className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready" style={{backgroundImage: 'url("img/slide1.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                    <img src="img/slide1.jpeg" alt="post-17" style={{display: 'none'}} />
                </figure>
               
                <div className="post-preview-img-overlay" />
               
                <div className="post-preview-overlay">
                   
                    <span className="tag-ornament">Gaming News</span>
                    
                    <p className="post-preview-title">Jazzstar anounced that the GTE5 for PC is delayed</p>
                    
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dutor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud citation loso laboris tempora aliquip.</p>
                </div>
               
            </div>
      </div>
      <div className="post-preview picture big gaming-news">
          <div className="post-preview-img-wrap">
               
                <figure className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready" style={{backgroundImage: 'url("img/slide1.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                    <img src="img/slide1.jpeg" alt="post-17" style={{display: 'none'}} />
                </figure>
               
                <div className="post-preview-img-overlay" />
               
                <div className="post-preview-overlay">
                   
                    <span className="tag-ornament">Gaming News</span>
                    
                    <p className="post-preview-title">Jazzstar anounced that the GTE5 for PC is delayed</p>
                    
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dutor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud citation loso laboris tempora aliquip.</p>
                </div>
               
            </div>
      </div>
      <div className="post-preview picture big gaming-news">
          <div className="post-preview-img-wrap">
               
                <figure className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready" style={{backgroundImage: 'url("img/slide1.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                    <img src="img/slide1.jpeg" alt="post-17" style={{display: 'none'}} />
                </figure>
               
                <div className="post-preview-img-overlay" />
               
                <div className="post-preview-overlay">
                   
                    <span className="tag-ornament">Gaming News</span>
                    
                    <p className="post-preview-title">Jazzstar anounced that the GTE5 for PC is delayed</p>
                    
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dutor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud citation loso laboris tempora aliquip.</p>
                </div>
               
            </div>
      </div>
      <div className="post-preview picture big gaming-news">
          <div className="post-preview-img-wrap">
               
                <figure className="post-preview-img liquid imgLiquid_bgSize imgLiquid_ready" style={{backgroundImage: 'url("img/slide1.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
                    <img src="img/slide1.jpeg" alt="post-17" style={{display: 'none'}} />
                </figure>
               
                <div className="post-preview-img-overlay" />
               
                <div className="post-preview-overlay">
                   
                    <span className="tag-ornament">Gaming News</span>
                    
                    <p className="post-preview-title">Jazzstar anounced that the GTE5 for PC is delayed</p>
                    
                    <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dutor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud citation loso laboris tempora aliquip.</p>
                </div>
               
            </div>
      </div>

    
    </Slide>
  );
}

