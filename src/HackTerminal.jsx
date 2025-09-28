import { useState, useEffect } from "react";

export default function HackTerminal() {
  const [logs, setLogs] = useState([
    "[OK] Environment loaded.",
    "> Connecting to secure node...",
    "[OK] Connection established.",
    "> Initializing Cipher terminal...",
    "[OK] System ready.",
    "",
    "> Press [Y] to Sign Up or [L] to Log In",
  ]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();

      if (key === "y") {
        setLogs((prev) => [...prev, "> Redirecting to signup..."]);
      } else if (key === "l") {
        setLogs((prev) => [...prev, "> Redirecting to login..."]);
      } else if (key === "c") {
        setLogs(["> Press [Y] to Sign Up or [L] to Log In"]);
      } else {
        setLogs((prev) => [...prev, `> Command not recognized: ${key}`]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  },[]);

  return (
    <div
      className="bg-black text-primary p-4 rounded-lg shadow-lg w-full max-w-md h-[400px] overflow-y-auto border border-primary-dark"
    >
      {logs.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap leading-tight">
          {line}
        </div>
      ))}
    </div>
  );
}
