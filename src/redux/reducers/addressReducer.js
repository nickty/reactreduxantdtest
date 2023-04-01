import { ActionTypes } from "../constants/action-types";
const intialState = {
  addresses: [
    { key: 1, value: "Rangpur", country: "Bangladesh" },
    { key: 2, value: "Delhi", country: "India" },
    { key: 3, value: "Dhaka", country: "Bangladesh" },
    { key: 4, value: "Kolkata", country: "India" },
    { key: 5, value: "Kuwalalampur", country: "Malaysia" },
    { key: 6, value: "Canberra", country: "Australia" },
  ],
};

export const addressReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ADDRESSES:
      return { ...state, products: payload };
    default:
      return state;
  }
};
