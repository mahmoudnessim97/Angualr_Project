import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trindingMovies:any[]=[];
trindingTv:any[]=[];
trindingPeople:any[]=[];
imgPrefix:string='https://image.tmdb.org/t/p/w500'
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getTrending('movie').subscribe((data)=>{
       this.trindingMovies=data.results.slice(0,10);
    });
     _MoviesService.getTrending('tv').subscribe((data)=>{
       this.trindingTv=data.results.slice(0,10);
    });
     _MoviesService.getTrending('person').subscribe((data)=>{
       this.trindingPeople=data.results.slice(0,10);
    })

   }

  ngOnInit(): void {
  }

}
