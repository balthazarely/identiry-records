import React from 'react';
import Layout from './src/components/Layout';
import { NavProvider } from './src/components/NavContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <NavProvider>{element}</NavProvider>;
}
