const num = 42;
const nul = null;
const undef = undefined;
const regx = /\d+/;
const now = new Date();
const user = { firstName: 'A', lastName: 'Ble' };
const country = 'China';
const add = (a: number, b: number) => a + b;

type A = 'A';

type B = 'B';

type AB = A | B;

type ObjA = {
    A: string;
}

type ObjB = {
    B: string;
}

type ObjAB = ObjA & ObjB

const objAb: ObjAB = {
    A: '1'
}