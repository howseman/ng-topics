import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  customerForm: FormGroup;
  customer: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // The long way
    this.customerForm = new FormGroup({
      customerGroup: new FormGroup({
        name: new FormControl(this.customer.name, Validators.required)
      }),
      contactGroup: new FormGroup({
        name: new FormControl(this.customer.contact.name, Validators.required)
      })
    });
    // The "short" way
    this.customerForm = this.fb.group({
      customerGroup: this.fb.group({
        name: [this.customer.name, [Validators.required, Validators.minLength(5)]],
      }),
      contactGroup: this.fb.group({
        name: [this.customer.contact.name, Validators.required]
      })
    });
  }
}
