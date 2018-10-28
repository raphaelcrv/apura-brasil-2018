import { Component, OnInit } from '@angular/core';
import { ApurationService } from '../../../services/apuration.service'

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  apuration = {
    "abrangencia": {
      "aguardandoApuracao": false,
      "andamento": "0.00",
      "disclaimer": false,
      "disclaimerWeb": false,
      "eleitoradoApurado": 0,
      "eleitores": 147306294,
      "key": "BR",
      "matDefinido": false,
      "nome": "Presidente",
      "secoes": 454490,
      "secoesTotalizadas": 0,
      "totalizacaoFinal": false,
      "votos": {
        "abstencao": {
          "porcentagem": "0.00",
          "quantidade": 0
        },
        "apurados": {
          "porcentagem": "0.00",
          "quantidade": 0
        },
        "brancos": {
          "porcentagem": "0.00",
          "quantidade": 0
        },
        "nulos": {
          "porcentagem": "0.00",
          "quantidade": 0
        },
        "pendentes": 0,
        "validos": {
          "porcentagem": "0.00",
          "quantidade": 0
        }
      }
    },
    "candidatos": [
      {
        "classificacao": 1,
        "coligacao": "PROS / PC do B / PT",
        "eleito": "N",
        "foto": "https://s2.glbimg.com/7jL3mV28A6swbAmKzkhYaZsLZkA=/150x150/middle/smart/s.glbimg.com/jo/g1/f/original/2018/10/19/BR/Fernando_Haddad.png",
        "matEleito": "N",
        "nome": "Fernando Haddad",
        "numero": "13",
        "partido": "PT",
        "politicoUrl": "http://g1.globo.com/politica/politico/fernando-haddad.html",
        "situacao": 2,
        "votos": {
          "apurados": 0,
          "porcentagem": "0.00",
          "quantidade": 0
        }
      },
      {
        "classificacao": 2,
        "coligacao": "PRTB / PSL",
        "eleito": "N",
        "foto": "https://s2.glbimg.com/JDewbavIltsiWTQp5AVKlrNUwUQ=/150x150/middle/smart/s.glbimg.com/jo/g1/f/original/2018/10/19/BR/Jair_Bolsonaro.png",
        "matEleito": "N",
        "nome": "Jair Bolsonaro",
        "numero": "17",
        "partido": "PSL",
        "politicoUrl": "http://g1.globo.com/politica/politico/jair-bolsonaro.html",
        "situacao": 2,
        "votos": {
          "apurados": 0,
          "porcentagem": "0.00",
          "quantidade": 0
        }
      }
    ],
    "dataHora": "2018-10-22T12:56:08"
  }

  isFirstLoading: boolean;
  isLoading: boolean;
  hasError: boolean;

  reload: any;


  constructor(public apurationService : ApurationService) { }

  ngOnInit() {
    this.getCandidatesFirstRound();
  }

  refreshResults() {
    this.reload = setInterval(() => {
       this.getCandidatesFirstRound();
    }, 10000);
  }

  // return all data from first round ellection
  getCandidatesFirstRound() {
    clearInterval(this.reload);
    this.isLoading = true;

    this.apurationService.getCandidatesFirstRound().then((res:any) => {
      this.apuration = res.data
      this.isLoading = false;
      this.refreshResults();
    }, (err) => {
      this.isLoading = false;
      this.refreshResults();
      console.log(err)
    })
    // console.log('loading')
    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.refreshResults();
    //   console.log('loaded')  
    // }, 2000);

  }

}
