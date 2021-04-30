import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
} )
export class FooterComponent implements OnInit {
  annee: number;
  constructor() {
    // Function pour avoir l'année de manière automatique
    this.annee = new Date().getFullYear();
  }

  ngOnInit (): void {
  }

}
