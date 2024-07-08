import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackSer : MatSnackBar
  ) { }

  snackBar(msg : string){
    this._snackSer.open(msg, 'close',{
      duration : 3000,
      horizontalPosition : 'left',
      verticalPosition : 'top'
    })
  }
}
