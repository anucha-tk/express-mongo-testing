import { createDefaultPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultPreset({
	//...options
});

const jestConfig: JestConfigWithTsJest = {
	...presetConfig,
	moduleNameMapper: {
		"^src/(.*)$": "<rootDir>/src/$1", // Maps @response/* to the correct source path
		"^@response/(.*)$": "<rootDir>/src/common/response/$1",

		// Maps @error/* to the correct source path (Fixes your current error)
		"^@error/(.*)$": "<rootDir>/src/common/error/$1",

		// Maps @helpers/* to the correct source path
		"^@helpers/(.*)$": "<rootDir>/src/common/helpers/$1",

		// Maps @middlewares/* to the correct source path
		"^@middlewares/(.*)$": "<rootDir>/src/common/middlewares/$1",

		// Maps @logger/* to the correct source path
		"^@logger/(.*)$": "<rootDir>/src/common/logger/$1",
	},

	// Ensure you have ts-jest set up to transform TypeScript files
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};

export default jestConfig;
