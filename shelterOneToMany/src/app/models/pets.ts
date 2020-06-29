import {Toy} from './toys';

export class Pet {
    // tslint:disable-next-line: variable-name
    _id: string;
    name: string;
    type: string;
    description: string;
    skill1: string;
    skill2: string;
    skill3: string;
    toys: Toy[] = [];
  }
