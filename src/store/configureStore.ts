import { useDispatch, useSelector } from 'react-redux';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { LazyLoadedSlices } from './types';

export const rootReducer =
  combineSlices().withLazyLoadedSlices<LazyLoadedSlices>();

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    enhancers: (defaultEnhancers) => defaultEnhancers().concat(),
    preloadedState,
  });
};

export const store = setupStore();
