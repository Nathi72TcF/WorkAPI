import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WorkserviceService } from './../Service/workservice.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-destription',
  templateUrl: './destription.page.html',
  styleUrls: ['./destription.page.scss'],
})
export class DestriptionPage implements OnInit {

  id;
  spani;

  constructor(
    public workserviceService: WorkserviceService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getMsebenzi(this.id);
  }

  getMsebenzi(id) {
    this.workserviceService.description(id).subscribe((data) => {
      this.spani = data;
      console.log(this.spani);
    });
  }


}
