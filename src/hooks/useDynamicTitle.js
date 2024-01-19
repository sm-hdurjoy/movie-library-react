// Library IMPORTS
import { useEffect } from "react";

export const useDynamicTitle = (title) => {

  // Setting dynamic title whenever a component is mounted
  useEffect(() => {
    document.title = `${title} / MovieMate`;
  });
  return null;
};
