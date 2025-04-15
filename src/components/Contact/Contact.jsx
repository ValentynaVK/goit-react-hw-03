function Contact({ data: { id, name, number } }) {
  return (
    <>
      <li>
        {id} {name} {number}
      </li>
    </>
  );
}
export default Contact;
