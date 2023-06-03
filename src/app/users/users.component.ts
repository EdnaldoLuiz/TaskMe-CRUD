import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ExclusaoComponente } from '../service/users.popup.delete';
import { CreateUserComponent } from '../create-user/create-user.component';

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

  deleteUser(email: string) {
    this.usersService.deleteUser(email).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exibirPopupExclusao(email: string) {
    const dialogRef = this.dialog.open(ExclusaoComponente, {
      data: {
        mensagem: 'Deseja excluir o usuário?'
      },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser(email);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          location.reload(); // Recarrega a página após 3 segundos (3000 milissegundos)
        }, 300);
      }
    });
  }

  updateUser(email: string, user: any) {
    this.usersService.updateUser(email, user).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
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
