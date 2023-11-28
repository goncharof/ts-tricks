// original from https://dev.to/svehla/typescript-how-to-deep-merge-170c

interface A { key1: { a: { b: 'c' } }, key2: undefined }
interface B { key1: { a: Record<string, never> }, key3: string }

// const fn = (c: DeepMergeTwoTypes <A, B>) => c
