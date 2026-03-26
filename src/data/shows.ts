export interface Show {
  date: string; // ISO date string: "2026-04-05"
  venue: string;
  city: string;
  state?: string;
  country?: string;
  ticketUrl?: string;
  soldOut?: boolean;
  privateEvent?: boolean;
  note?: string; // e.g. "with special guests", "headlining"
}

export const shows: Show[] = [
  // Add upcoming shows here. Example:
  // {
  //   date: "2026-05-10",
  //   venue: "The Comedy Bar",
  //   city: "Toronto",
  //   state: "ON",
  //   ticketUrl: "https://example.com/tickets",
  // },
];

/** Returns only future shows, sorted soonest first */
export function getUpcomingShows(): Show[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return shows
    .filter((s) => new Date(s.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/** Format a date string for display */
export function formatShowDate(dateStr: string): { day: string; month: string; year: string; full: string } {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    day: d.toLocaleDateString('en-CA', { day: '2-digit' }),
    month: d.toLocaleDateString('en-CA', { month: 'short' }).toUpperCase(),
    year: d.toLocaleDateString('en-CA', { year: 'numeric' }),
    full: d.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

/** Group shows by month label */
export function groupShowsByMonth(showList: Show[]): Map<string, Show[]> {
  const map = new Map<string, Show[]>();
  for (const show of showList) {
    const d = new Date(show.date + 'T00:00:00');
    const key = d.toLocaleDateString('en-CA', { month: 'long', year: 'numeric' });
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(show);
  }
  return map;
}
