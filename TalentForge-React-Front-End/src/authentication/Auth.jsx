// This module provides a function to obtain the user and token and return matching status to the caller
// If the user is an admin, the function returns true
// If the profile's user id is the same as the token, the function returns true
import React, { useContext, createContext, useState, useEffect } from 'react';
import { AuthProvider } from './AuthContext'
import { UserContext } from '../authentication/UserContext'
import decoder from './decoder'


export default function Auth(profileUserId) {
  const token = sessionStorage.getItem('token')
  const currentUser = useContext(UserContext)

  const tokenId = decoder(token)

  let match

    if (currentUser.isAdmin === true) {
      match = true
    } else if (profileUserId === tokenId) {
      match = true
    } else {
      match = false
    }

  return match
}
