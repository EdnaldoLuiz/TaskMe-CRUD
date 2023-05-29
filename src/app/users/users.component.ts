import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ExclusaoComponente } from '../service/users.popup.delete';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: any[];

  constructor(private usersService: UsersService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getUsers();
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
    this.usersService.deleteUser(email).subscribe({
      next: (data) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
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

}
