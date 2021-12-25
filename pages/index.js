import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

function index() {
  return (
    <>
      <Navbar />
      {/* section1 starts */}
      <div className="section1">
        <div className="text">
          <div className="head">
            <h1>Your Site Maker</h1>
          </div>
          <p className="para">
            Passoniate about to help businesses to grow online.
            <span>
              <p className="para2">
                I will create a professional looking website for your business.
              </p>
            </span>
          </p>
          <div className="butto">
            <span>
              <Link href="/services">
                <button className="btn">Services</button>
              </Link>
              <Link href="/contact">
                <button className="btn2">Contact me</button>
              </Link>
            </span>
          </div>
        </div>
        {/* Adding the image of section1 */}
        <div className="img">
          <Image
            className="topimg"
            src="/images/test.jpg"
            width="300"
            height="300"
          ></Image>
        </div>
      </div>
      <div className="how">
        <h2>We Value Your Business</h2>
      </div>
      <div className="para3">
        <p>
          Our aim is to provide you best services in cheap rates. I started my
          business locally and now
        </p>
        <span>
          <p>
            moving my business to the next level by offreing my services online
            from national to international.
          </p>
        </span>
      </div>
      <div className="howw">
        <h3>How It Works!</h3>
      </div>

      <div className="section2">
        <div className="secicon">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/research.png"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2>Research & Analysis</h2>
            </span>
            <span className="pre">
              <p>
                First I do deep research on my project about audience
                competition etc. So that i will come out with an good idea.
              </p>
            </span>
          </div>
        </div>
        <div className="secicon">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/design.png"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2>Designing</h2>
            </span>
            <span className="pre">
              <p>
                Now it's time to start creative worl. I will deliver you a
                design and do cosider changes if you have already design idea
                then I create like that.
              </p>
            </span>
          </div>
        </div>
        <div className="secicon">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/development.png"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2>Development</h2>
            </span>
            <span className="pre">
              <p>
                It's time to convert your ideas into reality. Uploading content,
                making website responsive adding layouts, SEO etc.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="seecicon">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/webtest.png"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2>Testing Phase</h2>
            </span>
            <span className="pree">
              <p>
                Website links pages are working also the site is responsive for
                different devices or not etc.
              </p>
            </span>
          </div>
        </div>
        <div className="seecicon">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/liveweb.png"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2>Putting Live</h2>
            </span>
            <span className="pree">
              <p>
                Here I will put your website live on the server. So that it will
                be visible to the worldwide.
              </p>
            </span>
          </div>
        </div>
        <div className="seecicon">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/deliver.png"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2>Delivery</h2>
            </span>
            <span className="pree">
              <p>
                Hoorey! Now it's time to deliver your website when you are 100%
                satisfied to my work.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="choose">
        <div className="cho">
          <h3>Why Choose Me?</h3>
        </div>
      </div>
      <div className="cho_icon">
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/responsive.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Fast/Responsive</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/low.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Low Cost</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/support.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>24/7 Support</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/revision.png"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Revision</h4>
          </span>
        </div>
      </div>
      <div className="abt">
      <Link href="/about">
      <button className="abt_me">About Me</button>
              </Link>
        
      </div>
    </>
  );
}

export default index;
