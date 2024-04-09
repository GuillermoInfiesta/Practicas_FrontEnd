import { FunctionComponent } from "preact";
import { SearchFiltersProps } from "../Types.ts";

export const SearchFilters: FunctionComponent<SearchFiltersProps> = (props) => {
  /*<input
    type="number"
    min={18}
    onInput={(e) => props.age.value = e.currentTarget.value}
  >
    Age
  </input>*/

  return (
    <div class="search-filters">
      <div class="flex flex-col">
        <label>Name</label>
        <input
          id="name-input"
          type="text"
          onInput={(e) => props.name.value = e.currentTarget.value}
        >
          Name
        </input>
      </div>
      <div class="flex flex-col">
        <label>Gender</label>
        <select
          onChange={(e) => {
            props.sex.value = e.currentTarget.value;
          }}
        >
          <option>any</option>
          <option>female</option>
          <option>male</option>
        </select>
      </div>
      <div>
        <legend>Hobbies</legend>
        <input type="checkbox">hi</input>
      </div>
    </div>
  );
};
