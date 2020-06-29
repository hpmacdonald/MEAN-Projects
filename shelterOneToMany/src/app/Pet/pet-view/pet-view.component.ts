import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Pet } from '../../models/pets';
import { Toy } from '../../models/toys';
import { PetService } from '../../services/pet.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {
  @Input()
  pet: Pet;
  pets: Pet [] = [];
  toy: Toy = new Toy();


  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  createToy(form: NgForm) {
    this.petService.createToy({...form.value, pet: this.pet._id})
    .subscribe( pet => {
      form.reset();
      console.log(pet);
      this.pet = pet;  // Keep petservice vs toyservice
      this.toy = new Toy();
    });
  }
  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.petService.getPet(id)),
      )
      .subscribe(pet  => {
        console.log('Pet from api', pet);
        this.pet = pet;
      });
  }
  onDelete(event: Event, id: string ) {
    event.stopPropagation();
    this.petService.removePet(id)
    .subscribe( deletedPet => {
        this.pets = this.pets.filter( pet => id !== pet._id);
        console.log('this pet is deleted');
        this.router.navigateByUrl('/');
    });

  }

}
