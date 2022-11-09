import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fair-list',
  templateUrl: './fair-list.component.html',
  styleUrls: ['./fair-list.component.scss']
})
export class FairListComponent implements OnInit {
//  @Input() fiarArray : any [] = []
@Input() fairListArray !: any[]
@Output() EmitIdApp: EventEmitter<string>=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  getemitterId(event:string){
    this.EmitIdApp.emit(event)
    console.log(event);
    
  }
}
