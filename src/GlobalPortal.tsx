import React, { ReactNode, createContext, useState } from 'react';
import { createPortal } from 'react-dom';

/***
 * PortalProvider 컴포넌트는 PortalContext.Provider를 사용하여
 * 자식 요소들을 렌더링하고, 이 컨텍스트에 portalContainerRef를 제공합니다.
 *
 * Portal을 사용하여 자식 요소들을 다른 DOM 위치로 렌더링
 *
 *
 */
const PortalContext = createContext<HTMLDivElement | null>(null);

interface PortalProviderProps {
  children: React.ReactNode;
}

function PortalProvider({ children }: PortalProviderProps) {

 //portalContainerRef는 Portal이 렌더링될 DOM 요소의 참조를 가리키며,
  // useState를 사용하여 상태를 관리합니다.
    const [portalContainerRef, setPortalContainerRef] = useState<HTMLDivElement | null>(null);

    // 이 요소는 <div id="portal-container">로 표시되며,
  // 자식 요소들을 렌더링하기 위한 포털 컨테이너 역할
  return (
    <PortalContext.Provider value={portalContainerRef}>
      {children}
      <div
        id="portal-container"
        ref={elem => {
          if (portalContainerRef !== null || elem === null) {
            return;
          }

          setPortalContainerRef(elem);
        }}
      />
    </PortalContext.Provider>
  );
}

interface PortalConsumerProps {
  children: ReactNode;
}

function PortalConsumer({ children }: PortalConsumerProps) {
  return (
    <PortalContext.Consumer>
      {portalContainerRef => {
        if (portalContainerRef === null) {
          return null;
        }
        return createPortal(children, portalContainerRef);
      }}
    </PortalContext.Consumer>
  );
}
//https://ko.legacy.reactjs.org/docs/portals.html
export const GlobalPortal = {
  Provider: PortalProvider,
  Consumer: PortalConsumer,
};
