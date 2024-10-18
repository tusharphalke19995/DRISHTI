import VideoPopup from "@/components/elements/VideoPopup"


export default function Video() {
    return (
        <>
           
           <section className="video-1-section">
      <div className="video-1-bg" style={{ backgroundImage: 'url(assets/images/background/video-1.jpg)' }} data-parallax='{"y": 50}'></div>
      <div className="auto-container">
        <div className="video-1-video-btn">
        <div className="video-btn">
            <div className="video-btn">
                    <VideoPopup />
            </div>
        </div>
        </div>
        <div className="text-center">
          <h2 className="color_light">Watch The Experience Before <br />You Feel It</h2>
        </div>
      </div>
    </section>

        </>
    )
}
