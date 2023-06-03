import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  newUser: any = {};

  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private usersService: UsersService
  ) {}

  createUser() {
    console.log(this.newUser); // Adicionado para verificar os dados do novo usuário no console
    this.usersService.createUser(this.newUser).subscribe(() => {
      this.dialogRef.close(this.newUser); // Fecha o diálogo e passa o novo usuário como resultado
    });
  }

  cancel() {
    this.dialogRef.close(false); // Fecha o diálogo e passa false como resultado
  }
}
