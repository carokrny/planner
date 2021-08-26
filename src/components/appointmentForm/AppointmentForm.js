import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        required
        placeholder="Appointment Title" />
      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        min={getTodayString()}
        required />
      <label htmlFor="time">Time</label>
      <input
        id="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        type="time"
        required />
      <label htmlFor="contact">Contact</label>
      <ContactPicker
        id="contact" 
        name={contact}
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)} />
      <input
        type="submit"
        value="Add Appointment" />
    </form>
  );
};


      