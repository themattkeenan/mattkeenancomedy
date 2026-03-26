export type MediaType = 'standup' | 'short-form' | 'interview' | 'podcast';

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  embedUrl: string;     // YouTube embed URL: https://www.youtube.com/embed/VIDEO_ID
  thumbnailUrl?: string; // Optional custom thumbnail, falls back to YouTube auto-thumb
  duration?: string;    // e.g. "4:32"
  description?: string;
  featured?: boolean;   // Show on homepage
  startHere?: boolean;  // The single "start here" intro clip
}

export const media: MediaItem[] = [
  // Add clips here. Example:
  // {
  //   id: "clip-001",
  //   title: "On Group Projects",
  //   type: "standup",
  //   embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
  //   duration: "3:45",
  //   description: "A bit about the gap between what we plan and what happens.",
  //   featured: true,
  //   startHere: true,
  // },
];

/** Returns the single "start here" clip, or the first featured clip, or the first clip */
export function getStartHereClip(): MediaItem | undefined {
  return (
    media.find((m) => m.startHere) ||
    media.find((m) => m.featured) ||
    media[0]
  );
}

/** Returns featured clips for the homepage grid (excluding startHere clip) */
export function getFeaturedClips(limit = 3): MediaItem[] {
  const startHere = getStartHereClip();
  return media
    .filter((m) => m.featured && m.id !== startHere?.id)
    .slice(0, limit);
}

/** Returns all clips filtered by type */
export function getClipsByType(type: MediaType): MediaItem[] {
  return media.filter((m) => m.type === type);
}

/** Get YouTube thumbnail from embed URL */
export function getYouTubeThumbnail(embedUrl: string): string {
  const match = embedUrl.match(/embed\/([^?]+)/);
  if (match) {
    return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
  }
  return '/images/og/default.jpg';
}
