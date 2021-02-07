/* eslint-disable @typescript-eslint/no-unused-vars */

import * as t from "io-ts";
import { taskEither, fromEither } from "fp-ts/lib/TaskEither";
import { Either } from "fp-ts/lib/Either";
const Address = t.interface({
  street: t.string,
  zipCode: t.string
});
type Address = t.TypeOf<typeof Address>;
/**
 * type Address = {
  street: string;
  zipCode: string;
}
 */

const User = t.interface({
  name: t.string,
  email: t.string,
  address: Address
});
type User = t.TypeOf<typeof User>;

const input = {
  name: "Mario",
  email: "mario@gmail.com",
  address: { street: "oxford street", zipCode: "12345" }
};

const errorOrUser: Either<t.Errors, User> = User.decode(input);

const sendEmail = () => taskEither.of("email sent");

fromEither(
  User.decode(input) // Either<t.Errors, User>
) // TaskEither<t.Errors, User>
  .map((user) => user.email) // TaskEither<t.Errors, string>
  .chain((email) => sendEmail) // TaskEither<t.Errors, string>
  .mapLeft((e) => /* do something */ "failed") // TaskEither<string, string>
  .map((str) => str.length) // TaskEither<string, number>
  .run();
