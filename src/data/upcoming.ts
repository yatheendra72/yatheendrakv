// Planned / upcoming posts shown in the "Coming up next" section on the home page.
// Just edit this list — add, remove or reorder. The first item is highlighted as "Up next".
// `note` is optional; keep it to one short line.

export interface Upcoming {
  name: string;
  note?: string;
}

export const upcoming: Upcoming[] = [
  { name: "Raghavendra Swamy", note: "The revered Madhwa saint of Mantralayam." },
  { name: "Purandara Dasa", note: "The grandsire of Carnatic music." },
  { name: "Annamacharya", note: "The earliest composer of Telugu kirtanas to Lord Venkateswara." },
];
