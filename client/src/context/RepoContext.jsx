import { createContext, useContext, useState } from "react";

const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  const [currentRepo, setCurrentRepo] = useState(null);
  return (
    <RepoContext.Provider value={{ currentRepo, setCurrentRepo }}>
      {children}
    </RepoContext.Provider>
  );
};

export const useRepo = () => useContext(RepoContext);
