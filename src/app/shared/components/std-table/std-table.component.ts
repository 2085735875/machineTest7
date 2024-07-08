import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdArr !: Array<Istd>
  constructor(
    private _stdServ : StudentService
  ) { }

  ngOnInit(): void {
    this.stdArr = this._stdServ.fetchAllStudents()
  //  alert('hello')
  }

  onRemove(id : string){
    this._stdServ.onStudentRemove(id)
  }

}
