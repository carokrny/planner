import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{name: 'Tina', phone: '123-123-1234', email: 'tina@bobs.com'}, {name: 'Louise', phone:'123-1234-1235', email:'louise@bobs.com'}]); 
  const [appointments, setAppointments] = useState([
    {
      title: 'Feed cat', 
      date:'08/26/2021', 
      time:'07:00 AM', 
      contact: 'Louise'
    }, {
      title: 'Feed dog', 
      date:'08/26/2021', 
      time:'07:00 AM', 
      contact: 'Tina'
    }]);

  const addContact = (name, phone, email) => {
    setContacts([...contacts, {
      name: name, 
      phone: phone, 
      email: email
    }]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([...appointments, {
      title: title, 
      contact: contact, 
      date: date, 
      time: time
    }]);
  };

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
              contacts={contacts}
              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
