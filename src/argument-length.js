// @flow
'use strict';

declare function minus (a: number, b?: number, ...rest:Array<void>): number

function minus (a, b): number {
    if (arguments.length === 1) {
        return -a
    }
    return a - b
}

export function argumentLength () {
    console.log(minus(4))
    console.log(minus(3, 1))
    // these will cause errors
    //console.log(minus())
    //console.log(minus(3, 1, 4))
}
