import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <Contact 
          key={id} 
          id={id} 
          name={name} 
          number={number} 
          onDelete={onDeleteContact} 
        />
      ))}
    </ul>
  );
};

export default ContactList;