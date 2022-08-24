window.addEventListener("error", function onUnhandledError(e) {
  console.log(e);
});

let userParsingResult;
export const parseUser = (jsonString) => {
  try {
    userParsingResult = JSON.parse(jsonString);
  } catch (err) {
    userParsingResult = null;
  } finally {
    return userParsingResult
  }
};
