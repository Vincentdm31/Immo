import { Component, Input, OnInit } from '@angular/core';
import { IHouse } from 'src/shared/house.model';
import { IUser } from 'src/shared/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input () house: IHouse;
  user: IUser;

  constructor(private authService: AuthService){
    this.authService.user$.subscribe((user: IUser) =>{
      this.user = user;
    })
  }

  ngOnInit(): void {
    
  }

  sell(){
    this.house.ownerId = null;
    this.user.money += this.house.price;
  }
}
