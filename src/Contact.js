function Contact() {
  return (
    <>
      <header style={headerStyle}>
        <h1>Contact Us</h1>
      </header>

      <nav style={navStyle}>
        <a href="/" style={navLinkStyle}>Home</a>
        <a href="/menu" style={navLinkStyle}>Menu</a>
        <a href="/about" style={navLinkStyle}>About</a>
        <a href="/contact" style={navLinkStyle}>Contact</a>
      </nav>

      <div style={containerStyle}>
        <h2 style={{ color: '#d32f2f', textAlign: 'center' }}>Location & Contact</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.818708725027!2d-73.817991!3d40.6790198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2612d2e252f95%3A0x53b7f1c66d37722e!2sSatguru%20Sweets!5e0!3m2!1sen!2sus!4v1681513000000"
          allowFullScreen=""
          loading="lazy"
          style={iframeStyle}
          title="Restaurant Location"
        ></iframe>

        <div className="contact-details">
          <p>📍 13408 Rockaway Blvd, South Ozone Park, NY 11420</p>
          <p>📞 <a href="tel:6462200042">(646) 220-0042</a></p>
        </div>

        <div>
          <h3>🕒 Business Hours</h3>
          <p>Mon – Sat: 11:00 AM – 10:00 PM</p>
          <p>Sun: 12:00 PM – 9:00 PM</p>
        </div>

        <div>
          <h3>📱 Follow Us</h3>
          <p>
            <a href="https://facebook.com/IshpreetSingh" target="_blank" rel="noreferrer">Facebook: Ishpreet Singh</a><br />
            <a href="https://instagram.com/IshpreetSingh" target="_blank" rel="noreferrer">Instagram: @IshpreetSingh</a>
          </p>
        </div>

        <div className="contact-form" style={{ marginTop: '30px' }}>
          <h3>📧 Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required style={inputStyle} />
            <input type="email" placeholder="Your Email" required style={inputStyle} />
            <textarea rows="5" placeholder="Your Message" required style={inputStyle}></textarea>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#d32f2f',
  color: 'white',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#b71c1c',
  padding: '10px 0',
};

const navLinkStyle = {
  color: 'white',
  margin: '0 20px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const iframeStyle = {
  width: '100%',
  height: '300px',
  border: 'none',
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '6px',
};

const buttonStyle = {
  backgroundColor: '#d32f2f',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '1rem',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Contact;
