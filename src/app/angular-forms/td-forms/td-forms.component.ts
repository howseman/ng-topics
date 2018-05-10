import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.scss']
})
export class TdFormsComponent implements OnInit {

  languages = ['ESP', 'EN', 'ITA', 'FR'];
  name: string;
  lang: string;
  @ViewChild('myForm') userForm: NgForm;

  constructor() { }

  ngOnInit() { }

  submit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // submit the form
    } else {
      return false;
    }
  }
}
