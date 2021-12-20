import React from "react";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const Filter = (props) => {
  // const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    props.filterChange(event.target.value);
    // dispatch(filterChange(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapDispatchToProps = {
  filterChange,
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
