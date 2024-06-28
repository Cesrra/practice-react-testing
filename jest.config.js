const nextJest = require("next/jest")

const createJestConfig = nextJest({
    dir: "./",
})

/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
}

module.exports = createJestConfig(config)

// import type { Config } from '@jest/types';

// const config: Config.InitialOptions = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     transform: {
//         '^.+\\.(ts|tsx)$': 'babel-jest'
//     },
//     moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/$1',
//     },
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
// };

// export default config;
