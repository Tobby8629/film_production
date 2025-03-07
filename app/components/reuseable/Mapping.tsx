import { mapping } from "@/interfaces";
import { useMemo } from "react";

const Mapping = <T,>({ children, array, className}: mapping<T>) => {
  const optimizedItems = useMemo(() => {
    return array.map((item, index) => (
      <div key={index}>{children(item, index)}</div> // Correctly passing item
    ));
  }, [array, children]); // Include children in dependencies if it's a function

  return <div className={className}>{optimizedItems}</div>;
};

export default Mapping;


