import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import clsx from "clsx";
import s from "./Contact.module.css";

export default function Contact({ contact }) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={clsx(s.contactCard)}>
      <div className={clsx(s.contactItems)}>
        <p className={clsx(s.userDesc)}>
          <FaUser className={clsx(s.userIcon)} />
          {name}
        </p>
        <a href={`tel:${number}`} className={clsx(s.userTel)}>
          <FaPhoneAlt className={clsx(s.telIcon)} />
          {number}
        </a>
      </div>
      <button className={clsx(s.delBtn)} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
