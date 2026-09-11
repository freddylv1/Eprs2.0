import { FontSizePreference } from './types';

export function getModalFontSizeClasses(fontSize: FontSizePreference = 'medium') {
  return {
    small: {
      title: 'text-sm font-bold',
      subtext: 'text-[11px]',
      body: 'text-xs',
      largeWord: 'text-lg font-bold',
      ipa: 'text-xs font-mono',
      badge: 'text-[10px] px-1.5 py-0.5',
      button: 'text-xs px-2.5 py-1',
      tag: 'text-[10px] px-1 py-0.2',
      tableText: 'text-xs'
    },
    medium: {
      title: 'text-base font-bold',
      subtext: 'text-xs',
      body: 'text-sm',
      largeWord: 'text-2xl font-bold',
      ipa: 'text-sm font-mono',
      badge: 'text-xs px-2 py-0.5',
      button: 'text-xs px-3 py-1.5',
      tag: 'text-[11px] px-1.5 py-0.5',
      tableText: 'text-xs sm:text-sm'
    },
    large: {
      title: 'text-lg font-extrabold',
      subtext: 'text-sm',
      body: 'text-base',
      largeWord: 'text-3xl font-extrabold',
      ipa: 'text-base font-mono font-bold',
      badge: 'text-sm px-2.5 py-1',
      button: 'text-sm px-3.5 py-2',
      tag: 'text-xs px-2 py-0.5',
      tableText: 'text-sm sm:text-base'
    },
    xlarge: {
      title: 'text-xl font-black',
      subtext: 'text-base',
      body: 'text-lg',
      largeWord: 'text-4xl font-black',
      ipa: 'text-lg font-mono font-black',
      badge: 'text-base px-3 py-1.5',
      button: 'text-base px-4 py-2.5',
      tag: 'text-sm px-2.5 py-1',
      tableText: 'text-base sm:text-lg'
    }
  }[fontSize];
}
