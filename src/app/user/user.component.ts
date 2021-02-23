import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/shared/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input () user: IUser;

  userr: IUser;

  constructor(private authService: AuthService){
    this.authService.user$.subscribe((user: IUser) =>{
      this.user = user;
    })
  }

  ngOnInit(): void {
  }

}
