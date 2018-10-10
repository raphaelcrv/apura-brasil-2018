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
  overview: any;
  totalCountedVotesPercent : any;
  totalCanceledVotes: any;
  overviewPercent: any;
  reload: any;

  constructor(private candidateService : CandidateService) { }

  ngOnInit() {
    this.getCandidates();
  }

   refreshResults(){
     this.reload = setInterval(() => {
       console.log('refreshResults');
       this.getCandidates();
     }, 15000);
   }

// todo display count refresh on screen
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

  // return all data from this election
  getCandidates(){
    this.loading = true;
    clearInterval(this.reload);
    this.candidateService.get().then((response: any) => {
      this.loading = false;
      this.overview = response;
      this.candidates = response.cand;

      this.candidates.sort(function (a, b) {
        return parseInt(a.seq) - parseInt(b.seq);
      });

      this.totalCanceledVotes = this.getTotalCanceledVotes(response);
      this.overviewPercent = this.getOverviewPercent(response);
      this.refreshResults();
      console.log(response);
    }, (err) => {
      this.refreshResults();
      console.log('err', err);
    })
  }

  getCandidatesGlobo(){
    this.candidateService.getGlobo().then((response : any) => {
      console.log(response);
    })
  }

  //   total eleitores [e]
  //   Votos apurados   [ea]
  //   Votos Restantes  [ena]
  //   Votos validos    [vv]
  //   Votos cancelados [vb + vn + a]

  //return the percentage of totals
  getOverviewPercent(total){
    let dataPercent;
    return dataPercent = {
      totalCounted: ((parseInt(total.vv) * 100) / parseInt(total.vv)).toFixed(0),
      totalPending: ((parseInt(total.ena) * 100) / parseInt(total.vv)).toFixed(0),
      totalValid: ((parseInt(total.vv) * 100) / parseInt(total.vv)).toFixed(0),
      totalCanceled: (((parseInt(total.vb) + parseInt(total.vn) + parseInt(total.a))*100) / parseInt(total.vv)).toFixed(0),
    }
  }

  // return the total sum of (votos em branco + votos nulos + abstenencia)
  getTotalCanceledVotes(total){
    //   Votos cancelados [vb + vn + a]
    return parseInt(total.vb)+parseInt(total.vn)+parseInt(total.a);
  }

  getCandidateVotesPercent(votes){
    let vv = this.overview.vv;
    return ((parseInt(votes) * 100) / parseInt(vv)).toFixed(0);
  } 


  title = 'apura-brasil';


}
