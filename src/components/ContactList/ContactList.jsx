import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <>
      <p>Contact List</p>
      <ul>
        {contacts.map((contact) => {
          return <Contact data={contact} />;
        })}
      </ul>
    </>
  );
}
export default ContactList;
