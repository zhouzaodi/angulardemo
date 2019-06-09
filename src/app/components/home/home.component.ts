import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mendata: any = [
    {
      url: './assets/image/yuyue.gif',
      title: '我的预约'
    },
    {
      url: './assets/image/daifukuan.gif',
      title: '待付款'
    },
    {
      url: './assets/image/daishiyong.gif',
      title: '待使用'
    },
    {
      url: './assets/image/daipingjia.gif',
      title: '待评价'
    },
  ]
  constructor(private router: Router) {
  }
  quickorder(){
    this.router.navigate(['/orders']);
  }
  ngOnInit() {
  }

}
