import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser: any = {};
  showForm: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.showFormAfterDelay();
  }

  createUser() {
    this.usersService.createUser(this.newUser).subscribe(() => {
      this.dialogRef.close(this.newUser);
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }

  showFormAfterDelay() {
    setTimeout(() => {
      this.showForm = true;
    }, 500);
  }
}
