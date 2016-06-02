// @flow
'use strict';

/*
 * generic class
 * refer: http://flowtype.org/docs/functions.html#polymorphic-functions
 * */

class List<T> {
    items: Array<T>;

    constructor (x: Array<T>) {
        this.items = x.slice()
    }

    map<DstType>(f: (x: T) => DstType): List<DstType> {
        return new List(this.items.map(f))
    }
}

export function genericClass () {
    let numbers: List<number> = new List([1, 2, 3])
    let strings: List<string> = numbers.map((x: number) => {
        return x.toString()
    })

    console.log(numbers)
    console.log(strings)

    // these will cause errors
    //let errors: List<number> = new List([42, 'life'])
    // numbers.map((x: string) => {
    //     return parseInt(x, 10)
    // })
}
