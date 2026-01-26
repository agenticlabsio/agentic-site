import * as migration_20260126_035109_initial from './20260126_035109_initial';

export const migrations = [
  {
    up: migration_20260126_035109_initial.up,
    down: migration_20260126_035109_initial.down,
    name: '20260126_035109_initial'
  },
];
