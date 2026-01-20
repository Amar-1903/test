import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbond',
  templateUrl: './inbond.component.html',
  styleUrls: ['./inbond.component.scss']
})

export class InbondComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000); 
  }
}

