import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/shared/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject<IUser>(null)

  constructor(private userService: UserService) { }

  login(account: string, password: string){
    const subscription = this.userService.users$.subscribe(users => {
      const user = users.find(user => user.account === account && user.password === password)
      if(user){
        this.user$.next(user);
        user.isCo = true;
        console.log("gg");
        console.log(user.isCo)
      }
    }) 
  }
}
