import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const numberFieldId = useId();

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .matches(
                /^\d{3}-\d{2}-\d{2}$/,
                'Phone number is not valid. Format should be 123-45-67',
            )
            .required('Required'),
    });

    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.form}>
                <div className={css.fieldWrapp}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field className={css.field} type="text" name="name" />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.fieldWrapp}>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field className={css.field} type="tel" name="number" />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>

                <button className={css.btnContactForm} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;