import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../mediaQueries.css';
import EmilyAvi from '../assets/image-emily.jpg'
import ThomasAvi from '../assets/image-thomas.jpg'
import JennieAvi from '../assets/image-jennie.jpg'
import ConeImg from '../assets/desktop/image-gallery-cone.jpg'
import MilkImg from '../assets/desktop/image-gallery-milkbottles.jpg'
import OrangeImg from '../assets/desktop/image-gallery-orange.jpg'
import SugarImg from '../assets/desktop/image-gallery-sugarcubes.jpg'
import ConeMobileImg from '../assets/mobile/image-gallery-cone.jpg'
import MilkMobileImg from '../assets/mobile/image-gallery-milkbottles.jpg'
import OrangeMobileImg from '../assets/mobile/image-gallery-orange.jpg'
import SugarMobileImg from '../assets/mobile/image-gallery-sugar-cubes.jpg'





const MainPage = () => {
  return (
    <main>
      <Navbar />

      <section className="main-image">
        <div className='main-container'>
        <h1>We Are Creatives</h1>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            stroke-width="6"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
        </div>

      </section>

      <section className="main-grid">
        <div className="col-one-row-one">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <div className="learn-more">
            <a href="/">Learn More</a>
            <span className="accent-one accent"></span>
          </div>
        </div>
        <div className="col-one-row-two"></div>
        <div className="col-two-row-one"></div>
        <div className="col-two-row-two">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="learn-more">
            <a href="/">Learn More</a>
            <span className="accent-two accent"></span>
          </div>
        </div>
        <div className="col-three-row-one">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="col-three-row-two">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>

      <section className="main-grid-mobile">
        <div className="col-one-row-one-mobile "></div>
        <div className="col-one-row-two-mobile ">
        <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <div className="learn-more ">
            <a href="/">Learn More</a>
            <span className="accent-one accent"></span>
          </div>
        </div>
        <div className="col-two-row-one-mobile "></div>
        <div className="col-two-row-two-mobile ">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="learn-more">
            <a href="/">Learn More</a>
            <span className="accent-two accent"></span>
          </div>
        </div>
        <div className="col-three-row-one-mobile ">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="col-three-row-two-mobile ">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>

      <section className="client-testi">
        <h4>Client Testimonials</h4>

        <div className="clients">
          <div className="client-one cards">
            <img src={EmilyAvi} alt="" />

            <p className="testimonial-para">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <p className="client-name">Emily R.</p>
            <span className="client-occu">Marketing Director</span>
          </div>

          <div className="client-two cards">
            <img src={ThomasAvi} alt="" />

            <p className="testimonial-para">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>

            <p className="client-name">Thomas S.</p>
            <span className="client-occu">Chief Operating Officer</span>
          </div>

          <div className="client-three cards">
            <img src={JennieAvi} alt="" />

            <p className="testimonial-para">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <p className="client-name">Jennie F.</p>
            <span className="client-occu">Business Owner</span>
          </div>
        </div>
      </section>

      <section className="gallery">
        <img className='desktop-img' src={ConeImg}/>
        <img className='desktop-img' src={MilkImg}/>
        <img className='desktop-img' src={OrangeImg}/>
        <img className='desktop-img' src={SugarImg}/>


        <div className="mobile-img-r1">
        <img className='mobile-img' src={ConeMobileImg}/>
        <img className='mobile-img' src={MilkMobileImg}/>
        </div>
        <div className="mobile-img-r2">
        <img className='mobile-img' src={OrangeMobileImg}/>
        <img className='mobile-img' src={SugarMobileImg}/>
        </div>




      </section>

      <Footer/>
    </main>
  );
}

export default MainPage