import { Either, left, right } from "fp-ts/lib/Either";

// Represent a disjoint union
console.log("01 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fp-ts/lib/Either");

// ⛔ bad: using optional parameter, values can be undefined
function _validate_bad(value: string): string | true {
  if (value.length) return true;
  return "value cannot be empty";
}

// ✅ good: prefer Either
function validate(value: string): Either<string, true> {
  if (value.length) return right(true);
  return left("value cannot be empty");
}

export const errorOrValid1 = validate("");

if (errorOrValid1.isRight()) {
  console.log(`errorOrValid1 is valid`);
} else console.log(`errorOrValid1 is not valid: ${errorOrValid1.value}`);

export const errorOrValid2 = validate("lorem ipsum");
if (errorOrValid2.isRight()) console.log(`errorOrValid2 is valid`);
else console.log(`errorOrValid2 is not valid: ${errorOrValid2.value}`);
