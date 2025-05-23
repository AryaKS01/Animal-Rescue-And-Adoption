import { useState } from "react";
import { Link } from "react-router-dom";
import ContactUsForm from "../components/ContactUsForm";
import { toast } from "react-toastify";
import Alert from "../components/UI/Alert";

function ContactUs() {
  const [errors, setErrors] = useState();

  const openMailHandler = (contactMailData) => {
    try {
      window.location.href = `mailto:AdoPet2025@gmail.com?subject=${contactMailData.subject}&body=I am ${contactMailData.username}, ${contactMailData.body}`;
      console.log(contactMailData);
    } catch (err) {
      toast.error(err[0]);
      setErrors(err || {});
      console.error(err);
    }
  };

  return (
    <>
      {/* inner banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5" data-aos="fade-up">
          <div className="container pt-4 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">
              Contact Us
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="..">Home</Link>
              </li>
              <li className="active">
                <i className="fas fa-angle-right mx-2" />
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path fillOpacity={1}>
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                           M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"
              />
            </path>
          </svg>
        </div>
      </section>
      {/* //inner banner */}
      {/* contact */}
      <div className="w3l-contact-info pt-5" id="contact">
        <div className="container py-md-5 py-4">
          <div className="position-relative">
            <h3 className="title-style text-center mb-sm-5 mb-4">Contact Us</h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="align-self pt-4">
            <div className="contact-infos">
              <div className="single-contact-infos" data-aos="fade-down">
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt color-1" />
                </div>
                <div className="text-box">
                  <h3 className="mb-3">Address info</h3>
                  <p>10001, 5th Avenue, Kolkata, West Bengal, India</p>
                </div>
              </div>
              <div className="single-contact-infos" data-aos="fade-down">
                <div className="icon-box">
                  <i className="fas fa-clock color-2" />
                </div>
                <div className="text-box">
                  <h3 className="mb-3">Opening hours</h3>
                  <p> Monday - Friday : 9am - 6pm</p>
                  <p> Saturday : 10am - 4pm</p>
                </div>
              </div>
              <div className="single-contact-infos" data-aos="fade-down">
                <div className="icon-box">
                  <i className="fas fa-envelope-open-text color-3" />
                </div>
                <div className="text-box">
                  <h3 className="mb-3">Contact info</h3>
                  <p>
                    <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a>
                  </p>
                  <p>
                    {" "}
                    <a href="mailto:info@support.com">info@support.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-md-5">
            <div
              className="col-lg-6 map order-lg-1 order-2"
              data-aos="fade-right"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.254029528622!2d88.43120307507763!3d22.56960042949383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ac3aff1117%3A0xfc347e3347be6ac3!2sGP%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1720023738392!5m2!1sen!2sin"
                title="our-location"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              className="col-lg-6 form-inner-cont order-lg-2 order-1 mb-lg-0 mb-5 ps-lg-4"
              data-aos="fade-left"
            >
              {errors && (
                <Alert className="alert-danger">
                  <ul>
                    {Object.values(errors[0]).map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              <ContactUsForm onSubmit={openMailHandler} />
            </div>
          </div>
        </div>
      </div>
      {/* //contact */}
    </>
  );
}

export default ContactUs;
