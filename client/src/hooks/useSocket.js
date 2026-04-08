import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { nanoid } from 'nanoid';

const SESSION_KEY = 'codebox_session_id';

function getSessionId() {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = nanoid();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function useSocket() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const sessionId = getSessionId();
    const s = io({ auth: { sessionId } });

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
