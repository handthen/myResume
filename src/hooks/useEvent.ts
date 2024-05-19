import { useEffect, useRef } from 'react';
import { getType } from '@/utils';

type eventFn = (e: MouseEvent) => any;

export interface ConfigEvent {
  [name: string]: eventFn;
}

export default function useEvent(selector: HTMLElement | string | Document, configEvent: ConfigEvent = {}) {
  let flag = false;
  let dom: HTMLElement = null!;
  const EventMap = { ...configEvent };
  useEffect(() => {
    if (!flag) {
      dom = getType(selector).indexOf('Element') != -1 ? (selector as HTMLElement) : document.querySelector(selector as string)!;
    }
    if (dom && !flag) {
      addEvent(configEvent);
    }
    return () => {
      if (flag) {
        dom && removeEvent(configEvent);
      }
      flag = true;
    };
  }, [selector]);

  const addEvent = (configEvent: ConfigEvent) => {
    const keys = Object.keys(configEvent);
    keys.forEach((v) => {
      const listener = configEvent[v] as EventListener;
      if (EventMap[v]) {
        removeEvent({ v: EventMap[v] });
      }
      EventMap[v] = listener;
      dom.addEventListener(v, listener);
    });
  };

  const removeEvent = (configEvent: ConfigEvent) => {
    const keys = Object.keys(configEvent);
    keys.forEach((v) => {
      const listener = configEvent[v] as EventListener;
      delete EventMap[v];
      dom.removeEventListener(v, listener);
    });
  };

  return [addEvent, removeEvent];
}
