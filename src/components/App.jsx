import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { selectError, selectLoading } from "../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="appCont">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {(loading && <h1>Loading...</h1>) ||
        (error && <h1>{error}</h1>) ||
        (!loading && !error && <ContactList />)}
    </div>
  );
}
