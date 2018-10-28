import { Component } from '@angular/core';
import { ApurationService } from '../app/services/apuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ApurationService : ApurationService) { }

  title = 'apura-brasil';

  ngOnInit() {

  }






}
