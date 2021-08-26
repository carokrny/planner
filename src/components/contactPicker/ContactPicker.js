import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select 
      name="contact" 
      value={name} 
      onChange={onChange}>
      <option value="">Select a contact from your contacts</option>
      {
        contacts.map(contact => {
          return (<option value={contact.name}>{contact.name}</option>);
        })
      }
    </select>
  );
};
