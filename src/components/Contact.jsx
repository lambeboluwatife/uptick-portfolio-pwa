import { faAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="heading">Contact</h1>
        <div className="grid">
          <div className="contact-details">
            <h4>
              {" "}
              I am always ready to serve my clients; <br /> call or reach out
              today for your website.
            </h4>
            <div className="contact-infos">
              <div className="contact-info">
                <FontAwesomeIcon className="fa-3x icon" icon={faAddressCard} />
                <div>
                  <h4>LAMBE BOLUWATIFE DANIEL</h4>
                  <h6>Lagos, Nigeria</h6>
                </div>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon className="fa-3x icon" icon={faPhone} />
                <div>
                  <h4>PHONE</h4>
                  <h6>+234 80 8364 7531</h6>
                </div>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon className="fa-3x icon" icon={faEnvelope} />
                <div>
                  <h4>EMAIL</h4>
                  <h6>boluwatifelambe@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>DROP ME A LINE</h3>
            <form action="/contact" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div className="form-group">
                <div className="input-group-prepend input-group-lg">
                  <span className="input-group-text bg-danger text-white"></span>
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group-prepend input-group-lg">
                  <span className="input-group-text bg-danger text-white"></span>
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-dark text-white"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group-prepend input-group-lg">
                  <span className="input-group-text bg-danger text-white"></span>
                  <textarea
                    className="form-control bg-dark text-white"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                name="submit"
                className="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
