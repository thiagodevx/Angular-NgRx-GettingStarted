import { UserState } from './user.state';

export const UserReducer = (state: UserState, action): UserState => {
  switch (action.type) {
    case 'setMaskUserName':
      return { ...state, maskUserName: action.payload };
    default:
      return state;
  }
};
