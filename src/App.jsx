import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#fff', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', background: '#111' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Jaw-Dropping AI Videos That Tell Your Story</h1>
        <p style={{ fontSize: '1.25rem', color: '#ccc' }}>
          Movie Trailers • Commercials • Music Videos • 3D Product Ads • UGC + More
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button style={buttonStyle}>See My Work</button>
          <button style={buttonStyle}>Get A Quote</button>
          <button style={buttonStyle}>Watch Showreel</button>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '4rem 2rem', background: '#000' }}>
        <h2 style={sectionTitleStyle}>About the Creator</h2>
        <p>
          Hi, I’m Tajudeen Isa Babatunde, a creative AI director turning brands, songs, and stories into cinematic experiences. 
          Using Veo 3, Kling AI, and a custom workflow, I craft stunning visuals that break the scroll and captivate audiences — 
          on screens big and small.
        </p>
        <img src="about-image.jpg" alt="Creator" style={{ width: '100%', maxWidth: '400px', marginTop: '2rem' }} />
      </section>

      {/* Portfolio Section */}
      <section style={{ padding: '4rem 2rem', background: '#111' }}>
        <h2 style={sectionTitleStyle}>Portfolio</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <video src="https://cdn.coverr.co/videos/coverr-a-timelapse-of-a-cloudy-mountain-landscape-9710/1080p.mp4" controls muted style={videoStyle} />
          <video src="https://cdn.coverr.co/videos/coverr-skyline-of-a-city-at-sunset-0185/1080p.mp4" controls muted style={videoStyle} />
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '4rem 2rem', background: '#000' }}>
        <h2 style={sectionTitleStyle}>Get in Touch</h2>
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: '0 auto' }}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <select style={inputStyle}>
            <option>Project Type</option>
            <option>Trailer</option>
            <option>Music Video</option>
            <option>Product Ad</option>
            <option>UGC</option>
          </select>
          <select style={inputStyle}>
            <option>Budget Range</option>
            <option>$150 - Starter</option>
            <option>$400 - Pro</option>
            <option>$800+ - Premium</option>
          </select>
          <textarea placeholder="Message..." style={{ ...inputStyle, height: '100px' }} />
          <button type="submit" style={buttonStyle}>Let’s Create Something Epic</button>
        </form>
      </section>
    </div>
  );
}

const sectionTitleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
  textAlign: 'center'
};

const videoStyle = {
  width: '100%',
  borderRadius: '8px'
};

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: 'none'
};

const buttonStyle = {
  margin: '0.5rem',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#fff',
  color: '#000',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};
