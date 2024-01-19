import { useEffect } from "react";

export const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / MovieMate`;
  });
  return null;
};
