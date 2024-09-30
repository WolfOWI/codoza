function ContactForm() {
  return (
    <form action="#" method="post" className="row">
      <div className="col-md-6">
        <input type="text" name="f-name" placeholder="First & Last Name" required />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" placeholder="Email Address" required />
      </div>
      <div className="col-md-6">
        <input type="number" name="phone" placeholder="Phone Number" required />
      </div>
      <div className="col-md-6">
        <input type="number" name="age" placeholder="Child's Age" required />
      </div>

      <div className="col-md-12">
        <textarea name="message" placeholder="How can we help?" required></textarea>
      </div>
      <div className="col-md-6">
        <div className="condition-check">
          <select
            name="inquiry-type"
            required
            style={{
              padding: "8px",
              paddingLeft: "32px",
              paddingRight: "32px",
              border: "none",
              backgroundColor: "#f5f5f7",
              color: "#7e7c87",
            }}
          >
            <option value="" disabled selected>
              Select Inquiry Type
            </option>
            <option value="enroll">Interested in Enrolling</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <input type="submit" name="submit" value="Send Message" />
      </div>
    </form>
  );
}

export default ContactForm;
