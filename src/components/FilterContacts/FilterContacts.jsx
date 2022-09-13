import React from "react";
import {Filter, FilterLabel} from "components/FilterContacts/FilterContacts.styled";

const FilterContacts = ({ value, onChange }) => (
  <Filter>
    <FilterLabel>
      Filter
      <input type="text" value={value} onChange={onChange} />
    </FilterLabel>
  </Filter>
);

export default FilterContacts;

