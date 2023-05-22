import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  createUser(user: any) {
    this.usersService.createUser(user).subscribe({
      next: (data) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateUser(email: string, user: any) {
    this.usersService.updateUser(email, user).subscribe({
      next: (data) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteUser(email: string) {
    this.usersService.deleteUser(email).subscribe({
      next: (data) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
