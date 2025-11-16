import { environment } from "src/config";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logLevel = environment === "development" ? "debug" : "warn";

const options = {
	file: {
		level: logLevel,
		filename: "/%DATE%.log",
		dirname: "./logs",
		datePattern: "YYYY-MM-DD",
		zippedArchive: true,
		timestamp: true,
		handleExceptions: true,
		humanReadableUnhandledException: true,
		prettyPrint: true,
		json: true,
		maxSize: "20m",
		maxFiles: "14d",
	},
};

const Logger = createLogger({
	transports: [
		new transports.Console({
			level: logLevel,
			format: format.combine(
				format.errors({ stack: true }),
				format.prettyPrint(),
				format.label({ label: `🏷` }),
				format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
				format.printf(
					(info) =>
						`${info.level}: ${info.label}: ${info.timestamp}: ${info.message}`,
				),
			),
		}),
		new DailyRotateFile(options.file),
	],
	exceptionHandlers: [new DailyRotateFile(options.file)],
	exitOnError: false, // do not exit on handled exceptions
});

export default Logger;
