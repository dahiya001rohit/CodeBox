import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { SOCKET_URL } from '../utils/constants';

const SESSION_KEY = 'codebox_session_id';

function getSessionId() {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = nanoid();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

// Dummy socket that accepts .on()/.off()/.emit() calls without doing anything
const dummySocket = {
  on: () => {},
  off: () => {},
  emit: () => {},
  disconnect: () => {},
};

export function useSocket() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // No backend available on static hosting — skip connection entirely
    if (!SOCKET_URL && SOCKET_URL !== undefined) {
      setSocket(dummySocket);
      setIsConnected(false);
      return;
    }

    const sessionId = getSessionId();
    const s = io(SOCKET_URL || undefined, { auth: { sessionId } });

    s.on('connect', () => setIsConnected(true));
    s.on('disconnect', () => setIsConnected(false));

    setSocket(s);

    return () => {
      s.disconnect();
      setSocket(null);
      setIsConnected(false);
    };
  }, []);

  return { socket, isConnected };
}
