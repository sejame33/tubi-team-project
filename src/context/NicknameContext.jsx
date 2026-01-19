import { createContext, useContext, useState, useEffect } from "react";

const NicknameContext = createContext(null);

export function NicknameProvider({ children }) {
  const [nickname, setNicknameState] = useState(null);

  // 최초 로드 시 localStorage 확인
  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNicknameState(savedNickname);
    }
  }, []);

  const setNickname = (value) => {
    setNicknameState(value);
    localStorage.setItem("nickname", value);
  };

  return (
    <NicknameContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NicknameContext.Provider>
  );
}

export function useNickname() {
  const context = useContext(NicknameContext);
  if (!context) {
    throw new Error("useNickname must be used within NicknameProvider");
  }
  return context;
}
