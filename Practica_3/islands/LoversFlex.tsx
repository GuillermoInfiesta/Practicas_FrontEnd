import { LoverCard } from "./LoverCard.tsx";
import { FunctionComponent } from "preact";
import { Lover } from "../Types.ts";
import { useState } from "preact/hooks";
import { Signal } from "@preact/signals";
import { filterAge, filterHobbies, filterName, filterSex } from "../Signals.ts";

export const LoversFlex: FunctionComponent<{ lovers: Lover[] }> = (props) => {
  const filteredLovers = props.lovers.filter((lov) => {
    if (
      filterName.value !== "" &&
      lov.name.indexOf(filterName.value) === -1
    ) return false;

    if (
      filterSex.value !== "any" &&
      lov.sex.toLowerCase() !== filterSex.value
    ) return false;

    return true;
  });

  /*
  const validateLover = (lover: Lover) => {
    if (
      props.filters.name.value !== "" &&
      lover.name.indexOf(props.filters.name.value) === -1
    ) {
      return false;
    }
    if (
      props.filters.age.value !== 0 && lover.age !== props.filters.age.value
    ) {
      return false;
    }
    if (
      props.filters.sex.value !== "Any" && lover.sex !== props.filters.sex.value
    ) {
      return false;
    }
    if (props.filters.hobbies.value.length !== 0) {
        return false;
      }
    return true;
  };*/

  return (
    <div class="lovers-flex">
      {filteredLovers.length !== 0 &&
          filteredLovers.map((lov) => (
            <LoverCard
              lover={lov}
            />
          )) || <h4>If you weren´t so picky you wouldn´t be here...</h4>}
    </div>
  );
};
