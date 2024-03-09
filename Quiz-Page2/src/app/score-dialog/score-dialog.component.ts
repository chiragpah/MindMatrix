import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }
  closeDialog(): void {
    // Close the dialog
  }
  retakeQuiz() {
    window.location.reload();
  }
  closeDialogAndNavigate(): void {
    this.dialogRef.close();
  }
}
