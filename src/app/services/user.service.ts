import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([
    { id:1 , account: "account1", password: "pass1", money: 500, isCo: false},
    { id:2 , account: "account2", password: "pass2", money: 5000, isCo: false },
    { id:3 , account: "account3", password: "pass3", money: 50000, isCo: false}
  ])

  constructor() { }
}
