import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public shopdata: any = [
    {
      url: './assets/image/dian.gif',
      name: '宁波新盈光江北店',
      address:'宁波市江北区育才路308号',
      distance:'2.5km',
      record:true
    },
    {
      url: './assets/image/dian.gif',
      name: '宁波新盈光江北店',
      address:'宁波市江北区育才路308号',
      distance:'3.8km',
      record:false
    },
    {
      url: './assets/image/dian.gif',
      name: '宁波新盈光江北店',
      address:'宁波市江北区育才路308号',
      distance:'5.8km',
      record:false
    },
    {
      url: './assets/image/dian.gif',
      name: '宁波新盈光江北店',
      address:'宁波市江北区育才路308号',
      distance:'10km',
      record:false
    },
    {
      url: './assets/image/dian.gif',
      name: '宁波新盈光江北店',
      address:'宁波市江北区育才路308号',
      distance:'20km',
      record:false
    },
  ]
  public list: any = [1,2,3,4]
  public bglayer:any=false
  public getindex:any;
  public shopNum:any;
  public selectdata:any;
  public inputdata:any={
    distance: "2.5km",
    name: "宁波新盈光江北店"
  }
  goblack(){
    this.router.navigate(['']);
  }
  changeNum(e){
    this.getindex=e+1
  }
  selectshop(e,item){
    this.shopNum=e
    this.selectdata=item
  }
  btnselect(){
    this.bglayer=true
  }
  confirm(){
    this.bglayer=false
    this.inputdata.name=this.selectdata.name
    this.inputdata.distance=this.selectdata.distance
  }
  constructor(private router: Router) { }
  ngOnInit() {
  }

}
