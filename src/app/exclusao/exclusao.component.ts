import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exclusao',
  templateUrl: 'exclusao.component.html',
  styleUrls: ['exclusao.component.css']
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
