import { Component, OnInit } from '@angular/core';
import { ApiHealth } from './api_health';
import { ApiHealthService } from './api_health.service';

@Component({
  selector: 'app-api_health',
  templateUrl: './api_health.component.html',
  styleUrls: []
})
export class ApiHealthComponent implements OnInit {
  apiHealth: ApiHealth;

  constructor(private apiHealthService: ApiHealthService) { }

  ngOnInit() {
    this.getApiHealth();
  }

  getApiHealth(): void {
    this.apiHealthService.getApiHealth()
        .subscribe(apiHealth => this.apiHealth = apiHealth);
  }
}
