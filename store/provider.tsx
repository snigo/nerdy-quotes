import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { useStore } from '.';
import { AppState } from './const';

interface ReduxProviderProps {
  initialPageState: AppState;
}

const ReduxProvider: FunctionComponent<ReduxProviderProps> = ({ children, initialPageState }) => {
  const store = useStore(initialPageState);
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};

export default ReduxProvider;
