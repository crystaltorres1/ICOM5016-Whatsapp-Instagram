import React from "react";
import Contact from "./Contact";


function ContactList(props) {
  return (
    <div>
      {props.contacts.map(c => <Contact key={c.id} id={c.id} name={c.name} city={c.city} username={c.username} />)}
     </div> 
  ); 
} 
export default ContactList;