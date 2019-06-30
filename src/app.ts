/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { join } from 'path';
import { Worker } from 'worker_threads';

const log = console;

function main(): void {

  const worker = new Worker(join(__dirname, 'workers', 'test.js'), { workerData: 'test data' });

  worker.on('message', (msg) => {
    log.info(msg);
  });

  worker.on('error', (err) => {
    log.error(err);
  });

  worker.on('exit', (code) => {

    if (code !== 0) {

      log.error(`Worker stopped with exit code ${code}.`);

    } else {

      log.info('Worker exited.');

    }

  });

}

main();
