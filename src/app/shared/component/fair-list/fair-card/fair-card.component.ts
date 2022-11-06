import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faircard',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() fairObj!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
