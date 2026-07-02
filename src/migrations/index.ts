import * as migration_20260126_035109_initial from './20260126_035109_initial';
import * as migration_20260227_153548 from './20260227_153548';
import * as migration_20260702_174648_add_leads from './20260702_174648_add_leads';

export const migrations = [
  {
    up: migration_20260126_035109_initial.up,
    down: migration_20260126_035109_initial.down,
    name: '20260126_035109_initial',
  },
  {
    up: migration_20260227_153548.up,
    down: migration_20260227_153548.down,
    name: '20260227_153548',
  },
  {
    up: migration_20260702_174648_add_leads.up,
    down: migration_20260702_174648_add_leads.down,
    name: '20260702_174648_add_leads'
  },
];
