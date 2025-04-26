import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import clsx from "clsx";
import s from "./SearchBox.module.css";

export default function SearchBox() {
  const nameFilter = useSelector((state) => {
    return state.filters.name;
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={clsx(s.srchInpt)}
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}
