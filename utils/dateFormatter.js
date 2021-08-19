export function dateFormatter(d) {
  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }
  return (
    pad(d.getUTCDate()) +
    '-' +
    pad(d.getUTCMonth() + 1) +
    '-' +
    d.getUTCFullYear()
  );
}

export function dateFormatterWithTime(d) {
  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }
  return (
    pad(d.getUTCDate()) +
    '-' +
    pad(d.getUTCMonth() + 1) +
    '-' +
    d.getUTCFullYear() +
    ',' +
    pad(d.getUTCHours()) +
    ':' +
    pad(d.getUTCMinutes()) +
    ':' +
    pad(d.getUTCSeconds())
  );
}

export function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}
