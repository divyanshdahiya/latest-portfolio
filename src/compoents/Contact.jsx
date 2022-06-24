import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div>
        <div className="contact-heading">
          <h2 className="font-style">Contact Me</h2>
          <p className="font-style">I'd love to hear your thoughts !!</p>
        </div>
        <div>
          <div className="contact-heading2">
            <p>Divyansh Dahiya</p>
            <p>New Delhi, India</p>
            <a href={`mailto: dahiya.divyansh1@gmail.com`}>
              <p>Dahiya.Divyansh1@gmail.com</p>
            </a>
          </div>
          <a
            className="contact-resume"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Resume</p>
          </a>
          <div className="contact-links">
            <div className="contact-link">
              <a
                href={`https://www.linkedin.com/in/divyanshdahiya`}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="contact-link">
              <a
                href={`https://github.com/divyanshdahiya`}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          onClick={() => window.scroll(0, 0)}
          className="contact-image-dekstop"
        >
          <picture>
            <source
              srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
              type="image/webp"
            />
            <source srcSet="./images/rocket.png" type="image/png" />
            <img
              className="contact-image"
              loading="lazy"
              alt="red rocket flying"
            />
          </picture>
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required></input>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required></input>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="25"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div onClick={() => window.scroll(0, 0)} className="contact-image-mobile">
        <picture>
          <source
            srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
            type="image/webp"
          />
          <source
            srcSet="./images/rocket.png"
            sizes="(min-width: 768px) 50vw, 100vw"
            type="image/png"
          />
          <img
            className="contact-image"
            loading="lazy"
            alt="red rocket flying"
          />
        </picture>
      </div>
    </div>
  );
}

export default Contact;
