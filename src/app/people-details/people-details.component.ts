import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
id:string='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  peopleDetails:any
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) {
    this.id=_ActivatedRoute.snapshot.params.id;
    _MoviesService.getPeopledetails(this.id).subscribe((data)=>{
      this.peopleDetails=data;
    })

  }

  ngOnInit(): void {
  }

}
