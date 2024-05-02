///<reference types="chrome"/>
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  browserService  from './shared/services/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'reply';
  selectionText = "";

  constructor(){}

  ngOnInit(): void {
    this.getSelection()
  }

  async getSelection(){
    const dataFromStorage = await browserService.getSelectionFromStorage();
    this.selectionText = dataFromStorage.message;
   }
}
