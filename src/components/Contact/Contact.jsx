const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className="ContactItem">
      <span>{name}: {number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;