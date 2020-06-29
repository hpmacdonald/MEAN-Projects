import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pets';

import { PetService } from '../../services/pet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})

export class PetCreateComponent implements OnInit {
  pet = new Pet();

  @Output()
  createPet = new EventEmitter<Pet>();

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value);
    this.petService.createPet(form.value).subscribe(createPet => {
      console.log(createPet);
      this.pet = new Pet();
      form.reset();

      this.router.navigateByUrl('/');
    });
  }
}

