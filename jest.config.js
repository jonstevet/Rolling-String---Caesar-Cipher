export default {
    testEnvironment: 'jest-environment-node',
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    "roots": [
        "tests"
      ],
      "testPathIgnorePatterns": [
        "/node_modules/"
      ],
      //"testFileExtensions": ["es6", "js"],
      "moduleFileExtensions": ["js", "json", "es6", "mjs"]
};