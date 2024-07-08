import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StudentService } from '../../services/student.service';
import { CustomRegex } from '../../const/pattern';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  studentForm !: FormGroup
  constructor(
    private _uuid : UuidService,
    private _stdSer : StudentService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.studentForm = new FormGroup({
      fname : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyText)]),
      lname : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyText)]),
      email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      contact : new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.num),
         Validators.minLength(10),
        Validators.maxLength(10)])
    })
  }

  onStudentAdd(){
    if(this.studentForm.valid){
      console.log(this.studentForm.value)
      let obj = {...this.studentForm.value, id : this._uuid.uuid()}
      console.log(obj)
      this._stdSer.onStudentAdd(obj)
      this.studentForm.reset()
    }
  }

  get f(){
    return this.studentForm.controls
  }

}
