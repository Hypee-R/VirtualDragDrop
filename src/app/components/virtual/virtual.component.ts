import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;
  personas = Array(1000).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  irAlFinal(){

    this.viewport.scrollToIndex(this.personas.length);

  }

  irAlInicio(){

    this.viewport.scrollToIndex(0);

  }

  irAlaMitad(){

    this.viewport.scrollToIndex( this.personas.length / 2);

  }

}
