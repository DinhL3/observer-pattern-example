import { createContext, useState } from 'react';

// Define the shape (interface) of the data that will be available in the context.
// It includes the count and a function to increment the count.
interface CounterContextType {
  count: number;
  incrementCount: () => void;
}

// Create the context with a default value.
// We initialize the context with default values: count starts at 0, and the incrementCount function is a no-op (empty function) for now.
// This is a placeholder until we provide real values in the provider.
export const CounterContext = createContext<CounterContextType>({
  count: 0,
  incrementCount: () => {},
});

// Define the types of the props the provider will accept.
// This provider will accept `children` (which represents the nested components inside this provider).
interface Props {
  children: React.ReactNode;
}

// The CounterContextProvider component wraps around any components that need access to the counter state.
// This component will provide the state and the function to change the state to its children.
export default function CounterContextProvider({ children }: Props) {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // We define the value that will be available to any components that consume this context.
  // It includes the current `count` value and the `incrementCount` function to update it.
  const contextValue: CounterContextType = {
    count: count,
    incrementCount: incrementCount,
  };

  // The context provider component wraps its children and provides them access to the `count` and `incrementCount`.
  // Any component inside this provider will be able to access the `count` and `incrementCount` through the `CounterContext`.
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}
