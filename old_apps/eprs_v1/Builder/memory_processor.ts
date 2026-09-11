/**
 * EPRS Memory Processor (v1.6.1)
 * Follows /Builder/Processor/Memory_Processor.yaml
 * Generates structured mnemonic memory tips with Schema: { type, content, related_words }
 */

export interface MemoryTip {
  type: string;
  content: string;
  related_words: string[];
}

export function generateMemoryTip(
  word: string,
  patternName: string,
  ipa: string,
  exceptionCheck: {
    is_exception: boolean;
    exception_id?: string | null;
    exception_type?: string | null;
    note?: string | null;
    memory_tip?: any;
  },
  syllables: string[]
): MemoryTip {
  if (exceptionCheck.is_exception && exceptionCheck.memory_tip) {
    const raw = exceptionCheck.memory_tip;
    return {
      type: raw.type || raw.pattern || 'Historical Exception',
      content: raw.content || raw.tip || '',
      related_words: raw.related_words || [],
    };
  }

  const cleanWord = word.toLowerCase().trim();
  const sylJoined = syllables.join('-');

  if (cleanWord === 'advance') {
    return {
      type: 'Prefix Combination + Special Ending',
      content: 'ad- 前綴弱化 /əd/ + vance 軟音 c，重音在第 2 音節 /ədˈvæns/',
      related_words: ['distance', 'balance', 'collapse'],
    };
  }

  if (cleanWord === 'balance') {
    return {
      type: 'Closed Syllable + ANCE Ending Family',
      content: 'bal- 重讀 /bæl/ + -ance 字尾弱化 /əns/，發音 /ˈbæl.əns/',
      related_words: ['distance', 'elegance', 'ambulance'],
    };
  }

  if (cleanWord === 'alliance') {
    return {
      type: 'Open Syllable + ANCE Ending Family',
      content: 'al- 弱化 + li- 開放雙母音 /laɪ/ + -ance /əns/，重音在第 2 音節 /əˈlaɪ.əns/',
      related_words: ['appliance', 'compliance', 'defiance'],
    };
  }

  if (cleanWord === 'collapse') {
    return {
      type: 'Prefix Combination + Closed Syllable',
      content: 'col- 前綴弱化 /kə/ + lapse 重讀 /læps/，發音 /kəˈlæps/',
      related_words: ['advance', 'convince', 'relapse'],
    };
  }

  if (cleanWord === 'defiance') {
    return {
      type: 'Open Syllable + ANCE Ending Family',
      content: 'de- 弱化 /dɪ/ + fiance 雙母音 /faɪ.əns/，發音 /dɪˈfaɪ.əns/',
      related_words: ['alliance', 'appliance', 'compliance'],
    };
  }

  if (cleanWord === 'distance') {
    return {
      type: 'Closed Syllable + ANCE Ending Family',
      content: 'dis- 重讀 /dɪs/ + -tance 弱化 /təns/，發音 /ˈdɪs.təns/',
      related_words: ['balance', 'elegance', 'substance'],
    };
  }

  if (cleanWord === 'elegance') {
    return {
      type: 'Closed Syllable + ANCE Ending Family',
      content: 'e- 重讀 /el/ + leg- 弱化 + -ance 弱化 /ɡəns/，發音 /ˈel.ɪ.ɡəns/',
      related_words: ['ambulance', 'balance', 'distance'],
    };
  }

  if (cleanWord === 'ambulance') {
    return {
      type: 'Closed Syllable + ANCE Ending Family',
      content: 'am- 重讀 /æm/ + bu- 介音 /bjə/ + -lance /ləns/，發音 /ˈæm.bjə.ləns/',
      related_words: ['elegance', 'balance', 'distance'],
    };
  }

  if (cleanWord === 'appliance') {
    return {
      type: 'Prefix Combination + ANCE Ending Family',
      content: 'ap- 弱化 + pli- 雙母音 /plaɪ/ + -ance /əns/，重音在第 2 音節 /əˈplaɪ.əns/',
      related_words: ['alliance', 'compliance', 'defiance'],
    };
  }

  if (cleanWord === 'assistance') {
    return {
      type: 'Prefix Combination + ANCE Ending Family',
      content: 'as- 弱化 /ə/ + sist- 重讀 /sɪst/ + -ance /əns/，發音 /əˈsɪst.əns/',
      related_words: ['attendance', 'compliance', 'resistance'],
    };
  }

  if (cleanWord === 'attendance') {
    return {
      type: 'Prefix Combination + ANCE Ending Family',
      content: 'at- 弱化 /ə/ + tend- 重讀 /tend/ + -ance /əns/，發音 /əˈtend.əns/',
      related_words: ['assistance', 'acceptance', 'guidance'],
    };
  }

  if (cleanWord === 'compliance') {
    return {
      type: 'Prefix Combination + ANCE Ending Family',
      content: 'com- 弱化 /kəm/ + pli- 雙母音 /plaɪ/ + -ance /əns/，發音 /kəmˈplaɪ.əns/',
      related_words: ['appliance', 'alliance', 'defiance'],
    };
  }

  if (cleanWord === 'bridge') {
    return {
      type: 'Consonant Pattern (-dge)',
      content: '-dge 字母組合不發 d，發軟音子音 /dʒ/，全字 /brɪdʒ/',
      related_words: ['judge', 'edge', 'knowledge'],
    };
  }

  if (cleanWord === 'believe') {
    return {
      type: 'Prefix Combination + Vowel Team',
      content: 'be- 弱化前綴 /bɪ/ + lieve 組合發長母音 /liːv/，發音 /bɪˈliːv/',
      related_words: ['relieve', 'achieve', 'receive'],
    };
  }

  if (cleanWord === 'convince') {
    return {
      type: 'Prefix Combination + Special Ending',
      content: 'con- 弱化前綴 /kən/ + vince 軟音 c /vɪns/，發音 /kənˈvɪns/',
      related_words: ['evince', 'province', 'invincible'],
    };
  }

  if (cleanWord === 'associate') {
    return {
      type: 'Palatalization Combination (-ciate)',
      content: 'as- 弱化 /ə/ + so- /soʊ/ + -ciate 腭音化發音 /ʃi.eɪt/，重音在第 2 音節 /əˈsoʊ.ʃi.eɪt/',
      related_words: ['appreciate', 'negotiate', 'initiate'],
    };
  }

  if (cleanWord === 'appreciate') {
    return {
      type: 'Palatalization Combination (-ciate)',
      content: 'ap- 弱化 /ə/ + pre- /prɪ/ + -ciate 腭音化發音 /ʃi.eɪt/，重音在第 2 音節 /əˈpriː.ʃi.eɪt/',
      related_words: ['associate', 'depreciate', 'negotiate'],
    };
  }

  // General fallback
  if (syllables.length > 1) {
    return {
      type: patternName,
      content: `${cleanWord}拆解為 [${sylJoined}]，發音標記 ${ipa}`,
      related_words: [],
    };
  }

  return {
    type: patternName,
    content: `${cleanWord} 符合 ${patternName} 拼讀規則，標準發音為 ${ipa}`,
    related_words: [],
  };
}
