import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react'
import { useParams } from 'react-router'
import ExploreContainer from '../components/ExploreContainer'
import './Page.css'
import { useState } from 'react'

const Page: React.FC = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>VLC Parking</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">VLC Parking</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="floating">Latitude</IonLabel>
          <IonInput value={latitude} type="number"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Logitude</IonLabel>
          <IonInput value={longitude} type="number"></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Page
