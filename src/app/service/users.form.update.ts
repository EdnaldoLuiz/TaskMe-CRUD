// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { NgModel } from '@angular/forms';

// @Component({
//   template: `
//     <h4 mat-dialog-title>Atualizar Usuário</h4>
//     <div mat-dialog-content>
//       <div class="form-group">
//         <label for="newName">Novo Nome:</label>
//         <input type="text" id="newName" [(ngModel)]="newName" class="form-control">
//       </div>
//       <div class="form-group">
//         <label for="newEmail">Novo Email:</label>
//         <input type="email" id="newEmail" [(ngModel)]="newEmail" class="form-control">
//       </div>
//     </div>
//     <div mat-dialog-actions>
//       <button mat-button [mat-dialog-close]="{ newName: newName, newEmail: newEmail }">Atualizar</button>
//       <button mat-button [mat-dialog-close]="null">Cancelar</button>
//     </div>
//   `
// })
// export class AtualizacaoComponente {
//   newName: string = '';
//   newEmail: string = '';

//   constructor(d
//     public dialogRef: MatDialogRef<AtualizacaoComponente>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {
//     this.newName = data.user.name;
//     this.newEmail = data.user.email;
//   }
// }
