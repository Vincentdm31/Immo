import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHouse } from 'src/shared/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  houses$: BehaviorSubject<IHouse[]> = new BehaviorSubject<IHouse[]>([
    { id: 1, name:"Maison de pauvre", address: "Rue du pauvre", price: 50, ownerId: 1},
    { id: 2, name:"Maison du moyen pauvre", address: "Rue du semi pauvre", price: 500, ownerId: 2},
    { id: 2, name:"Maison du riche", address: "Rue des riches", price: 5000, ownerId: 3},
    { id: 2, name:"Maison du riche 2", address: "Rue des riches", price: 5000, ownerId: 3},
    { id: 2, name:"Maison du riche 3", address: "Rue des riches", price: 5000, ownerId: 3},
  ])

  constructor() { }
}
