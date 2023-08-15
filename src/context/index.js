import { useContext } from "react";
import { DataContext } from "./DataContext";

const useGlobal = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useGlobal can only be used inside GlobalProvider");
  }
  return context;
};

export default useGlobal;
