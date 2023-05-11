import { useCallback, useMemo } from "react";

import { useToggle } from "react-use";

export const useAdvancedToggle = (initialValue: boolean) => {
  const [value, toggle] = useToggle(initialValue);

  const toggleFalse = useCallback(() => toggle(false), [toggle]);
  const toggleTrue = useCallback(() => toggle(true), [toggle]);
  return useMemo(
    () => [value, { toggle, toggleFalse, toggleTrue }] as const,
    [value, toggle, toggleFalse, toggleTrue],
  );
};
