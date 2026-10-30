/**
 * Site feature flags.
 *
 * SHOW_TEAM defaults to off so the placeholder team cards stay hidden.
 * Flip SHOW_TEAM_DEFAULT to true, or set VITE_SHOW_TEAM=true at build/dev time.
 */
const SHOW_TEAM_DEFAULT = false;

export const SHOW_TEAM =
  typeof import.meta.env.VITE_SHOW_TEAM === 'string'
    ? import.meta.env.VITE_SHOW_TEAM === 'true'
    : SHOW_TEAM_DEFAULT;
