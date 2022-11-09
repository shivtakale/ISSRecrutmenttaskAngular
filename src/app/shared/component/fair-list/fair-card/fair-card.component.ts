import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-faircard',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() obj!:any;
  @Output() emitter:EventEmitter<string>= new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.emitter.emit(this.obj.fairId)
    console.log(this.obj.fairId);
  }

}
