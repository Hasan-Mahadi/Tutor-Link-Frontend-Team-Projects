/* eslint-disable @typescript-eslint/no-unused-vars */
// components/theme-toggle.tsx
'use client';

import { useTheme } from '@/app/theme-provider';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();

  // Only render the toggle after mounting to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Determine which button to show based on current theme
  const showDarkButton = resolvedTheme === 'light';
  const showLightButton = resolvedTheme === 'dark';

  return (
    <div className="flex gap-2 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
      {showDarkButton && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme('dark')}
          className="h-8 w-8 p-0"
          aria-label="Switch to dark mode"
        >
          <Moon className="h-4 w-4" />
        </Button>
      )}

      {showLightButton && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme('light')}
          className="h-8 w-8 p-0"
          aria-label="Switch to light mode"
        >
          <Sun className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
