import { Injectable } from '@angular/core';


import {Hero} from "./hero";
import { HEROES } from './mock-heroes';


@Injectable()

export class HeroService {
  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  //  Promise-returning getHeroes method

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // delay 2 seconds
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }


}
