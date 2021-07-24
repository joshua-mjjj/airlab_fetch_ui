import { LOADING,  SERVICE_REQUEST  } from "../actions/types";

const initialState = {
  isLoading: false,
  service_data: null
};

export default function service_request (state = initialState, action) {
  switch (action.type) {
    case LOADING: 
      return {
        ...state,
        isLoading: true,
      }
    case SERVICE_REQUEST:
      return {
         ...state,
        service_data: action.payload,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
}