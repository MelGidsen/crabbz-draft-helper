export type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

export function deepFreeze<T>(obj: T): Immutable<T> {
  const properties = Object.getOwnPropertyNames(obj);
  for (let key of properties) {
    const value = (obj as any)[key];
    if (key && typeof value === 'object') deepFreeze(value);
  }
  return Object.freeze(obj);
}
