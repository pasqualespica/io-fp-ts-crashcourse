# io-fp-ts-crashcourse

The following are the most used type `fp-ts` in the [IO](https://io.italia.it/) ecosystem.

- [io-fp-ts-crashcourse](#io-fp-ts-crashcourse)
  - [Option](#option)
  - [Either](#either)
  - [Task](#task)
  - [TaskEither](#taskeither)
  - [Run examples 🚀](#run-examples-)
## Option
```ts
type Option<A> = None | Some<A>
```

`Option<A>` is a container for an optional value of type A. If the value of type A is present, the `Option<A>` is an instance of `Some<A>`, containing the present value of type A. If the value is absent, the `Option<A>` is an instance of None.

An option could be looked at as a collection or foldable structure with either one or zero elements. Another way to look at Option is: it represents the effect of a possibly failing computation.

> see doc [Option](https://gcanti.github.io/fp-ts/modules/Option.ts.html)
## Either
```ts
type Either<E, A> = Left<E> | Right<A>
```

Represents a value of one of two possible types (a disjoint union).

An instance of `Either` is either an instance of `Left` or `Right`.

A common use of Either is as an alternative to Option for dealing with possible missing values. In this usage, `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention dictates that Left is used for failure and Right is used for success.

> see doc [Either](https://gcanti.github.io/fp-ts/modules/Either.ts.html)
## Task
```ts
interface Task<A> {
  (): Promise<A>
}
```
`Task<A>` represents an _asynchronous_ computation that yields a value of type A and **never fails**. If you want to represent an asynchronous computation that may fail, please see `TaskEither`.

> see doc [Task](https://gcanti.github.io/fp-ts/modules/Task.ts.html)
## TaskEither
```ts
interface TaskEither<E, A> extends Task<Either<E, A>> {}
```
`TaskEither<E, A>` represents an asynchronous computation that either yields a value of type A or fails yielding an error of type E. If you want to represent an asynchronous computation that never fails, please see `Task`.

> see doc [TaskEither](https://gcanti.github.io/fp-ts/modules/TaskEither.ts.html)
## Run examples 🚀

On your console typing : 

```
yarn start
```
> _NOTE_ : before running `yarn install`

