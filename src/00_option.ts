import { Option, some, none } from "fp-ts/lib/Option";

// A value may be present or not

console.log("00 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fp-ts/lib/Option");

// ⛔ bad: using optional parameter, values can be undefined
type User_bad = {
  name: string;
  email?: string;
};

// ✅ good: prefer Option
type User = {
  name: string;
  email: Option<string>;
};

const user1: User = {
  name: "Mario",
  email: none,
};

export const user2: User = {
  name: "Luigi",
  email: some("luigi@mariobros.com"),
};

[user1, user2].forEach((u) => {
  if (u.email.isSome()) console.log(`${u.name} has email ${u.email.value}`);
  else console.log(`${u.name} has no email`);
});
