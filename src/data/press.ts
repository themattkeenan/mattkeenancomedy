export interface PressCredit {
  venue: string;
  type: 'festival' | 'club' | 'tv' | 'podcast' | 'publication' | 'other';
  year?: number;
  url?: string;
}

export interface PressQuote {
  quote: string;
  source: string;
  publication?: string;
  url?: string;
}

export interface HeadshotAsset {
  label: string;
  filename: string; // relative to /images/headshots/
  downloadLabel: string;
}

export const credits: PressCredit[] = [
  // Add credits here. Example:
  // { venue: "JFL42", type: "festival", year: 2024 },
  // { venue: "The Comedy Bar", type: "club" },
  // { venue: "CBC Radio", type: "podcast", year: 2025, url: "https://..." },
];

export const pressQuotes: PressQuote[] = [
  // Add press quotes here. Example:
  // {
  //   quote: "Deadpan without being cold. Keenan makes you feel like you've been thinking the same thing the whole time.",
  //   source: "The Grid TO",
  //   publication: "The Grid TO",
  // },
];

export const headshots: HeadshotAsset[] = [
  // Add headshots here once uploaded to public/images/headshots/
  // Example:
  // { label: "Headshot (Colour)", filename: "matt-keenan-headshot-colour.jpg", downloadLabel: "Download Headshot (Colour, hi-res)" },
  // { label: "Headshot (B&W)", filename: "matt-keenan-headshot-bw.jpg", downloadLabel: "Download Headshot (B&W, hi-res)" },
];

export const pressKitPdf = '/downloads/matt-keenan-press-kit.pdf';
// Set to '' or undefined if no PDF exists yet

export const shortBio = `Matt Keenan is a stand-up comedian based in Toronto. His comedy is observational, deadpan, and occasionally sounds like accidental wisdom. He's been performing long enough to have opinions about it.`;

export const longBio = `Matt Keenan started doing stand-up for the same reason most people do: he had things to say and couldn't figure out a more normal outlet for them.

His material tends to sit in the space between the obvious thing everyone is thinking and the slightly uncomfortable truth nobody wanted to say out loud. It's observational. It's deadpan. Occasionally it sounds like something a person would say if they were trying to explain modern life to someone who had just woken up from a twenty-year sleep and needed a reasonable update.

He's performed at clubs and festivals across the country and has spent enough time on stage to understand that the best bits come from the places where nothing quite adds up — which, based on available data, is most places.

He lives in Toronto. He is working on more material.`;
