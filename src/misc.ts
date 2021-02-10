/* eslint-disable @typescript-eslint/no-unused-vars */
import { teSuccess, teFailure } from "./03_taskEither";
import { TaskEither } from "fp-ts/lib/TaskEither";
import { errorOrValid1 } from "./01_either";
import { user2 } from "./00_option";

// map
// agisce sul valore SOME/RIGHT, non modifica il wrapper
const obfuscated = user2.email.map((email) => "*".repeat(email.length));
const stringValid = errorOrValid1.map((_) => "ok");
const teSuccessSize = teSuccess.map((value) => value.length);

// mapLeft
// agisce sul valore LEFT, non modifica il wrapper
const stringNotValid = errorOrValid1.mapLeft((msg) => new Error(msg));
const teFailureMsg = teSuccess.mapLeft((error) => error.message);

// chain
// agisce sul valore SOME/RIGHT, modifica il wrapper
const teChained = teSuccess.chain((value) => teFailure);

// fold / foldL
// collassa i valori NONE/SOME e LEFT/RIGHT in un unico valore, per estrarlo

const email = user2.email.fold("default@gmail.com", (e) => e);
const result = errorOrValid1.fold(
  (errorMsg) => "the value is not valid",
  (isValid) => "the value is valid"
);
const teFolded = teSuccess.fold(
  (err) => "the operation failed",
  (value) => "the operation succeeeded"
);

// getOrElse / getOrElseL
// simile a fold, ma utile per prendere valori di default
const email2 = user2.email.getOrElse("default@gmail.com");
const value = errorOrValid1.getOrElseL((msg) => {
  throw new Error(msg);
});
