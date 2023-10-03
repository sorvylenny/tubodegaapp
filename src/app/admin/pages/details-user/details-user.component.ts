import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../interface/user';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  selectedUser: any; 
 
  productos: User[] = [];
  id: string = '';

  constructor(private route: ActivatedRoute, private userService: UsersService, private dialog: MatDialog,  private router: Router) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || ''; // Asigna el ID a la variable
      this.userById(this.id); // Llama a productById con el ID
    });
  }
  userById( id: string){
    this.userService.userById(id).subscribe((user:any)=>{
      this.selectedUser = user;
    })
  }


  Edit(){}
  onDeleteButtonClick(){}
}
