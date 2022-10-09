import { Formik } from 'formik';
import { FormStyles, Label, SubmitBtn } from './Form.styled';

import PropTypes from 'prop-types';

export const Form = ({ handleSubmit }) => {
    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
                <FormStyles>
                    <Label display='block'>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Label>
                    {/* <br /> */}
                    <Label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={values.number}
                            onChange={handleChange}
                        />
                    </Label>
                    {/* <br /> */}
                    <SubmitBtn type="submit">Add contact</SubmitBtn>
                </FormStyles>
            )}
        </Formik>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};