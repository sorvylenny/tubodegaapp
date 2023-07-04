import { Component } from '@angular/core';

export interface Users{
  name: string;
  last: string;
  rol: string;
  password: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

}
