import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css"

const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
    return (
        <div className={css.contact}>
            <div className={css.contactInfo}>
                <p className={css.contactText}>
                    <FaUser />
                    {name}
                </p>
                <p className={css.contactText}>
                    <FaPhone />
                    {number}
                </p>
            </div>
            <button
                className={css.contactDeleteButton}
                type="button"
                onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </div>
    );
};
export default Contact;