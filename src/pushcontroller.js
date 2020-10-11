import React, { Component } from 'react';
import { Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging';
import * as RootNavigation from './rootnavigation';
import { USER } from './actions/types';


class PushController extends Component {
  async configure(onRegister) { 
    
          try {
            await messaging().requestPermission(); 
          } catch (error) {
          }
          const fcmToken = await messaging().getToken();
          if (fcmToken) {
              onRegister(fcmToken);
          } else {
          }
      
        messaging().onNotificationOpenedApp((notificationOpen) => {
            console.log('onNotificationOpenedApp', notificationOpen.data);
            this.navigatePush(notificationOpen.data)

             
        });
      
      
        messaging().getInitialNotification()
          .then((notificationOpen) => {
              console.log('getInitialNotification', notificationOpen.data);
                this.navigatePush(notificationOpen.data)

              
           
          });
  }

  navigatePush(data) {
    switch (data.type) {
        case 'messageDetail':
            console.log('Burda***');
            USER.notif= data;
            RootNavigation.navigate('Messages');
            break;
    
        default:
            break;
    }
    
  }


  render() {
    return null;
  }
}
export default PushController;
