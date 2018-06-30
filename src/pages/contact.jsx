import React, { Component } from "react";
import Helmet from "react-helmet";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Contact />
        <Footer config={config} />
      </div>
    );
  }
}

export default ContactPage;
