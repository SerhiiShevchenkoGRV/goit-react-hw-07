import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import clsx from "clsx";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = {
    username: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContactId = nanoid();
    const { username, number } = values;
    dispatch(
      addContact({
        id: newContactId,
        name: username,
        number: number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={clsx(s.contactForm)}>
        <div className={clsx(s.nameCont)}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={clsx(s.nameInput)}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={clsx(s.nameError)}
          />
        </div>

        <div className={clsx(s.numberCont)}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={clsx(s.telInput)}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={clsx(s.numberError)}
          />
        </div>

        <button type="submit" className={clsx(s.submitBtn)}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
