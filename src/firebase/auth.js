import auth from '@react-native-firebase/auth';
import React, {useState, useEffect, Component} from 'react';

export const createAccount = (username, email, password, gaurdian) => {
  console.log('Creating account', [username, email, password, gaurdian]);
  //create account in firebase
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      //set state in redux
      if (gaurdian) {
        console.log('New gaurdian account', username);
      } else {
        console.log('New User account', username);
      }
      return 'Success';
    })
    .catch(err => {
      console.log(err);
      return 'Error';
    });
};
