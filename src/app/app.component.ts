import { Component } from '@angular/core';
import { CandidateService } from '../app/services/candidates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading: boolean = false;
  counter: any;
  candidates: any[];

  constructor(private candidateService : CandidateService) { }

  ngOnInit() {
    this.getCandidates();
    // setInterval(() => {
    //   this.refreshResults();
    // }, 5000);
  }

   refreshResults(){
    this.getCandidates();
   }


  // refreshResults(){
  //   let counter = 30;
  //   setInterval(() => {
  //     counter--
  //     console.log(counter);
  //     if(counter == 0){
  //       counter = 31;
  //       this.getCandidates();
  //     }
  //   }, 1000);
  // }
  

  getCandidates(){
    // console.log('teste')
    this.loading = true;
    this.candidateService.get().then((response: any) => {
      this.loading = false
      this.candidates = response.cand;
      console.log(response);
    })
  }

  title = 'apura-brasil';


}
