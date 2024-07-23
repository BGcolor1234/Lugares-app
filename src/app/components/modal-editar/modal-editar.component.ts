import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonButton, IonTextarea, IonLabel, ModalController } from '@ionic/angular/standalone';
import { Lugar } from 'src/app/components/models/lugar.interface';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonButton, IonTextarea, IonLabel]
})
export class ModalEditarComponent implements OnInit {
  @Input() lugar!: Lugar;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  confirm() {
    this.modalController.dismiss(this.lugar);
  }
}
