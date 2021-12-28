import { Component, OnInit } from '@angular/core';
import { ItemsDispService } from '../items-disp.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  public cakes = [] as any;
  public cups = [] as any;
  public jars = [] as any;
  public c = [] as any;
  public cc = [] as any;
  public cj = [] as any;

  constructor(
    private cake: ItemsDispService,
    private cupcake: ItemsDispService,
    private cjar: ItemsDispService
  ) {}

  ngOnInit() {
    this.cake.getCake().subscribe((data) => (this.cakes = data));
    this.cupcake.getCups().subscribe((data) => (this.cups = data));
    this.cjar.getJar().subscribe((data) => (this.jars = data));
  }

  displayc(cak: any[]) {
    this.c = cak;
  }

  displaycc(cup: any[]) {
    this.cc = cup;
    console.log(this.cc);
  }

  displayj(jar: any[]) {
    this.cj = jar;
  }
}
