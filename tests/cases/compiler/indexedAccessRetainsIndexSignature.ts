type Diff<T extends string, U extends string> =
    ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T]
type Omit<U, K extends keyof U> = Pick<U, Diff<keyof U, K>>
type Omit1<U, K extends keyof U> = Pick<U, Diff<keyof U, K>>;
// is in fact an equivalent of

type Omit2<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};

type O = Omit<{ a: number, b: string }, 'a'>
const o: O = { b: '' }
