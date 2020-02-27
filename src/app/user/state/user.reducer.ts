export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setMaskUserName':
      return { ...state, maskUserName: action.payload };
    default:
      return state;
  }
};
