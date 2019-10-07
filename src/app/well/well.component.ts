import { Component, OnInit, ViewChild, ElementRef, Output, Input } from '@angular/core';
import {Well} from '../well'
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

  @Input() well = new Well();
  @Output() wellEvent = new EventEmitter();
  @ViewChild(NgForm,{ static: true }) wellForm: NgForm;
  @Input() appChildMessage: string;
  @Input() disabledsrc : boolean
  constructor() { 
   
  }
 
  ngOnInit() {
  }
  onSubmit(){
    this.wellEvent.emit(this.well);
    this.wellForm.reset();
  }

}
