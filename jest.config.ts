// 1번 테스트
// export default {
//     testEnvironment: "jsdom",
//     transform: {
//         "^.+\\.tsx?$": "ts-jest",
//     },
//     moduleNameMapper: {
//         "^.+\\.svg$": "jest-svg-transformer",
//         "\\.(css|less|sass|scss)$": "identity-obj-proxy",
//     },
//     setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
// };

// 2번 테스트
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
}