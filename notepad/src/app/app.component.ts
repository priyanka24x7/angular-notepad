import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myNotes:any;
  showForm = true;
  saveNote = new FormGroup({
    notes : new FormControl('')
  });

  onSubmit() {
    this.showForm = false;
    this.myNotes = this.saveNote.value;
  }

  editNote(){
    this.showForm = true;
  }

}
