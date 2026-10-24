import { createContext, useContext, useMemo, useState } from "react";

const USERS_KEY = "studentdesk-users";
const SESSION_KEY = "studentdesk-session";

const AuthContext = createContext(null);

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readSession());

  const signup = ({ name, email, password }) => {
    const users = readUsers();
    const normalized = email.trim().toLowerCase();

    if (users.some((entry) => entry.email === normalized)) {
      throw new Error("This email is already registered. Please log in.");
    }

    const nextUser = {
      name: name.trim(),
      email: normalized,
      password,
    };

    writeUsers([...users, nextUser]);

    const session = { name: nextUser.name, email: nextUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
  };

  const login = ({ email, password }) => {
    const users = readUsers();
    const normalized = email.trim().toLowerCase();
    const found = users.find(
      (entry) => entry.email === normalized && entry.password === password
    );

    if (!found) {
      throw new Error("Email or password is incorrect.");
    }

    const session = { name: found.name, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const value = useMemo(() => ({ user, signup, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
