import Slider from "react-slick";

function HeroSlider() {



 const videos = [
  "https://videos.pexels.com/video-files/5473806/5473806-sd_960_506_25fps.mp4",
  "https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4",
  "https://videos.pexels.com/video-files/1536315/1536315-sd_640_360_30fps.mp4",
  "https://videos.pexels.com/video-files/5584722/5584722-sd_640_360_30fps.mp4",
];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="px-2 overflow-hidden">
                <video
                className="w-full h-32 md:h-40 lg:h-60 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                autoPlay
                loop
                muted
                style={{ minWidth:"70%", maxWidth: "100%", objectFit: "cover" }}
              >
                <source src={video} type="video/mp4" />
              </video>

              </div>
            ))}
          </Slider>

    </div>
  );
}

export default HeroSlider;
