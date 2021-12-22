import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-faves',
  templateUrl: './my-faves.component.html',
  styleUrls: ['./my-faves.component.scss']
})
export class MyFavesComponent implements OnInit {
  
  favoriteList: any;

  itemsPerPage:number= 20;
  currentPage: number=0;
  totalItems: number | undefined;

  constructor() { }

  ngOnInit(): void {
    const list:any = localStorage.getItem('favoriteList');    
    this.favoriteList = JSON.parse(list);

    this.totalItems = this.favoriteList.length;
  }

  addFavorites(item:any):void{

  }

  changePage(event:any):void{
    this.currentPage = event;
  }

}
