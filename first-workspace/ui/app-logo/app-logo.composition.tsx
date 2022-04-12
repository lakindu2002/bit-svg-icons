import React from 'react';
import { AppLogo } from './app-logo';

export const BasicAppLogo = () => {
  return (
    <AppLogo />
  );
}

export const MiniApplicationLogo = () => {
  return (
    <AppLogo
      width={380}
      height={360}
      characterHeight={400}
      characterWidth={400}
    />
  )
}

export const BlackApplicationLogo = () => {
  return (
    <AppLogo
      fill='black'
      width={380}
      height={360}
      characterHeight={400}
      characterWidth={400}
    />
  )
}
