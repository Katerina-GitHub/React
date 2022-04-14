export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (e) {
    console.error("error catched >>", e);
    // api.call(e)
  }
};
