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
    console.log(this.userForm);
    if (this.userForm.valid) {
      // submit the form
    } else {
      return false;
    }
  }
}
