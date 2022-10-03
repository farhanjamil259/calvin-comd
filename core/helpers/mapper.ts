export function mapper<T>(source: any, destination: new () => T, id: string) {
  let output = new destination();

  const propNames = Object.getOwnPropertyNames(output);

  propNames.forEach((propName) => {
    (output as any)[propName] = source[propName];
  });

  (output as any)["id"] = id;

  return output as T;
}
