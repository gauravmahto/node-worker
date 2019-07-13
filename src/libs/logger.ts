/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { createLogger, format, transports, Logger, LoggerOptions } from 'winston';
const { combine, colorize, timestamp, label, printf, prettyPrint } = format;

export function createAppLogger(logLabel: string): Logger {

  const options = getAppLoggerOptions(logLabel);
  options.defaultMeta = { service: logLabel };

  const logger = createLogger(options);

  addDevLogger(logger, options);

  return logger;

}

function getAppLoggerOptions(logLabel = 'default'): LoggerOptions {

  return {
    format: combine(
      label({ label: logLabel }),
      timestamp(),
      colorize(),
      prettyPrint(),
      printf(({ level, message, label: cLabel, timestamp: cTimestamp }) => {
        return `${cTimestamp} ${process.pid} [${cLabel}] ${level}: ${message}`;
      })
    ),
    level: 'silly'
  };

}

function addDevLogger(logger: Logger, options: LoggerOptions) {

  if ('production' !== process.env.NODE_ENV) {

    logger.add(new transports.Console(options));

  }

}
