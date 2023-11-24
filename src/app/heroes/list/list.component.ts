import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public nameheroes : string[] = ['Spiderman','Iroman','Thor','Hulk','Capitan America'];
  public deletedHero ?: string;

  removeLastHero() : void{
    this.deletedHero = this.nameheroes.pop();
  }

}
