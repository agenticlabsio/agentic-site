'use client';

import Script from 'next/script';

export default function ElevenLabsVoiceWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
      {/* @ts-expect-error - Custom element from ElevenLabs SDK */}
      <elevenlabs-convai agent-id="agent_6601kfwbkw35e929cv72r8cffdcj" />
    </>
  );
}
