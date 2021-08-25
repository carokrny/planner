import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  constructor(props) {
    super(props);
    const [contacts, setContacts] = useState([]); 
    const [appointments, setAppointments] = useState([]);
  }

  const addContact = (name, phone, email) => {
    const newContact = {
      name: name, 
      phone: phone, 
      email: email
    };
    setContacts(prev => [newContact, ...prev]);
  }

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title, 
      contact: contact, 
      date: date, 
      time: time
    };
    setAppointments(prev => [newAppointment, ...prev]);
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
              contacts={contacts}
              addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;