'use client';

import React from 'react';
import { Home, BookOpen, Search, Settings } from 'lucide-react';

export type NavTab = 'home' | 'vocab' | 'search' | 'settings';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navItems = [
    { id: 'home' as NavTab, label: '首頁', icon: Home },
    { id: 'vocab' as NavTab, label: '字庫', icon: BookOpen },
    { id: 'search' as NavTab, label: '搜尋', icon: Search },
    { id: 'settings' as NavTab, label: '設定', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[600px] mx-auto px-2 py-1 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              aria-label={item.label}
              className={`flex-1 min-h-[48px] py-1.5 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
