import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = "Demerson";

 
  cor = "dark";

  cores = ["danger","success","secondary","warning"]
  idx = 0

  humor = "sad";
  
  checked_humor = false;

  constructor() { }

  trocarCor(): void {
    console.log('chamou trocaCor!');
    if (this.idx > this.cores.length) {
      this.idx = 0;
    
    } 
    this.cor = this.cores[this.idx];
    this.idx ++;
    
  }


  mudaHumor(): void{
    console.log('chamou muda o humor!');
    this.checked_humor = !this.checked_humor;
    if (this.checked_humor == true){
      this.humor = "happy";
    }else{
      this.humor = "sad";
    }
  }
}



