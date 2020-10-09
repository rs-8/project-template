import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;