import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
@Input('detailsArray') selectedFairDetails !: any
// selectedFairDetails: any;

  constructor() { }

  ngOnInit(): void {
    // this.selectedFairDetails= this.detailsArray[0]
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(this.selectedFairDetails);

  }

}
