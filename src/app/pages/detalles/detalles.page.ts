import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonBackButton, IonImg, IonItemGroup, IonItemDivider, IonLabel, IonModal, ModalController, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash, chatbox, chatbubbles, create } from 'ionicons/icons';
import { Router } from '@angular/router';
import { Lugar } from 'src/app/components/models/lugar.interface';
import { ModalComentarioComponent } from 'src/app/components/modal-comentario/modal-comentario.component';
import { ModalEditarComponent } from 'src/app/components/modal-editar/modal-editar.component';
import { LugaresService } from 'src/app/services/lugares-services/lugares-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButtons, IonButton, IonBackButton, IonImg, IonItemGroup, IonItemDivider, IonLabel, IonModal, ModalComentarioComponent, ModalEditarComponent]
})
export class DetallesPage implements OnInit {
  lugar: Lugar;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private alertController: AlertController,
    private lugaresService: LugaresService,
    private location: Location
  ) { 
    addIcons({ trash, chatbox, chatbubbles, create });
    const navigation = this.router.getCurrentNavigation();
    this.lugar = navigation?.extras?.state?.['lugar'];
  }

  ngOnInit() {}

  async openComentarioModal() {
    const modal = await this.modalController.create({
      component: ModalComentarioComponent,
      componentProps: { lugar: this.lugar }
    });
    await modal.present();
  }

  async openEditarModal() {
    const modal = await this.modalController.create({
      component: ModalEditarComponent,
      componentProps: { lugar: this.lugar }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.lugar = data;
      // Aquí puedes guardar los cambios en tu servicio si es necesario
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Eliminar Lugar',
      message: '¿Estás seguro de que deseas eliminar este lugar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.lugaresService.removeLugar(this.lugar.nombre);
            this.location.back(); // Navegar de vuelta a la lista de lugares después de eliminar
          }
        }
      ]
    });

    await alert.present();
  }
}
