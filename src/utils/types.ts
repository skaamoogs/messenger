export type Events = Record<string, (event: Event) => void>;

export type Indexed<T = unknown> = {
  [key in string]: T;
};

export type HTTPMethod = (url: string, options?: Indexed) => Promise<unknown>;

export type Handler<A extends unknown[] = unknown[]> = (...args: A) => void;

export type MapInterface<P> = P[keyof P];
