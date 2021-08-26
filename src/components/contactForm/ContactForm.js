import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input 
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        required
        placeholder="Conact Name" />
      <label htmlFor="phone">Phone</label>
      <input 
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        pattern="^\d{10}$|^\d{3}-\d{3}-\d{4}$"
        placeholder="XXX-XXX-XXXX" />
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="emial"
        placeholder="Contact Email" />
      <input
        type="submit"
        value="Add Contact" />
    </form>
  );
};
