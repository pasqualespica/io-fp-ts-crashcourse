import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";
import { toError } from "fp-ts/lib/Either";

// Am async computation that can fail
console.log("03 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fp-ts/lib/TaskEither");

const fetchOk = async () => "this is the fetched value";
const fetchKo = async () => {
  throw new Error("fetch failed");
};

export const teSuccess: TaskEither<Error, string> = tryCatch(
  () => fetchOk(),
  toError
);
export const teFailure: TaskEither<Error, string> = tryCatch(
  () => fetchKo(),
  toError
);

teSuccess.run().then((errorOrValue) => {
  if (errorOrValue.isRight()) {
    const value: string = errorOrValue.value;
    console.log(`teSuccess fetched "${value}"`);
  } else {
    const error: Error = errorOrValue.value;
    console.log(`teSuccess failed: ${error.message}`);
  }
});

teFailure.run().then((errorOrValue) => {
  if (errorOrValue.isRight()) {
    const value: string = errorOrValue.value;
    console.log(`teFailure fetched "${value}"`);
  } else {
    const error: Error = errorOrValue.value;
    console.log(`teFailure failed: ${error.message}`);
  }
});
