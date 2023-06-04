import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-form',
  templateUrl: 'update-form.component.html',
  styleUrls: ['update-form.component.css']
})
export class UpdateFormComponent {
  newName: string = '';
  newEmail: string = '';

  constructor(
    public dialogRef: MatDialogRef<UpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newName = data.user.name;
    this.newEmail = data.user.email;
  }

  onUpdateClick(): void {
    const updatedData = {
      newName: this.newName,
      newEmail: this.newEmail
    };
    this.dialogRef.close(updatedData);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
}
