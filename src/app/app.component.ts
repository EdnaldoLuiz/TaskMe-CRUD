import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  isUsersRoute(): boolean {
    return this.router.url === '/users';
  }

  createNewUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: 'fit-content'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        setTimeout(() => {
          location.reload();
        }, 300);
      }
    });
  }
}
