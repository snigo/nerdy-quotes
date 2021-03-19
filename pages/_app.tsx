import type { AppProps } from 'next/app';
import ReduxProvider from '../store/provider';

import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider initialPageState={pageProps.initialReduxState}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
