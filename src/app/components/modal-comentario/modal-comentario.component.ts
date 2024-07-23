import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonButton, IonTextarea, IonLabel, ModalController } from '@ionic/angular/standalone';
import { LugaresService } from 'src/app/services/lugares-services/lugares-service.service';
import { Lugar } from 'src/app/components/models/lugar.interface';

@Component({
  selector: 'app-modal-comentario',
  templateUrl: './modal-comentario.component.html',
  styleUrls: ['./modal-comentario.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonButton, IonTextarea, IonLabel]
})
export class ModalComentarioComponent implements OnInit {
  @Input() lugar!: Lugar;
  comentario: string = '';

  constructor(private lugaresService: LugaresService, private modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss();
  }

  confirm() {
    if (this.lugar && this.lugar.nombre) {
      this.lugaresService.addComentario(this.lugar.nombre, this.comentario);
      this.modalController.dismiss();
    } else {
      console.error('El nombre del lugar no está definido o el lugar no está inicializado');
    }
  }
}
