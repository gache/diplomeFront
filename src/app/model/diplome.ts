export interface IDiplome {
  id: number;
  nomDiplome: string;
  ecole: string;
  ville: string;
  description: string;
  annee: string;
}

export class Diplome implements IDiplome {
  id: number;
  nomDiplome: string;
  ecole: string;
  ville: string;
  description: string;
  annee: string;
}
