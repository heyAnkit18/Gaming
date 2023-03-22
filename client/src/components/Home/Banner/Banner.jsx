import "./Banner.scss";
import BannerImg from "../../../assets/Deadpool-png.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALE</h1>
                    <p>Huyeeeee!!! Deadpool sale is live, Now you can buy one and get one free till the month end. dont miss the trending offers.</p>
                        <div className="ctas">
                            <div className="banner-cta">Read More</div>
                            <div className="banner-cta v2">Shop now</div>
                        </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/>
            </div>
        </div>
    )
};

export default Banner;
