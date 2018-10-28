import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview-votes',
  templateUrl: './overview-votes.component.html',
  styleUrls: ['./overview-votes.component.scss']
})
export class OverviewVotesComponent implements OnInit {

  @Input() OverviewData: any;

  constructor() { }

  ngOnInit() {
  }

}
