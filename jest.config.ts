import type { Config } from "@jest/types"
const baseDir = '<rootDir>/src/app/passWordChecker'
const baseTestDir = '<rootDir>/src/specs/passWordChecker'

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [`${baseDir}/**/*.ts`],
    testMatch: [`${baseTestDir}/**/*.ts`]
}

export default config
