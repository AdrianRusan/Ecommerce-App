// Create a contact page with a form having a name, email, and message field in react js
// The form should send an email to the admin email address

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://eoquzme3e2ogxjl.m.pipedream.net",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          pattern="^(?=0[723][2-8]\d{7})(?!.*(.)\1{2,}).{10}$"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
        />
        <button
          type="submit"
          disabled={serverState.submitting}
        >
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
