let sales: number = 123_456_789;
let course:string = 'Typescript';
let is_published:boolean = true;
let level; // any type  
let numbers:number[] = [1,2,3];
let user: [number, string] = [1, 'Karan'];
const enum Size {Small, Medium, Large} // PascalCase and it declares constants, on using const generate more optimised code
function calculateTax(income:number, taxYear?:number): number {
    return 0;
}

let employee:{
    readonly id: number, // cannot change this later on
    name?: string // optional property,
    retire: (date: Date) => void
} = {id: 1,
    name: 'Karan',
    retire: (date: Date) => {
        console.log(date)
    }
};

// a type alias can be used instad to have all the types at one place

type Draggable = {
    drag: () => void
}

type Resizeable = {
    drag: () => void
}

type Brick = Draggable & Resizeable

let quantity = 50|100; //literal type

