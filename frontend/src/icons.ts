const paths: Record<string, string> = {
  model: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  unique: '<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/>',
  number: '<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
  team: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 2 4 5"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
}

export const icon = (name: string) => `<svg class="ic" viewBox="0 0 24 24">${paths[name] ?? ''}</svg>`
