import { UserState } from './user.state';

const initialState: UserState = {
  maskUserName: false
};

export const UserReducer = (state: UserState = initialState, action): UserState => {
  switch (action.type) {
    case 'setMaskUserName':
      return { ...state, maskUserName: action.payload };
    default:
      return state;
  }
};
