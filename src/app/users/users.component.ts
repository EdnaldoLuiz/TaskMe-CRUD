import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ExclusaoComponente } from '../exclusao/exclusao.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UpdateFormComponent } from '../update-form/update-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private usersService: UsersService, public dialog: MatDialog) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  createUser(newUser: any) {
    this.usersService.createUser(newUser).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exibirPopupExclusao(id: string) {
    const dialogRef = this.dialog.open(ExclusaoComponente, {
      data: {
        mensagem: 'Deseja excluir o usuário?'
      },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser(id);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          location.reload();
        }, 300);
      }
    });
  }

  updateUser(id: string, user: any) {
    const dialogRef = this.dialog.open(UpdateFormComponent, {
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.newName && result.newEmail) {
        const updatedUser = {
          name: result.newName,
          email: result.newEmail
        };

        this.usersService.updateUser(id, updatedUser).subscribe(
          (data) => {
            this.getUsers();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  createNewUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {

    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.name && result.email) {
        const newUser = {
          name: result.name,
          email: result.email
        };

        this.createUser(newUser);
      }
    });
  }
}
