export const func = (store) => (next) => (action) => {
  const { dispatch, getState } = store;
  if (typeof action === "function") {
    action(dispatch, getState);
  } else {
    next(action);
  }
};
