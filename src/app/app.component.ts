import { Component } from '@angular/core';
import { WikipediaResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pages: {
    title: string;
    snippet: string;
    pageid: number;
  }[] = [];
  constructor(private wikipedia: WikipediaService) {}

  public onTerm(term: string) {
    this.wikipedia.search(term).subscribe((res) => {
      this.pages = res;
    });
  }
}
