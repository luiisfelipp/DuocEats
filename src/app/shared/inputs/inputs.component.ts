import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string;
  @Input() autocomplete!: string;
  @Input() icon!: string;

  isPassword!: boolean;
  hide: boolean = true;
  

  constructor() { }

  ngOnInit() {
  if (this.type == 'password') this.isPassword = true;
  }
  
  showOrHidePassword() {

    this.hide = !this.hide
    if (this.hide) this.type = 'password';
    else this.type = 'text';
  }

}
