import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Lanistar",
  //     email: "lanistar@test.com",
  //   },
  // ];

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
