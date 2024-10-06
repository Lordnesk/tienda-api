module.exports={
    preset: "ts-jest",
    testEnviroment: "node",
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testRegex: '.*\\.spec\\.ts$',
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        "<rootDir>/src/common/interfaces",
        "<rootDir>/src/dto", 
        "<rootDir>/src/schemas", 
    ],
}