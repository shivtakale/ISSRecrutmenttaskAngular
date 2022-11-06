import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fair-list',
  templateUrl: './fair-list.component.html',
  styleUrls: ['./fair-list.component.scss']
})
export class FairListComponent implements OnInit {
 @Input() fiarArray : any [] = []
  constructor() { }

  ngOnInit(): void {
  }

}
