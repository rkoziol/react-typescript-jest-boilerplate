module.exports = {
  coverageDirectory: "<rootDir>/test-coverage",
  globals: {
    "ts-jest": {
        "diagnostics": false,
        "tsConfig": "<rootDir>/tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  roots: ["<rootDir>/tests"],
  testMatch: ["./**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
