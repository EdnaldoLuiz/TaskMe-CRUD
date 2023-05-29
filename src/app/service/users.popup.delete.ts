import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
    <div class="custom-dialog-content">
    <h4 mat-dialog-title class="dialog-title">
        <img src="../assets/icons/delete.png" alt="Ícone de exclusão" class="dialog-icon" style="width: 120px">
      </h4>
      <!-- <div mat-dialog-content class="dialog-content">
        <p>{{ mensagem }}</p>
      </div> -->
      <div mat-dialog-actions class="dialog-actions">
        <button mat-raised-button class="delete-button" [mat-dialog-close]="true">Apagar</button>
        <button mat-raised-button class="cancel-button" [mat-dialog-close]="false">Cancelar</button>
      </div>
    </div>
  `,
  styles: [`
    .custom-dialog-content {
      text-align: center;
    }
    
    .dialog-title {
      margin-bottom: 20px;
    }
    
    .dialog-content {
      margin-bottom: 30px;
    }
    
    .dialog-actions {
      display: flex;
      justify-content: center;
    }
    
    .delete-button {
      background-color: red;
      color: white;
      margin-right: 10px;
      width: 70px;
    }
    
    .cancel-button {
      background-color: green;
      color: white;
      width: 70px;
    }
  `]
})
export class ExclusaoComponente {
  mensagem: string;

  constructor(
    public dialogRef: MatDialogRef<ExclusaoComponente>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mensagem = data.mensagem;
  }

  confirmarExclusao(): void {
    this.dialogRef.close(true);
  }

  fecharDialog(): void {
    this.dialogRef.close(false);
  }
}
