/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { parentPort, workerData } from 'worker_threads';

parentPort!.postMessage(`Starting work from process ${process.pid} with '${workerData}' data.`);
