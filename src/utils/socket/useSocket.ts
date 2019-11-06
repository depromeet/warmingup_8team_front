import { useContext, useEffect, useRef } from "react";
import { Context } from "./context";

export function useSocket(eventKey: any, callback: any) {
  const socket = useContext(Context);
  const callbackRef: any = useRef(callback);
  callbackRef.current = callback;

  function socketHandler(this: any) {
    callbackRef.current && callbackRef.current.apply(this, arguments);
  }

  useEffect(() => {
    if (eventKey && socket) {
      socket.on(eventKey, socketHandler);
      return () => socket.removeListener(eventKey, socketHandler);
    }
  }, [eventKey]);

  return socket;
}