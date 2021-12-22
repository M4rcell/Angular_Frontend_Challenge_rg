import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { combineLatest, map, Observable, startWith, Subscription, take, tap } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit,OnDestroy {
  selectNews = new FormControl('');
  news:Array<any>=[
    {code:'angular',image:'../../../assets/icons/angular.png',title:'Angular'},
    {code:'reactjs',image:'../../../assets/icons/react.png',title:'React'},
    {code:'vuejs',image:'../../../assets/icons/vue.png',title:'Vuejs'},
  ];

  subscriptions = new Subscription();  

  news$!: Observable<any[]> ;
  test$!: Observable<any[]> ;
  page=0;
  changeNews: any;

  newsArray: Array<News> | undefined ;

  itemsPerPage: any;
  currentPage: number=0;
  totalItems: any;

  constructor(
    private newsService:NewsService
  ) { }

  ngOnInit(): void {	  
    
    this.news$ = combineLatest([
      this.selectNews.valueChanges.pipe(startWith('reactjs')),
      ])
      .pipe(
        map(([news]) => {
          this.changeNews = news;          
          this.loadingNews();

           return news;
        }),
      )
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadingNews():void{
    try {
      this.subscriptions.add(
        this.newsService.getNewsByFramework(this.changeNews,this.currentPage).subscribe(
          (res:any) => {
          this.newsArray = res['hits'];
          this.itemsPerPage = res['hitsPerPage'];
          this.currentPage = res['page'];
          this.totalItems = res['nbHits'];
        })
      );

    } catch (error) {
      console.log('error', error );
    }    

  }

  addFavorites(item:any):void{    
    const list:any = localStorage.getItem('favoriteList');
    
    if (list != null) {
      const favoriteList:any = JSON.parse(list);
      favoriteList.push(item);
      
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }else{
      let favoriteList:any =[] ;
      favoriteList.push(item);
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));

    }
    

  }

  changePage(event:any):void{
    this.currentPage = event;
    this.loadingNews();
  }

}


