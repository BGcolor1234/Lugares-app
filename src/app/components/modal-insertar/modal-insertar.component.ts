import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonButton, IonTextarea, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { LugaresService } from 'src/app/services/lugares-services/lugares-service.service';
import { Lugar } from 'src/app/components/models/lugar.interface';

@Component({
  selector: 'app-modal-insertar',
  templateUrl: './modal-insertar.component.html',
  styleUrls: ['./modal-insertar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonButton, IonTextarea, IonLabel]
})
export class ModalInsertarComponent implements OnInit {
  lugar: Lugar = {
    nombre: '',
    enlace: '',
    descripcion: '',
    comentario: ''
  };

  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {}

  cancel() {
    const modal = document.querySelector('ion-modal');
    modal?.dismiss();
  }

  confirm() {
    this.lugaresService.addLugar(this.lugar);
    const modal = document.querySelector('ion-modal');
    modal?.dismiss();
  }
}
