export type EmptyObjectType = object;

export type KeyValueObjectType<V> = Record<string | number | symbol, V>;

export type ChangeEventType<T = HTMLInputElement | HTMLTextAreaElement> =
    | React.ChangeEvent<T>
    | Event;

export type SubmitEventType<T = HTMLFormElement> = React.SubmitEvent<T> | Event;

export type MakeOptionalType<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
