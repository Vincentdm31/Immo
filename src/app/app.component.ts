import { Component, Input, Output } from '@angular/core';
import { IHouse } from 'src/shared/house.model';
import { IUser } from 'src/shared/user.model';
import { AuthService } from './services/auth.service';
import { HouseService } from './services/house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Immo';
  houses : IHouse[];
  user: IUser;
  account: string;
  password: string;


  constructor(private houseService : HouseService, private authService: AuthService){
    this.houseService.houses$.subscribe((houses: IHouse[]) => {
      this.houses = houses;
    })
    this.authService.user$.subscribe((user: IUser) =>{
      this.user = user;
    })
  }

  login() { return this.authService.login(this.account, this.password)}
}
