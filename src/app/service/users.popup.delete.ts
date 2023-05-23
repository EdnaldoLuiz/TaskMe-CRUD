import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
    <div class="custom-dialog-content">
  <h4 mat-dialog-title>Confirmação de exclusão</h4>
  <div mat-dialog-content>
    <p>{{ mensagem }}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">Sim</button>
    <button mat-button [mat-dialog-close]="false">Não</button>
  </div>
</div>

  `
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
