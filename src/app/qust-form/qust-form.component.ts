import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from './data/formData.service';
@Component({
  selector: 'app-qust-form',
  templateUrl: './qust-form.component.html',
  styleUrls: ['./qust-form.component.css']
})
export class QustFormComponent implements OnInit {

  title = 'Multi-Step Wizard';
  @Input() formData;
  
  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      console.log(this.title + ' loaded!');
  }

}
