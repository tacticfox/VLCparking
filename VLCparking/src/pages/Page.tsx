import {
  IonButton,
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
  IonIcon,
  IonPopover,
  IonDatetime,
} from '@ionic/react'
import { useParams } from 'react-router'
import ExploreContainer from '../components/ExploreContainer'
import './Page.css'
import { useState } from 'react'
import { calendar } from 'ionicons/icons'
import { format, parseISO } from 'date-fns'

const Page: React.FC = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [popoverDate, setPopoverDate] = useState('2012-12-15T13:47:20.789')

  const formatDate = (value: string) => {
    return format(parseISO(value), 'MMM dd yyyy')
  }

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
        <IonItem>
          <IonInput id="date-input-2" value={popoverDate} />
          <IonButton fill="clear" id="open-date-input-2">
            <IonIcon icon={calendar} />
          </IonButton>
          <IonPopover trigger="open-date-input-2" showBackdrop={false}>
            <IonDatetime
              presentation="date"
              onIonChange={(ev) => setPopoverDate(formatDate(ev.detail.value!))}
            />
          </IonPopover>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Page
