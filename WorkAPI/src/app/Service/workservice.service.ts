import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkserviceService {

  msebenzi = [];
  jobID = [];
  id;

  constructor(public http: HttpClient) { }

  searchJob() {
   return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/jobs');
 }
 getJob() {
   return this.msebenzi;
 }
 description(id) {
   return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/job?id=' + String(id));
 }
 getId() {
   return this.id;
 }

}
