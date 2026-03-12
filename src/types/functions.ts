import type { ChangeEventType } from './types';

export type SetFunctionType<T1, T2 = void> = (value: T1) => T2;

export type SetFunctionAsyncType<T1, T2 = void> = (value: T1) => Promise<T2>;

export type ChangeEventFunctionType<T1, T2 = void> = (event: ChangeEventType<T1>) => T2;

export type ZeroArgsFunctionType<T1 = void> = () => T1;

export type ZeroArgsFunctionAsyncType<T1 = void> = () => Promise<T1>;
