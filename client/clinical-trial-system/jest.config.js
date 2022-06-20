export default {
    testEnvironment: "jsdom",
    transform:{
        "^.+\\.tsx?$":"ts-jest"
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    }
}

// export default {
//     transform: {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     moduleNameMapper: {
//   -    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js'
//   +    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
//   +    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     },
//   }
