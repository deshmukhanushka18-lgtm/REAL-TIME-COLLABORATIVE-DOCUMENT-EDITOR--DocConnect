import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ["websocket"],
  };

  const socket = io(process.env.REACT_APP_BACKEND_URL || "http://localhost:5000", options);

  socket.on("connect", () => {
    console.log("Socket connected ", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.log("Socket error ", err.message);
  });

  return socket;
};
