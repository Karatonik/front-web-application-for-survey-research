import { Component, Input, OnInit } from '@angular/core';
import { GraficoModel } from '../models/grafico.modele';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {
  @Input() List: Array<GraficoModel>;
  public Total=0;
  public MaxHeight= 160;
  constructor() { }

  ngOnInit(): void {
    this.MontarGrafico();
  }
  MontarGrafico(){

      this.List.forEach(element => {
        this.Total += element.value;
      });


      this.List.forEach(element => {
        element.size = Math.round((element.value * this.MaxHeight) / this.Total) + '%';
      });
  }


}
