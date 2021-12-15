import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  selectNews = new FormControl('');
  news:Array<any>=[
    {code:1,image:'../../../assets/icons/angular.png',title:'Angular'},
    {code:2,image:'../../../assets/icons/react.png',title:'React'},
    {code:3,image:'../../../assets/icons/vue.png',title:'Vuejs'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
