const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filterKeyword;
    default:
      return state;
  }
};

export const filterChange = (filterKeyword) => {
  return {
    type: "SET_FILTER",
    filterKeyword,
  };
};

export default filterReducer;
