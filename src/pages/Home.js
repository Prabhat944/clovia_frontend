// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return <div>
     <section className="first-section">
        <img
          src="https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
          alt="Full-Screen Background"
          className="full-screen-image"
        />
      </section>

      {/* Second Section: 3x3 Product Cards */}
      <section className="second-section">
        <div className="product-cards">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          <div className="product-card">Product 4</div>
          <div className="product-card">Product 5</div>
          <div className="product-card">Product 6</div>
          <div className="product-card">Product 7</div>
          <div className="product-card">Product 8</div>
          <div className="product-card">Product 9</div>
        </div>
      </section>

      {/* Third Section: 10 People Message Cards */}
      <section className="third-section">
        <div className="message-cards">
          {Array.from({ length: 10 }, (_, index) => (
            <div className="message-card" key={index}>
              <h3>User {index + 1}</h3>
              <p>Some message content here.</p>
            </div>
          ))}
        </div>
      </section>
  </div>;
}

export default Home;
