import { useCallback, useRef, useState } from "react";

export function useTouchHover(delay = 1000) {
  const [touched, setTouched] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onTouchStart = useCallback(() => {
    setTouched(true);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setTouched(false), delay);
  }, [delay]);

  return { touched, onTouchStart, onTouchEnd };
}

