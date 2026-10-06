const dinarFormatter = new Intl.NumberFormat('fr-DZ', {
  maximumFractionDigits: 0,
});

export function formatPrice(amount, currency = 'DZD') {
  if (!Number.isFinite(amount)) {
    throw new TypeError('Price must be a finite number.');
  }

  return `${dinarFormatter.format(amount)} ${currency === 'DZD' ? 'DA' : currency}`;
}
