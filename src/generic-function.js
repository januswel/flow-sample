// @flow
'use strict';

function echo<T> (a: T): T {
    return a
}

export function genericFunction () {
    // all types are valid
    console.log(echo(42))
    console.log(echo('foo'))
    console.log(echo(new Date()))
    console.log(echo(null))
    console.log(echo(undefined))
    class A {
        valueOf() { return 'A' }
    }
    console.log(echo(new A()))
}
