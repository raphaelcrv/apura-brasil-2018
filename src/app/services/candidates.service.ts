import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({providedIn: 'root'})

export class CandidateService {

  public static url: string = 'http://divulga.tse.jus.br/2018/divulgacao/oficial/295/dadosdivweb/br/br-c0001-e000295-w.js'

  constructor(public http: Http) { }

  get(){
    // return this.http.get(CandidateService.url).toPromise().then((res) => res.json());
    // uncomment for local and moc data
    return this.http.get('../../assets/data.json').toPromise().then((res) => res.json());
  }

  getGlobo(){
    return this.http.get('http://s.glbimg.com/jo/el/2018/apuracao/1-turno/br/executivo.json').toPromise().then((res) => res.json());
  }

  
}
