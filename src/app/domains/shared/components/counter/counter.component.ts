import { Component, signal, SimpleChanges } from '@angular/core';

import {
  Input,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //NO ASYNC
    //before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //after render
    //una vez
    //aync, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration', this.duration);
    console.log('message', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    //after render
    //children were rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('changeDuration');
    //async
  }
}
