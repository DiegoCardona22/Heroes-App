// @scripts
import { types } from "../types/types";

// @interfaces
interface AuthState {
  logged?: boolean;
  user?: string;
}

interface AuthAction {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
}

export const authReducer = (state = {}, action: AuthAction): AuthState => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload as string,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
