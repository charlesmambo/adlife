import React from "react";
import "./Home.css";
import heroImage from "../assets/hero-img.png";
import aboutImg from "../assets/abt-left.png";
import aboutImg2 from "../assets/abt-right.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <section className="home-container">
      <header className="container">
        <div className="hero-content">
          <h1>Discover the Delicious Side of Vegan</h1>
          <p>
            Transform your kitchen into a plant-powered paradise with our
            collection of mouth-watering vegan recipes that prove healthy eating
            never tasted so good.
          </p>
          <button className="global-btn">Learn More</button>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </header>

      <main className="container">
        <h2>About Us</h2>
        <div className="abt-wrapper">
          <div className="abt-content">
            <p>
              We believe food should be good for you, the animals, and the
              planet. Our journey began with a simple goal: to make vegan food
              that even non-vegans crave. Every dish we serve is made from
              fresh, locally sourced ingredients, and crafted with care. We’re
              more than just a food brand we’re part of a movement towards a
              kinder, healthier future.
            </p>
            <img src={aboutImg} alt="About Us" />
          </div>
          <div className="abt-content">
            <img src={aboutImg2} alt="About Us" />
            <p>
              We stand for food that fuels your body, respects life, and
              supports the planet. Our journey started with a bold idea: create
              plant-based food that anyone can love. Made with fresh, locally
              sourced ingredients, each dish reflects our passion and care.
              We’re not just redefining food we’re contributing to a healthier,
              more compassionate world.
            </p>
          </div>
        </div>
      </main>

      <div className="container contact-us">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question, special
          request, or just want to say hi, our team is here to help.
        </p>

        <form action="">
          <div className="form-content">
            <div className="form-control">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="form-control">
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="Your email address" />
            </div>
            <div className="form-control">
              <label htmlFor="">Message</label>
              <textarea
                placeholder="Tell us how we can help"
                rows="5"
              ></textarea>
            </div>
            <button className="global-btn ctc-btn" type="submit">
              Send message
            </button>
          </div>

          <div className="bs-hours">
            <h3>Business Hours</h3>
            <div className="days">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <p className="local">
              <FaLocationDot className="ctc-icon" />
              30 ironstone road Silverglen
            </p>
            <p className="local">
              <MdContactPhone className="ctc-icon" />
              +27 71 471 9214
            </p>
            <p className="local">
              <MdEmail className="ctc-icon" />
              customercare@adlifesoy.co.za
            </p>
            <div className="socials">
              <h3>Follow Us:</h3>
              <div className="social-icon">
                <span>
                  <RiInstagramFill />
                </span>
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <AiFillTikTok />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;
