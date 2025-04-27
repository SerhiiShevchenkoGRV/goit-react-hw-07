import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import clsx from "clsx";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={clsx(s.contactList)}>
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
}
