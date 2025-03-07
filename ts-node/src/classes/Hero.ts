import powers from "../data/powers";

export class Hero {
    constructor (
        public name: string,
        public powerId: number,
        public age: number,
    ){}

    get power(): string{
        return ( powers.find( power => power.id === this.powerId )?.desc || 'not-found');
    }
}

export const PI: number = 3.1415;

export const myName: string = 'Miguel';