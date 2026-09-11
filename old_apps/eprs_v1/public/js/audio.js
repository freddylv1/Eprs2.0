// EPRS Modular Audio Engine (Dual-Engine: HTML5 Audio + Web Speech API fallback)
window.EPRS_AUDIO = (function() {
  let isLocked = false;
  let activeAudio = null;
  let cachedVoices = [];

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const loadVoices = () => {
        const v = window.speechSynthesis.getVoices();
        if (v && v.length > 0) cachedVoices = v;
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    } catch {}
  }

  function play(word, buttonElement) {
    if (isLocked) return;
    const cleanWord = (word || '').replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').replace(/[^a-zA-Z\s'-]/g, '').trim();
    if (!cleanWord) return;

    isLocked = true;
    if (buttonElement) {
      buttonElement.classList.add('loading');
      buttonElement.innerText = '🔊';
      buttonElement.style.opacity = '0.7';
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch {}
    }

    const unlock = () => {
      setTimeout(() => {
        isLocked = false;
        if (buttonElement) {
          buttonElement.classList.remove('loading');
          buttonElement.innerText = '🔊';
          buttonElement.style.opacity = '1';
        }
      }, 200);
    };

    // 1. Try Online Standard Human Stream (Youdao Audio API) with fast failover
    try {
      if (activeAudio) {
        activeAudio.pause();
        activeAudio = null;
      }
      const audioUrl = 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(cleanWord.toLowerCase()) + '&type=2';
      const audio = new Audio(audioUrl);
      activeAudio = audio;

      let hasPlayed = false;
      let isDone = false;

      const handleFinish = (success) => {
        if (isDone) return;
        isDone = true;
        if (success) {
          unlock();
        } else {
          fallbackSpeechSynthesis(cleanWord, unlock);
        }
      };

      audio.onplay = () => { hasPlayed = true; };
      audio.onended = () => handleFinish(true);
      audio.onerror = () => handleFinish(false);

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => handleFinish(false));
      }

      // Fast failover timeout (1.2s)
      setTimeout(() => {
        if (!hasPlayed && !isDone) {
          handleFinish(false);
        }
      }, 1200);
    } catch (e) {
      fallbackSpeechSynthesis(cleanWord, unlock);
    }

    // Lock reset failsafe
    setTimeout(() => {
      if (isLocked) unlock();
    }, 3000);
  }

  function fallbackSpeechSynthesis(text, onComplete) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = 0.85;
        utter.pitch = 1.0;
        utter.volume = 1.0;

        window.__eprs_active_utter = utter;

        const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
        const usVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && !v.name.includes('Bad')) ||
                        voices.find(v => v.lang.startsWith('en'));
        if (usVoice) utter.voice = usVoice;

        utter.onend = () => {
          window.__eprs_active_utter = null;
          onComplete();
        };
        utter.onerror = () => {
          window.__eprs_active_utter = null;
          onComplete();
        };
        window.speechSynthesis.speak(utter);
      } catch (e) {
        onComplete();
      }
    } else {
      onComplete();
    }
  }

  return { play };
})();