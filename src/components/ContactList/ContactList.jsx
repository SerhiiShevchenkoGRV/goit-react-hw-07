import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className={clsx(s.contactList)}>
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
}
