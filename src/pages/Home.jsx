import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import heroImage from "../assets/hero-img.png";
// import heroImage from "../assets/hr-img.png";
import aboutImg from "../assets/abt-left.png";
import aboutImg2 from "../assets/abt-right.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // If everything is valid
    setStatus("success");

    // Here you can send the form data to your API or backend
    console.log({ name, email, message });

    // Optional: reset form after success
    setName("");
    setEmail("");
    setMessage("");

    // Hide success message after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  // fetch("https://yourdomain.co.za/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, message }),
  // })
  //   .then((res) => {
  //     if (!res.ok) throw new Error("Failed");
  //     setStatus("success");
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //     setTimeout(() => setStatus(""), 3000);
  //   })
  //   .catch(() => setStatus("error"));

  useEffect(() => {
    if (location.pathname === "/about") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (location.pathname === "/contact") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.pathname]);
  return (
    <section className="home-container">
      <header className="container" id="home">
        <div className="hero-content">
          <h1>Discover the Delicious Side of Vegan</h1>
          <p>
            Transform your kitchen into a plant-powered paradise with our
            collection of mouth-watering vegan recipes that prove healthy eating
            never tasted so good.
          </p>
          <Link to="/about">
            <button className="global-btn">Learn More</button>
          </Link>
        </div>
        <div className="hero-img">
          <img src={heroImage} alt="Hero Image" className="test" />
        </div>
      </header>

      <main className="container" id="about">
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
          <div className="abt-content abt-content-reverse">
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

      <div className="container contact-us" id="contact">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question, special
          request, or just want to say hi, our team is here to help.
        </p>

        <form
          onSubmit={handleSubmit}
          action="mailto:customercare@adlifesoy.co.za"
        >
          <div className="form-content">
            <div className="form-control">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label>Message</label>
              <textarea
                placeholder="Tell us how we can help"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="global-btn ctc-btn" type="submit">
              Send message
            </button>

            {/* Feedback messages */}
            {status === "error" && (
              <p style={{ color: "red" }} className="form-check">
                Please fill all fields correctly.
              </p>
            )}
            {status === "success" && (
              <p style={{ color: "green" }} className="form-check">
                Message sent successfully!
              </p>
            )}
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
