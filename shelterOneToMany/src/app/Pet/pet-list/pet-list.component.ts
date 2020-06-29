import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pets';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  constructor(
    private petService: PetService,
  ) {}

  ngOnInit() {
    this.petService.getPets()
    .subscribe( pets => {
      console.log(pets);
      this.pets = pets;
    });
  }

  onDelete(event: Event, id: string ) {
    event.stopPropagation();
    this.petService.removePet(id)
    .subscribe( deletedPet => {
        this.pets = this.pets.filter( pet => id !== pet._id);
        console.log('this pet is deleted');
    });

  }

}
