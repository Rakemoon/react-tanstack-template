export type Result<T, E = Error> = [success: true, T] | [success: false, E];
