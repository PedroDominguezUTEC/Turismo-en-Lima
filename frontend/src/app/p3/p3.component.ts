import { ActivatedRoute, Router } from '@angular/router';
import { P2Service } from '../_services/p2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.scss']
})
export class P3Component implements OnInit {

  place: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private p2Service: P2Service
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const place_id = data.get('id');

        this.p2Service.getPlaceById(place_id).subscribe(
          response => {
            console.log(response);
            this.place = response
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}
