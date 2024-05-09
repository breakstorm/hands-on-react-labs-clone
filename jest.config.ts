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
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '^.+\\.svg$': 'jest-svg-transformer',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    roots: ['<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// 2번의  변형
// export default {
//     preset: 'ts-jest',
//     testEnvironment: 'jest-environment-jsdom',
//     moduleNameMapper: {
//         '@/(.*)': '<rootDir>/src/$1',
//         '^.+\\.svg$': 'jest-svg-transformer',
//         '\\.(css|less|scss)$': 'identity-obj-proxy',
//     },
//     // A list of paths to directories that Jest should use to search for files in
//     roots: ['<rootDir>'],
//     // A list of paths to modules that run some code to configure or set up the testing framework before each test
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// }