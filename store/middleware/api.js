const getCall = async (baseUrl, action, dispatch) => {
  const { url, onSuccess, onStart, onError } = action.payload;
  try {
    dispatch({ type: onStart });
    const reponse = await fetch(`${baseUrl}/${url}`);
    const data = await reponse.json();
    dispatch({ type: onSuccess, payload: data });
    return data;
  } catch (e) {
    dispatch({ type: onError, payload: e.message });
  }
};

export const apiMiddleware = (store) => (next) => (action) => {
  const { dispatch } = store;
  const BASE_URL = "https://fakestoreapi.com";
  if (action.type === "api/makeCall") {
    next(action);
    getCall(BASE_URL, action, dispatch);
  } else {
    next(action);
  }
};

// api action creator
export const fetchData = (payload) => ({ type: "api/makeCall", payload })