import { WorkserviceService } from './../Service/workservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  JobArray = [];
  JobData;
  Job;

  constructor(public workserviceService: WorkserviceService) {
    this.workserviceService.searchJob().subscribe((data) => {
      this.JobData = data;
      console.log(this.JobData);
      for (let i = 0; i < 50; i++) {
        this.JobArray.push({
          name: this.JobData[i]
        });
      }
    });
  }

}
