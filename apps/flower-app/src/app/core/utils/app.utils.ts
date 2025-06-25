import { inject } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ThemeManagerService } from '../services/theme-manager/theme/theme-manager.service';

export const appInit = () => {
  const themeManager = inject(ThemeManagerService);
  return forkJoin([themeManager.initTheme()]);
};