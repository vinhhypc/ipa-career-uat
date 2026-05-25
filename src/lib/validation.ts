export function isValidEmail(email: string) {
  const value = email.trim();
  if (!value) return false;
  if (value.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidFullName(name: string) {
  const value = name.trim();
  if (!value) return false;
  if (value.length > 100) return false;
  return /^[\p{L}\s]+$/u.test(value);
}

export function normalizeVietnamPhone(phone: string) {
  const trimmed = phone.trim();
  if (!trimmed) return '';

  const digits = trimmed.replace(/[^\d+]/g, '');
  if (digits.startsWith('+84')) {
    return `0${digits.slice(3)}`.replace(/[^\d]/g, '');
  }
  return digits.replace(/[^\d]/g, '');
}

export function isValidPhoneNumber(phone: string) {
  const normalized = normalizeVietnamPhone(phone);
  return /^0\d{9,10}$/.test(normalized);
}

export function isValidLinkedInProfileUrl(input: string) {
  const value = input.trim();
  if (!value) return false;

  const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(withScheme);
    const protocol = url.protocol.toLowerCase();
    if (protocol !== 'https:' && protocol !== 'http:') return false;

    const hostname = url.hostname.toLowerCase();
    const isLinkedIn = hostname === 'linkedin.com' || hostname.endsWith('.linkedin.com');
    if (!isLinkedIn) return false;

    return url.pathname !== '/';
  } catch {
    return false;
  }
}
