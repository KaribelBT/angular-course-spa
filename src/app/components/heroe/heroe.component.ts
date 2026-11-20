import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private _heroesService:HeroesService
             ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroe =  this._heroesService.getHeroe(parseInt(params.id));      
    })
  }

  regresarHeroes(){
    this.router.navigate( ['/heroes'] );
  }

}
