import { Component } from '@angular/core';

@Component({
  selector: 'app-essay-generator',
  templateUrl: './essay-generator.component.html',
  styleUrls: ['./essay-generator.component.css']
})
export class EssayGeneratorComponent {
  prompt: string = '';
  wordCount: number = 0;
  format: string = '';
  output: string = '';

  generateEssay(): void {
    // Generate the essay and update the output
    this.output = `Essay generated for prompt "${this.prompt}" with ${this.wordCount} words in ${this.format} format.`;
  }
}