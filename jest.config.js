module.exports = {
    "collectCoverage": true,
    "collectCoverageFrom": [
        "**/*.{ts,tsx}",
        "!**/node_modules/**"
    ],
    "coverageDirectory": "./coverage/",
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
}