import { Component, OnInit, ViewChild ,AfterViewInit, ElementRef} from '@angular/core';
import { WellComponent } from '../well/well.component';
import { Well } from '../well';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})

export class WellListComponent implements OnInit  {
  

 // @ViewChild(WellComponent,{ static: true }) child;
 // @ViewChild('name',{ static: true }) name: ElementRef;
  name : string;
  public type : string;
  public sourceKey : number;
  wellList: Array<Well> = [];
  selectedWell = new Well();
  color = 'green';
  colorpink = 'pink';
  size = 16;
  disabled : boolean
 // selectedWell = "This message is from parent"
  constructor() {
    
   }
  
 
   ngOnInit () {
  //  this.name.nativeElement.innerHTML = this.child.name.nativeElement.value; 
   // alert( this.name.nativeElement.innerHTML)
  }

  wellEventHander($event: Well) {
    var customObj = new Well();
    customObj = $event;
    var copy = Object.assign({}, customObj);
    this.wellList.push(copy)
    console.log("wellList==",this.wellList)
    
  }

  typeEventHandler($event: any){
    this.type = $event;
  }
  srcEventHandler($event: any){
    this.sourceKey = $event;
  }
  RowSelected(u:any){
    this.selectedWell=u;   // declare variable in component.
    this.disabled = true
    }
}
