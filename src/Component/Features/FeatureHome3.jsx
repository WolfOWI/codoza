function FeatureHome3() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="feature-item">
              <img src="assets/images/home3/f1.png" alt="" />
              <h4>Our Approach to Teaching</h4>
              <p>
                We focus on hands-on learning, ensuring that students understand coding concepts
                through interactive projects and challenges.
              </p>
              <a href="/curriculum" className="bisylms-btn-3">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="feature-item">
              <img src="assets/images/home3/f2.png" alt="" />
              <h4>Why Choose Us?</h4>
              <p>
                We focus on personalized learning, small class sizes, and age-appropriate content,
                ensuring every student receives individual attention.
              </p>
              <a href="/contact" className="bisylms-btn-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureHome3;
