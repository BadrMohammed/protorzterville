import { Component, OnDestroy, OnInit } from '@angular/core';
import { IInternship } from '../../models/IInternship';
import { Subscription } from 'rxjs';
import { InternshipService } from '../../services/internship.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss'],
})
export class InternshipComponent implements OnInit, OnDestroy {
  data!: IInternship | null;
  hasError: boolean = false;
  subscription!: Subscription;

  constructor(private _internshipService: InternshipService) {}

  ngOnInit(): void {
    this.getInternships();
  }

  getInternships() {
    this.subscription = this._internshipService.getInternships().subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.data = response.result?.internship;
          this.hasError = false;
        }
      },
      error: (err) => {
        this.hasError = true;
      },
    });
  }
  ngOnDestroy(): void {
    this?.subscription?.unsubscribe();
  }
}
