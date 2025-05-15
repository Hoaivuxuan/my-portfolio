module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(pdf|jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
