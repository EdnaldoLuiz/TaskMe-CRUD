import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) { }

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
