import { useEffect, useRef } from 'react';
// Hook
const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
export default usePrevious;
