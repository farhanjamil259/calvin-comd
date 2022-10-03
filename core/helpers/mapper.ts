export function mapper<T>(
  source: any,
  destination: new () => T,
  id: string,
  extension: any = {},

  flat: boolean = false
) {
  let output: any = flat ? {} : new destination();

  const propNames = Object.getOwnPropertyNames(
    flat ? new destination() : output
  );

  propNames.forEach((propName) => {
    output[propName] = source[propName];
  });

  output["id"] = id;

  Object.getOwnPropertyNames(extension).forEach((propName) => {
    output[propName] = extension[propName];
  });

  return output as T;
}
