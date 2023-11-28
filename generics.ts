interface GenericIdentityFn<Type> {
  (arg: Type): Type
}

function identity<Type>(arg: Type): Type {
  return arg
}

const myIdentity: GenericIdentityFn<number> = identity

console.warn(myIdentity(123))

class GenericNumber<NumType> {
  zeroValue?: NumType
  add?: (x: NumType, y: NumType) => NumType
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

const stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function (x, y) {
  return x + y
}

console.warn(stringNumeric.add(stringNumeric.zeroValue, 'test'))

// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints to be continued

// original file: https://dev.to/svehla/typescript-generics-stop-writing-tests-avoid-runtime-errors-pt2-2k62

const unwrapKey = <T>(arg: { key: T }) => arg.key
