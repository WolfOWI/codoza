import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnqalzd"); // Your Formspree form ID
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    phone: "",
    age: "",
    message: "",
    inquiryType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return <p>Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-md-6">
        <input
          type="text"
          name="fName"
          placeholder="First & Last Name"
          value={formData.fName}
          onChange={handleChange}
          required
          aria-label="First and Last Name"
        />
        <ValidationError prefix="First & Last Name" field="fName" errors={state.errors} />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email Address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="col-md-6">
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          aria-label="Phone Number"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className="col-md-6">
        <input
          type="number"
          name="age"
          placeholder="Child's Age"
          value={formData.age}
          onChange={handleChange}
          required
          aria-label="Child's Age"
        />
        <ValidationError prefix="Age" field="age" errors={state.errors} />
      </div>

      <div className="col-md-12">
        <textarea
          name="message"
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Message"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="col-md-6">
        <div className="condition-check">
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            aria-label="Inquiry Type"
            style={{
              padding: "8px",
              paddingLeft: "32px",
              paddingRight: "32px",
              border: "none",
              backgroundColor: "#f5f5f7",
              color: "#7e7c87",
            }}
          >
            <option value="general">General Inquiry</option>
            <option value="enroll">Interested in Enrolling</option>
          </select>
        </div>
        <ValidationError prefix="Inquiry Type" field="inquiryType" errors={state.errors} />
      </div>
      <div className="col-md-6 text-right">
        <button
          type="submit"
          disabled={state.submitting}
          aria-label="Send Message"
          style={{
            backgroundColor: "#5838fc",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20,
            border: "none",
            color: "white",
          }}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
