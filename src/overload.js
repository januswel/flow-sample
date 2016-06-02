// @flow
'use strict';

declare function add (a: number, b: number): number
declare function add (a: string, b: string): string
declare function add (a: Date, b: number): Date

function add (a, b) {
    if (a instanceof Date) {
        return new Date(a.getTime() + b)
    }
    return a + b
}

export function overload () {
    console.log(add(1, 3))
    console.log(add('abc', 'def'))
    console.log(add(new Date(), 60 * 60 * 1000))

    // these will cause errors
    //console.log(add('life', 42))
    //let a:string = add(1,3)
    //let a: Date = add(60 * 60 * 1000, new Date())
    //console.log(add(new Date(), 'foo'))

    // we expect this will cause an error, but this is legal, why?
    console.log(add(60 * 60 * 1000, new Date()))
}
