import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'practice-list';
  listItem: FormControl;
  item2: FormControl;
  item3: FormControl;
  item4: FormControl;
  inputForm: FormGroup;

  ngOnInit() {
    this.listItem = new FormControl('');
    this.item2 = new FormControl('');
    this.item3 = new FormControl('');
    this.item4 = new FormControl('');
    this.inputForm = new FormGroup({
      listItem: this.listItem,
      item2: this.item2,
      item3: this.item3,
      item4: this.item4,
    });
  }

  logInput(value: string) {
    console.log(value);
  }

  storeInput(value: string) {
    console.log(this.listItem);
    console.log(value);
  }
}
