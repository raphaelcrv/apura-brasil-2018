import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({providedIn: 'root'})

export class CandidateService {

  public static ApiTse: string = 'http://divulga.tse.jus.br/2018/divulgacao/oficial/295/dadosdivweb/br/br-c0001-e000295-w.js'
  public static ApiApura: string = 'http://apurabrasil.com.br:3000/executivo.json';

  constructor(public http: Http) { }

  getCandidatesFirstRound(){
    return this.http.get('../../assets/data.json').toPromise().then((res) => res.json());
  }

  getCandidatesSecondRound(){
    return this.http.get(CandidateService.ApiApura).toPromise().then((res) => res.json());
  }

  
}
