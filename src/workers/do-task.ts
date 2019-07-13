/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import '../global';

import { parentPort, workerData } from 'worker_threads';

import { createAppLogger } from 'libs/logger';

const log = createAppLogger('doTask');

log.info('Performing task...');

parentPort!.postMessage(`Starting work from process ${process.pid} with '${workerData}' data.`);
