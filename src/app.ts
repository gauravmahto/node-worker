/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import './global';

import { join } from 'path';
import { isMainThread, Worker } from 'worker_threads';

import { createAppLogger } from 'libs/logger';

const log = createAppLogger('app');

function main(): void {

  const worker = new Worker(join(__dirname, 'workers', 'do-task.js'), { workerData: 'test data' });

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

if (isMainThread) {

  main();

}
