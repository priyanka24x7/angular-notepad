import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  // displayText: any;
  myNotes:any;
  showForm = true;
  saveNote = new FormGroup({
    notes : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    // this.displayText = sessionStorage.getItem("notes");
    // console.log(JSON.parse(this.displayText));
  }
  

  onSubmit() {
    this.showForm = false;
    this.myNotes = this.saveNote.value;
    // sessionStorage.setItem("notes", JSON.stringify(this.myNotes));
  }

  editNote(){
    this.showForm = true;
  }

}
