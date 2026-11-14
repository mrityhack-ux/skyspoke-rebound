/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect, useRef } from 'react';

export default function App() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const focusFrame = () => {
      frameRef.current?.contentWindow?.focus();
    };
    const timer = window.setTimeout(focusFrame, 150);
    window.addEventListener('focus', focusFrame);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('focus', focusFrame);
    };
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#08061a]">
      <iframe
        ref={frameRef}
        src="/skyspoke-rebound.html"
        title="SkySpoke Rebound — 3D Bicycle Obby"
        className="w-full h-full border-0 block"
        allow="autoplay; fullscreen"
        onLoad={() => frameRef.current?.contentWindow?.focus()}
      />
    </main>
  );
}
