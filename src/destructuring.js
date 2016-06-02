// @flow
'use strict';

function foo ({a, b}: {a: number, b: string}): string {
    return a.toString() + b
}

export function destructuring () {
    console.log(foo({
        a: 4,
        b: 'foo',
    }))

    // these will cause errors
    //console.log(foo(4, 'foo'))
    //console.log(foo({
    //    b: 4,
    //    a: 'foo',
    //}))
}
