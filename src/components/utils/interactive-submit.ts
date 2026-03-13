export type SubmitHandler<TInput> = (input: TInput) => Promise<void>;

export function createConsoleSubmitHandler<TInput>(
  componentName: string,
): SubmitHandler<TInput> {
  return async (input: TInput) => {
    console.log(`[${componentName}] submission`, input);
  };
}
