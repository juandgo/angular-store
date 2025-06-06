import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';

import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  imports: [CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(100);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    // this.duration.set(Number(input.value));
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    // this.duration.set(Number(input.value));
    this.message.set(input.value);
  }
}
