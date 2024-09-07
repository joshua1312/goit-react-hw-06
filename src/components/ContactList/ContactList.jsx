import Contact from "../Contact/Contact"
import css from './ContactList.module.css';

const ContactList = ({ contactList, onDeleteContact }) => {
    return (
        <ul className={css.contactList}>
            {contactList.map((contact) => {
                return (
                    <li className={css.item} key={contact.id}>
                        <Contact contact={contact} onDeleteContact={onDeleteContact} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactList;
