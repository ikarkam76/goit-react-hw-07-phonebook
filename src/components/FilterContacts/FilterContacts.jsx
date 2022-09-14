import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Filter, FilterLabel} from "components/FilterContacts/FilterContacts.styled";
import { change } from "redux/Slices/FilterSlice";

const FilterContacts = () => {
  const value = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(change(event.target.value));
  };
  return (
  <Filter>
    <FilterLabel>
      Filter
      <input type="text" value={value} onChange={handleChangeFilter} />
    </FilterLabel>
    </Filter>
  )
};

export default FilterContacts;

