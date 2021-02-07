import { Task } from "fp-ts/lib/Task";

// An async computation that NEVER FAILS
console.log("02 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fp-ts/lib/Task");

const delay = (ms: number) => new Promise((ok) => setTimeout(ok, ms));

const task: Task<unknown> = new Task(() => delay(100));

task.run().then((_) => console.log("task is completed"));


