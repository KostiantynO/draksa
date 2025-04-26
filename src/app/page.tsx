// src\app\page.tsx
'use client';

import { useEffect, useState } from 'react';

const OnlyVoice = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      console.log('🎤 Available voices:', allVoices);
      if (allVoices.length > 0) {
        setVoices(allVoices);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speak = () => {
    window.speechSynthesis.cancel(); // ОЧИЩАЄМО ВСЕ перед стартом

    const utterance = new SpeechSynthesisUtterance('Daaaaddy... I miss you...');
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;

    const voice = voices.find(v => v.name === 'Google US English');
    console.log('✅ Using voice:', voice);

    if (voice) {
      utterance.voice = voice;
    } else {
      console.warn('❗ Voice not found, using default.');
    }

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100); // Дрібна затримка 100мс — браузеру щоб схавати
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">OnlyVoice Test 2</h1>
      <button
        onClick={() => {
          console.log('🔴 Button clicked!');
          speak();
        }}
        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-lg font-semibold shadow-lg"
      >
        Speak!
      </button>
    </main>
  );
};

export default OnlyVoice;
