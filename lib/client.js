/* dsh-figstudio client bundle - generated from src/*.js. Do not edit directly. */
window.__ModuleLoader__.load({
  id: "dsh-figstudio",
  factory: function (require) {
    var React = require("react");
    var h = React.createElement;

/*
 * dsh-figstudio - pure figure/chart model and layout helpers.
 * This file is bundled into client.js; it has no browser or React dependency.
 */

var FIGSTUDIO_SCHEMA = 1;

var PALETTES = {
  nature: ['#3C5488', '#E64B35', '#4DBBD5', '#00A087', '#F39B7F', '#8491B4', '#91D1C2', '#DC0000', '#7E6148'],
  cell: ['#0072B5', '#E18727', '#20854E', '#BC3C29', '#6F99AD', '#FFDC91', '#EE4C97', '#8A6BBE'],
  science: ['#0C5DA5', '#00B945', '#FF9500', '#FF2C00', '#845B97', '#474747', '#9E9E9E', '#0AA3A3'],
  lancet: ['#00468B', '#ED0000', '#42B540', '#0099B4', '#925E9F', '#FDAF91', '#AD002A', '#6F99AD'],
  nejm: ['#BC3C29', '#0072B5', '#E18727', '#20854E', '#7876B1', '#6F99AD', '#FFDC91', '#EE4C97'],
  okabe: ['#E69F00', '#56B4E9', '#009E73', '#F0E442', '#0072B2', '#D55E00', '#CC79A7', '#333333'],
  mono: ['#222222', '#555555', '#888888', '#BBBBBB', '#DDDDDD', '#EFEFEF']
};

var PALETTE_NAMES = ['nature', 'cell', 'science', 'lancet', 'nejm', 'okabe', 'mono'];

var FONT_STACKS = {
  'Arial': 'Arial, Helvetica, sans-serif',
  'Helvetica': 'Helvetica, Arial, sans-serif',
  'Segoe UI': '"Segoe UI", Arial, sans-serif',
  'Times New Roman': '"Times New Roman", Times, serif',
  'Georgia': 'Georgia, "Times New Roman", serif',
  'Courier New': '"Courier New", Courier, monospace'
};
var FONT_NAMES = Object.keys(FONT_STACKS);

var CHART_TYPES = ['bar', 'stackedBar', 'line', 'area', 'scatter', 'pie'];
var CHART_LABEL_KEYS = {
  bar: 'chartBar',
  stackedBar: 'chartStackedBar',
  line: 'chartLine',
  area: 'chartArea',
  scatter: 'chartScatter',
  pie: 'chartPie'
};

var ARTBOARD_PRESETS = [
  { key: 'single', width: 800, height: 600 },
  { key: 'double', width: 1400, height: 900 },
  { key: 'square', width: 1000, height: 1000 },
  { key: 'slide', width: 1600, height: 900 },
  { key: 'custom', width: 0, height: 0 }
];

var ELEMENT_TYPES = ['text', 'rect', 'ellipse', 'line', 'arrow', 'polyline', 'path', 'icon', 'bracket'];

var ICON_DEFS = {
  cell: {
    parts: [
      { d: 'M50 9 C73 9 91 28 91 50 C91 72 73 91 50 91 C27 91 9 72 9 50 C9 28 27 9 50 9 Z', fill: 'none', stroke: 'primary', sw: 3 },
      { d: 'M50 32 C61 32 70 41 70 50 C70 60 61 69 50 69 C39 69 30 60 30 50 C30 41 39 32 50 32 Z', fill: 'detail', stroke: 'none' },
      { d: 'M38 38 C43 42 46 46 46 50', fill: 'none', stroke: 'detail', sw: 1.5, opacity: 0.4 }
    ]
  },
  dna: {
    parts: [
      { d: 'M32 8 C68 24 32 42 68 58 C96 70 42 82 32 92', fill: 'none', stroke: 'primary', sw: 3.4, linecap: 'round' },
      { d: 'M68 8 C32 24 68 42 32 58 C4 70 58 82 68 92', fill: 'none', stroke: 'primary', sw: 3.4, linecap: 'round', opacity: 0.55 },
      { d: 'M40 20 L61 30 M35 38 L66 48 M34 66 L65 56 M39 82 L61 74', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round' }
    ]
  },
  protein: {
    parts: [
      { d: 'M27 35 C18 20 39 8 52 18 C66 5 86 18 80 34 C96 47 83 69 66 65 C57 84 32 79 30 62 C12 61 12 42 27 35 Z', fill: 'primary', stroke: 'none', opacity: 0.85 },
      { d: 'M38 42 C45 36 52 44 48 50 C54 58 65 54 63 45', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round' }
    ]
  },
  antibody: {
    parts: [
      { d: 'M50 88 L50 57 M50 57 L28 25 M50 57 L72 25', fill: 'none', stroke: 'primary', sw: 7, linecap: 'round', linejoin: 'round' },
      { d: 'M22 22 L34 30 M78 22 L66 30', fill: 'none', stroke: 'detail', sw: 3, linecap: 'round' }
    ]
  },
  virus: {
    parts: [
      { d: 'M50 50 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0', fill: 'primary', stroke: 'none', opacity: 0.9 },
      { d: 'M50 50 m-13 0 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0', fill: 'detail', stroke: 'none' },
      { d: 'M50 20 L50 6 M50 80 L50 94 M20 50 L6 50 M80 50 L94 50 M29 29 L19 19 M71 71 L81 81 M29 71 L19 81 M71 29 L81 19', fill: 'none', stroke: 'primary', sw: 3, linecap: 'round' }
    ]
  },
  bacterium: {
    parts: [
      { d: 'M22 50 C22 32 35 24 50 24 C65 24 78 32 78 50 C78 68 65 76 50 76 C35 76 22 68 22 50 Z', fill: 'primary', stroke: 'none', opacity: 0.85 },
      { d: 'M78 54 C88 54 90 64 98 66 C90 70 86 60 78 60', fill: 'none', stroke: 'detail', sw: 2.5, linecap: 'round' },
      { d: 'M38 44 C42 40 47 44 45 49 M56 58 C60 54 65 58 63 63', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round' }
    ]
  },
  flask: {
    parts: [
      { d: 'M39 12 L39 36 L19 78 C15 87 21 92 31 92 L69 92 C79 92 85 87 81 78 L61 36 L61 12', fill: 'none', stroke: 'primary', sw: 3, linejoin: 'round' },
      { d: 'M33 9 L67 9', fill: 'none', stroke: 'primary', sw: 4, linecap: 'round' },
      { d: 'M29 66 L71 66 L79 84 C81 89 78 91 71 91 L29 91 C22 91 19 89 21 84 Z', fill: 'detail', stroke: 'none' },
      { d: 'M40 78 C44 74 49 80 53 76 C57 72 62 78 66 74', fill: 'none', stroke: 'primary', sw: 1.5, opacity: 0.5 }
    ]
  },
  petri: {
    parts: [
      { d: 'M50 50 m-36 0 a36 20 0 1 0 72 0 a36 20 0 1 0 -72 0', fill: 'primary', stroke: 'primary', sw: 1, opacity: 0.18 },
      { d: 'M50 50 m-36 0 a36 20 0 1 0 72 0 a36 20 0 1 0 -72 0', fill: 'none', stroke: 'primary', sw: 3 },
      { d: 'M26 46 C31 42 39 44 44 47 M54 42 C62 39 70 43 72 47 M38 55 C45 58 53 55 58 52', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round' }
    ]
  },
  syringe: {
    parts: [
      { d: 'M28 30 L64 66 L74 56 L38 20 Z', fill: 'primary', stroke: 'none', opacity: 0.85 },
      { d: 'M64 66 L84 86', fill: 'none', stroke: 'primary', sw: 3, linecap: 'round' },
      { d: 'M22 24 L38 40 M18 36 L28 46', fill: 'none', stroke: 'detail', sw: 4, linecap: 'round' },
      { d: 'M38 40 L44 46 M48 50 L54 56 M58 60 L64 66', fill: 'none', stroke: 'detail', sw: 1.5, opacity: 0.6 }
    ]
  },
  neuron: {
    parts: [
      { d: 'M46 54 C40 42 28 42 20 34 M46 54 C38 66 26 68 18 78 M52 50 C58 38 72 38 82 28 M54 55 C64 62 74 64 82 74 M50 44 C48 32 52 22 58 12', fill: 'none', stroke: 'primary', sw: 2.6, linecap: 'round' },
      { d: 'M50 50 m-15 0 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0', fill: 'primary', stroke: 'none' },
      { d: 'M58 55 L86 82', fill: 'none', stroke: 'detail', sw: 5, linecap: 'round' }
    ]
  },
  mito: {
    parts: [
      { d: 'M20 50 C20 34 30 28 50 28 C70 28 80 34 80 50 C80 66 70 72 50 72 C30 72 20 66 20 50 Z', fill: 'primary', stroke: 'none', opacity: 0.22 },
      { d: 'M20 50 C20 34 30 28 50 28 C70 28 80 34 80 50 C80 66 70 72 50 72 C30 72 20 66 20 50 Z', fill: 'none', stroke: 'primary', sw: 3 },
      { d: 'M31 36 C39 44 31 56 39 64 M44 32 C52 42 44 58 52 68 M57 31 C65 41 57 59 65 68', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round' }
    ]
  },
  heart: {
    parts: [
      { d: 'M50 86 C20 66 10 48 18 32 C26 16 44 18 50 31 C56 18 74 16 82 32 C90 48 80 66 50 86 Z', fill: 'primary', stroke: 'none' },
      { d: 'M34 42 C40 35 48 40 44 48', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round', opacity: 0.7 }
    ]
  },
  brain: {
    parts: [
      { d: 'M30 78 C18 70 18 58 24 50 C16 40 22 28 34 26 C38 14 58 14 64 24 C78 24 86 36 80 48 C88 58 82 72 70 76 C64 88 42 88 36 80 Z', fill: 'primary', stroke: 'none', opacity: 0.8 },
      { d: 'M50 20 C46 32 56 40 50 52 C44 64 54 72 50 84 M33 34 C40 42 32 50 39 58 M65 32 C58 40 66 48 59 56', fill: 'none', stroke: 'detail', sw: 2, linecap: 'round' }
    ]
  },
  lungs: {
    parts: [
      { d: 'M48 28 L48 58 M48 34 C38 24 18 32 18 54 C18 74 30 84 42 80 C48 76 48 64 48 58 M52 34 C62 24 82 32 82 54 C82 74 70 84 58 80 C52 76 52 64 52 58', fill: 'none', stroke: 'primary', sw: 3.4, linejoin: 'round' },
      { d: 'M44 14 L44 30 C44 34 56 34 56 30 L56 14', fill: 'none', stroke: 'detail', sw: 4, linecap: 'round' }
    ]
  },
  mouse: {
    parts: [
      { d: 'M28 58 C28 42 42 34 58 38 C72 42 80 52 76 64 C72 76 58 82 44 78 C32 74 28 68 28 58 Z', fill: 'primary', stroke: 'none', opacity: 0.9 },
      { d: 'M34 38 C30 28 40 24 45 33 Z M56 35 C60 25 70 29 66 38 Z', fill: 'primary', stroke: 'none' },
      { d: 'M76 64 C88 66 90 78 98 74', fill: 'none', stroke: 'primary', sw: 3, linecap: 'round' },
      { d: 'M32 60 L18 56 M32 66 L16 70', fill: 'none', stroke: 'detail', sw: 1.6, linecap: 'round' }
    ]
  },
  plate: {
    parts: [
      { d: 'M18 32 L82 32 L82 72 C82 82 18 82 18 72 Z', fill: 'primary', stroke: 'none', opacity: 0.15 },
      { d: 'M18 32 L82 32 L82 72 C82 82 18 82 18 72 Z', fill: 'none', stroke: 'primary', sw: 2.5 },
      { d: 'M18 32 C18 22 82 22 82 32 C82 42 18 42 18 32 Z', fill: 'none', stroke: 'primary', sw: 1.5 },
      { d: 'M28 48 L28 48 M40 44 L40 44 M52 48 L52 48 M64 44 L64 44 M34 60 L34 60 M46 56 L46 56 M58 60 L58 60 M70 56 L70 56 M28 70 L28 70 M52 70 L52 70 M64 68 L64 68', fill: 'none', stroke: 'detail', sw: 4, linecap: 'round' }
    ]
  }
};
var ICON_KEYS = Object.keys(ICON_DEFS);

function iconLabelKey(key) {
  return 'icon_' + key;
}

var DELIMITERS = ['\t', ',', ';'];

var SAMPLE_TABLE = [
  'Treatment\tIL6\tTNF\tIFNG\tSEM',
  'Vehicle\t1.00\t2.20\t1.50\t0.15',
  'Drug A\t3.40\t2.80\t1.10\t0.30',
  'Drug B\t2.10\t4.60\t2.90\t0.35'
].join('\n');

function uid(prefix) {
  return (prefix || 'el') + '_' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function clamp(n, lo, hi) {
  n = Number(n);
  if (!isFinite(n)) return lo;
  return Math.min(hi, Math.max(lo, n));
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

function isNum(v) {
  return typeof v === 'number' && isFinite(v);
}

function toNum(v) {
  if (typeof v === 'number') return isFinite(v) ? v : null;
  if (v === null || v === undefined) return null;
  var s = String(v).trim();
  if (!s) return null;
  if (/^(?:na|n\/a|nan|null|none|-|–)$/i.test(s)) return null;
  var cleaned = s.replace(/,/g, '');
  if (!/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i.test(cleaned)) return null;
  var n = Number(cleaned);
  return isFinite(n) ? n : null;
}

function paletteColor(name, index) {
  var arr = PALETTES[name] || PALETTES.nature;
  var i = Math.abs(index || 0) % arr.length;
  return arr[i];
}

function detectDelimiter(text) {
  var candidates = DELIMITERS.map(function (d) { return { d: d, score: 0 }; });
  var lines = String(text || '').split(/\r?\n/).filter(function (l) { return l.trim(); }).slice(0, 8);
  for (var i = 0; i < lines.length; i++) {
    for (var c = 0; c < candidates.length; c++) {
      var d = candidates[c].d;
      var score = 0;
      var inQuote = false;
      for (var p = 0; p < lines[i].length; p++) {
        var ch = lines[i][p];
        if (ch === '"') inQuote = !inQuote;
        else if (!inQuote && ch === d) score++;
      }
      candidates[c].score += score;
    }
  }
  candidates.sort(function (a, b) { return b.score - a.score; });
  return candidates[0].score > 0 ? candidates[0].d : '\t';
}

function splitDelimited(text, delim) {
  var rows = [];
  var row = [];
  var field = '';
  var inQuote = false;
  var s = String(text || '');
  for (var i = 0; i < s.length; i++) {
    var ch = s[i];
    if (inQuote) {
      if (ch === '"') {
        if (s[i + 1] === '"') { field += '"'; i++; }
        else inQuote = false;
      } else field += ch;
    } else if (ch === '"') {
      inQuote = true;
    } else if (ch === delim) {
      row.push(field); field = '';
    } else if (ch === '\n') {
      row.push(field); rows.push(row); row = []; field = '';
    } else if (ch === '\r') {
      /* skip */
    } else {
      field += ch;
    }
  }
  row.push(field);
  rows.push(row);
  var out = [];
  for (var r = 0; r < rows.length; r++) {
    var trimmed = rows[r].map(function (x) { return String(x).trim(); });
    if (trimmed.some(function (x) { return x !== ''; })) out.push(trimmed);
  }
  return out;
}

function uniqueNames(names) {
  var seen = {};
  return names.map(function (n, i) {
    var base = String(n == null ? '' : n).trim() || ('Column ' + (i + 1));
    var name = base;
    var k = 2;
    while (Object.prototype.hasOwnProperty.call(seen, name)) {
      name = base + ' (' + k + ')';
      k++;
    }
    seen[name] = true;
    return name;
  });
}

function looksNumeric(v) {
  return toNum(v) !== null;
}

function guessHeader(rows) {
  if (!rows || rows.length < 2) return true;
  var firstNumeric = rows[0].filter(looksNumeric).length;
  var secondNumeric = rows[1].filter(looksNumeric).length;
  return firstNumeric < Math.max(1, secondNumeric);
}

function toCell(v) {
  if (v === null || v === undefined) return null;
  var s = String(v).trim();
  if (!s) return null;
  var n = toNum(s);
  return n === null ? s : n;
}

function parseTable(text, firstRowHeader) {
  var raw = String(text == null ? '' : text).trim();
  if (!raw) return { ok: false, error: 'empty' };
  var delim = detectDelimiter(raw);
  var rows = splitDelimited(raw, delim);
  if (!rows.length) return { ok: false, error: 'empty' };
  var hasHeader = typeof firstRowHeader === 'boolean' ? firstRowHeader : guessHeader(rows);
  var width = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 0);
  var columns;
  var dataRows;
  if (hasHeader) {
    columns = uniqueNames(rows[0].concat(new Array(Math.max(0, width - rows[0].length)).fill('')));
    dataRows = rows.slice(1).map(function (r) {
      var out = [];
      for (var i = 0; i < width; i++) out.push(toCell(r[i] !== undefined ? r[i] : ''));
      return out;
    }).filter(function (r) { return r.some(function (v) { return v !== null; }); });
  } else {
    columns = [];
    for (var i = 0; i < width; i++) columns.push('Column ' + (i + 1));
    dataRows = rows.map(function (r) {
      var out = [];
      for (var j = 0; j < width; j++) out.push(toCell(r[j] !== undefined ? r[j] : ''));
      return out;
    });
  }
  if (!dataRows.length) return { ok: false, error: 'noRows' };
  return { ok: true, delimiter: delim === '\t' ? 'tab' : delim === ',' ? 'comma' : 'semicolon', columns: columns, rows: dataRows, hasHeader: hasHeader };
}

function makeDataset(name, parsed) {
  return {
    id: uid('ds'),
    name: name || 'Dataset',
    columns: parsed.columns,
    rows: parsed.rows
  };
}

function numericColumnIndexes(dataset) {
  if (!dataset || !Array.isArray(dataset.rows) || !dataset.rows.length) return [];
  var out = [];
  for (var c = 0; c < dataset.columns.length; c++) {
    var seen = 0;
    var numeric = 0;
    for (var r = 0; r < dataset.rows.length; r++) {
      var v = dataset.rows[r][c];
      if (v === null || v === undefined || v === '') continue;
      seen++;
      if (toNum(v) !== null) numeric++;
    }
    if (seen > 0 && numeric / seen >= 0.6) out.push(c);
  }
  return out;
}

function fmtTick(v) {
  if (!isFinite(v)) return '';
  if (Math.abs(v) < 1e-12) return '0';
  var av = Math.abs(v);
  if (av >= 1e6 || av < 1e-4) {
    return v.toExponential(1).replace('e+', 'e').replace('e-0', 'e-');
  }
  var digits = av >= 100 ? (Number.isInteger(v) ? 0 : 1) : av >= 10 ? (Number.isInteger(v) ? 0 : 1) : av >= 1 ? (Number.isInteger(v) ? 0 : 2) : 2;
  var s = v.toFixed(digits);
  if (s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s === '-0' ? '0' : s;
}

function fmtValue(v) {
  if (!isFinite(v)) return '';
  if (Math.abs(v) >= 10000 || (Math.abs(v) > 0 && Math.abs(v) < 0.01)) return fmtTick(v);
  var s = (Math.round(v * 100) / 100).toString();
  return s;
}

function estimateTextWidth(text, fontSize) {
  var size = Number(fontSize) || 12;
  var lines = String(text == null ? '' : text).split('\n');
  var widest = 0;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var units = 0;
    for (var j = 0; j < line.length; j++) {
      var code = line.charCodeAt(j);
      if (code >= 0x2e80) units += 1;
      else if (line[j] === ' ') units += 0.3;
      else if ('iljtfr.,:;!|\'`'.indexOf(line[j]) >= 0) units += 0.3;
      else if ('MW@%'.indexOf(line[j]) >= 0) units += 0.85;
      else units += 0.56;
    }
    widest = Math.max(widest, units);
  }
  return Math.max(size, widest * size);
}

function niceNum(range, round) {
  if (!isFinite(range) || range <= 0) return 1;
  var exponent = Math.floor(Math.log(range) / Math.LN10);
  var fraction = range / Math.pow(10, exponent);
  var niceFraction;
  if (round) {
    if (fraction < 1.5) niceFraction = 1;
    else if (fraction < 3) niceFraction = 2;
    else if (fraction < 7) niceFraction = 5;
    else niceFraction = 10;
  } else {
    if (fraction <= 1) niceFraction = 1;
    else if (fraction <= 2) niceFraction = 2;
    else if (fraction <= 5) niceFraction = 5;
    else niceFraction = 10;
  }
  return niceFraction * Math.pow(10, exponent);
}

function niceScale(min, max, tickCount) {
  var count = Math.max(2, Math.min(12, tickCount || 5));
  min = Number(min);
  max = Number(max);
  if (!isFinite(min) || !isFinite(max)) { min = 0; max = 1; }
  if (min > max) { var t = min; min = max; max = t; }
  if (min === max) {
    var pad = Math.abs(min) > 0 ? Math.abs(min) * 0.2 : 1;
    min -= pad; max += pad;
  }
  var range = niceNum(max - min, false);
  var step = niceNum(range / (count - 1), true);
  var niceMin = Math.floor(min / step) * step;
  var niceMax = Math.ceil(max / step) * step;
  var ticks = [];
  var n = Math.round((niceMax - niceMin) / step);
  if (n > 60) step = (niceMax - niceMin) / 10, n = 10;
  for (var i = 0; i <= n; i++) ticks.push(round2(niceMin + i * step));
  return { min: round2(niceMin), max: round2(niceMax), step: step, ticks: ticks };
}

function defaultTextProps() {
  return {
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontStyle: 'normal',
    align: 'left',
    rotate: 0,
    fill: '#222222',
    stroke: 'none',
    strokeWidth: 0
  };
}

function baseElement(type, props) {
  return Object.assign({
    id: uid('el'),
    type: type,
    x: 0, y: 0, w: 100, h: 100,
    fill: type === 'text' ? '#222222' : '#3C5488',
    fillOpacity: 1,
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1,
    locked: false,
    hidden: false
  }, props || {});
}

function textElement(props) {
  return baseElement('text', Object.assign(defaultTextProps(), props || {}));
}

function normalizeFrame(frame) {
  var f = frame || {};
  return {
    x: Number.isFinite(Number(f.x)) ? Number(f.x) : 60,
    y: Number.isFinite(Number(f.y)) ? Number(f.y) : 100,
    w: Math.max(160, Number.isFinite(Number(f.w)) ? Number(f.w) : 600),
    h: Math.max(110, Number.isFinite(Number(f.h)) ? Number(f.h) : 400)
  };
}

function normalizeChartConfig(config, dataset) {
  var cfg = Object.assign({
    type: 'bar',
    xCol: 0,
    yCols: [],
    errorCol: null,
    title: '',
    xLabel: '',
    yLabel: '',
    showLegend: true,
    showGrid: true,
    showValues: false,
    palette: 'nature',
    fontFamily: 'Arial',
    fontSize: 12
  }, config || {});
  if (CHART_TYPES.indexOf(cfg.type) < 0) cfg.type = 'bar';
  if (PALETTE_NAMES.indexOf(cfg.palette) < 0) cfg.palette = 'nature';
  if (FONT_NAMES.indexOf(cfg.fontFamily) < 0) cfg.fontFamily = 'Arial';
  cfg.fontSize = clamp(cfg.fontSize, 6, 40);
  if (dataset && dataset.columns) {
    var nCols = dataset.columns.length;
    cfg.xCol = Number.isInteger(cfg.xCol) && cfg.xCol >= 0 && cfg.xCol < nCols ? cfg.xCol : 0;
    var ys = Array.isArray(cfg.yCols) ? cfg.yCols.filter(function (i) { return Number.isInteger(i) && i >= 0 && i < nCols && i !== cfg.xCol; }) : [];
    if (!ys.length) {
      ys = numericColumnIndexes(dataset).filter(function (i) { return i !== cfg.xCol; });
    }
    cfg.yCols = ys.slice(0, 10);
    if (!(Number.isInteger(cfg.errorCol) && cfg.errorCol >= 0 && cfg.errorCol < nCols) || cfg.yCols.indexOf(cfg.errorCol) >= 0 || cfg.errorCol === cfg.xCol) {
      cfg.errorCol = null;
    }
  }
  return cfg;
}

function polylineFromPoints(points, props) {
  var xs = points.map(function (p) { return p[0]; });
  var ys = points.map(function (p) { return p[1]; });
  var minX = Math.min.apply(null, xs);
  var maxX = Math.max.apply(null, xs);
  var minY = Math.min.apply(null, ys);
  var maxY = Math.max.apply(null, ys);
  var spanX = maxX - minX || 1;
  var spanY = maxY - minY || 1;
  var norm = points.map(function (p) {
    return [round2((p[0] - minX) / spanX), round2((p[1] - minY) / spanY)];
  });
  return baseElement('polyline', Object.assign({
    x: minX, y: minY, w: spanX, h: spanY,
    points: norm,
    closed: false,
    fill: 'none',
    stroke: '#333333',
    strokeWidth: 2
  }, props || {}, { x: minX, y: minY, w: spanX, h: spanY, points: norm }));
}

function chartErrorElements(frame, message, chartId) {
  return [textElement({
    chartId: chartId,
    role: 'error',
    x: frame.x + frame.w / 2 - frame.w / 2,
    y: frame.y + frame.h / 2 - 12,
    w: frame.w,
    h: 24,
    align: 'center',
    text: message,
    fontSize: 12,
    fill: '#999999'
  })];
}

/**
 * Build a chart as a flat list of fully editable elements.
 */
function buildChart(opts) {
  opts = opts || {};
  var chartId = opts.chartId || uid('chart');
  var frame = normalizeFrame(opts.frame);
  var dataset = opts.dataset;
  var cfg = normalizeChartConfig(opts.config, dataset);
  var els = [];
  function add(el) {
    el.chartId = chartId;
    els.push(el);
    return el;
  }
  function addText(o) {
    return add(textElement(o));
  }
  if (!dataset || !Array.isArray(dataset.rows) || !dataset.rows.length || !dataset.columns.length) {
    return chartErrorElements(frame, 'No data to plot', chartId);
  }

  var fd = FONT_STACKS[cfg.fontFamily] || FONT_STACKS.Arial;
  var base = cfg.fontSize;
  var tickSize = Math.max(7, round2(base * 0.86));
  var titleSize = round2(base * 1.28);
  var color = function (i) { return paletteColor(cfg.palette, i); };
  var ink = '#333333';
  var softInk = '#555555';
  var gridColor = '#E4E4E4';

  var ySeries = cfg.yCols.map(function (col) {
    return { col: col, name: dataset.columns[col] || ('Y' + col), values: [] };
  });
  if (!ySeries.length) return chartErrorElements(frame, 'Choose at least one Y column', chartId);

  var rows = [];
  for (var r = 0; r < dataset.rows.length; r++) {
    var rawX = dataset.rows[r][cfg.xCol];
    if (rawX === null || rawX === undefined || rawX === '') continue;
    rows.push({ row: dataset.rows[r], index: r, xLabel: String(rawX) });
  }
  if (!rows.length) return chartErrorElements(frame, 'No data to plot', chartId);

  for (var s = 0; s < ySeries.length; s++) {
    for (var i = 0; i < rows.length; i++) {
      ySeries[s].values.push(toNum(rows[i].row[ySeries[s].col]));
    }
  }
  var errValues = null;
  if (cfg.errorCol !== null && cfg.errorCol !== undefined) {
    errValues = rows.map(function (x) { return Math.abs(toNum(x.row[cfg.errorCol]) || 0); });
  }

  var isPie = cfg.type === 'pie';
  var isScatter = cfg.type === 'scatter';
  var isBar = cfg.type === 'bar' || cfg.type === 'stackedBar';
  var isLine = cfg.type === 'line' || cfg.type === 'area';

  if (isPie) {
    var pieVals = ySeries[0].values.map(function (v) { return v !== null && v > 0 ? v : 0; });
    var total = pieVals.reduce(function (a, b) { return a + b; }, 0);
    if (total <= 0) return chartErrorElements(frame, 'Pie charts need positive values', chartId);
    if (cfg.title) {
      addText({
        role: 'title', x: frame.x + 13, y: frame.y + 2, w: frame.w - 26, h: titleSize * 1.45,
        text: cfg.title, fontSize: titleSize, fill: '#111111', align: 'center',
        fontWeight: 'bold', fontFamily: cfg.fontFamily
      });
    }
    var legendItemsPie = rows.map(function (x) { return x.xLabel; });
    var legendW0 = cfg.showLegend ? Math.min(150, Math.max(86, 26 + longestText(legendItemsPie) * base * 0.52)) : 0;
    var innerW0 = Math.max(60, frame.w - 26 - legendW0);
    var pieTop = frame.y + 14 + (cfg.title ? titleSize * 1.45 + 4 : 0);
    var innerH0 = Math.max(60, frame.h - (pieTop - frame.y) - 14);
    var cx = frame.x + 13 + innerW0 / 2;
    var cy = pieTop + innerH0 / 2;
    var rr = Math.max(12, Math.min(innerW0, innerH0) * 0.44);
    var angle = -Math.PI / 2;
    for (var pi = 0; pi < pieVals.length; pi++) {
      var val = pieVals[pi];
      if (val <= 0) continue;
      var frac = val / total;
      var end = angle + frac * Math.PI * 2;
      if (frac >= 0.999999) {
        add(baseElement('ellipse', {
          role: 'slice', series: pi,
          x: cx - rr, y: cy - rr, w: rr * 2, h: rr * 2,
          fill: color(pi), stroke: '#FFFFFF', strokeWidth: 2
        }));
      } else {
        var p1 = [50 + 50 * Math.cos(angle), 50 + 50 * Math.sin(angle)];
        var p2 = [50 + 50 * Math.cos(end), 50 + 50 * Math.sin(end)];
        var large = frac > 0.5 ? 1 : 0;
        var d = 'M ' + round2(p1[0]) + ' ' + round2(p1[1]) +
          ' A 50 50 0 ' + large + ' 1 ' + round2(p2[0]) + ' ' + round2(p2[1]) +
          ' L 50 50 Z';
        add(baseElement('path', {
          role: 'slice', series: pi,
          x: cx - rr, y: cy - rr, w: rr * 2, h: rr * 2,
          viewW: 100, viewH: 100, d: d,
          fill: color(pi), stroke: '#FFFFFF', strokeWidth: 2
        }));
      }
      if (cfg.showValues && frac > 0.045) {
        var mid = angle + frac * Math.PI;
        var lx = cx + Math.cos(mid) * rr * 0.6;
        var ly = cy + Math.sin(mid) * rr * 0.6;
        addText({
          role: 'value', series: pi,
          x: lx - 28, y: ly - base * 0.7, w: 56, h: base * 1.4,
          text: Math.round(frac * 100) + '%',
          align: 'center', fontSize: Math.max(8, base * 0.78), fill: '#FFFFFF',
          fontWeight: 'bold', fontFamily: cfg.fontFamily
        });
      }
      angle = end;
    }
    if (cfg.showLegend) {
      var legendH0 = Math.min(frame.h - 20, rows.length * 22);
      var ly0 = cy - legendH0 / 2;
      for (var li = 0; li < rows.length; li++) {
        var itemY = ly0 + li * 22;
        if (itemY + 16 > frame.y + frame.h - 6) break;
        add(baseElement('rect', {
          role: 'legend', series: li,
          x: cx + rr + 22, y: itemY + 4, w: 10, h: 10,
          fill: color(li), stroke: 'none'
        }));
        addText({
          role: 'legendLabel', series: li,
          x: cx + rr + 38, y: itemY, w: Math.max(40, frame.x + frame.w - (cx + rr + 44)), h: 20,
          text: rows[li].xLabel, fontSize: Math.max(8, base * 0.85), fill: softInk,
          align: 'left', fontFamily: cfg.fontFamily
        });
      }
    }
    return els;
  }

  var categories = rows.map(function (x) { return x.xLabel; });
  var xNums = null;
  if (isScatter) {
    xNums = rows.map(function (x) { return toNum(x.row[cfg.xCol]); });
    if (!xNums.some(function (v) { return v !== null; })) {
      return chartErrorElements(frame, 'Scatter plots need a numeric X column', chartId);
    }
  }

  var allVals = [];
  for (var si = 0; si < ySeries.length; si++) {
    for (var vi = 0; vi < ySeries[si].values.length; vi++) {
      var vv = ySeries[si].values[vi];
      if (vv === null) continue;
      allVals.push(vv);
      if (errValues && errValues[vi]) allVals.push(vv + errValues[vi], vv - errValues[vi]);
    }
  }
  if (cfg.type === 'stackedBar') {
    for (var ci = 0; ci < categories.length; ci++) {
      var pos = 0;
      var neg = 0;
      for (var sj = 0; sj < ySeries.length; sj++) {
        var sv = ySeries[sj].values[ci];
        if (sv === null) continue;
        if (sv >= 0) pos += sv; else neg += sv;
      }
      allVals.push(pos, neg);
    }
  }
  if (!allVals.length) return chartErrorElements(frame, 'No numeric values to plot', chartId);

  var dataMin = Math.min.apply(null, allVals);
  var dataMax = Math.max.apply(null, allVals);
  if (isBar || cfg.type === 'area') {
    dataMin = Math.min(0, dataMin);
    dataMax = Math.max(0, dataMax);
  }
  var span0 = dataMax - dataMin || 1;
  var pad = isBar ? 0 : span0 * 0.07;
  var yScale = niceScale(dataMin - (isBar ? 0 : pad), dataMax + (isBar ? 0 : pad), 5);

  var legendItems = ySeries.map(function (s) { return s.name; });
  var showLegend = !!cfg.showLegend && legendItems.length > 0;
  var longest = longestText(legendItems);
  var legendW = showLegend ? Math.min(160, Math.max(84, 26 + longest * base * 0.52)) : 0;
  var titleH = cfg.title ? titleSize * 1.45 + 4 : 0;
  var padL = Math.max(44, base * 3.9);
  var padR = 16 + legendW;
  var padT = 10 + titleH;
  var padB = Math.max(34, base * 2.4) + (cfg.xLabel ? base * 1.55 : 0);
  var plotX = frame.x + padL;
  var plotY = frame.y + padT;
  var plotW = Math.max(40, frame.w - padL - padR);
  var plotH = Math.max(40, frame.h - padT - padB);
  var yOf = function (v) { return plotY + plotH - (v - yScale.min) / (yScale.max - yScale.min) * plotH; };
  var baselineY = yOf(0);

  if (cfg.title) {
    addText({
      role: 'title', x: plotX, y: frame.y + 2, w: plotW, h: titleSize * 1.45,
      text: cfg.title, fontSize: titleSize, fill: '#111111', align: 'center',
      fontWeight: 'bold', fontFamily: cfg.fontFamily
    });
  }

  if (isScatter) {
    var xAll = xNums.filter(function (v) { return v !== null; });
    var xMin = Math.min.apply(null, xAll);
    var xMax = Math.max.apply(null, xAll);
    var xPad = (xMax - xMin || 1) * 0.06;
    var xScale = niceScale(xMin - xPad, xMax + xPad, 5);
    var xOf = function (v) { return plotX + (v - xScale.min) / (xScale.max - xScale.min) * plotW; };
    for (var xt = 0; xt < xScale.ticks.length; xt++) {
      var tickX = xOf(xScale.ticks[xt]);
      addText({
        role: 'xTick', x: tickX - 30, y: plotY + plotH + 6, w: 60, h: base * 1.4,
        text: fmtTick(xScale.ticks[xt]), fontSize: tickSize, fill: softInk,
        align: 'center', fontFamily: cfg.fontFamily
      });
      add(baseElement('line', {
        role: 'gridX', x1: tickX, y1: plotY, x2: tickX, y2: plotY + plotH,
        stroke: gridColor, strokeWidth: 1, hidden: !cfg.showGrid
      }));
    }
    for (var sk = 0; sk < ySeries.length; sk++) {
      for (var ri = 0; ri < rows.length; ri++) {
        var sx = xNums[ri];
        var sy = ySeries[sk].values[ri];
        if (sx === null || sy === null) continue;
        var pr = Math.max(2.6, base * 0.33);
        add(baseElement('ellipse', {
          role: 'point', series: sk,
          x: xOf(sx) - pr, y: yOf(sy) - pr, w: pr * 2, h: pr * 2,
          fill: color(sk), fillOpacity: 0.82, stroke: '#FFFFFF', strokeWidth: 1
        }));
      }
    }
    addLineAxis(plotX, plotY, plotW, plotH, baselineY, frame, base, cfg, add, addText, ink, softInk, tickSize, yScale, yOf, gridColor);
    if (cfg.xLabel) {
      addText({
        role: 'xLabel', x: plotX, y: frame.y + frame.h - base * 1.55, w: plotW, h: base * 1.4,
        text: cfg.xLabel, fontSize: base, fill: ink, align: 'center', fontFamily: cfg.fontFamily
      });
    }
    addYLabel(frame, plotX, plotY, plotH, cfg, base);
    addLegend(legendItems, color, showLegend, plotX + plotW + 12, plotY, legendW, plotH, base, cfg, add, addText);
    return els;
  }

  var catCount = categories.length;
  var slotW = plotW / Math.max(1, catCount);

  if (isBar) {
    var y0 = yOf(0);
    if (cfg.type === 'bar') {
      var groups = ySeries.length;
      var innerW = slotW * 0.78;
      var barW = Math.max(1.5, innerW / Math.max(1, groups) - 2);
      for (var ci2 = 0; ci2 < catCount; ci2++) {
        for (var s2 = 0; s2 < ySeries.length; s2++) {
          var val2 = ySeries[s2].values[ci2];
          if (val2 === null) continue;
          var bx = plotX + ci2 * slotW + (slotW - innerW) / 2 + s2 * (innerW / groups);
          var by = Math.min(yOf(val2), y0);
          var bh = Math.max(1, Math.abs(yOf(val2) - y0));
          add(baseElement('rect', {
            role: 'bar', series: s2, cat: ci2,
            x: bx, y: by, w: barW, h: bh,
            fill: color(s2), stroke: 'none'
          }));
          if (errValues) {
            addErrorBar(bx + barW / 2, yOf(val2), yOf(val2 + errValues[ci2]), yOf(val2 - errValues[ci2]), add);
          }
          if (cfg.showValues) {
            addText({
              role: 'value', series: s2, cat: ci2,
              x: bx - 12, y: by - base * 1.2, w: barW + 24, h: base * 1.2,
              text: fmtValue(val2), fontSize: Math.max(7, base * 0.75), fill: softInk,
              align: 'center', fontFamily: cfg.fontFamily
            });
          }
        }
      }
    } else {
      for (var ci3 = 0; ci3 < catCount; ci3++) {
        var posBase = 0;
        var negBase = 0;
        var stackW = slotW * 0.72;
        var stackX = plotX + ci3 * slotW + (slotW - stackW) / 2;
        for (var s3 = 0; s3 < ySeries.length; s3++) {
          var v3 = ySeries[s3].values[ci3];
          if (v3 === null) continue;
          var bot = v3 >= 0 ? yOf(posBase) : yOf(negBase);
          var topv = v3 >= 0 ? posBase + v3 : negBase + v3;
          var top = yOf(topv);
          add(baseElement('rect', {
            role: 'bar', series: s3, cat: ci3,
            x: stackX, y: Math.min(bot, top), w: stackW, h: Math.max(1, Math.abs(bot - top)),
            fill: color(s3), stroke: 'none'
          }));
          if (v3 >= 0) posBase += v3; else negBase += v3;
        }
      }
    }
    for (var ci4 = 0; ci4 < catCount; ci4++) {
      addText({
        role: 'xTick', cat: ci4,
        x: plotX + ci4 * slotW, y: plotY + plotH + 6, w: slotW, h: base * 1.4,
        text: categories[ci4], fontSize: tickSize, fill: softInk,
        align: 'center', fontFamily: cfg.fontFamily
      });
    }
    addLineAxis(plotX, plotY, plotW, plotH, baselineY, frame, base, cfg, add, addText, ink, softInk, tickSize, yScale, yOf, gridColor);
  } else {
    /* line / area */
    var xPositions = categories.map(function (c, idx) { return plotX + (idx + 0.5) / catCount * plotW; });
    for (var ci5 = 0; ci5 < catCount; ci5++) {
      addText({
        role: 'xTick', cat: ci5,
        x: plotX + ci5 * slotW, y: plotY + plotH + 6, w: slotW, h: base * 1.4,
        text: categories[ci5], fontSize: tickSize, fill: softInk,
        align: 'center', fontFamily: cfg.fontFamily
      });
    }
    for (var s4 = 0; s4 < ySeries.length; s4++) {
      var seg = [];
      var segments = [];
      for (var ci6 = 0; ci6 < catCount; ci6++) {
        var v4 = ySeries[s4].values[ci6];
        if (v4 === null) {
          if (seg.length) segments.push(seg);
          seg = [];
        } else {
          seg.push([xPositions[ci6], yOf(v4)]);
        }
      }
      if (seg.length) segments.push(seg);
      for (var gi = 0; gi < segments.length; gi++) {
        var g = segments[gi];
        if (cfg.type === 'area' && g.length > 1) {
          var poly = g.concat([[g[g.length - 1][0], baselineY], [g[0][0], baselineY]]);
          add(polylineFromPoints(poly, {
            role: 'area', series: s4, closed: true,
            fill: color(s4), fillOpacity: 0.16,
            stroke: color(s4), strokeWidth: 1.8
          }));
        } else if (g.length > 1) {
          add(polylineFromPoints(g, {
            role: 'line', series: s4, fill: 'none',
            stroke: color(s4), strokeWidth: 2.2
          }));
        }
        for (var gj = 0; gj < g.length; gj++) {
          var mr = Math.max(2.2, base * 0.28);
          add(baseElement('ellipse', {
            role: 'point', series: s4, cat: gj,
            x: g[gj][0] - mr, y: g[gj][1] - mr, w: mr * 2, h: mr * 2,
            fill: color(s4), stroke: '#FFFFFF', strokeWidth: 1
          }));
        }
      }
      if (errValues) {
        for (var eri = 0; eri < catCount; eri++) {
          var ev = ySeries[s4].values[eri];
          if (ev === null) continue;
          addErrorBar(xPositions[eri], yOf(ev), yOf(ev + errValues[eri]), yOf(ev - errValues[eri]), add);
        }
      }
    }
    addLineAxis(plotX, plotY, plotW, plotH, baselineY, frame, base, cfg, add, addText, ink, softInk, tickSize, yScale, yOf, gridColor);
  }

  if (cfg.xLabel) {
    addText({
      role: 'xLabel', x: plotX, y: frame.y + frame.h - base * 1.55, w: plotW, h: base * 1.4,
      text: cfg.xLabel, fontSize: base, fill: ink, align: 'center', fontFamily: cfg.fontFamily
    });
  }
  addYLabel(frame, plotX, plotY, plotH, cfg, base);
  addLegend(legendItems, color, showLegend, plotX + plotW + 12, plotY, legendW, plotH, base, cfg, add, addText);
  return els;

  function addLineAxis(px, py, pw, ph, zeroY, fr, bs, c, addFn, addTextFn, inkC, softInkC, ts, scale, yMap, gridC) {
    for (var ti = 0; ti < scale.ticks.length; ti++) {
      var tv = scale.ticks[ti];
      var ty = yMap(tv);
      if (ty < py - 0.5 || ty > py + ph + 0.5) continue;
      addFn(baseElement('line', {
        role: 'grid', x1: px, y1: ty, x2: px + pw, y2: ty,
        stroke: gridC, strokeWidth: 1, hidden: !c.showGrid
      }));
      addTextFn({
        role: 'yTick', x: px - Math.max(38, bs * 3.2), y: ty - bs * 0.72,
        w: Math.max(32, bs * 3), h: bs * 1.44,
        text: fmtTick(tv), fontSize: ts, fill: softInkC, align: 'right', fontFamily: c.fontFamily
      });
    }
    addFn(baseElement('line', { role: 'axis', x1: px, y1: py, x2: px, y2: py + ph, stroke: inkC, strokeWidth: 1.2 }));
    addFn(baseElement('line', { role: 'axis', x1: px, y1: py + ph, x2: px + pw, y2: py + ph, stroke: inkC, strokeWidth: 1.2 }));
    if (zeroY > py + 1 && zeroY < py + ph - 1) {
      addFn(baseElement('line', { role: 'axis', x1: px, y1: zeroY, x2: px + pw, y2: zeroY, stroke: inkC, strokeWidth: 1 }));
    }
  }

  function addYLabel(fr, px, py, ph, c, bs) {
    if (!c.yLabel) return;
    var cx = fr.x + Math.max(9, bs * 0.75);
    var cy = py + ph / 2;
    var boxW = Math.max(30, estimateTextWidth(c.yLabel, bs) + bs * 0.4);
    addText({
      role: 'yLabel', x: cx - boxW / 2, y: cy - bs * 0.7, w: boxW, h: bs * 1.4,
      text: c.yLabel, fontSize: bs, fill: ink, align: 'center', rotate: -90,
      fontFamily: c.fontFamily
    });
  }

  function addLegend(items, colorFn, on, lx, ly, lw, ph, bs, c, addFn, addTextFn) {
    if (!on) return;
    var itemH = Math.min(22, Math.max(12, ph / Math.max(1, items.length)));
    var labelSize = Math.max(7, Math.min(bs * 0.86, itemH * 0.72));
    var maxItems = Math.max(1, Math.floor(ph / itemH));
    var shown = Math.min(items.length, maxItems, 14);
    for (var i = 0; i < shown; i++) {
      var iy = ly + i * itemH;
      addFn(baseElement('rect', {
        role: 'legend', series: i,
        x: lx, y: iy + itemH / 2 - 4.5, w: 9, h: 9,
        fill: colorFn(i), stroke: 'none'
      }));
      addTextFn({
        role: 'legendLabel', series: i,
        x: lx + 14, y: iy + itemH / 2 - labelSize * 0.7,
        w: Math.max(30, lw - 16), h: labelSize * 1.4,
        text: items[i], fontSize: labelSize, fill: softInk,
        align: 'left', fontFamily: c.fontFamily
      });
    }
    if (items.length > shown) {
      addTextFn({
        role: 'legendLabel',
        x: lx + 14, y: ly + shown * itemH + 2, w: Math.max(30, lw - 16), h: labelSize * 1.4,
        text: '+' + (items.length - shown) + ' more', fontSize: labelSize, fill: softInk,
        align: 'left', fontFamily: c.fontFamily
      });
    }
  }

  function addErrorBar(cx, centerY, topY, bottomY, addFn) {
    var lo = Math.min(topY, bottomY);
    var hi = Math.max(topY, bottomY);
    addFn(baseElement('line', {
      role: 'errorbar', x1: cx, y1: lo, x2: cx, y2: hi, stroke: '#333333', strokeWidth: 1.2
    }));
    var cap = 4;
    addFn(baseElement('line', { role: 'errorbar', x1: cx - cap, y1: lo, x2: cx + cap, y2: lo, stroke: '#333333', strokeWidth: 1.2 }));
    addFn(baseElement('line', { role: 'errorbar', x1: cx - cap, y1: hi, x2: cx + cap, y2: hi, stroke: '#333333', strokeWidth: 1.2 }));
  }
}

function longestText(arr) {
  var max = 1;
  for (var i = 0; i < arr.length; i++) max = Math.max(max, String(arr[i] == null ? '' : arr[i]).length);
  return max;
}

function bboxOf(el) {
  if (!el) return { x: 0, y: 0, w: 0, h: 0 };
  if (el.type === 'line' || el.type === 'arrow') {
    var x1 = Number(el.x1) || 0, y1 = Number(el.y1) || 0, x2 = Number(el.x2) || 0, y2 = Number(el.y2) || 0;
    return { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1), h: Math.abs(y2 - y1), x1: x1, y1: y1, x2: x2, y2: y2 };
  }
  var x = Number(el.x) || 0, y = Number(el.y) || 0, w = Number(el.w) || 0, h = Number(el.h) || 0;
  if (w < 0) { x += w; w = -w; }
  if (h < 0) { y += h; h = -h; }
  if (el.type === 'text' && el.rotate) {
    var rad = (Number(el.rotate) || 0) * Math.PI / 180;
    var cx = x + w / 2;
    var cy = y + h / 2;
    var hw = w / 2, hh = h / 2;
    var corners = [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]].map(function (p) {
      return [cx + p[0] * Math.cos(rad) - p[1] * Math.sin(rad), cy + p[0] * Math.sin(rad) + p[1] * Math.cos(rad)];
    });
    var xs = corners.map(function (p) { return p[0]; });
    var ys = corners.map(function (p) { return p[1]; });
    var minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs);
    var minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
  }
  return { x: x, y: y, w: w, h: h };
}

function unionBounds(els) {
  if (!els || !els.length) return null;
  var b = bboxOf(els[0]);
  var minX = b.x, minY = b.y, maxX = b.x + b.w, maxY = b.y + b.h;
  for (var i = 1; i < els.length; i++) {
    var bi = bboxOf(els[i]);
    minX = Math.min(minX, bi.x);
    minY = Math.min(minY, bi.y);
    maxX = Math.max(maxX, bi.x + bi.w);
    maxY = Math.max(maxY, bi.y + bi.h);
  }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function translateElement(el, dx, dy) {
  if (el.type === 'line' || el.type === 'arrow') {
    el.x1 = (Number(el.x1) || 0) + dx;
    el.y1 = (Number(el.y1) || 0) + dy;
    el.x2 = (Number(el.x2) || 0) + dx;
    el.y2 = (Number(el.y2) || 0) + dy;
  } else {
    el.x = (Number(el.x) || 0) + dx;
    el.y = (Number(el.y) || 0) + dy;
  }
}

function replaceChartElements(doc, chartId) {
  var chart = doc.charts && doc.charts[chartId];
  if (!chart) return [];
  var ds = (doc.datasets || []).filter(function (d) { return d.id === chart.config.datasetId; })[0];
  var fresh = buildChart({ config: chart.config, dataset: ds, frame: chart.frame, chartId: chartId });
  var idx = -1;
  for (var i = 0; i < doc.elements.length; i++) {
    if (doc.elements[i].chartId === chartId) { idx = i; break; }
  }
  var rest = doc.elements.filter(function (e) { return e.chartId !== chartId; });
  if (idx < 0) idx = rest.length;
  rest.splice.apply(rest, [idx, 0].concat(fresh));
  doc.elements = rest;
  return fresh;
}

function recolorChartElements(doc, chartId) {
  var chart = doc.charts && doc.charts[chartId];
  if (!chart) return;
  var cfg = chart.config;
  var color = function (i) { return paletteColor(cfg.palette, i); };
  for (var i = 0; i < doc.elements.length; i++) {
    var el = doc.elements[i];
    if (el.chartId !== chartId) continue;
    var s = Number.isInteger(el.series) ? el.series : 0;
    var col = color(s);
    if (el.role === 'bar' || el.role === 'slice' || el.role === 'legend') {
      el.fill = col;
    } else if (el.role === 'point') {
      el.fill = col;
    } else if (el.role === 'line' || el.role === 'area') {
      el.stroke = col;
      if (el.role === 'area') el.fill = col;
    }
  }
}

function newBlankDoc(opts) {
  opts = opts || {};
  var w = clamp(opts.width || 1200, 200, 6000);
  var h = clamp(opts.height || 800, 200, 6000);
  var doc = {
    schema: FIGSTUDIO_SCHEMA,
    id: uid('doc'),
    name: opts.name || 'Untitled figure',
    width: w,
    height: h,
    background: '#FFFFFF',
    grid: true,
    snap: true,
    elements: [],
    datasets: [],
    charts: {},
    updatedAt: Date.now()
  };
  return doc;
}

function demoDoc() {
  var doc = newBlankDoc({ width: 1100, height: 760, name: 'Cytokine response figure' });
  var parsed = parseTable(SAMPLE_TABLE, true);
  var ds = makeDataset('Cytokine expression', parsed);
  doc.datasets.push(ds);
  var chartId = uid('chart');
  var frame = { x: 74, y: 150, w: 720, h: 470 };
  var config = {
    datasetId: ds.id,
    type: 'bar',
    xCol: 0,
    yCols: [1, 2, 3],
    errorCol: 4,
    title: '',
    xLabel: 'Treatment',
    yLabel: 'Relative expression (AU)',
    showLegend: true,
    showGrid: true,
    showValues: false,
    palette: 'nature',
    fontFamily: 'Arial',
    fontSize: 13
  };
  doc.charts[chartId] = { id: chartId, frame: frame, config: config };
  var chartEls = buildChart({ chartId: chartId, config: config, dataset: ds, frame: frame });
  doc.elements = doc.elements.concat(chartEls);
  doc.elements.push(textElement({
    role: 'figureTitle', x: 74, y: 34, w: 940, h: 34,
    text: 'Figure 1 | Cytokine expression across treatment groups',
    fontSize: 22, fontWeight: 'bold', fill: '#111111', align: 'left'
  }));
  doc.elements.push(textElement({
    role: 'caption', x: 74, y: 74, w: 940, h: 22,
    text: 'Mean \u00b1 SEM, n = 6 mice per group. One-way ANOVA versus vehicle.',
    fontSize: 13, fill: '#666666', align: 'left'
  }));
  doc.elements.push(textElement({
    role: 'panel', x: 32, y: 34, w: 30, h: 34,
    text: 'A', fontSize: 24, fontWeight: 'bold', fill: '#111111', align: 'left'
  }));
  doc.elements.push(textElement({
    role: 'note', x: 74, y: 676, w: 720, h: 22,
    text: 'Data: paste your own table in the Data panel, then insert a chart.',
    fontSize: 11, fill: '#999999', align: 'left'
  }));
  return doc;
}

function validateDoc(input) {
  if (!input || typeof input !== 'object') return null;
  var width = clamp(input.width, 200, 6000);
  var height = clamp(input.height, 200, 6000);
  var doc = {
    schema: FIGSTUDIO_SCHEMA,
    id: typeof input.id === 'string' ? input.id : uid('doc'),
    name: typeof input.name === 'string' && input.name.trim() ? input.name.slice(0, 120) : 'Untitled figure',
    width: width,
    height: height,
    background: typeof input.background === 'string' ? input.background : '#FFFFFF',
    grid: input.grid !== false,
    snap: input.snap !== false,
    elements: [],
    datasets: [],
    charts: {},
    updatedAt: Date.now()
  };
  if (Array.isArray(input.datasets)) {
    doc.datasets = input.datasets.filter(function (d) {
      return d && typeof d === 'object' && Array.isArray(d.columns) && Array.isArray(d.rows);
    }).slice(0, 40).map(function (d) {
      return {
        id: typeof d.id === 'string' ? d.id : uid('ds'),
        name: typeof d.name === 'string' ? d.name.slice(0, 80) : 'Dataset',
        columns: d.columns.slice(0, 40).map(function (c, i) { return String(c == null ? 'Column ' + (i + 1) : c); }),
        rows: d.rows.slice(0, 5000).map(function (r) {
          return Array.isArray(r) ? r.slice(0, 40).map(function (v) { return toCell(v); }) : [];
        })
      };
    });
  }
  if (input.charts && typeof input.charts === 'object') {
    Object.keys(input.charts).slice(0, 40).forEach(function (key) {
      var c = input.charts[key];
      if (!c || typeof c !== 'object') return;
      var cfg = c.config && typeof c.config === 'object' ? c.config : {};
      doc.charts[key] = {
        id: key,
        frame: normalizeFrame(c.frame),
        config: normalizeChartConfig(cfg, doc.datasets.filter(function (d) { return d.id === cfg.datasetId; })[0])
      };
    });
  }
  var seen = {};
  if (Array.isArray(input.elements)) {
    input.elements.slice(0, 3000).forEach(function (el) {
      if (!el || typeof el !== 'object' || ELEMENT_TYPES.indexOf(el.type) < 0) return;
      var out;
      if (el.type === 'text') {
        out = textElement({});
      } else {
        out = baseElement(el.type, {});
      }
      Object.keys(el).forEach(function (k) {
        if (k === 'id') return;
        var v = el[k];
        if (typeof v === 'number' && !isFinite(v)) return;
        out[k] = v;
      });
      out.id = typeof el.id === 'string' && !seen[el.id] ? el.id : uid('el');
      seen[out.id] = true;
      if (out.type === 'text') {
        out.text = typeof out.text === 'string' ? out.text.slice(0, 2000) : '';
        out.fontSize = clamp(out.fontSize, 6, 120);
        if (FONT_NAMES.indexOf(out.fontFamily) < 0) out.fontFamily = 'Arial';
      }
      if (out.type === 'polyline' && !Array.isArray(out.points)) out.points = [];
      if (out.type === 'path') {
        out.d = typeof out.d === 'string' ? out.d : '';
        out.viewW = clamp(out.viewW || 100, 1, 1000);
        out.viewH = clamp(out.viewH || 100, 1, 1000);
      }
      if (out.type === 'icon' && ICON_KEYS.indexOf(out.icon) < 0) out.icon = 'cell';
      if (out.type === 'bracket') { /* box element */ }
      doc.elements.push(out);
    });
  }
  return doc;
}

function safeName(name, fallback) {
  var s = String(name || '').trim().replace(/[\\/:*?"<>|]+/g, '-').replace(/\s+/g, '-').slice(0, 80);
  return s || (fallback || 'figure');
}

function elementTypeLabelKey(type) {
  return 'type_' + type;
}

'use strict';

var FIGSTUDIO_LOCALE = {
  en: {
    title: 'Figure Studio',
    subtitle: 'Data to editable publication figure',
    undo: 'Undo',
    redo: 'Redo',
    export: 'Export',
    exportSvg: 'SVG (vector)',
    exportPng: 'PNG 300 dpi',
    exportJson: 'JSON project',
    importJson: 'Import JSON',
    newFigure: 'New figure',
    demoFigure: 'Load demo',
    fit: 'Fit',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    saved: 'Saved locally',
    saving: 'Saving…',
    tabData: 'Data',
    tabChart: 'Chart',
    tabInsert: 'Insert',
    tabDesign: 'Design',
    tabLayers: 'Layers',
    dataTitle: 'Raw data',
    dataHint: 'Paste a table from Excel, Origin or Prism. Tabs, commas and semicolons are detected automatically.',
    pasteLabel: 'Paste table',
    pastePlaceholder: 'Treatment\tIL6\tTNF\nVehicle\t1.0\t2.2\nDrug A\t3.4\t2.8',
    headerRow: 'First row is column names',
    addDataset: 'Add dataset',
    updateDataset: 'Update dataset',
    datasets: 'Datasets',
    noDatasets: 'No dataset yet. Paste a table and add it.',
    preview: 'Preview',
    rowsCols: '{rows} rows × {cols} columns',
    parseError: 'Could not read this table',
    useDataset: 'Use in chart',
    deleteDataset: 'Delete dataset',
    editDataset: 'Edit data',
    numericOnly: 'Numbers',
    chartTitle: 'Chart builder',
    dataset: 'Dataset',
    chartType: 'Chart type',
    xColumn: 'X / category column',
    yColumns: 'Y values (one per series)',
    errorColumn: 'Error column',
    none: 'None',
    chartName: 'Chart title',
    xLabel: 'X axis label',
    yLabel: 'Y axis label',
    palette: 'Colour palette',
    font: 'Font',
    fontSize: 'Font size',
    legend: 'Legend',
    grid: 'Grid lines',
    values: 'Value labels',
    insertChart: 'Insert chart',
    updateChart: 'Apply to chart',
    chartNeedData: 'Add a dataset first.',
    chartNeedY: 'Pick at least one Y column.',
    insertTitle: 'Add elements',
    basics: 'Text and shapes',
    text: 'Text',
    heading: 'Heading',
    caption: 'Caption',
    panelLetter: 'Panel letter',
    box: 'Box',
    circle: 'Circle',
    line: 'Line',
    arrow: 'Arrow',
    bracket: 'Significance bracket',
    icons: 'Science icons',
    symbols: 'Symbols',
    page: 'Artboard',
    preset: 'Preset',
    width: 'Width',
    height: 'Height',
    background: 'Background',
    showGrid: 'Grid',
    snap: 'Snap',
    selectHint: 'Select an element on the canvas to edit it.',
    position: 'Position & size',
    x: 'X',
    y: 'Y',
    w: 'W',
    h: 'H',
    rotation: 'Rotation',
    appearance: 'Appearance',
    fill: 'Fill',
    stroke: 'Stroke',
    strokeWidth: 'Stroke width',
    opacity: 'Opacity',
    corner: 'Corner radius',
    lineEndpoints: 'Endpoints',
    textContent: 'Text',
    editOnCanvas: 'Edit on canvas',
    fontWeight: 'Weight',
    bold: 'Bold',
    normal: 'Normal',
    alignLeft: 'Align left',
    alignCenter: 'Align center',
    alignRight: 'Align right',
    chartSection: 'Chart',
    rebuild: 'Rebuild from data',
    detach: 'Detach chart parts',
    actions: 'Actions',
    duplicate: 'Duplicate',
    delete: 'Delete',
    lock: 'Lock',
    unlock: 'Unlock',
    hide: 'Hide',
    show: 'Show',
    front: 'Bring to front',
    forward: 'Bring forward',
    backward: 'Send backward',
    back: 'Send to back',
    alignTools: 'Align & distribute',
    alignTop: 'Align top',
    alignMiddle: 'Align middle',
    alignBottom: 'Align bottom',
    distributeH: 'Distribute horizontally',
    distributeV: 'Distribute vertically',
    matchWidth: 'Match width',
    matchHeight: 'Match height',
    layers: 'Layers',
    layersHint: 'Topmost elements are listed first. Click a row to select.',
    chartGroup: 'Chart',
    emptyLayers: 'Nothing on this artboard yet.',
    elementsCount: '{count} elements',
    selectionCount: '{count} selected',
    localOnly: 'Stored in this browser',
    chartPlaceholder: 'Chart',
    untitled: 'Untitled figure',
    newConfirm: 'Discard the current figure and start a new one?',
    demoConfirm: 'Replace the current figure with the demo?',
    importFailed: 'This file is not a valid Figure Studio project.',
    exportFailed: 'Export failed in this browser.',
    datasetAdded: 'Dataset added',
    datasetUpdated: 'Dataset updated',
    chartAdded: 'Chart added — every part stays editable',
    copied: 'Copied',
    nothingCopied: 'Nothing to copy',
    deleted: 'Deleted',
    savedToast: 'Project saved to this browser',
    chartUpdated: 'Chart rebuilt',
    detached: 'Chart parts detached',
    noSelection: 'Select an element first',
    keyboard: 'Double-click text to edit · Shift-click to multi-select · Alt-click to pick one chart part · Ctrl+Z undo · Ctrl+D duplicate',
    type_text: 'Text',
    type_rect: 'Rectangle',
    type_ellipse: 'Ellipse',
    type_line: 'Line',
    type_arrow: 'Arrow',
    type_polyline: 'Polyline',
    type_path: 'Path',
    type_icon: 'Icon',
    type_bracket: 'Bracket',
    chartBar: 'Grouped bars',
    chartStackedBar: 'Stacked bars',
    chartLine: 'Line',
    chartArea: 'Area',
    chartScatter: 'Scatter',
    chartPie: 'Pie',
    icon_cell: 'Cell',
    icon_dna: 'DNA',
    icon_protein: 'Protein',
    icon_antibody: 'Antibody',
    icon_virus: 'Virus',
    icon_bacterium: 'Bacterium',
    icon_flask: 'Flask',
    icon_petri: 'Petri dish',
    icon_syringe: 'Syringe',
    icon_neuron: 'Neuron',
    icon_mito: 'Mitochondrion',
    icon_heart: 'Heart',
    icon_brain: 'Brain',
    icon_lungs: 'Lungs',
    icon_mouse: 'Mouse',
    icon_plate: 'Well plate',
    close: 'Close',
    apply: 'Apply',
    cancel: 'Cancel',
    editDataTitle: 'Edit dataset',
    datasetName: 'Dataset name',
    chartConfigMissing: 'This chart has no saved configuration.',
    fontSizeHint: 'pt',
    figure: 'Figure',
    layerChart: 'Chart {n}',
    insertAtCenter: 'Added at the centre of the artboard',
    tooSmall: 'Too small',
    copiedElements: 'Copied {count} elements',
    groupHint: 'Drag any part to move the whole chart. Alt-click picks a single part.',
    textHint: 'Double-click a text element to edit it directly.',
    errorBoundary: 'The figure editor hit an error.',
    reload: 'Reload editor',
    pngScale: 'PNG scale',
    align: 'Alignment',
    chartNeedNumericX: 'Scatter plots need a numeric X column.',
    saveError: 'Autosave unavailable',
    emptyCanvas: 'Add data, build a chart, or insert shapes and icons.',
    imported: 'Figure imported',
    sheetName: 'Table name',
    newTable: 'New table',
    deleteTable: 'Delete table',
    addRow: 'Add row',
    addColumn: 'Add column',
    deleteRow: 'Delete row',
    deleteColumn: 'Delete column',
    bulkPaste: 'Bulk paste',
    importAsTable: 'Import as new table',
    sheetRowsCols: '{rows} rows × {cols} columns',
    moreRows: 'Show 100 more rows',
    sheetEmpty: 'No table yet. Create a table or paste data from Excel.',
    sheetHint: 'Click a cell to edit · Enter next row · Tab next column · paste a block from Excel into the grid',
    freePlan: 'Free',
    proPlan: 'Pro',
    licenseMenu: 'License',
    licenseTitle: 'Figure Studio license',
    licenseSubtitle: 'One-time purchase, permanent unlock',
    licenseChecking: 'Checking license…',
    licenseIntro: 'Buy once, keep forever. The free edition stays fully editable; Pro unlocks clean export.',
    licenseFeatureNoWatermark: 'PNG export without watermark',
    licenseFeatureSvg: 'SVG vector export',
    licenseFeature300: '300 dpi print PNG',
    licensePerpetual: 'Perpetual buyout license',
    licensePlaceholder: 'Paste your license key (FS1.…)',
    licenseActivate: 'Activate',
    licenseBuy: 'Buy for ¥129',
    licenseActive: 'Buyout license active',
    licenseIssuedTo: 'Licensed to',
    licenseId: 'License ID',
    licenseIssuedAt: 'Issued',
    licenseEdition: 'Edition',
    licenseDeviceNote: 'The key is stored in this browser. Re-enter it on another device.',
    licenseDeactivate: 'Remove from this device',
    licenseInvalid: 'This license key is invalid or damaged.',
    licenseError: 'Could not verify the key in this browser.',
    licenseActivated: 'License activated — Pro unlocked',
    licenseRemoved: 'License removed from this device',
    licenseNeeded: 'Unlock clean SVG / 300 dpi export with the ¥129 buyout license',
    exportPngFree: 'PNG (watermarked preview)',
    exportPngPro: 'PNG 300 dpi',
    watermarkText: 'Figure Studio · Free',
    licenseStoreNote: 'Keys are verified offline; the purchase page is provided by the author.'
  },
  zh: {
    title: '图绘工作台',
    subtitle: '数据一键生成可编辑论文配图',
    undo: '撤销',
    redo: '重做',
    export: '导出',
    exportSvg: 'SVG 矢量图',
    exportPng: 'PNG 300 dpi',
    exportJson: 'JSON 工程',
    importJson: '导入 JSON',
    newFigure: '新建图',
    demoFigure: '载入示例',
    fit: '适应窗口',
    zoomIn: '放大',
    zoomOut: '缩小',
    saved: '已保存到本机',
    saving: '保存中…',
    tabData: '数据',
    tabChart: '图表',
    tabInsert: '插入',
    tabDesign: '设计',
    tabLayers: '图层',
    dataTitle: '原始数据',
    dataHint: '从 Excel、Origin 或 Prism 直接粘贴表格，自动识别制表符、逗号和分号。',
    pasteLabel: '粘贴表格',
    pastePlaceholder: 'Treatment\tIL6\tTNF\nVehicle\t1.0\t2.2\nDrug A\t3.4\t2.8',
    headerRow: '第一行为列名',
    addDataset: '添加数据集',
    updateDataset: '更新数据集',
    datasets: '数据集',
    noDatasets: '还没有数据集，先粘贴表格并添加。',
    preview: '预览',
    rowsCols: '{rows} 行 × {cols} 列',
    parseError: '无法解析这张表',
    useDataset: '用于图表',
    deleteDataset: '删除数据集',
    editDataset: '编辑数据',
    numericOnly: '数值',
    chartTitle: '图表生成',
    dataset: '数据集',
    chartType: '图表类型',
    xColumn: 'X / 分类列',
    yColumns: 'Y 数值（每个系列一列）',
    errorColumn: '误差列',
    none: '无',
    chartName: '图表标题',
    xLabel: 'X 轴标题',
    yLabel: 'Y 轴标题',
    palette: '配色方案',
    font: '字体',
    fontSize: '字号',
    legend: '图例',
    grid: '网格线',
    values: '数值标签',
    insertChart: '插入图表',
    updateChart: '应用到图表',
    chartNeedData: '请先添加数据集。',
    chartNeedY: '至少选择一列 Y 值。',
    insertTitle: '插入元素',
    basics: '文字与形状',
    text: '文本',
    heading: '标题',
    caption: '图注',
    panelLetter: '分图字母',
    box: '矩形',
    circle: '圆形',
    line: '直线',
    arrow: '箭头',
    bracket: '显著性括号',
    icons: '科研图标',
    symbols: '符号',
    page: '画板',
    preset: '预设',
    width: '宽',
    height: '高',
    background: '背景',
    showGrid: '网格',
    snap: '吸附',
    selectHint: '在画布上选择一个元素后即可编辑。',
    position: '位置与尺寸',
    x: 'X',
    y: 'Y',
    w: '宽',
    h: '高',
    rotation: '旋转',
    appearance: '外观',
    fill: '填充',
    stroke: '描边',
    strokeWidth: '描边宽度',
    opacity: '不透明度',
    corner: '圆角',
    lineEndpoints: '端点',
    textContent: '文字',
    editOnCanvas: '在画布上编辑',
    fontWeight: '字重',
    bold: '粗体',
    normal: '常规',
    alignLeft: '左对齐',
    alignCenter: '居中',
    alignRight: '右对齐',
    chartSection: '图表',
    rebuild: '按数据重建',
    detach: '拆散图表元素',
    actions: '操作',
    duplicate: '复制',
    delete: '删除',
    lock: '锁定',
    unlock: '解锁',
    hide: '隐藏',
    show: '显示',
    front: '置于顶层',
    forward: '上移一层',
    backward: '下移一层',
    back: '置于底层',
    alignTools: '对齐与分布',
    alignTop: '顶对齐',
    alignMiddle: '垂直居中',
    alignBottom: '底对齐',
    distributeH: '水平分布',
    distributeV: '垂直分布',
    matchWidth: '统一宽度',
    matchHeight: '统一高度',
    layers: '图层',
    layersHint: '越靠上的元素层级越高，点击行即可选中。',
    chartGroup: '图表',
    emptyLayers: '画板还是空的。',
    elementsCount: '{count} 个元素',
    selectionCount: '已选 {count} 个',
    localOnly: '保存在当前浏览器',
    chartPlaceholder: '图表',
    untitled: '未命名图',
    newConfirm: '放弃当前图并新建？',
    demoConfirm: '用示例替换当前图？',
    importFailed: '这个文件不是有效的图绘工程。',
    exportFailed: '当前浏览器导出失败。',
    datasetAdded: '数据集已添加',
    datasetUpdated: '数据集已更新',
    chartAdded: '图表已插入，所有元素都可继续编辑',
    copied: '已复制',
    nothingCopied: '没有可复制的内容',
    deleted: '已删除',
    savedToast: '工程已保存到浏览器',
    chartUpdated: '图表已重建',
    detached: '图表元素已拆散',
    noSelection: '请先选择元素',
    keyboard: '双击文字直接编辑 · Shift 点击多选 · Alt 点击选中单个图表元素 · Ctrl+Z 撤销 · Ctrl+D 复制',
    type_text: '文本',
    type_rect: '矩形',
    type_ellipse: '椭圆',
    type_line: '直线',
    type_arrow: '箭头',
    type_polyline: '折线',
    type_path: '路径',
    type_icon: '图标',
    type_bracket: '括号',
    chartBar: '分组柱状图',
    chartStackedBar: '堆叠柱状图',
    chartLine: '折线图',
    chartArea: '面积图',
    chartScatter: '散点图',
    chartPie: '饼图',
    icon_cell: '细胞',
    icon_dna: 'DNA',
    icon_protein: '蛋白',
    icon_antibody: '抗体',
    icon_virus: '病毒',
    icon_bacterium: '细菌',
    icon_flask: '三角瓶',
    icon_petri: '培养皿',
    icon_syringe: '注射器',
    icon_neuron: '神经元',
    icon_mito: '线粒体',
    icon_heart: '心脏',
    icon_brain: '脑',
    icon_lungs: '肺',
    icon_mouse: '小鼠',
    icon_plate: '孔板',
    close: '关闭',
    apply: '应用',
    cancel: '取消',
    editDataTitle: '编辑数据集',
    datasetName: '数据集名称',
    chartConfigMissing: '该图表缺少配置信息。',
    fontSizeHint: 'pt',
    figure: '图',
    layerChart: '图表 {n}',
    insertAtCenter: '已添加到画板中央',
    tooSmall: '太小了',
    copiedElements: '已复制 {count} 个元素',
    groupHint: '拖动任意部分可整体移动图表；Alt 点击可单独选中一个元素。',
    textHint: '双击文字元素可以直接在画布上编辑。',
    errorBoundary: '图绘编辑器遇到错误。',
    reload: '重新载入编辑器',
    pngScale: 'PNG 倍率',
    align: '对齐',
    chartNeedNumericX: '散点图需要一个数值型 X 列。',
    saveError: '自动保存不可用',
    emptyCanvas: '粘贴数据生成图表，或插入形状与图标。',
    imported: '已导入图绘工程',
    sheetName: '表名',
    newTable: '新建表格',
    deleteTable: '删除表格',
    addRow: '添加行',
    addColumn: '添加列',
    deleteRow: '删除行',
    deleteColumn: '删除列',
    bulkPaste: '批量粘贴',
    importAsTable: '导入为新表格',
    sheetRowsCols: '{rows} 行 × {cols} 列',
    moreRows: '再显示 100 行',
    sheetEmpty: '还没有表格，新建一个或从 Excel 粘贴数据。',
    sheetHint: '点击单元格编辑 · Enter 下一行 · Tab 下一列 · 可直接粘贴 Excel 区域填充多个单元格',
    freePlan: '免费版',
    proPlan: '专业版',
    licenseMenu: '授权',
    licenseTitle: '图绘工作台授权',
    licenseSubtitle: '一次买断，永久解锁',
    licenseChecking: '正在校验授权…',
    licenseIntro: '免费版保留完整编辑能力；专业版解锁无水印与矢量导出。',
    licenseFeatureNoWatermark: 'PNG 导出无「Figure Studio」水印',
    licenseFeatureSvg: 'SVG 矢量图导出',
    licenseFeature300: '300 dpi 印刷级 PNG',
    licensePerpetual: '买断制永久授权',
    licensePlaceholder: '粘贴授权码（FS1.…）',
    licenseActivate: '激活',
    licenseBuy: '购买授权 ¥129',
    licenseActive: '买断授权已激活',
    licenseIssuedTo: '授权给',
    licenseId: '授权编号',
    licenseIssuedAt: '签发日期',
    licenseEdition: '版本',
    licenseDeviceNote: '授权码保存在当前浏览器；换设备时重新输入即可。',
    licenseDeactivate: '从本机移除',
    licenseInvalid: '授权码无效或已损坏。',
    licenseError: '当前浏览器无法校验授权码。',
    licenseActivated: '授权已激活，专业版已解锁',
    licenseRemoved: '已从本机移除授权',
    licenseNeeded: '¥129 买断授权可解锁无水印 SVG / 300 dpi 导出',
    exportPngFree: 'PNG（带水印预览）',
    exportPngPro: 'PNG 300 dpi',
    watermarkText: 'Figure Studio · 免费版',
    licenseStoreNote: '授权码离线校验，购买页面由作者提供。'
  }
};


'use strict';

var FIGSTUDIO_CSS = [
  '.fs-root{position:relative;display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;overflow:hidden;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-family:var(--dsh-font-family-content,"Segoe UI",Arial,sans-serif);font-size:13px}',
  '.fs-root *{box-sizing:border-box}',
  '.fs-top{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 16px 10px max(16px,var(--dsh-frame-leading-clearance,0px));border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);flex:none;min-height:54px}',
  '.fs-brand{display:flex;align-items:center;gap:9px;min-width:0;margin-right:2px}',
  '.fs-brand-glyph{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:color-mix(in srgb,var(--dsw-alias-brand-primary) 14%,transparent);color:var(--dsw-alias-brand-primary);flex:none}',
  '.fs-brand-name{font-weight:650;letter-spacing:-.01em;font-size:14px;white-space:nowrap}',
  '.fs-brand-sub{font-size:11px;color:var(--dsw-alias-label-secondary);white-space:nowrap;margin-top:-1px}',
  '.fs-docname{min-width:120px;max-width:260px;height:30px;padding:0 9px;border:1px solid transparent;border-radius:7px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:12.5px}',
  '.fs-docname:hover{border-color:var(--dsw-alias-border-l1)}',
  '.fs-docname:focus{outline:none;border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}',
  '.fs-spacer{flex:1 1 auto}',
  '.fs-group{display:flex;align-items:center;gap:2px;padding:2px;border:1px solid var(--dsw-alias-border-l1);border-radius:9px;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:30px;min-height:30px;padding:0 11px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:12.5px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,border-color .12s,color .12s}',
  '.fs-btn:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l2)}',
  '.fs-btn:disabled{opacity:.45;cursor:not-allowed}',
  '.fs-btn.primary{background:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary);color:#fff}',
  '.fs-btn.primary:hover:not(:disabled){filter:brightness(1.06);background:var(--dsw-alias-brand-primary)}',
  '.fs-btn.danger{color:var(--dsw-alias-state-error-primary)}',
  '.fs-btn.ghost{border-color:transparent;background:transparent}',
  '.fs-btn.ghost:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2);border-color:transparent}',
  '.fs-btn.small{height:26px;min-height:26px;padding:0 8px;font-size:11.5px;border-radius:7px}',
  '.fs-iconbtn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;min-width:30px;border:1px solid transparent;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;padding:0;position:relative}',
  '.fs-iconbtn:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l1)}',
  '.fs-iconbtn:disabled{opacity:.4;cursor:not-allowed}',
  '.fs-iconbtn.active{background:color-mix(in srgb,var(--dsw-alias-brand-primary) 12%,transparent);color:var(--dsw-alias-brand-primary)}',
  '.fs-sep{width:1px;height:20px;background:var(--dsw-alias-border-l1);margin:0 3px;flex:none}',
  '.fs-zoomlabel{font-variant-numeric:tabular-nums;font-size:11.5px;color:var(--dsw-alias-label-secondary);min-width:42px;text-align:center}',
  '.fs-body{display:flex;flex:1 1 auto;min-height:0;min-width:0}',
  '.fs-panel{width:284px;flex:none;display:flex;flex-direction:column;min-height:0;background:var(--dsw-alias-bg-layer-1);border-right:1px solid var(--dsw-alias-border-l1);min-width:0}',
  '.fs-panel.right{border-right:0;border-left:1px solid var(--dsw-alias-border-l1);width:300px}',
  '.fs-tabs{display:flex;gap:2px;padding:8px 10px 0;flex:none}',
  '.fs-tab{flex:1;height:30px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:550;cursor:pointer;border-radius:6px 6px 0 0}',
  '.fs-tab:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}',
  '.fs-tab.active{color:var(--dsw-alias-label-primary);border-bottom-color:var(--dsw-alias-brand-primary)}',
  '.fs-panelbody{flex:1 1 auto;overflow:auto;min-height:0;padding:12px 12px 18px;scrollbar-gutter:stable}',
  '.fs-section{border-bottom:1px solid var(--dsw-alias-border-l1);padding:11px 0 13px}',
  '.fs-section:first-child{padding-top:2px}',
  '.fs-section:last-child{border-bottom:0}',
  '.fs-section-title{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10.5px;font-weight:650;letter-spacing:.055em;text-transform:uppercase;color:var(--dsw-alias-label-secondary);margin:0 0 9px}',
  '.fs-hint{font-size:11.5px;line-height:1.55;color:var(--dsw-alias-label-secondary);margin:6px 0 0}',
  '.fs-hint b{color:var(--dsw-alias-label-primary);font-weight:600}',
  '.fs-field{display:flex;flex-direction:column;gap:4px;margin-bottom:9px;min-width:0}',
  '.fs-field:last-child{margin-bottom:0}',
  '.fs-label{font-size:11px;color:var(--dsw-alias-label-secondary);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
  '.fs-input,.fs-select,.fs-textarea{width:100%;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;padding:5px 8px;height:30px;min-width:0}',
  '.fs-textarea{height:auto;min-height:84px;resize:vertical;line-height:1.45;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:11.5px}',
  '.fs-input:focus,.fs-select:focus,.fs-textarea:focus{outline:none;border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 18%,transparent)}',
  '.fs-input[type="number"]{font-variant-numeric:tabular-nums}',
  '.fs-row{display:flex;align-items:center;gap:6px;min-width:0}',
  '.fs-row.wrap{flex-wrap:wrap}',
  '.fs-grid2{display:grid;grid-template-columns:1fr 1fr;gap:7px}',
  '.fs-grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px}',
  '.fs-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}',
  '.fs-check{display:flex;align-items:center;gap:7px;min-height:26px;font-size:12px;color:var(--dsw-alias-label-secondary);cursor:pointer;user-select:none}',
  '.fs-check input{width:15px;height:15px;accent-color:var(--dsw-alias-brand-primary);margin:0;flex:none}',
  '.fs-check span{color:var(--dsw-alias-label-primary)}',
  '.fs-seg{display:flex;padding:2px;gap:2px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-seg button{flex:1;height:25px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:11.5px;cursor:pointer;padding:0 4px}',
  '.fs-seg button.active{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:0 1px 2px rgba(0,0,0,.12)}',
  '.fs-gridbtns{display:grid;grid-template-columns:1fr 1fr;gap:6px}',
  '.fs-insertbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;height:64px;border:1px solid var(--dsw-alias-border-l1);border-radius:9px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:inherit;font-size:11.5px;cursor:pointer;padding:4px}',
  '.fs-insertbtn:hover{border-color:var(--dsw-alias-brand-primary);background:color-mix(in srgb,var(--dsw-alias-brand-primary) 7%,var(--dsw-alias-bg-layer-2))}',
  '.fs-insertbtn svg{color:var(--dsw-alias-brand-primary);flex:none}',
  '.fs-icongrid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}',
  '.fs-iconbtn2{display:flex;flex-direction:column;align-items:center;gap:3px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-2);padding:6px 2px 4px;cursor:pointer;color:var(--dsw-alias-label-primary);font:inherit;font-size:9.5px;line-height:1.1;min-width:0}',
  '.fs-iconbtn2:hover{border-color:var(--dsw-alias-brand-primary)}',
  '.fs-iconbtn2 span{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-secondary)}',
  '.fs-iconbtn2 svg{color:var(--dsw-alias-brand-primary)}',
  '.fs-tablewrap{border:1px solid var(--dsw-alias-border-l1);border-radius:8px;overflow:auto;max-height:168px;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-table{border-collapse:collapse;font-size:11px;min-width:100%;white-space:nowrap}',
  '.fs-table th,.fs-table td{padding:4px 7px;border-bottom:1px solid var(--dsw-alias-border-l1);text-align:left;font-variant-numeric:tabular-nums}',
  '.fs-table th{position:sticky;top:0;background:var(--dsw-alias-bg-layer-1);font-weight:600;color:var(--dsw-alias-label-secondary);z-index:1}',
  '.fs-table tr:last-child td{border-bottom:0}',
  '.fs-dsrow{display:flex;align-items:center;gap:8px;padding:7px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;margin-bottom:6px;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-dsrow .fs-dsmeta{min-width:0;flex:1}',
  '.fs-dsname{font-size:12px;font-weight:550;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
  '.fs-dssub{font-size:10.5px;color:var(--dsw-alias-label-secondary);margin-top:1px}',
  '.fs-swatches{display:flex;gap:4px;flex-wrap:wrap}',
  '.fs-swatch{width:18px;height:18px;border-radius:5px;border:1px solid color-mix(in srgb,#000 14%,transparent);cursor:pointer;padding:0;flex:none}',
  '.fs-swatch.active{box-shadow:0 0 0 2px var(--dsw-alias-bg-layer-1),0 0 0 3.5px var(--dsw-alias-brand-primary)}',
  '.fs-paletterow{display:flex;align-items:center;gap:6px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;padding:4px 6px;cursor:pointer;background:var(--dsw-alias-bg-layer-2);margin-bottom:5px}',
  '.fs-paletterow.active{border-color:var(--dsw-alias-brand-primary)}',
  '.fs-palettedots{display:flex;gap:2px;flex:1}',
  '.fs-palettedots i{display:block;width:12px;height:12px;border-radius:3px}',
  '.fs-palettename{font-size:10.5px;color:var(--dsw-alias-label-secondary);width:46px;text-align:right;text-transform:capitalize}',
  '.fs-charttypes{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}',
  '.fs-charttype{display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 2px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-2);font:inherit;font-size:9.5px;line-height:1.15;color:var(--dsw-alias-label-secondary);cursor:pointer;text-align:center;min-width:0}',
  '.fs-charttype svg{color:var(--dsw-alias-brand-primary)}',
  '.fs-charttype.active{border-color:var(--dsw-alias-brand-primary);background:color-mix(in srgb,var(--dsw-alias-brand-primary) 8%,var(--dsw-alias-bg-layer-2));color:var(--dsw-alias-label-primary)}',
  '.fs-ycols{display:flex;flex-direction:column;gap:2px;max-height:130px;overflow:auto;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;padding:5px 7px;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-notchip{display:inline-flex;align-items:center;gap:3px;font-size:9.5px;color:var(--dsw-alias-label-secondary);border:1px solid var(--dsw-alias-border-l1);border-radius:20px;padding:1px 5px;margin-left:4px}',
  '.fs-stage{position:relative;flex:1 1 auto;min-width:0;min-height:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-layer-2);overflow:hidden}',
  '.fs-viewport{position:relative;flex:1 1 auto;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:22px;scrollbar-gutter:stable}',
  '.fs-holder{position:relative;flex:none;margin:auto}',
  '.fs-artboard{position:absolute;inset:0;transform-origin:0 0;background:#fff;box-shadow:0 10px 34px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.08);outline:1px solid color-mix(in srgb,var(--dsw-alias-border-l1) 70%,transparent)}',
  '.fs-artboard.dark{box-shadow:0 10px 34px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.1)}',
  '.fs-grid-overlay{position:absolute;inset:0;pointer-events:none;opacity:.5}',
  '.fs-artsvg{position:absolute;inset:0;overflow:visible;touch-action:none;user-select:none;-webkit-user-select:none}',
  '.fs-artsvg g[data-el-id]{cursor:move}',
  '.fs-overlay{position:absolute;inset:0;overflow:visible;pointer-events:none}',
  '.fs-handle{pointer-events:all;fill:var(--dsw-alias-bg-layer-1);stroke:var(--dsw-alias-brand-primary);vector-effect:non-scaling-stroke;stroke-width:1.4}',
  '.fs-handle-nw,.fs-handle-se{cursor:nwse-resize}',
  '.fs-handle-ne,.fs-handle-sw{cursor:nesw-resize}',
  '.fs-handle-n,.fs-handle-s{cursor:ns-resize}',
  '.fs-handle-e,.fs-handle-w{cursor:ew-resize}',
  '.fs-handle-rot{cursor:grab;fill:var(--dsw-alias-brand-primary)}',
  '.fs-textedit{position:absolute;z-index:20;margin:0;padding:1px 2px;border:1.5px solid var(--dsw-alias-brand-primary);border-radius:2px;background:rgba(255,255,255,.97);color:#111;resize:none;overflow:hidden;line-height:1.3;box-shadow:0 3px 14px rgba(0,0,0,.2);outline:none}',
  '.fs-empty-stage{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;color:var(--dsw-alias-label-secondary)}',
  '.fs-statusbar{display:flex;align-items:center;gap:12px;padding:5px 14px;border-top:1px solid var(--dsw-alias-border-l1);font-size:11px;color:var(--dsw-alias-label-secondary);flex:none;background:var(--dsw-alias-bg-layer-1)}',
  '.fs-statusbar .fs-dot{width:6px;height:6px;border-radius:50%;background:var(--dsw-alias-state-success-primary);flex:none}',
  '.fs-statusbar .fs-dot.saving{background:var(--dsw-alias-state-warn-primary)}',
  '.fs-menu{position:absolute;z-index:60;top:calc(100% + 6px);right:0;min-width:192px;padding:5px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-overlay,var(--dsw-alias-bg-layer-1));box-shadow:0 12px 38px rgba(0,0,0,.22)}',
  '.fs-menu button{display:flex;align-items:center;gap:8px;width:100%;height:31px;padding:0 9px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;text-align:left;cursor:pointer;white-space:nowrap}',
  '.fs-menu button:hover{background:var(--dsw-alias-bg-layer-2)}',
  '.fs-menu .fs-menusep{height:1px;background:var(--dsw-alias-border-l1);margin:4px 2px}',
  '.fs-menu .fs-menunote{font-size:10.5px;color:var(--dsw-alias-label-secondary);padding:4px 9px 3px}',
  '.fs-popoverwrap{position:relative}',
  '.fs-layerrow{display:flex;align-items:center;gap:6px;padding:4px 5px;border-radius:7px;cursor:pointer;min-height:30px;border:1px solid transparent}',
  '.fs-layerrow:hover{background:var(--dsw-alias-bg-layer-2)}',
  '.fs-layerrow.active{background:color-mix(in srgb,var(--dsw-alias-brand-primary) 11%,transparent);border-color:color-mix(in srgb,var(--dsw-alias-brand-primary) 35%,transparent)}',
  '.fs-layerrow .fs-layerlabel{flex:1;min-width:0;font-size:11.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
  '.fs-layerrow svg{color:var(--dsw-alias-label-secondary);flex:none}',
  '.fs-layerrow .fs-mini{width:22px;height:22px;border:0;background:transparent;color:var(--dsw-alias-label-secondary);border-radius:5px;display:grid;place-items:center;cursor:pointer;padding:0}',
  '.fs-layerrow .fs-mini:hover{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}',
  '.fs-layerrow .fs-mini.active{color:var(--dsw-alias-brand-primary)}',
  '.fs-layers{display:flex;flex-direction:column;gap:1px}',
  '.fs-layergroup{margin-left:6px;border-left:1px dashed var(--dsw-alias-border-l2);padding-left:5px;display:flex;flex-direction:column;gap:1px}',
  '.fs-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:34px 12px;gap:8px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.5}',
  '.fs-empty svg{opacity:.6}',
  '.fs-toast{position:absolute;left:50%;bottom:36px;transform:translateX(-50%);z-index:80;display:flex;align-items:center;gap:8px;padding:8px 13px;border-radius:9px;background:var(--dsw-alias-bg-overlay,var(--dsw-alias-bg-layer-1));border:1px solid var(--dsw-alias-border-l1);box-shadow:0 10px 30px rgba(0,0,0,.22);font-size:12px;max-width:80%;animation:fs-toast-in .16s ease-out}',
  '@keyframes fs-toast-in{from{opacity:0;transform:translate(-50%,6px)}to{opacity:1;transform:translate(-50%,0)}}',
  '.fs-toast .fs-toastdot{width:7px;height:7px;border-radius:50%;background:var(--dsw-alias-state-success-primary);flex:none}',
  '.fs-error{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;height:100%;padding:30px;text-align:center;color:var(--dsw-alias-label-secondary);font-size:13px}',
  '.fs-colorwrap{display:flex;align-items:center;gap:6px;min-width:0}',
  '.fs-color{width:30px;height:30px;flex:none;padding:2px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-layer-2);cursor:pointer}',
  '.fs-color::-webkit-color-swatch-wrapper{padding:0}',
  '.fs-color::-webkit-color-swatch{border:0;border-radius:5px}',
  '.fs-colorhex{flex:1;text-transform:uppercase}',
  '.fs-actionrow{display:flex;gap:4px;flex-wrap:wrap}',
  '.fs-divider{height:1px;background:var(--dsw-alias-border-l1);margin:9px 0}',
  '.fs-notice{display:flex;gap:7px;padding:7px 8px;border-radius:7px;background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 10%,transparent);color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.45;margin:6px 0}',
  '.fs-chartbadge{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;letter-spacing:.02em;text-transform:uppercase;color:var(--dsw-alias-brand-primary);background:color-mix(in srgb,var(--dsw-alias-brand-primary) 10%,transparent);border-radius:20px;padding:2px 7px}',
  '.fs-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
  '.fs-sheet-toolbar{display:flex;align-items:center;gap:5px;flex-wrap:wrap;margin-bottom:8px}',
  '.fs-sheet-name{flex:1 1 100px;min-width:84px;height:28px;font-size:11.5px}',
  '.fs-sheet-toolbar .fs-select{width:auto;min-width:96px;max-width:150px;flex:0 1 140px;height:28px;font-size:11.5px}',
  '.fs-sheet-toolbar .fs-btn.small{height:28px}',
  '.fs-sheet-wrap{border:1px solid var(--dsw-alias-border-l1);border-radius:9px;overflow:hidden;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-sheet-scroll{max-height:min(54vh,520px);overflow:auto;position:relative}',
  '.fs-sheet{border-collapse:separate;border-spacing:0;font-size:11.5px;width:max-content;min-width:100%;table-layout:auto}',
  '.fs-sheet th,.fs-sheet td{border-right:1px solid var(--dsw-alias-border-l1);border-bottom:1px solid var(--dsw-alias-border-l1);padding:0;height:28px;background:var(--dsw-alias-bg-layer-1)}',
  '.fs-sheet thead th{position:sticky;top:0;z-index:3;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-sheet thead th:first-child{left:0;z-index:5}',
  '.fs-sheet .fs-sheet-corner,.fs-sheet .fs-sheet-rowhead{position:sticky;left:0;z-index:2;width:34px;min-width:34px;max-width:34px;background:var(--dsw-alias-bg-layer-2);text-align:center;color:var(--dsw-alias-label-secondary);font-size:10px;font-variant-numeric:tabular-nums;padding:0 1px}',
  '.fs-sheet .fs-sheet-rowhead .fs-sheet-rownum{display:inline-block;min-width:13px}',
  '.fs-sheet .fs-sheet-rowhead .fs-mini,.fs-sheet .fs-colhead .fs-mini{opacity:0}',
  '.fs-sheet .fs-sheet-rowhead:hover .fs-mini,.fs-sheet .fs-colhead:hover .fs-mini{opacity:1}',
  '.fs-cell-input{display:block;width:100%;min-width:80px;max-width:220px;height:27px;border:0;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:11.5px;padding:3px 6px;outline:none;border-radius:0}',
  '.fs-cell-input.fs-cell-num{text-align:right;font-variant-numeric:tabular-nums}',
  '.fs-cell-input:focus{box-shadow:inset 0 0 0 1.6px var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-1)}',
  '.fs-sheet td:focus-within{background:color-mix(in srgb,var(--dsw-alias-brand-primary) 5%,transparent)}',
  '.fs-colhead{display:flex;align-items:center;gap:1px;padding:1px 1px 1px 2px;min-width:82px}',
  '.fs-colhead input{flex:1;min-width:0;width:70px;border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:10.5px;font-weight:650;padding:4px 3px;outline:none}',
  '.fs-colhead input:focus{color:var(--dsw-alias-label-primary);box-shadow:inset 0 0 0 1.5px var(--dsw-alias-brand-primary);border-radius:4px}',
  '.fs-sheet .fs-mini{width:18px;height:18px;min-width:18px;border:0;background:transparent;color:var(--dsw-alias-label-secondary);border-radius:4px;display:grid;place-items:center;cursor:pointer;padding:0}',
  '.fs-sheet .fs-mini:hover{color:var(--dsw-alias-state-error-primary);background:var(--dsw-alias-bg-layer-1)}',
  '.fs-sheet-addcol{display:grid;place-items:center;width:36px;min-width:36px;cursor:pointer;color:var(--dsw-alias-brand-primary);border:0;background:transparent;height:27px}',
  '.fs-sheet-addcol:hover{background:color-mix(in srgb,var(--dsw-alias-brand-primary) 10%,transparent)}',
  '.fs-sheet-addrow td{padding:4px 6px;background:var(--dsw-alias-bg-layer-2)}',
  '.fs-sheet-addrow button{display:inline-flex;align-items:center;gap:5px;border:1px dashed var(--dsw-alias-border-l2);border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;padding:3px 9px;cursor:pointer}',
  '.fs-sheet-addrow button:hover{color:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary)}',
  '.fs-sheet-footer{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:5px 8px;font-size:10.5px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border-top:1px solid var(--dsw-alias-border-l1)}',
  '.fs-sheet-more{display:flex;justify-content:center;width:100%}',
  '.fs-sheet-bulk{margin-top:10px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-2);overflow:hidden}',
  '.fs-sheet-bulk summary{cursor:pointer;padding:6px 8px;font-size:11px;color:var(--dsw-alias-label-secondary);user-select:none}',
  '.fs-sheet-bulk[open] summary{border-bottom:1px solid var(--dsw-alias-border-l1)}',
  '.fs-sheet-bulkbody{padding:8px;display:flex;flex-direction:column;gap:7px}',
  '.fs-sheet-bulkbody textarea{min-height:76px}',
  '.fs-sheet-empty{padding:14px 8px;text-align:center;color:var(--dsw-alias-label-secondary);font-size:11.5px;line-height:1.55}',
  '.fs-planbadge{display:inline-flex;align-items:center;gap:4px;height:20px;padding:0 7px;border-radius:20px;font-size:9.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;flex:none;border:1px solid transparent}',
  '.fs-planbadge.free{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l1)}',
  '.fs-planbadge.pro{color:#fff;background:linear-gradient(135deg,var(--dsw-alias-brand-primary),#00A087);border-color:transparent}',
  '.fs-modal-backdrop{position:absolute;inset:0;z-index:120;display:grid;place-items:center;padding:22px;background:rgba(8,12,20,.42);backdrop-filter:blur(2px)}',
  '.fs-modal{width:min(468px,94%);max-height:88%;overflow:auto;padding:16px 18px 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:14px;background:var(--dsw-alias-bg-layer-1);box-shadow:0 24px 70px rgba(0,0,0,.32)}',
  '.fs-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:12px}',
  '.fs-modal-title{font-size:15px;font-weight:650;letter-spacing:-.01em}',
  '.fs-modal-sub{font-size:11px;color:var(--dsw-alias-label-secondary);margin-top:2px}',
  '.fs-license-price{font-size:30px;line-height:1.15;font-weight:750;letter-spacing:-.02em;margin:2px 0 4px}',
  '.fs-license-list{margin:8px 0 12px;padding-left:18px;font-size:12px;line-height:1.75;color:var(--dsw-alias-label-secondary)}',
  '.fs-license-list li::marker{color:var(--dsw-alias-brand-primary)}',
  '.fs-license-active{display:flex;align-items:center;gap:8px;padding:9px 10px;border-radius:9px;background:color-mix(in srgb,var(--dsw-alias-state-success-primary) 12%,transparent);color:var(--dsw-alias-label-primary);font-size:13px;font-weight:600;margin-bottom:10px}',
  '.fs-license-active svg{color:var(--dsw-alias-state-success-primary)}',
  '.fs-license-facts{display:flex;flex-direction:column;gap:7px;margin:0 0 6px;font-size:11.5px}',
  '.fs-license-facts>div{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:6px}',
  '.fs-license-facts dt{color:var(--dsw-alias-label-secondary)}',
  '.fs-license-facts dd{margin:0;text-align:right;font-weight:550;word-break:break-all}',
  '.fs-license-actions{display:flex;justify-content:flex-end;gap:7px;flex-wrap:wrap;margin-top:12px}',
  '.fs-modal .fs-textarea{min-height:68px;font-size:10.5px}',
  '.fs-modal a.fs-btn{text-decoration:none}',
  '@media (max-width:1180px){.fs-panel{width:252px}.fs-panel.right{width:268px}}',
  '@media (max-width:980px){.fs-brand-sub{display:none}.fs-docname{max-width:150px}}'
].join('\n');


'use strict';

/* ------------------------------------------------------------------ *
 * dsh-figstudio client — shared helpers and SVG renderers
 * ------------------------------------------------------------------ */

function fsHexToRgb(hex) {
  var s = String(hex || '').replace('#', '');
  if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return { r: 0, g: 0, b: 0 };
  return { r: parseInt(s.slice(0, 2), 16), g: parseInt(s.slice(2, 4), 16), b: parseInt(s.slice(4, 6), 16) };
}

function fsRgbToHex(r, g, b) {
  function p(n) { return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0'); }
  return '#' + p(r) + p(g) + p(b);
}

function fsShade(hex, amount) {
  var c = fsHexToRgb(hex);
  var target = amount < 0 ? 0 : 255;
  var k = Math.abs(amount);
  return fsRgbToHex(c.r + (target - c.r) * k, c.g + (target - c.g) * k, c.b + (target - c.b) * k);
}

function fsMix(a, b, amount) {
  var ca = fsHexToRgb(a), cb = fsHexToRgb(b), k = amount;
  return fsRgbToHex(ca.r + (cb.r - ca.r) * k, ca.g + (cb.g - ca.g) * k, ca.b + (cb.b - ca.b) * k);
}

function fsFontFamily(name) {
  return FONT_STACKS[name] || FONT_STACKS.Arial;
}

function fsWrapLines(text, fontSize, maxWidth) {
  var size = Math.max(6, Number(fontSize) || 12);
  var limit = Math.max(size * 1.5, Number(maxWidth) || 0);
  var paragraphs = String(text == null ? '' : text).split('\n');
  var out = [];
  for (var p = 0; p < paragraphs.length; p++) {
    var para = paragraphs[p];
    if (!para) { out.push(''); continue; }
    var tokens = [];
    var buf = '';
    for (var i = 0; i < para.length; i++) {
      var ch = para[i];
      if (ch === ' ') {
        if (buf) { tokens.push(buf); buf = ''; }
        tokens.push(' ');
      } else if (ch.charCodeAt(0) >= 0x2e80) {
        if (buf) { tokens.push(buf); buf = ''; }
        tokens.push(ch);
      } else {
        buf += ch;
      }
    }
    if (buf) tokens.push(buf);
    var line = '';
    for (var k = 0; k < tokens.length; k++) {
      var token = tokens[k];
      var candidate = line + token;
      if (line && estimateTextWidth(candidate, size) > limit) {
        out.push(line.replace(/\s+$/, ''));
        line = token === ' ' ? '' : token;
      } else {
        line = candidate;
      }
      if (token === ' ' && line && estimateTextWidth(line, size) > limit) {
        out.push(line.replace(/\s+$/, ''));
        line = '';
      }
    }
    out.push(line.replace(/\s+$/, ''));
  }
  return out.length ? out : [''];
}

function fsElementName(el, t) {
  if (!el) return '';
  if (el.type === 'text') {
    var s = String(el.text || '').replace(/\s+/g, ' ').trim();
    if (s) return s.length > 26 ? s.slice(0, 26) + '…' : s;
    return t('type_text');
  }
  if (el.type === 'icon') return t('icon_' + (el.icon || 'cell'));
  return t(elementTypeLabelKey(el.type));
}

function fsClipText(text, n) {
  var s = String(text || '').replace(/\s+/g, ' ').trim();
  return s.length > n ? s.slice(0, n) + '…' : s;
}

/* ------------------------------ UI icons ------------------------------ */

var FS_ICON_PATHS = {
  undo: 'M8 5H5v3M5.6 8A7 7 0 1 1 5 15',
  redo: 'M16 5h3v3M18.4 8A7 7 0 1 0 19 15',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  fit: 'M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4',
  download: 'M12 4v11m0 0 4-4m-4 4-4-4M5 19h14',
  upload: 'M12 20V9m0 0 4 4m-4-4-4 4M5 5h14',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5',
  copy: 'M9 9h10v10H9zM5 15V5h10',
  lock: 'M7 10V8a5 5 0 0 1 10 0v2M5 10h14v10H5z',
  unlock: 'M7 10V8a5 5 0 0 1 9.5-2M5 10h14v10H5z',
  eye: 'M2 12s3.8-6 10-6 10 6 10 6-3.8 6-10 6-10-6-10-6Z M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z',
  eyeoff: 'M3 3l18 18M10.6 6.2A10.6 10.6 0 0 1 12 6c6.2 0 10 6 10 6a17 17 0 0 1-3.3 3.8M6.2 7.7A16 16 0 0 0 2 12s3.8 6 10 6c1.4 0 2.7-.3 3.8-.8M9.9 9.9a3 3 0 0 0 4.2 4.2',
  chevronDown: 'M6 9l6 6 6-6',
  chevronRight: 'M9 6l6 6-6 6',
  close: 'M6 6l12 12M18 6L6 18',
  text: 'M4 5h16M12 5v15M8 20h8',
  heading: 'M5 5v14M19 5v14M5 12h14',
  rect: 'M4 6h16v12H4z',
  ellipse: 'M12 5a8 7 0 1 1 0 14 8 7 0 0 1 0-14Z',
  line: 'M4 20 20 4',
  arrow: 'M4 20 20 4M12 4h8v8',
  bracket: 'M5 20V6h14v14',
  icon: 'M12 3l2.6 5.4L20 11l-5.4 2.6L12 19l-2.6-5.4L4 11l5.4-2.6z',
  chart: 'M4 20V4M4 20h16M8 17v-6M12 17V8M16 17v-9M20 17v-4',
  dataset: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  layers: 'M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5',
  design: 'M4 20h4L20 8l-4-4L4 16v4ZM13 7l4 4',
  alignLeft: 'M4 4v16M8 7h9M8 12h6M8 17h11',
  alignCenter: 'M12 4v16M6 7h12M8 12h8M4 17h16',
  alignRight: 'M20 4v16M7 7h9M10 12h6M5 17h11',
  alignTop: 'M4 4h16M7 8v9M12 8v6M17 8v11',
  alignMiddle: 'M4 12h16M7 6v12M12 8v8M17 4v16',
  alignBottom: 'M4 20h16M7 7v9M12 10v6M17 5v11',
  distH: 'M4 4v16M20 4v16M9 8h6v8H9z',
  distV: 'M4 4h16M4 20h16M8 9h8v6H8z',
  front: 'M12 3l9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5',
  back: 'M12 21l9-5-9-5-9 5 9 5ZM3 11l9-5 9 5M3 7l9-5 9 5',
  forward: 'M12 4l8 8-8 8M4 12h15',
  backward: 'M12 4 4 12l8 8M20 12H5',
  lockSmall: 'M8 11V9a4 4 0 0 1 8 0v2M6 11h12v9H6z',
  grid: 'M4 4h16v16H4zM4 9h16M4 15h16M9 4v16M15 4v16',
  snap: 'M12 3v18M3 12h18M7 7l10 10M17 7 7 17',
  sparkle: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z',
  warning: 'M12 3 2 21h20L12 3Zm0 6v6m0 3v.5',
  rotate: 'M20 8a8 8 0 1 0 1 6M20 3v5h-5',
  check: 'M4 12l5 5L20 6',
  help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4v.5M9.5 9a2.5 2.5 0 1 1 3.6 2.3c-.7.4-1.1 1-1.1 1.7'
};

function FSIcon(props) {
  var name = props.name;
  var size = props.size || 16;
  var d = FS_ICON_PATHS[name] || FS_ICON_PATHS.sparkle;
  return h('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: props.strokeWidth || 1.7,
    strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false'
  }, h('path', { d: d }));
}

function FSChartGlyph(props) {
  var type = props.type;
  var size = props.size || 22;
  var w = size, hh = Math.round(size * 0.72);
  var parts = [];
  if (type === 'bar' || type === 'stackedBar') {
    parts.push(h('rect', { key: 'a', x: 2, y: 7, width: 3, height: 7, rx: 0.6, fill: 'currentColor', opacity: type === 'stackedBar' ? 1 : 0.95 }));
    parts.push(h('rect', { key: 'b', x: 6.5, y: 4, width: 3, height: 10, rx: 0.6, fill: 'currentColor', opacity: 0.75 }));
    parts.push(h('rect', { key: 'c', x: 11, y: 8, width: 3, height: 6, rx: 0.6, fill: 'currentColor', opacity: 0.55 }));
    parts.push(h('rect', { key: 'd', x: 15.5, y: 3, width: 3, height: 11, rx: 0.6, fill: 'currentColor', opacity: 0.9 }));
    if (type === 'stackedBar') parts.push(h('rect', { key: 'e', x: 6.5, y: 2, width: 3, height: 2, rx: 0.4, fill: 'currentColor', opacity: 0.5 }));
  } else if (type === 'line' || type === 'area') {
    if (type === 'area') parts.push(h('path', { key: 'f', d: 'M2 15 L7 9 L12 12 L17 4 L20 6 L20 16 L2 16 Z', fill: 'currentColor', opacity: 0.18 }));
    parts.push(h('path', { key: 'l', d: 'M2 15 L7 9 L12 12 L17 4 L20 6', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }));
    parts.push(h('circle', { key: 'p1', cx: 7, cy: 9, r: 1.4, fill: 'currentColor' }));
    parts.push(h('circle', { key: 'p2', cx: 17, cy: 4, r: 1.4, fill: 'currentColor' }));
  } else if (type === 'scatter') {
    [[4, 12], [7, 7], [10, 10], [13, 5], [16, 8], [18, 4]].forEach(function (p, i) {
      parts.push(h('circle', { key: 's' + i, cx: p[0], cy: p[1], r: 1.5, fill: 'currentColor', opacity: 0.85 }));
    });
  } else if (type === 'pie') {
    parts.push(h('path', { key: 'p1', d: 'M11 11 L11 2 A9 9 0 0 1 19.5 7.5 Z', fill: 'currentColor' }));
    parts.push(h('path', { key: 'p2', d: 'M11 11 L19.5 7.5 A9 9 0 0 1 15.5 19.2 Z', fill: 'currentColor', opacity: 0.62 }));
    parts.push(h('path', { key: 'p3', d: 'M11 11 L15.5 19.2 A9 9 0 0 1 2.2 8.6 Z', fill: 'currentColor', opacity: 0.38 }));
  }
  return h('svg', { width: w, height: hh + 2, viewBox: '0 0 22 17', 'aria-hidden': 'true', focusable: 'false' }, parts);
}

function FSStudioGlyph(props) {
  var size = props && props.size ? props.size : 20;
  return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true', focusable: 'false' },
    h('rect', { x: 3.2, y: 3.2, width: 17.6, height: 17.6, rx: 4, stroke: 'currentColor', strokeWidth: 1.5 }),
    h('path', { d: 'M7.2 16.4V11M11 16.4V7.8M14.8 16.4v-3.2M18.6 16.4V9.4', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' }),
    h('circle', { cx: 7.2, cy: 8.6, r: 1.05, fill: 'currentColor' }),
    h('circle', { cx: 14.8, cy: 10.2, r: 1.05, fill: 'currentColor' }),
    h('circle', { cx: 18.6, cy: 6.4, r: 1.05, fill: 'currentColor' })
  );
}

/* --------------------------- element renderer --------------------------- */

function fsTextLines(el) {
  return fsWrapLines(el.text || '', el.fontSize || 12, el.w || 100);
}

function fsRenderText(el) {
  var size = Number(el.fontSize) || 12;
  var lines = fsTextLines(el);
  var lineHeight = size * 1.28;
  var anchor = el.align === 'center' ? 'middle' : el.align === 'right' ? 'end' : 'start';
  var tx = el.align === 'center' ? (Number(el.w) || 0) / 2 : el.align === 'right' ? (Number(el.w) || 0) : 0;
  var weight = el.fontWeight === 'bold' ? 700 : 400;
  var style = el.fontStyle === 'italic' ? 'italic' : 'normal';
  var tspans = lines.map(function (line, i) {
    return h('tspan', { key: 'l' + i, x: tx, y: size * 0.98 + i * lineHeight }, line || ' ');
  });
  return h('text', {
    fill: el.fill || '#222222', fillOpacity: el.fillOpacity == null ? 1 : el.fillOpacity,
    stroke: el.stroke && el.stroke !== 'none' ? el.stroke : 'none',
    strokeWidth: Number(el.strokeWidth) || 0,
    fontFamily: fsFontFamily(el.fontFamily), fontSize: size, fontWeight: weight,
    fontStyle: style, textAnchor: anchor, opacity: el.opacity == null ? 1 : el.opacity,
    dominantBaseline: 'hanging', style: { whiteSpace: 'pre' }
  }, tspans);
}

function fsRenderIconPart(part, el) {
  var primary = el.fill && el.fill !== 'none' ? el.fill : '#3C5488';
  var detail = el.stroke && el.stroke !== 'none' ? el.stroke : fsShade(primary, -0.32);
  var fill = part.fill === 'primary' ? primary : part.fill === 'detail' ? detail : 'none';
  var stroke = part.stroke === 'primary' ? primary : part.stroke === 'detail' ? detail : 'none';
  return h('path', {
    key: part.d, d: part.d, fill: fill, fillOpacity: part.opacity == null ? 1 : part.opacity,
    stroke: stroke, strokeWidth: part.sw || 0, strokeLinecap: part.linecap || 'round',
    strokeLinejoin: part.linejoin || 'round'
  });
}

function fsRenderElement(el, view) {
  if (!el || el.hidden) return null;
  var opacity = el.opacity == null ? 1 : el.opacity;
  var transform = 'translate(' + (Number(el.x) || 0) + ' ' + (Number(el.y) || 0) + ')';
  var rotate = Number(el.rotate) || 0;
  if (el.type === 'line' || el.type === 'arrow') transform = '';
  if (rotate && el.type !== 'line' && el.type !== 'arrow') {
    transform += ' rotate(' + rotate + ' ' + (Number(el.w) || 0) / 2 + ' ' + (Number(el.h) || 0) / 2 + ')';
  }
  var children = [];
  if (el.type === 'text') {
    children.push(h('rect', { key: 'hit', x: 0, y: 0, width: Math.max(8, Number(el.w) || 0), height: Math.max(8, Number(el.h) || 0), fill: 'transparent', pointerEvents: 'all' }));
    children.push(h('g', { key: 'txt' }, fsRenderText(el)));
  } else if (el.type === 'rect') {
    children.push(h('rect', {
      key: 'r', x: 0, y: 0, width: Math.max(0, Number(el.w) || 0), height: Math.max(0, Number(el.h) || 0),
      rx: Number(el.radius) || 0, fill: el.fill || 'none', fillOpacity: el.fillOpacity == null ? 1 : el.fillOpacity,
      stroke: el.stroke && el.stroke !== 'none' ? el.stroke : 'none', strokeWidth: Number(el.strokeWidth) || 0,
      strokeDasharray: el.dashed ? '6 4' : undefined
    }));
  } else if (el.type === 'ellipse') {
    children.push(h('ellipse', {
      key: 'e', cx: (Number(el.w) || 0) / 2, cy: (Number(el.h) || 0) / 2,
      rx: Math.max(0, (Number(el.w) || 0) / 2), ry: Math.max(0, (Number(el.h) || 0) / 2),
      fill: el.fill || 'none', fillOpacity: el.fillOpacity == null ? 1 : el.fillOpacity,
      stroke: el.stroke && el.stroke !== 'none' ? el.stroke : 'none', strokeWidth: Number(el.strokeWidth) || 0,
      strokeDasharray: el.dashed ? '6 4' : undefined
    }));
  } else if (el.type === 'line' || el.type === 'arrow') {
    var x1 = Number(el.x1) || 0, y1 = Number(el.y1) || 0, x2 = Number(el.x2) || 0, y2 = Number(el.y2) || 0;
    var sw = Number(el.strokeWidth) || 2;
    var stroke = el.stroke && el.stroke !== 'none' ? el.stroke : '#333333';
    children.push(h('line', { key: 'h', x1: x1, y1: y1, x2: x2, y2: y2, stroke: 'transparent', strokeWidth: Math.max(12, sw + 8), pointerEvents: 'stroke' }));
    children.push(h('line', { key: 'l', x1: x1, y1: y1, x2: x2, y2: y2, stroke: stroke, strokeWidth: sw, strokeLinecap: 'round', strokeDasharray: el.dashed ? '6 4' : undefined }));
    if (el.type === 'arrow') {
      var ang = Math.atan2(y2 - y1, x2 - x1);
      var len = Math.max(8, sw * 3.4);
      var wing = len * 0.52;
      var bx = x2 - Math.cos(ang) * len;
      var by = y2 - Math.sin(ang) * len;
      var p1 = [bx + Math.cos(ang + Math.PI / 2) * wing, by + Math.sin(ang + Math.PI / 2) * wing];
      var p2 = [bx + Math.cos(ang - Math.PI / 2) * wing, by + Math.sin(ang - Math.PI / 2) * wing];
      children.push(h('polygon', {
        key: 'head', points: x2 + ',' + y2 + ' ' + p1[0] + ',' + p1[1] + ' ' + p2[0] + ',' + p2[1],
        fill: stroke
      }));
    }
  } else if (el.type === 'polyline') {
    var pts = Array.isArray(el.points) ? el.points : [];
    var w = Number(el.w) || 0, hh = Number(el.h) || 0;
    var str = pts.map(function (p) { return (Number(p[0]) || 0) * w + ',' + (Number(p[1]) || 0) * hh; }).join(' ');
    children.push(h('polyline', {
      key: 'p', points: str, fill: el.closed ? (el.fill || 'none') : 'none',
      stroke: el.stroke && el.stroke !== 'none' ? el.stroke : '#333333',
      strokeWidth: Number(el.strokeWidth) || 2, strokeLinejoin: 'round', strokeLinecap: 'round'
    }));
  } else if (el.type === 'path') {
    var vw = Number(el.viewW) || 100, vh = Number(el.viewH) || 100;
    children.push(h('g', {
      key: 'p',
      transform: 'scale(' + ((Number(el.w) || 0) / vw) + ' ' + ((Number(el.h) || 0) / vh) + ')'
    }, h('path', {
      d: el.d || '', fill: el.fill || 'none', fillOpacity: el.fillOpacity == null ? 1 : el.fillOpacity,
      stroke: el.stroke && el.stroke !== 'none' ? el.stroke : 'none',
      strokeWidth: Number(el.strokeWidth) || 0, vectorEffect: 'non-scaling-stroke'
    })));
  } else if (el.type === 'icon') {
    var def = ICON_DEFS[el.icon] || ICON_DEFS.cell;
    children.push(h('g', {
      key: 'i',
      transform: 'scale(' + ((Number(el.w) || 0) / 100) + ' ' + ((Number(el.h) || 0) / 100) + ')'
    }, def.parts.map(function (part) { return fsRenderIconPart(part, el); })));
  } else if (el.type === 'bracket') {
    var bw = Number(el.w) || 0, bh = Number(el.h) || 0;
    var st = el.stroke && el.stroke !== 'none' ? el.stroke : '#333333';
    children.push(h('path', {
      key: 'b', d: 'M0 ' + bh + ' V0 H' + bw + ' V' + bh,
      fill: 'none', stroke: st, strokeWidth: Number(el.strokeWidth) || 1.6, strokeLinecap: 'round'
    }));
  }
  return h('g', {
    key: el.id, 'data-el-id': el.id, transform: transform, opacity: opacity,
    style: { pointerEvents: 'visiblePainted' }
  }, children);
}

function fsSelectionBounds(els, doc) {
  if (!els || !els.length) return null;
  var chartId = els.length && els[0].chartId && els.every(function (e) { return e.chartId === els[0].chartId; }) ? els[0].chartId : null;
  if (chartId && doc && doc.charts && doc.charts[chartId]) {
    var f = doc.charts[chartId].frame;
    return { x: f.x, y: f.y, w: f.w, h: f.h, chartId: chartId };
  }
  return unionBounds(els);
}


'use strict';

/* ------------------------------------------------------------------ *
 * dsh-figstudio client — side panels and inspector
 * ------------------------------------------------------------------ */

function fsNum(v) {
  var n = Number(v);
  if (!isFinite(n)) return '';
  return String(Math.round(n * 100) / 100);
}

function FSNumber(props) {
  var focused = React.useRef(false);
  var draftState = React.useState(fsNum(props.value));
  var draft = draftState[0], setDraft = draftState[1];
  React.useEffect(function () {
    if (!focused.current) setDraft(fsNum(props.value));
  }, [props.value]);
  return h('input', {
    className: 'fs-input' + (props.className ? ' ' + props.className : ''),
    type: 'number', value: draft, min: props.min, max: props.max, step: props.step || 1,
    'aria-label': props.label,
    onFocus: function (e) { focused.current = true; if (props.onFocus) props.onFocus(e); },
    onChange: function (e) {
      var raw = e.target.value;
      setDraft(raw);
      if (raw !== '' && isFinite(Number(raw))) props.onChange(Number(raw));
    },
    onBlur: function (e) {
      focused.current = false;
      if (draft === '' || !isFinite(Number(draft))) setDraft(fsNum(props.value));
      if (props.onBlur) props.onBlur(e);
    }
  });
}

function FSColor(props) {
  var value = String(props.value || '').toLowerCase();
  var isNone = !value || value === 'none' || value === 'transparent';
  var hex = isNone ? '#ffffff' : value;
  var focused = React.useRef(false);
  var draftState = React.useState(isNone ? 'none' : value.toUpperCase());
  var draft = draftState[0], setDraft = draftState[1];
  React.useEffect(function () {
    if (!focused.current) setDraft(isNone ? 'none' : String(props.value || '').toUpperCase());
  }, [props.value]);
  return h('div', { className: 'fs-colorwrap' },
    h('input', {
      className: 'fs-color', type: 'color', value: hex, 'aria-label': props.label,
      onFocus: function () { focused.current = true; if (props.onFocus) props.onFocus(); },
      onChange: function (e) { if (props.onChange) props.onChange(e.target.value); },
      onBlur: function () { focused.current = false; if (props.onBlur) props.onBlur(); }
    }),
    h('input', {
      className: 'fs-input fs-colorhex', type: 'text', value: draft, spellCheck: false, 'aria-label': props.label,
      onFocus: function () { focused.current = true; if (props.onFocus) props.onFocus(); },
      onChange: function (e) {
        var raw = e.target.value;
        setDraft(raw);
        var s = raw.trim();
        if (/^#?[0-9a-fA-F]{6}$/.test(s)) props.onChange(s[0] === '#' ? s : '#' + s);
        else if (/^#?[0-9a-fA-F]{3}$/.test(s)) {
          var t3 = s.replace('#', '');
          props.onChange('#' + t3[0] + t3[0] + t3[1] + t3[1] + t3[2] + t3[2]);
        }
      },
      onBlur: function () {
        focused.current = false;
        setDraft(isNone ? 'none' : String(props.value || '').toUpperCase());
        if (props.onBlur) props.onBlur();
      }
    })
  );
}

function FSField(props) {
  return h('label', { className: 'fs-field' },
    props.label ? h('span', { className: 'fs-label' }, props.label) : null,
    props.children
  );
}

function FSSection(props) {
  return h('section', { className: 'fs-section' },
    props.title ? h('h3', { className: 'fs-section-title' },
      h('span', null, props.title),
      props.extra || null
    ) : null,
    props.children
  );
}

/* ------------------------------ data panel ------------------------------ */

function FSDataPanelLegacy(props) {
  var t = props.t;
  var parsed = parseTable(props.dataText, props.header);
  var cols = parsed.ok ? parsed.columns : [];
  var previewRows = parsed.ok ? parsed.rows.slice(0, 8) : [];
  var numericSet = {};
  if (parsed.ok) numericColumnIndexes({ columns: cols, rows: parsed.rows }).forEach(function (i) { numericSet[i] = true; });
  var editing = props.editingId ? props.datasets.filter(function (d) { return d.id === props.editingId; })[0] : null;
  return h('div', null,
    h(FSSection, { title: t('dataTitle') },
      h(FSField, { label: t('pasteLabel') },
        h('textarea', {
          className: 'fs-textarea', value: props.dataText, rows: 7, spellCheck: false,
          placeholder: t('pastePlaceholder'),
          onChange: function (e) { props.onDataText(e.target.value); }
        })
      ),
      h('label', { className: 'fs-check' },
        h('input', { type: 'checkbox', checked: props.header, onChange: function (e) { props.onHeader(e.target.checked); } }),
        h('span', null, t('headerRow'))
      ),
      parsed.ok
        ? h('p', { className: 'fs-hint' }, t('rowsCols', { rows: String(parsed.rows.length), cols: String(cols.length) }) + ' · ' + parsed.delimiter)
        : h('p', { className: 'fs-hint', style: { color: 'var(--dsw-alias-state-error-primary)' } }, t('parseError')),
      parsed.ok ? h('div', { className: 'fs-tablewrap', style: { marginTop: '7px' } },
        h('table', { className: 'fs-table' },
          h('thead', null, h('tr', null, cols.map(function (c, i) {
            return h('th', { key: 'h' + i }, c, numericSet[i] ? h('span', { className: 'fs-notchip' }, '#') : null);
          }))),
          h('tbody', null, previewRows.map(function (r, ri) {
            return h('tr', { key: 'r' + ri }, r.map(function (v, ci) {
              return h('td', { key: 'c' + ci }, v === null || v === undefined ? '' : String(v));
            }));
          }))
        )
      ) : null,
      h('div', { className: 'fs-row', style: { marginTop: '8px' } },
        h('button', {
          className: 'fs-btn primary', type: 'button', disabled: !parsed.ok,
          onClick: function () { props.onSaveDataset(parsed); }
        }, h(FSIcon, { name: editing ? 'check' : 'plus', size: 14 }), editing ? t('updateDataset') : t('addDataset')),
        editing ? h('button', { className: 'fs-btn', type: 'button', onClick: props.onCancelEdit }, t('cancel')) : null
      ),
      editing ? h('p', { className: 'fs-hint' }, t('editDataTitle') + ': ' + editing.name) : null,
      !editing && !props.datasets.length
        ? h('button', { className: 'fs-btn ghost small', type: 'button', style: { marginTop: '4px' }, onClick: props.onSample }, t('demoFigure'))
        : null
    ),
    h(FSSection, { title: t('datasets') + (props.datasets.length ? ' · ' + props.datasets.length : '') },
      props.datasets.length ? props.datasets.map(function (ds) {
        return h('div', { className: 'fs-dsrow', key: ds.id },
          h('div', { className: 'fs-dsmeta' },
            h('div', { className: 'fs-dsname', title: ds.name }, ds.name),
            h('div', { className: 'fs-dssub' }, ds.rows.length + ' × ' + ds.columns.length)
          ),
          h('button', { className: 'fs-btn small', type: 'button', onClick: function () { props.onUseDataset(ds.id); } }, t('useDataset')),
          h('button', { className: 'fs-btn small ghost', type: 'button', title: t('editDataset'), onClick: function () { props.onEditDataset(ds.id); } }, h(FSIcon, { name: 'design', size: 13 })),
          h('button', { className: 'fs-btn small ghost danger', type: 'button', title: t('deleteDataset'), onClick: function () { props.onDeleteDataset(ds.id); } }, h(FSIcon, { name: 'trash', size: 13 }))
        );
      }) : h('div', { className: 'fs-empty' }, h(FSIcon, { name: 'dataset', size: 26 }), h('span', null, t('noDatasets')))
    )
  );
}

/* ----------------------------- chart config ----------------------------- */

function FSChartConfigForm(props) {
  var t = props.t;
  var ds = props.dataset;
  var cfg = props.cfg;
  var numeric = ds ? numericColumnIndexes(ds) : [];
  var numericSet = {};
  numeric.forEach(function (i) { numericSet[i] = true; });
  var scatterBad = cfg.type === 'scatter' && ds && !numericSet[cfg.xCol];
  function patch(p) { props.onChange(Object.assign({}, cfg, p)); }
  return h('div', null,
    h(FSField, { label: t('dataset') },
      h('select', {
        className: 'fs-select', value: ds ? ds.id : '',
        onChange: function (e) { props.onChooseDataset(e.target.value); }
      }, props.datasets.map(function (d) { return h('option', { key: d.id, value: d.id }, d.name); }))
    ),
    h(FSField, { label: t('chartType') },
      h('div', { className: 'fs-charttypes' }, CHART_TYPES.map(function (type) {
        return h('button', {
          key: type, type: 'button', className: 'fs-charttype' + (cfg.type === type ? ' active' : ''),
          title: t(CHART_LABEL_KEYS[type]), onClick: function () { patch({ type: type }); }
        }, h(FSChartGlyph, { type: type, size: 24 }), h('span', null, t(CHART_LABEL_KEYS[type])));
      }))
    ),
    ds ? h('div', { className: 'fs-grid2' },
      h(FSField, { label: t('xColumn') },
        h('select', { className: 'fs-select', value: cfg.xCol, onChange: function (e) { patch({ xCol: Number(e.target.value) }); } },
          ds.columns.map(function (c, i) { return h('option', { key: i, value: i }, c + (numericSet[i] ? '' : ' · text')); })
        )
      ),
      h(FSField, { label: t('errorColumn') },
        h('select', {
          className: 'fs-select', value: cfg.errorCol == null ? '' : cfg.errorCol,
          onChange: function (e) { patch({ errorCol: e.target.value === '' ? null : Number(e.target.value) }); }
        }, h('option', { value: '' }, t('none')), ds.columns.map(function (c, i) {
          return cfg.yCols.indexOf(i) >= 0 ? null : h('option', { key: i, value: i }, c);
        }))
      )
    ) : null,
    ds ? h(FSField, { label: t('yColumns') },
      h('div', { className: 'fs-ycols' }, ds.columns.map(function (c, i) {
        if (i === cfg.xCol) return null;
        var on = cfg.yCols.indexOf(i) >= 0;
        return h('label', { className: 'fs-check', key: i },
          h('input', {
            type: 'checkbox', checked: on,
            onChange: function (e) {
              var next = cfg.yCols.filter(function (x) { return x !== i; });
              if (e.target.checked) next.push(i);
              patch({ yCols: next });
            }
          }),
          h('span', null, c),
          numericSet[i] ? h('span', { className: 'fs-notchip' }, '#') : null
        );
      }))
    ) : null,
    scatterBad ? h('div', { className: 'fs-notice' }, h(FSIcon, { name: 'warning', size: 14 }), h('span', null, t('chartNeedY'))) : null,
    ds ? h('div', { className: 'fs-grid2' },
      h(FSField, { label: t('chartName') },
        h('input', { className: 'fs-input', type: 'text', value: cfg.title || '', onChange: function (e) { patch({ title: e.target.value }); } })
      ),
      h(FSField, { label: t('fontSize') },
        h(FSNumber, { value: cfg.fontSize, min: 6, max: 40, onChange: function (v) { patch({ fontSize: v }); } })
      ),
      h(FSField, { label: t('xLabel') },
        h('input', { className: 'fs-input', type: 'text', value: cfg.xLabel || '', onChange: function (e) { patch({ xLabel: e.target.value }); } })
      ),
      h(FSField, { label: t('yLabel') },
        h('input', { className: 'fs-input', type: 'text', value: cfg.yLabel || '', onChange: function (e) { patch({ yLabel: e.target.value }); } })
      )
    ) : null,
    h(FSField, { label: t('palette') },
      h('div', null, PALETTE_NAMES.map(function (name) {
        return h('button', {
          key: name, type: 'button',
          className: 'fs-paletterow' + (cfg.palette === name ? ' active' : ''),
          onClick: function () { patch({ palette: name }); }
        },
          h('span', { className: 'fs-palettedots' }, PALETTES[name].slice(0, 6).map(function (c, i) {
            return h('i', { key: i, style: { background: c } });
          })),
          h('span', { className: 'fs-palettename' }, name)
        );
      }))
    ),
    h(FSField, { label: t('font') },
      h('select', { className: 'fs-select', value: cfg.fontFamily, onChange: function (e) { patch({ fontFamily: e.target.value }); } },
        FONT_NAMES.map(function (f) { return h('option', { key: f, value: f }, f); })
      )
    ),
    h('div', { className: 'fs-row wrap', style: { marginTop: '4px', gap: '12px' } },
      h('label', { className: 'fs-check' }, h('input', { type: 'checkbox', checked: !!cfg.showLegend, onChange: function (e) { patch({ showLegend: e.target.checked }); } }), h('span', null, t('legend'))),
      h('label', { className: 'fs-check' }, h('input', { type: 'checkbox', checked: !!cfg.showGrid, onChange: function (e) { patch({ showGrid: e.target.checked }); } }), h('span', null, t('grid'))),
      h('label', { className: 'fs-check' }, h('input', { type: 'checkbox', checked: !!cfg.showValues, onChange: function (e) { patch({ showValues: e.target.checked }); } }), h('span', null, t('values')))
    )
  );
}

function FSChartPanel(props) {
  var t = props.t;
  var ds = props.datasets.filter(function (d) { return d.id === props.cfg.datasetId; })[0];
  if (!props.datasets.length) {
    return h('div', { className: 'fs-empty' }, h(FSIcon, { name: 'chart', size: 30 }),
      h('span', null, t('chartNeedData')),
      h('button', { className: 'fs-btn', type: 'button', onClick: props.onGoData }, t('tabData')));
  }
  var chartId = props.targetChartId;
  return h('div', null,
    h(FSSection, { title: chartId ? t('chartSection') : t('chartTitle') },
      h(FSChartConfigForm, {
        t: t, cfg: props.cfg, dataset: ds, datasets: props.datasets,
        onChooseDataset: props.onChooseDataset, onChange: props.onChange
      }),
      h('div', { className: 'fs-row', style: { marginTop: '10px' } },
        h('button', {
          className: 'fs-btn primary', type: 'button',
          disabled: !props.cfg.yCols.length,
          onClick: props.onInsertChart
        }, h(FSIcon, { name: 'plus', size: 14 }), t('insertChart')),
        chartId ? h('button', { className: 'fs-btn', type: 'button', onClick: props.onApplyChart }, t('updateChart')) : null
      ),
      !props.cfg.yCols.length ? h('p', { className: 'fs-hint' }, t('chartNeedY')) : null
    ),
    h('div', { className: 'fs-hint', style: { padding: '0 2px' } },
      h('b', null, t('chartAdded')), h('br'), t('groupHint'))
  );
}

/* ----------------------------- insert panel ----------------------------- */

var FS_INSERT_DEFS = [
  { key: 'text', icon: 'text' },
  { key: 'heading', icon: 'heading' },
  { key: 'caption', icon: 'text' },
  { key: 'panel', icon: 'text' },
  { key: 'rect', icon: 'rect' },
  { key: 'ellipse', icon: 'ellipse' },
  { key: 'line', icon: 'line' },
  { key: 'arrow', icon: 'arrow' },
  { key: 'bracket', icon: 'bracket' }
];

function FSInsertPanel(props) {
  var t = props.t;
  return h('div', null,
    h(FSSection, { title: t('basics') },
      h('div', { className: 'fs-gridbtns' }, FS_INSERT_DEFS.map(function (d) {
        return h('button', { key: d.key, type: 'button', className: 'fs-insertbtn', onClick: function () { props.onInsert(d.key); } },
          h(FSIcon, { name: d.icon, size: 19 }), h('span', null, t(d.key === 'panel' ? 'panelLetter' : d.key)));
      })),
      h('div', { className: 'fs-row wrap', style: { marginTop: '9px', gap: '4px' } },
        ['±', 'µ', '°', '×', '→', '⁻', '²', 'α', 'β', 'Δ'].map(function (s) {
          return h('button', { key: s, className: 'fs-btn small', type: 'button', onClick: function () { props.onInsertSymbol(s); } }, s);
        })
      )
    ),
    h(FSSection, { title: t('icons') },
      h('div', { className: 'fs-icongrid' }, ICON_KEYS.map(function (key) {
        return h('button', {
          key: key, type: 'button', className: 'fs-iconbtn2', title: t('icon_' + key),
          onClick: function () { props.onInsertIcon(key); }
        }, h('svg', { width: 30, height: 30, viewBox: '0 0 100 100', 'aria-hidden': 'true' },
          (ICON_DEFS[key].parts || []).map(function (part, i) {
            return h('path', {
              key: i, d: part.d, fill: part.fill === 'primary' ? 'currentColor' : part.fill === 'detail' ? 'currentColor' : 'none',
              opacity: part.fill === 'detail' ? 0.5 : (part.opacity == null ? 1 : part.opacity),
              stroke: part.stroke === 'primary' ? 'currentColor' : part.stroke === 'detail' ? 'currentColor' : 'none',
              strokeWidth: part.sw || 0, strokeLinecap: 'round', strokeLinejoin: 'round',
              strokeOpacity: part.stroke === 'detail' ? 0.5 : 1
            });
          })
        ), h('span', null, t('icon_' + key)));
      }))
    ),
    h('p', { className: 'fs-hint', style: { padding: '0 2px' } }, t('textHint'))
  );
}

/* ------------------------------- inspector ------------------------------- */

function FSAlignTools(props) {
  var t = props.t;
  var disabled = props.count < 2;
  var defs = [
    ['left', 'alignLeft'], ['center', 'alignCenter'], ['right', 'alignRight'],
    ['top', 'alignTop'], ['middle', 'alignMiddle'], ['bottom', 'alignBottom']
  ];
  return h(FSSection, { title: t('alignTools') },
    h('div', { className: 'fs-grid3' }, defs.map(function (d) {
      return h('button', {
        key: d[0], type: 'button', className: 'fs-btn small', disabled: disabled,
        title: t(d[1]), onClick: function () { props.onAlign(d[0]); }
      }, h(FSIcon, { name: d[1], size: 14 }), h('span', null, t(d[1]).replace(/^(Align|对齐)\s*/i, '')));
    })),
    h('div', { className: 'fs-row', style: { marginTop: '6px' } },
      h('button', { className: 'fs-btn small', type: 'button', disabled: props.count < 3, onClick: function () { props.onDistribute('h'); } }, h(FSIcon, { name: 'distH', size: 14 }), t('distributeH')),
      h('button', { className: 'fs-btn small', type: 'button', disabled: props.count < 3, onClick: function () { props.onDistribute('v'); } }, h(FSIcon, { name: 'distV', size: 14 }), t('distributeV'))
    ),
    h('div', { className: 'fs-row', style: { marginTop: '6px' } },
      h('button', { className: 'fs-btn small', type: 'button', onClick: function () { props.onMatch('w'); } }, h(FSIcon, { name: 'distH', size: 14 }), t('matchWidth')),
      h('button', { className: 'fs-btn small', type: 'button', onClick: function () { props.onMatch('h'); } }, h(FSIcon, { name: 'distV', size: 14 }), t('matchHeight'))
    )
  );
}

function FSChartInspector(props) {
  var t = props.t;
  var chart = props.chart;
  if (!chart) return null;
  var ds = props.datasets.filter(function (d) { return d.id === chart.config.datasetId; })[0];
  return h(FSSection, {
    title: t('chartSection'),
    extra: h('span', { className: 'fs-chartbadge' }, t('tabChart'))
  },
    h(FSChartConfigForm, {
      t: t, cfg: chart.config, dataset: ds, datasets: props.datasets,
      onChooseDataset: props.onChangeDataset, onChange: props.onChangeConfig
    }),
    h('div', { className: 'fs-row', style: { marginTop: '9px' } },
      h('button', { className: 'fs-btn small', type: 'button', onClick: props.onRebuild }, h(FSIcon, { name: 'rotate', size: 13 }), t('rebuild')),
      h('button', { className: 'fs-btn small ghost', type: 'button', onClick: props.onDetach }, t('detach'))
    )
  );
}

function FSInspector(props) {
  var t = props.t;
  var doc = props.doc;
  var els = props.els;
  var bounds = props.bounds;
  var chart = props.chart;
  var one = els.length === 1 ? els[0] : null;
  if (!els.length) {
    return h('div', null,
      h(FSSection, { title: t('page') },
        h(FSField, { label: t('preset') },
          h('select', {
            className: 'fs-select', value: props.presetKey,
            onChange: function (e) { props.onPreset(e.target.value); }
          }, ARTBOARD_PRESETS.map(function (p) {
            return h('option', { key: p.key, value: p.key }, p.key === 'custom' ? 'Custom' : p.key.charAt(0).toUpperCase() + p.key.slice(1) + ' · ' + p.width + '×' + p.height);
          }))
        ),
        h('div', { className: 'fs-grid2' },
          h(FSField, { label: t('width') }, h(FSNumber, { value: doc.width, min: 200, max: 6000, onChange: function (v) { props.onPage({ width: v }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
          h(FSField, { label: t('height') }, h(FSNumber, { value: doc.height, min: 200, max: 6000, onChange: function (v) { props.onPage({ height: v }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur }))
        ),
        h(FSField, { label: t('background') },
          h(FSColor, { value: doc.background, label: t('background'), onChange: function (v) { props.onPage({ background: v }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })
        ),
        h('div', { className: 'fs-row wrap', style: { gap: '14px', marginTop: '5px' } },
          h('label', { className: 'fs-check' }, h('input', { type: 'checkbox', checked: doc.grid !== false, onChange: function (e) { props.onPage({ grid: e.target.checked }); } }), h('span', null, t('showGrid'))),
          h('label', { className: 'fs-check' }, h('input', { type: 'checkbox', checked: doc.snap !== false, onChange: function (e) { props.onPage({ snap: e.target.checked }); } }), h('span', null, t('snap')))
        )
      ),
      h('div', { className: 'fs-empty' }, h(FSIcon, { name: 'design', size: 26 }),
        h('span', null, t('selectHint')),
        h('span', { className: 'fs-hint', style: { marginTop: 0, padding: '0 4px' } }, t('keyboard'))
      )
    );
  }
  var fillEl = one || els[0];
  var hasBox = els.some(function (e) { return e.type !== 'line' && e.type !== 'arrow'; });
  var onlyLine = els.every(function (e) { return e.type === 'line' || e.type === 'arrow'; });
  return h('div', null,
    chart ? h(FSChartInspector, {
      t: t, chart: chart, datasets: doc.datasets,
      onChangeDataset: props.onChartDataset, onChangeConfig: props.onChartConfig,
      onRebuild: props.onRebuildChart, onDetach: props.onDetachChart
    }) : null,
    h(FSSection, { title: t('position') + ' · ' + (els.length > 1 ? t('selectionCount', { count: String(els.length) }) : t(elementTypeLabelKey(els[0].type))) },
      onlyLine && els.length === 1
        ? h('div', null,
          h('div', { className: 'fs-grid2' },
            h(FSField, { label: 'X1' }, h(FSNumber, { value: els[0].x1, onChange: function (v) { props.onLine('x1', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
            h(FSField, { label: 'Y1' }, h(FSNumber, { value: els[0].y1, onChange: function (v) { props.onLine('y1', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
            h(FSField, { label: 'X2' }, h(FSNumber, { value: els[0].x2, onChange: function (v) { props.onLine('x2', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
            h(FSField, { label: 'Y2' }, h(FSNumber, { value: els[0].y2, onChange: function (v) { props.onLine('y2', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur }))
          )
        )
        : h('div', { className: 'fs-grid2' },
          h(FSField, { label: t('x') }, h(FSNumber, { value: bounds ? bounds.x : 0, onChange: function (v) { props.onGeom('x', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
          h(FSField, { label: t('y') }, h(FSNumber, { value: bounds ? bounds.y : 0, onChange: function (v) { props.onGeom('y', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
          h(FSField, { label: t('w') }, h(FSNumber, { value: bounds ? bounds.w : 0, min: 1, onChange: function (v) { props.onGeom('w', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
          h(FSField, { label: t('h') }, h(FSNumber, { value: bounds ? bounds.h : 0, min: 1, onChange: function (v) { props.onGeom('h', v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur }))
        ),
      h(FSField, { label: t('rotation') },
        h('div', { className: 'fs-row' },
          h('input', {
            className: 'fs-range', type: 'range', min: -180, max: 180, step: 1,
            value: one ? (Number(one.rotate) || 0) : 0, disabled: !one || one.type === 'line' || one.type === 'arrow',
            onChange: function (e) { if (one) props.onElement(one.id, { rotate: Number(e.target.value) }); },
            onFocus: props.onFieldFocus, onBlur: props.onFieldBlur, style: { flex: 1, accentColor: 'var(--dsw-alias-brand-primary)' }
          }),
          h('div', { style: { width: '58px' } }, h(FSNumber, {
            value: one ? (Number(one.rotate) || 0) : 0, min: -360, max: 360,
            onChange: function (v) { if (one) props.onElement(one.id, { rotate: v }); },
            onFocus: props.onFieldFocus, onBlur: props.onFieldBlur
          }))
        )
      )
    ),
    h(FSSection, { title: t('appearance') },
      !onlyLine ? h('div', { className: 'fs-grid2' },
        h(FSField, { label: t('fill') }, h(FSColor, { value: fillEl.fill || '#3C5488', onChange: props.onFill, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
        h(FSField, { label: t('stroke') }, h(FSColor, { value: fillEl.stroke && fillEl.stroke !== 'none' ? fillEl.stroke : '#333333', onChange: props.onStroke, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur }))
      ) : null,
      onlyLine ? h(FSField, { label: t('stroke') }, h(FSColor, { value: fillEl.stroke || '#333333', onChange: props.onStroke, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })) : null,
      h('div', { className: 'fs-grid2' },
        h(FSField, { label: t('opacity') }, h(FSNumber, { value: Math.round((fillEl.opacity == null ? 1 : fillEl.opacity) * 100), min: 0, max: 100, onChange: function (v) { props.onOpacity(v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })),
        h(FSField, { label: t('strokeWidth') }, h(FSNumber, { value: fillEl.strokeWidth || 0, min: 0, max: 40, step: 0.5, onChange: function (v) { props.onStrokeWidth(v); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur }))
      ),
      one && one.type === 'rect' ? h(FSField, { label: t('corner') },
        h(FSNumber, { value: one.radius || 0, min: 0, max: 200, onChange: function (v) { props.onElement(one.id, { radius: v }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })
      ) : null
    ),
    one && one.type === 'text' ? h(FSSection, { title: t('textContent') },
      h(FSField, { label: t('textContent') },
        h('textarea', {
          className: 'fs-textarea', rows: 4, value: one.text || '',
          onChange: function (e) { props.onElement(one.id, { text: e.target.value }); },
          onFocus: props.onFieldFocus, onBlur: props.onFieldBlur
        })
      ),
      h('div', { className: 'fs-grid2' },
        h(FSField, { label: t('font') },
          h('select', { className: 'fs-select', value: one.fontFamily, onChange: function (e) { props.onElement(one.id, { fontFamily: e.target.value }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur },
            FONT_NAMES.map(function (f) { return h('option', { key: f, value: f }, f); }))
        ),
        h(FSField, { label: t('fontSize') },
          h(FSNumber, { value: one.fontSize, min: 6, max: 120, onChange: function (v) { props.onElement(one.id, { fontSize: v }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur })
        )
      ),
      h('div', { className: 'fs-grid2' },
        h(FSField, { label: t('fontWeight') },
          h('select', { className: 'fs-select', value: one.fontWeight || 'normal', onChange: function (e) { props.onElement(one.id, { fontWeight: e.target.value }); }, onFocus: props.onFieldFocus, onBlur: props.onFieldBlur },
            h('option', { value: 'normal' }, t('normal')), h('option', { value: 'bold' }, t('bold')))
        ),
        h(FSField, { label: t('align') },
          h('div', { className: 'fs-seg' },
            ['left', 'center', 'right'].map(function (a) {
              return h('button', { key: a, type: 'button', className: one.align === a ? 'active' : '', title: t(a === 'left' ? 'alignLeft' : a === 'center' ? 'alignCenter' : 'alignRight'), onClick: function () { props.onElement(one.id, { align: a }); } }, h(FSIcon, { name: a === 'left' ? 'alignLeft' : a === 'center' ? 'alignCenter' : 'alignRight', size: 13 }));
            })
          )
        )
      ),
      h('button', { className: 'fs-btn small', type: 'button', style: { marginTop: '3px' }, onClick: function () { props.onStartEdit(one.id); } }, h(FSIcon, { name: 'text', size: 13 }), t('editOnCanvas'))
    ) : null,
    els.length > 1 ? h(FSAlignTools, { t: t, count: els.length, onAlign: props.onAlign, onDistribute: props.onDistribute, onMatch: props.onMatch }) : null,
    h(FSSection, { title: t('actions') },
      h('div', { className: 'fs-actionrow' },
        h('button', { className: 'fs-btn small', type: 'button', onClick: props.onDuplicate }, h(FSIcon, { name: 'copy', size: 13 }), t('duplicate')),
        h('button', { className: 'fs-btn small', type: 'button', onClick: props.onToggleLock }, h(FSIcon, { name: els.every(function (e) { return e.locked; }) ? 'unlock' : 'lock', size: 13 }), els.every(function (e) { return e.locked; }) ? t('unlock') : t('lock')),
        h('button', { className: 'fs-btn small', type: 'button', onClick: props.onToggleHide }, h(FSIcon, { name: els.every(function (e) { return e.hidden; }) ? 'eye' : 'eyeoff', size: 13 }), els.every(function (e) { return e.hidden; }) ? t('show') : t('hide')),
        h('button', { className: 'fs-btn small danger', type: 'button', onClick: props.onDelete }, h(FSIcon, { name: 'trash', size: 13 }), t('delete'))
      ),
      h('div', { className: 'fs-divider' }),
      h('div', { className: 'fs-actionrow' },
        h('button', { className: 'fs-btn small', type: 'button', title: t('front'), onClick: function () { props.onOrder('front'); } }, h(FSIcon, { name: 'front', size: 13 })),
        h('button', { className: 'fs-btn small', type: 'button', title: t('forward'), onClick: function () { props.onOrder('forward'); } }, h(FSIcon, { name: 'forward', size: 13 })),
        h('button', { className: 'fs-btn small', type: 'button', title: t('backward'), onClick: function () { props.onOrder('backward'); } }, h(FSIcon, { name: 'backward', size: 13 })),
        h('button', { className: 'fs-btn small', type: 'button', title: t('back'), onClick: function () { props.onOrder('back'); } }, h(FSIcon, { name: 'back', size: 13 }))
      )
    ),
    chart ? h('p', { className: 'fs-hint', style: { padding: '0 2px' } }, t('groupHint')) : null
  );
}

/* -------------------------------- layers -------------------------------- */

function FSLayers(props) {
  var t = props.t;
  var doc = props.doc;
  var expandedState = React.useState({});
  var expanded = expandedState[0], setExpanded = expandedState[1];
  var selected = {};
  props.selectedIds.forEach(function (id) { selected[id] = true; });
  var chartIds = Object.keys(doc.charts || {});
  var seenCharts = {};
  var rows = [];
  for (var i = doc.elements.length - 1; i >= 0; i--) {
    var el = doc.elements[i];
    if (!el) continue;
    if (el.chartId && doc.charts[el.chartId]) {
      if (seenCharts[el.chartId]) continue;
      seenCharts[el.chartId] = true;
      var chart = doc.charts[el.chartId];
      var parts = doc.elements.filter(function (x) { return x.chartId === el.chartId; });
      var active = parts.every(function (x) { return selected[x.id]; });
      var order = chartIds.indexOf(el.chartId) + 1;
      rows.push(h('div', { key: 'chart-' + el.chartId },
        h('div', {
          className: 'fs-layerrow' + (active ? ' active' : ''),
          onClick: function (e) { props.onSelectChart(el.chartId, e.shiftKey); }
        },
          h('button', {
            className: 'fs-mini', type: 'button', title: expanded[el.chartId] ? t('close') : t('show'),
            onClick: function (e) { e.stopPropagation(); var n = Object.assign({}, expanded); n[el.chartId] = !n[el.chartId]; setExpanded(n); }
          }, h(FSIcon, { name: expanded[el.chartId] ? 'chevronDown' : 'chevronRight', size: 13 })),
          h(FSIcon, { name: 'chart', size: 14 }),
          h('span', { className: 'fs-layerlabel' }, t('layerChart', { n: String(order) }) + ' · ' + parts.length),
          h('button', {
            className: 'fs-mini' + (chart.config && chart.config.showLegend ? '' : ''), type: 'button',
            title: t('chartSection'), onClick: function (e) { e.stopPropagation(); props.onSelectChart(el.chartId, false); }
          }, h(FSIcon, { name: 'design', size: 12 }))
        ),
        expanded[el.chartId] ? h('div', { className: 'fs-layergroup' }, parts.slice().reverse().map(function (part) {
          return h('div', {
            key: part.id, className: 'fs-layerrow' + (selected[part.id] ? ' active' : ''),
            onClick: function (e) { e.stopPropagation(); props.onSelectElement(part.id, e.shiftKey); }
          },
            h(FSIcon, { name: part.type === 'text' ? 'text' : 'rect', size: 12 }),
            h('span', { className: 'fs-layerlabel' }, fsElementName(part, t)),
            h('button', {
              className: 'fs-mini', type: 'button', title: part.hidden ? t('show') : t('hide'),
              onClick: function (e) { e.stopPropagation(); props.onToggleHidden(part.id); }
            }, h(FSIcon, { name: part.hidden ? 'eyeoff' : 'eye', size: 12 })),
            h('button', {
              className: 'fs-mini' + (part.locked ? ' active' : ''), type: 'button', title: part.locked ? t('unlock') : t('lock'),
              onClick: function (e) { e.stopPropagation(); props.onToggleLocked(part.id); }
            }, h(FSIcon, { name: part.locked ? 'lock' : 'unlock', size: 12 }))
          );
        })) : null
      ));
      continue;
    }
    var sel = selected[el.id];
    rows.push(h('div', {
      key: el.id, className: 'fs-layerrow' + (sel ? ' active' : ''),
      onClick: function (e) { props.onSelectElement(el.id, e.shiftKey); }
    },
      h(FSIcon, { name: el.type === 'text' ? 'text' : el.type === 'icon' ? 'icon' : el.type === 'ellipse' ? 'ellipse' : el.type === 'line' || el.type === 'arrow' ? 'line' : 'rect', size: 13 }),
      h('span', { className: 'fs-layerlabel' }, fsElementName(el, t)),
      h('button', {
        className: 'fs-mini', type: 'button', title: el.hidden ? t('show') : t('hide'),
        onClick: function (e) { e.stopPropagation(); props.onToggleHidden(el.id); }
      }, h(FSIcon, { name: el.hidden ? 'eyeoff' : 'eye', size: 12 })),
      h('button', {
        className: 'fs-mini' + (el.locked ? ' active' : ''), type: 'button', title: el.locked ? t('unlock') : t('lock'),
        onClick: function (e) { e.stopPropagation(); props.onToggleLocked(el.id); }
      }, h(FSIcon, { name: el.locked ? 'lock' : 'unlock', size: 12 }))
    ));
  }
  if (!rows.length) {
    return h('div', { className: 'fs-empty' }, h(FSIcon, { name: 'layers', size: 26 }), h('span', null, t('emptyLayers')));
  }
  return h('div', null,
    h('p', { className: 'fs-hint', style: { marginTop: 0, marginBottom: '7px' } }, t('layersHint')),
    h('div', { className: 'fs-layers' }, rows)
  );
}

/* ------------------------------- data utils ------------------------------- */

function fsDatasetToText(ds) {
  var lines = [ds.columns.join('\t')];
  ds.rows.forEach(function (r) {
    lines.push(r.map(function (v) { return v === null || v === undefined ? '' : String(v); }).join('\t'));
  });
  return lines.join('\n');
}


/* Figure Studio — editable spreadsheet for raw data. */

function fsCellText(value) {
  return value === null || value === undefined ? '' : String(value);
}

function FSCell(props) {
  var focusedRef = React.useRef(false);
  var draftState = React.useState(fsCellText(props.value));
  var draft = draftState[0], setDraft = draftState[1];
  React.useEffect(function () {
    if (!focusedRef.current) setDraft(fsCellText(props.value));
  }, [props.value]);
  function commit() {
    if (!focusedRef.current) return;
    focusedRef.current = false;
    if (draft !== fsCellText(props.value)) props.onCommit(draft);
  }
  return h('input', {
    className: 'fs-cell-input' + (typeof props.value === 'number' ? ' fs-cell-num' : ''),
    'data-cell': props.row + '-' + props.col,
    value: draft,
    spellCheck: false,
    title: fsCellText(props.value),
    onFocus: function () { focusedRef.current = true; },
    onChange: function (e) { setDraft(e.target.value); },
    onBlur: commit,
    onKeyDown: function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        commit();
        props.onMove(props.row + 1, props.col);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        commit();
        props.onMove(props.row, props.col + (e.shiftKey ? -1 : 1));
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setDraft(fsCellText(props.value));
        focusedRef.current = false;
        e.currentTarget.blur();
      }
    },
    onPaste: function (e) {
      var clipboard = e.clipboardData || window.clipboardData;
      var text = clipboard ? clipboard.getData('text') : '';
      if (!text || (text.indexOf('\t') < 0 && text.indexOf('\n') < 0)) return;
      e.preventDefault();
      var parsed = parseTable(text, false);
      if (parsed.ok && parsed.rows.length) props.onPasteBlock(props.row, props.col, parsed.rows);
    }
  });
}

function FSDataPanel(props) {
  var t = props.t;
  var datasets = props.datasets || [];
  var activeState = React.useState(datasets.length ? datasets[0].id : null);
  var activeId = activeState[0], setActiveId = activeState[1];
  var visibleState = React.useState(100);
  var visibleRows = visibleState[0], setVisibleRows = visibleState[1];
  var gridRef = React.useRef(null);
  var idsKey = datasets.map(function (d) { return d.id; }).join('|');
  React.useEffect(function () {
    if (!datasets.some(function (d) { return d.id === activeId; })) {
      setActiveId(datasets.length ? datasets[0].id : null);
    }
    // eslint-disable-next-line
  }, [idsKey]);
  var ds = datasets.filter(function (d) { return d.id === activeId; })[0] || datasets[0] || null;
  var dsId = ds ? ds.id : '';
  React.useEffect(function () {
    setVisibleRows(100);
    // eslint-disable-next-line
  }, [dsId]);

  var parsedBulk = parseTable(props.dataText || '', props.header);

  function focusCell(r, c) {
    var root = gridRef.current;
    if (!root) return;
    var el = root.querySelector('[data-cell="' + r + '-' + c + '"]');
    if (el) {
      el.focus();
      if (el.select) el.select();
    }
  }

  function moveTo(r, c) {
    if (!ds) return;
    if (r < 0) r = 0;
    if (c < 0) {
      r -= 1;
      c = ds.columns.length - 1;
      if (r < 0) { r = 0; c = 0; }
    }
    if (c >= ds.columns.length) {
      r += 1;
      c = 0;
    }
    if (r >= ds.rows.length) {
      props.onAddRow(ds.id);
      window.setTimeout(function () { focusCell(r, c); }, 40);
      return;
    }
    focusCell(r, c);
  }

  function makeNewTable() {
    var id = props.onNewDataset();
    if (id) setActiveId(id);
  }

  function importBulk() {
    if (!parsedBulk.ok) return;
    var id = props.onImportDataset(parsedBulk);
    if (id) {
      setActiveId(id);
      props.onDataText('');
    }
  }

  var toolbar = h('div', { className: 'fs-sheet-toolbar' },
    datasets.length ? h('select', {
      className: 'fs-select', value: dsId, 'aria-label': t('datasets'),
      onChange: function (e) { setActiveId(e.target.value); }
    }, datasets.map(function (d) {
      return h('option', { key: d.id, value: d.id }, d.name + ' (' + d.rows.length + '×' + d.columns.length + ')');
    })) : null,
    h('button', {
      className: 'fs-iconbtn', type: 'button', title: t('newTable'), 'aria-label': t('newTable'),
      onClick: makeNewTable
    }, h(FSIcon, { name: 'plus', size: 16 })),
    ds ? h('button', {
      className: 'fs-iconbtn', type: 'button', title: t('deleteTable'), 'aria-label': t('deleteTable'),
      onClick: function () { props.onDeleteDataset(ds.id); }
    }, h(FSIcon, { name: 'trash', size: 15 })) : null
  );

  var nameRow = ds ? h('input', {
    key: 'name-' + ds.id,
    className: 'fs-input fs-sheet-name',
    defaultValue: ds.name,
    placeholder: t('sheetName'),
    onBlur: function (e) { props.onRenameDataset(ds.id, e.target.value); },
    onKeyDown: function (e) { if (e.key === 'Enter') e.currentTarget.blur(); }
  }) : null;

  var table = null;
  if (ds) {
    var rows = ds.rows || [];
    var cols = ds.columns || [];
    var shown = Math.min(rows.length, visibleRows);
    table = h('div', { className: 'fs-sheet-wrap' },
      h('div', { className: 'fs-sheet-scroll', ref: gridRef },
        h('table', { className: 'fs-sheet' },
          h('thead', null,
            h('tr', null,
              h('th', { className: 'fs-sheet-corner' }, '#'),
              cols.map(function (name, c) {
                return h('th', { key: 'c' + c },
                  h('div', { className: 'fs-colhead' },
                    h('input', {
                      key: ds.id + '-h-' + c + '-' + name,
                      defaultValue: name,
                      title: name,
                      spellCheck: false,
                      onBlur: function (e) { props.onHeaderCell(ds.id, c, e.target.value); },
                      onKeyDown: function (e) { if (e.key === 'Enter') e.currentTarget.blur(); }
                    }),
                    h('button', {
                      className: 'fs-mini', type: 'button', title: t('deleteColumn'),
                      onClick: function () { props.onDeleteColumn(ds.id, c); }
                    }, h(FSIcon, { name: 'close', size: 11 }))
                  )
                );
              }),
              h('th', { style: { width: '36px' } },
                h('button', {
                  className: 'fs-sheet-addcol', type: 'button', title: t('addColumn'),
                  onClick: function () { props.onAddColumn(ds.id); }
                }, h(FSIcon, { name: 'plus', size: 14 }))
              )
            )
          ),
          h('tbody', null,
            rows.slice(0, shown).map(function (row, r) {
              return h('tr', { key: 'r' + r },
                h('th', { className: 'fs-sheet-rowhead' },
                  h('span', { className: 'fs-sheet-rownum' }, String(r + 1)),
                  h('button', {
                    className: 'fs-mini', type: 'button', title: t('deleteRow'),
                    onClick: function () { props.onDeleteRow(ds.id, r); }
                  }, h(FSIcon, { name: 'close', size: 10 }))
                ),
                cols.map(function (_, c) {
                  return h('td', { key: 'd' + c },
                    h(FSCell, {
                      key: ds.id + '-' + r + '-' + c,
                      value: row[c],
                      row: r,
                      col: c,
                      onCommit: function (value) { props.onCell(ds.id, r, c, value); },
                      onPasteBlock: function (rr, cc, block) { props.onPasteBlock(ds.id, rr, cc, block); },
                      onMove: moveTo
                    })
                  );
                }),
                h('td', null)
              );
            }),
            h('tr', { className: 'fs-sheet-addrow' },
              h('td', null),
              h('td', { colSpan: cols.length + 1 },
                h('button', { type: 'button', onClick: function () { props.onAddRow(ds.id); } },
                  h(FSIcon, { name: 'plus', size: 12 }), t('addRow'))
              )
            )
          )
        )
      ),
      rows.length > shown ? h('div', { className: 'fs-sheet-more' },
        h('button', {
          className: 'fs-btn small ghost', type: 'button',
          onClick: function () { setVisibleRows(visibleRows + 100); }
        }, h(FSIcon, { name: 'chevronDown', size: 12 }), t('moreRows'))
      ) : null,
      h('div', { className: 'fs-sheet-footer' },
        h('span', null, t('sheetRowsCols', { rows: String(rows.length), cols: String(cols.length) })),
        h('span', { style: { opacity: .7 } }, t('sheetHint'))
      )
    );
  }

  var bulk = h('details', { className: 'fs-sheet-bulk' },
    h('summary', null, t('bulkPaste')),
    h('div', { className: 'fs-sheet-bulkbody' },
      h('textarea', {
        className: 'fs-textarea',
        value: props.dataText || '',
        rows: 5,
        spellCheck: false,
        placeholder: t('pastePlaceholder'),
        onChange: function (e) { props.onDataText(e.target.value); }
      }),
      h('label', { className: 'fs-check' },
        h('input', { type: 'checkbox', checked: props.header, onChange: function (e) { props.onHeaderFlag(e.target.checked); } }),
        h('span', null, t('headerRow'))
      ),
      parsedBulk.ok
        ? h('p', { className: 'fs-hint', style: { margin: 0 } }, t('rowsCols', { rows: String(parsedBulk.rows.length), cols: String(parsedBulk.columns.length) }))
        : h('p', { className: 'fs-hint', style: { margin: 0 } }, t('parseError')),
      h('div', { className: 'fs-row' },
        h('button', {
          className: 'fs-btn small primary', type: 'button',
          disabled: !parsedBulk.ok,
          onClick: importBulk
        }, h(FSIcon, { name: 'plus', size: 13 }), t('importAsTable')),
        h('button', { className: 'fs-btn small ghost', type: 'button', onClick: props.onSample }, t('demoFigure'))
      )
    )
  );

  if (!ds) {
    return h('div', null,
      h('div', { className: 'fs-section' },
        h('div', { className: 'fs-sheet-empty' },
          h(FSIcon, { name: 'dataset', size: 26 }),
          h('div', { style: { marginTop: '6px' } }, t('sheetEmpty')),
          h('button', { className: 'fs-btn primary small', type: 'button', style: { marginTop: '10px' }, onClick: makeNewTable },
            h(FSIcon, { name: 'plus', size: 13 }), t('newTable'))
        )
      ),
      bulk
    );
  }

  return h('div', null,
    h('div', { className: 'fs-section' },
      toolbar,
      nameRow,
      h('div', { style: { height: '8px' } }),
      table
    ),
    bulk
  );
}


/* Generated by scripts/license-keygen.mjs. Public key only; safe to commit. */
'use strict';
var FS_LICENSE_PUBLIC_KEY = 'MCowBQYDK2VwAyEA_yPyYR4P7emU4MEQ4dlCq8SR7ipDlnAKuKdkhH0m__Y';


'use strict';

/* Offline buyout license token format:
 *   FS1.<base64url(payload JSON)>.<base64url(Ed25519 signature)>
 * Signed bytes are the ASCII string "FS1.<payload>".
 */

function fsB64UrlEncode(bytes) {
  var binary = '';
  for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fsB64UrlDecode(text) {
  var s = String(text || '').replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  var binary = atob(s);
  var out = new Uint8Array(binary.length);
  for (var i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

function fsLicenseParse(token) {
  if (typeof token !== 'string') return null;
  var parts = token.trim().split('.');
  if (parts.length !== 3 || parts[0] !== 'FS1') return null;
  var payload;
  try {
    var bytes = fsB64UrlDecode(parts[1]);
    payload = JSON.parse(new TextDecoder().decode(bytes));
  } catch (err) {
    return null;
  }
  if (!payload || payload.v !== 1) return null;
  if (payload.product !== 'dsh-figstudio') return null;
  if (payload.edition !== 'buyout') return null;
  if (typeof payload.licenseId !== 'string' || !payload.licenseId) return null;
  return {
    payload: payload,
    signed: parts[0] + '.' + parts[1],
    signature: fsB64UrlDecode(parts[2])
  };
}

async function fsLicenseVerify(token, publicKeyB64, cryptoImpl) {
  var parsed = fsLicenseParse(token);
  if (!parsed) return null;
  var c = cryptoImpl || (typeof crypto !== 'undefined' ? crypto : null);
  if (!c || !c.subtle) throw new Error('WebCrypto is unavailable');
  var key = await c.subtle.importKey(
    'spki',
    fsB64UrlDecode(publicKeyB64),
    { name: 'Ed25519' },
    false,
    ['verify']
  );
  var ok = await c.subtle.verify(
    { name: 'Ed25519' },
    key,
    parsed.signature,
    new TextEncoder().encode(parsed.signed)
  );
  return ok ? parsed.payload : null;
}


'use strict';

var FS_LICENSE_STORE = 'dsh-figstudio:license:v1';
var FS_LICENSE_PRICE = '¥129';
var FS_PURCHASE_URL = 'https://github.com/xiaoqiqizi0309/-';

function fsLicenseReadStored() {
  try {
    return window.localStorage.getItem(FS_LICENSE_STORE);
  } catch (err) {
    return null;
  }
}

function fsLicenseWriteStored(token) {
  try {
    window.localStorage.setItem(FS_LICENSE_STORE, token);
    return true;
  } catch (err) {
    return false;
  }
}

function fsLicenseClearStored() {
  try {
    window.localStorage.removeItem(FS_LICENSE_STORE);
  } catch (err) { /* ignore */ }
}

async function fsLicenseCheck(token) {
  if (!token) return null;
  return fsLicenseVerify(token, FS_LICENSE_PUBLIC_KEY);
}


'use strict';

function FSLicenseDialog(props) {
  var t = props.t;
  var status = props.license ? props.license.status : 'free';
  var payload = props.license ? props.license.payload : null;
  React.useEffect(function () {
    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        props.onClose();
      }
    }
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  }, []);
  return h('div', {
    className: 'fs-modal-backdrop',
    onPointerDown: function (e) { if (e.target === e.currentTarget) props.onClose(); }
  },
    h('div', { className: 'fs-modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('licenseTitle') },
      h('div', { className: 'fs-modal-head' },
        h('div', null,
          h('div', { className: 'fs-modal-title' }, t('licenseTitle')),
          h('div', { className: 'fs-modal-sub' }, t('licenseSubtitle'))
        ),
        h('button', { className: 'fs-iconbtn', type: 'button', title: t('close'), onClick: props.onClose },
          h(FSIcon, { name: 'close', size: 15 }))
      ),
      status === 'checking' ? h('p', { className: 'fs-hint' }, t('licenseChecking')) : null,
      status === 'pro' ? h('div', null,
        h('div', { className: 'fs-license-active' },
          h(FSIcon, { name: 'check', size: 18 }),
          h('span', null, t('licenseActive'))
        ),
        h('dl', { className: 'fs-license-facts' },
          h('div', null, h('dt', null, t('licenseIssuedTo')), h('dd', null, (payload && payload.name) || '—')),
          h('div', null, h('dt', null, t('licenseId')), h('dd', null, (payload && payload.licenseId) || '—')),
          payload && payload.issuedAt ? h('div', null,
            h('dt', null, t('licenseIssuedAt')),
            h('dd', null, new Date(payload.issuedAt * 1000).toLocaleDateString())
          ) : null,
          h('div', null, h('dt', null, t('licenseEdition')), h('dd', null, t('licensePerpetual')))
        ),
        h('p', { className: 'fs-hint' }, t('licenseDeviceNote')),
        h('div', { className: 'fs-license-actions' },
          h('button', { className: 'fs-btn ghost', type: 'button', onClick: props.onDeactivate }, t('licenseDeactivate')),
          h('button', { className: 'fs-btn primary', type: 'button', onClick: props.onClose }, t('close'))
        )
      ) : h('div', null,
        h('div', { className: 'fs-license-price' }, props.price),
        h('div', { className: 'fs-hint', style: { marginTop: 0 } }, t('licenseIntro')),
        h('ul', { className: 'fs-license-list' },
          h('li', null, t('licenseFeatureNoWatermark')),
          h('li', null, t('licenseFeatureSvg')),
          h('li', null, t('licenseFeature300')),
          h('li', null, t('licensePerpetual'))
        ),
        h('textarea', {
          className: 'fs-textarea',
          rows: 3,
          value: props.draft,
          placeholder: t('licensePlaceholder'),
          spellCheck: false,
          onChange: function (e) { props.onDraft(e.target.value); }
        }),
        props.error ? h('p', { className: 'fs-hint', style: { color: 'var(--dsw-alias-state-error-primary)' } }, props.error) : null,
        h('div', { className: 'fs-license-actions' },
          props.purchaseUrl ? h('a', {
            className: 'fs-btn', href: props.purchaseUrl, target: '_blank', rel: 'noreferrer'
          }, h(FSIcon, { name: 'upload', size: 13 }), t('licenseBuy')) : null,
          h('button', {
            className: 'fs-btn primary', type: 'button',
            disabled: props.busy || !props.draft.trim(),
            onClick: props.onActivate
          }, props.busy ? t('licenseChecking') : t('licenseActivate')),
          h('button', { className: 'fs-btn ghost', type: 'button', onClick: props.onClose }, t('cancel'))
        ),
        h('p', { className: 'fs-hint', style: { fontSize: '10.5px' } }, t('licenseStoreNote'))
      )
    )
  );
}


/* Figure Studio — application component and interactions. */

var FS_NS = 'dsh-figstudio';
var FS_WORKBENCH_ID = 'figstudio.studio';
var FS_STORAGE_KEY = 'dsh-figstudio:document:v1';
var FS_HISTORY_LIMIT = 80;

function fsMakeId(prefix) {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function fsDeep(value) {
  return JSON.parse(JSON.stringify(value));
}

function fsClamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

function fsLoadInitialDoc() {
  try {
    var raw = window.localStorage.getItem(FS_STORAGE_KEY);
    if (raw) {
      var clean = validateDoc(JSON.parse(raw));
      if (clean) return clean;
    }
  } catch (err) { /* ignore corrupt autosave */ }
  return demoDoc();
}

function fsDefaultCfg(ds) {
  var nums = ds ? numericColumnIndexes(ds) : [];
  var xCol = 0;
  if (ds) {
    for (var i = 0; i < ds.columns.length; i++) {
      if (nums.indexOf(i) < 0) { xCol = i; break; }
    }
  }
  var yCols = nums.filter(function (i) { return i !== xCol; }).slice(0, 3);
  return {
    datasetId: ds ? ds.id : null,
    type: 'bar',
    xCol: xCol,
    yCols: yCols,
    errorCol: null,
    title: '',
    xLabel: ds ? String(ds.columns[xCol] || '') : '',
    yLabel: '',
    showLegend: true,
    showGrid: true,
    showValues: false,
    palette: 'nature',
    fontFamily: 'Arial',
    fontSize: 12
  };
}

function fsNormalizeCfg(cfg, ds) {
  var next = Object.assign({}, cfg);
  if (!ds) return next;
  var nums = numericColumnIndexes(ds);
  var cols = ds.columns.length;
  if (!(next.xCol >= 0 && next.xCol < cols)) next.xCol = 0;
  next.yCols = (next.yCols || []).filter(function (i) { return i >= 0 && i < cols && nums.indexOf(i) >= 0; });
  if (!next.yCols.length) {
    for (var i = 0; i < nums.length && next.yCols.length < 3; i++) {
      if (nums[i] !== next.xCol) next.yCols.push(nums[i]);
    }
  }
  if (next.errorCol != null && nums.indexOf(next.errorCol) < 0) next.errorCol = null;
  return next;
}

function fsPresetKeyFor(doc) {
  for (var i = 0; i < ARTBOARD_PRESETS.length; i++) {
    var p = ARTBOARD_PRESETS[i];
    if (p.key !== 'custom' && p.width === doc.width && p.height === doc.height) return p.key;
  }
  return 'custom';
}

function fsTextFit(el) {
  if (!el || el.type !== 'text') return;
  var lines = fsWrapLines(el.text || '', el.fontSize || 14, Math.max(10, (el.w || 10) - 4));
  el.h = Math.max((el.fontSize || 14) * 1.4, lines.length * (el.fontSize || 14) * 1.3);
}

function fsBoundsOfDoc(doc, ids) {
  var set = {};
  (ids || []).forEach(function (id) { set[id] = true; });
  var els = (doc.elements || []).filter(function (e) { return set[e.id] && !e.hidden; });
  if (!els.length) return null;
  return fsSelectionBounds(els, doc);
}

function fsTranslateDoc(doc0, ids, dx, dy) {
  var next = fsDeep(doc0);
  var set = {};
  ids.forEach(function (id) { set[id] = true; });
  var totals = {};
  var moved = {};
  next.elements.forEach(function (el) {
    if (el.chartId) totals[el.chartId] = (totals[el.chartId] || 0) + 1;
  });
  next.elements.forEach(function (el) {
    if (!set[el.id]) return;
    translateElement(el, dx, dy);
    if (el.chartId) moved[el.chartId] = (moved[el.chartId] || 0) + 1;
  });
  Object.keys(moved).forEach(function (cid) {
    var chart = next.charts[cid];
    if (!chart) return;
    if (moved[cid] === totals[cid]) {
      chart.frame.x += dx;
      chart.frame.y += dy;
    } else {
      next.elements.forEach(function (el) {
        if (set[el.id] && el.chartId === cid) el.chartId = null;
      });
    }
  });
  return next;
}

function fsScaleDocBounds(doc0, ids, b0, b1) {
  var next = fsDeep(doc0);
  var set = {};
  ids.forEach(function (id) { set[id] = true; });
  var sx = b0.w > 0.001 ? b1.w / b0.w : 1;
  var sy = b0.h > 0.001 ? b1.h / b0.h : 1;
  next.elements.forEach(function (el) {
    if (!set[el.id]) return;
    if (el.type === 'line' || el.type === 'arrow') {
      el.x1 = b1.x + (el.x1 - b0.x) * sx;
      el.y1 = b1.y + (el.y1 - b0.y) * sy;
      el.x2 = b1.x + (el.x2 - b0.x) * sx;
      el.y2 = b1.y + (el.y2 - b0.y) * sy;
    } else {
      el.x = b1.x + (el.x - b0.x) * sx;
      el.y = b1.y + (el.y - b0.y) * sy;
      el.w = Math.max(1, (el.w || 1) * sx);
      el.h = Math.max(1, (el.h || 1) * sy);
    }
  });
  return next;
}

function fsSyncChartFrames(oldDoc, nextDoc) {
  Object.keys(nextDoc.charts || {}).forEach(function (cid) {
    var oldParts = oldDoc.elements.filter(function (e) { return e.chartId === cid; });
    var newParts = nextDoc.elements.filter(function (e) { return e.chartId === cid; });
    if (!oldParts.length || !newParts.length) return;
    var ob = unionBounds(oldParts);
    var nb = unionBounds(newParts);
    if (!ob || !nb) return;
    nextDoc.charts[cid].frame.x += nb.x - ob.x;
    nextDoc.charts[cid].frame.y += nb.y - ob.y;
  });
}

function fsResizeBounds(b, handle, dx, dy, keep) {
  var x = b.x, y = b.y, w = b.w, h = b.h;
  if (handle.indexOf('e') >= 0) w = b.w + dx;
  if (handle.indexOf('w') >= 0) { w = b.w - dx; x = b.x + dx; }
  if (handle.indexOf('s') >= 0) h = b.h + dy;
  if (handle.indexOf('n') >= 0) { h = b.h - dy; y = b.y + dy; }
  w = Math.max(6, w);
  h = Math.max(6, h);
  if (keep && b.w > 0.001 && b.h > 0.001) {
    var ar = b.w / b.h;
    if (Math.abs(w - b.w) >= Math.abs(h - b.h)) h = w / ar;
    else w = h * ar;
    if (handle.indexOf('w') >= 0) x = b.x + b.w - w;
    if (handle.indexOf('n') >= 0) y = b.y + b.h - h;
  }
  return { x: x, y: y, w: w, h: h };
}

function fsSnapTargets(doc0, ids) {
  var set = {};
  ids.forEach(function (id) { set[id] = true; });
  var v = [0, doc0.width / 2, doc0.width];
  var h = [0, doc0.height / 2, doc0.height];
  (doc0.elements || []).forEach(function (el) {
    if (set[el.id] || el.hidden) return;
    var b = bboxOf(el);
    if (!b) return;
    v.push(b.x, b.x + b.w / 2, b.x + b.w);
    h.push(b.y, b.y + b.h / 2, b.y + b.h);
  });
  return { v: v, h: h };
}

function fsSnapMove(doc0, ids, dx, dy, threshold) {
  var b = fsBoundsOfDoc(doc0, ids);
  if (!b) return { dx: dx, dy: dy, gv: [], gh: [] };
  var targets = fsSnapTargets(doc0, ids);
  var bestV = null, bestH = null;
  [b.x + dx, b.x + b.w / 2 + dx, b.x + b.w + dx].forEach(function (edge) {
    targets.v.forEach(function (t) {
      var diff = t - edge;
      if (Math.abs(diff) <= threshold && (!bestV || Math.abs(diff) < Math.abs(bestV.diff))) bestV = { diff: diff, line: t };
    });
  });
  [b.y + dy, b.y + b.h / 2 + dy, b.y + b.h + dy].forEach(function (edge) {
    targets.h.forEach(function (t) {
      var diff = t - edge;
      if (Math.abs(diff) <= threshold && (!bestH || Math.abs(diff) < Math.abs(bestH.diff))) bestH = { diff: diff, line: t };
    });
  });
  return {
    dx: dx + (bestV ? bestV.diff : 0),
    dy: dy + (bestH ? bestH.diff : 0),
    gv: bestV ? [bestV.line] : [],
    gh: bestH ? [bestH.line] : []
  };
}

function fsBlocks(doc, els) {
  var blocks = [];
  var seen = {};
  els.forEach(function (el) {
    if (el.chartId && doc.charts[el.chartId]) {
      if (seen[el.chartId]) return;
      seen[el.chartId] = true;
      var parts = doc.elements.filter(function (e) { return e.chartId === el.chartId; });
      var frame = doc.charts[el.chartId].frame;
      blocks.push({ ids: parts.map(function (e) { return e.id; }), box: { x: frame.x, y: frame.y, w: frame.w, h: frame.h }, chartId: el.chartId });
    } else if (!el.chartId) {
      blocks.push({ ids: [el.id], box: bboxOf(el) });
    }
  });
  return blocks.filter(function (b) { return b.box && !b.locked; });
}

function fsMakeInsert(kind, payload, doc, center) {
  var base = {
    id: fsMakeId('el'), fill: '#3C5488', stroke: 'none', strokeWidth: 1,
    opacity: 1, rotate: 0, locked: false, hidden: false
  };
  var el;
  if (kind === 'text') {
    el = Object.assign(base, { type: 'text', text: 'Text', x: 0, y: 0, w: 220, h: 28, fill: '#1F2933', fontSize: 16, fontFamily: 'Arial', fontWeight: 'normal', align: 'left', lineHeight: 1.3 });
  } else if (kind === 'heading') {
    el = Object.assign(base, { type: 'text', text: 'Section heading', x: 0, y: 0, w: 340, h: 40, fill: '#111827', fontSize: 24, fontFamily: 'Arial', fontWeight: 'bold', align: 'left', lineHeight: 1.25 });
  } else if (kind === 'caption') {
    el = Object.assign(base, { type: 'text', text: 'Caption', x: 0, y: 0, w: 300, h: 22, fill: '#52606D', fontSize: 12, fontFamily: 'Arial', fontWeight: 'normal', align: 'left', lineHeight: 1.35 });
  } else if (kind === 'panel') {
    el = Object.assign(base, { type: 'text', text: 'A', x: 0, y: 0, w: 32, h: 38, fill: '#111827', fontSize: 26, fontFamily: 'Arial', fontWeight: 'bold', align: 'left', lineHeight: 1.1 });
  } else if (kind === 'rect') {
    el = Object.assign(base, { type: 'rect', x: 0, y: 0, w: 150, h: 96, fill: '#E8EEF7', stroke: '#3C5488', strokeWidth: 1.5, radius: 8 });
  } else if (kind === 'ellipse') {
    el = Object.assign(base, { type: 'ellipse', x: 0, y: 0, w: 120, h: 120, fill: '#E8EEF7', stroke: '#3C5488', strokeWidth: 1.5 });
  } else if (kind === 'line' || kind === 'arrow') {
    el = Object.assign(base, { type: kind, x: 0, y: 0, x1: 0, y1: 0, x2: 170, y2: 0, stroke: '#1F2933', strokeWidth: 1.8, fill: 'none' });
  } else if (kind === 'bracket') {
    el = Object.assign(base, { type: 'bracket', x: 0, y: 0, w: 130, h: 30, fill: 'none', stroke: '#1F2933', strokeWidth: 1.4 });
  } else if (kind === 'icon') {
    el = Object.assign(base, { type: 'icon', icon: payload || 'cell', x: 0, y: 0, w: 76, h: 76, fill: '#3C5488', stroke: '#1F2933', strokeWidth: 1 });
  } else if (kind === 'symbol') {
    el = Object.assign(base, { type: 'text', text: payload || '±', x: 0, y: 0, w: 34, h: 34, fill: '#1F2933', fontSize: 22, fontFamily: 'Arial', fontWeight: 'normal', align: 'center', lineHeight: 1.3 });
  } else {
    return null;
  }
  if (el.type === 'line' || el.type === 'arrow') {
    el.x1 = center.x - 85;
    el.y1 = center.y;
    el.x2 = center.x + 85;
    el.y2 = center.y;
    el.x = el.x1;
    el.y = el.y1;
    el.w = 170;
    el.h = 1;
  } else {
    el.x = fsClamp(center.x - el.w / 2, 0, Math.max(0, doc.width - el.w));
    el.y = fsClamp(center.y - el.h / 2, 0, Math.max(0, doc.height - el.h));
  }
  return el;
}

function fsWatermarkCanvas(ctx, canvas, label) {
  var size = Math.max(16, Math.round(canvas.width * 0.018));
  ctx.save();
  ctx.globalAlpha = 0.58;
  ctx.font = '700 ' + size + 'px Arial, Helvetica, sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = '#111111';
  ctx.shadowColor = 'rgba(255,255,255,0.9)';
  ctx.shadowBlur = Math.max(4, Math.round(size * 0.3));
  ctx.fillText(label, canvas.width - size, canvas.height - size * 0.7);
  ctx.restore();
}

function FigureStudio(props) {
  var t = props.t || function (k) { return k; };

  var initialRef = React.useRef(null);
  if (!initialRef.current) initialRef.current = fsLoadInitialDoc();
  var initialDoc = initialRef.current;

  var docState = React.useState(initialDoc);
  var doc = docState[0], setDocState = docState[1];
  var selState = React.useState([]);
  var sel = selState[0], setSel = selState[1];
  var histState = React.useState({ past: [], future: [] });
  var hist = histState[0], setHist = histState[1];
  var zoomState = React.useState(0.8);
  var zoom = zoomState[0], setZoom = zoomState[1];
  var leftState = React.useState('data');
  var leftTab = leftState[0], setLeftTab = leftState[1];
  var rightState = React.useState('design');
  var rightTab = rightState[0], setRightTab = rightState[1];
  var dataState = React.useState(SAMPLE_TABLE);
  var dataText = dataState[0], setDataText = dataState[1];
  var headerState = React.useState(true);
  var header = headerState[0], setHeader = headerState[1];
  var editingDsState = React.useState(null);
  var editingDatasetId = editingDsState[0], setEditingDatasetId = editingDsState[1];
  var cfgState = React.useState(function () { return fsDefaultCfg(initialRef.current.datasets[0]); });
  var chartCfg = cfgState[0], setChartCfg = cfgState[1];
  var toastState = React.useState(null);
  var toast = toastState[0], setToast = toastState[1];
  var saveState = React.useState('saved');
  var saveStatus = saveState[0], setSaveStatus = saveState[1];
  var editState = React.useState(null);
  var editingId = editState[0], setEditingId = editState[1];
  var guideState = React.useState(null);
  var guides = guideState[0], setGuides = guideState[1];
  var marqueeState = React.useState(null);
  var marquee = marqueeState[0], setMarquee = marqueeState[1];
  var menuState = React.useState(false);
  var menuOpen = menuState[0], setMenuOpen = menuState[1];
  var licenseState = React.useState({ status: 'checking', payload: null, token: null });
  var license = licenseState[0], setLicense = licenseState[1];
  var licenseOpenState = React.useState(false);
  var licenseOpen = licenseOpenState[0], setLicenseOpen = licenseOpenState[1];
  var licenseDraftState = React.useState('');
  var licenseDraft = licenseDraftState[0], setLicenseDraft = licenseDraftState[1];
  var licenseErrorState = React.useState('');
  var licenseError = licenseErrorState[0], setLicenseError = licenseErrorState[1];
  var licenseBusyState = React.useState(false);
  var licenseBusy = licenseBusyState[0], setLicenseBusy = licenseBusyState[1];

  var viewportRef = React.useRef(null);
  var artboardRef = React.useRef(null);
  var svgRef = React.useRef(null);
  var fileInputRef = React.useRef(null);
  var menuRef = React.useRef(null);
  var docRef = React.useRef(doc);
  var selRef = React.useRef(sel);
  var zoomRef = React.useRef(zoom);
  var clipboardRef = React.useRef(null);
  var sessionRef = React.useRef(null);
  var fieldSnapRef = React.useRef(null);
  var editSnapRef = React.useRef(null);

  docRef.current = doc;
  selRef.current = sel;
  zoomRef.current = zoom;

  var elById = {};
  (doc.elements || []).forEach(function (el) { elById[el.id] = el; });
  var selectedEls = sel.map(function (id) { return elById[id]; }).filter(function (el) { return el && !el.hidden; });
  var bounds = selectedEls.length ? fsSelectionBounds(selectedEls, doc) : null;
  var currentChart = null;
  if (selectedEls.length) {
    var firstChartId = selectedEls[0].chartId;
    if (firstChartId && selectedEls.every(function (el) { return el.chartId === firstChartId; }) && doc.charts[firstChartId]) {
      currentChart = doc.charts[firstChartId];
    }
  }
  var presetKey = fsPresetKeyFor(doc);

  function notify(msg) {
    setToast({ id: Date.now(), msg: msg });
  }

  React.useEffect(function () {
    if (!toast) return;
    var id = window.setTimeout(function () { setToast(null); }, 2400);
    return function () { window.clearTimeout(id); };
  }, [toast]);

  React.useEffect(function () {
    setSaveStatus('saving');
    var id = window.setTimeout(function () {
      try {
        window.localStorage.setItem(FS_STORAGE_KEY, JSON.stringify(docRef.current));
        setSaveStatus('saved');
      } catch (err) {
        setSaveStatus('error');
      }
    }, 550);
    return function () { window.clearTimeout(id); };
  }, [doc]);

  React.useEffect(function () {
    var token = fsLicenseReadStored();
    if (!token) {
      setLicense({ status: 'free', payload: null, token: null });
      return;
    }
    var alive = true;
    fsLicenseCheck(token).then(function (payload) {
      if (!alive) return;
      setLicense(payload
        ? { status: 'pro', payload: payload, token: token }
        : { status: 'free', payload: null, token: null, invalid: true });
    }).catch(function () {
      if (alive) setLicense({ status: 'free', payload: null, token: null, error: true });
    });
    return function () { alive = false; };
  }, []);

  var chartKey = currentChart ? currentChart.id : '';
  React.useEffect(function () {
    if (currentChart) setChartCfg(fsDeep(currentChart.config));
    // eslint-disable-next-line
  }, [chartKey]);

  React.useEffect(function () {
    if (!menuOpen) return;
    function closeMenu(e) {
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      setMenuOpen(false);
    }
    window.addEventListener('pointerdown', closeMenu);
    return function () { window.removeEventListener('pointerdown', closeMenu); };
  }, [menuOpen]);

  function pushHistory(snapshot) {
    setHist(function (h) {
      return { past: h.past.concat([snapshot]).slice(-FS_HISTORY_LIMIT), future: [] };
    });
  }

  function commit(next) {
    pushHistory(fsDeep(docRef.current));
    setDocState(next);
  }

  function saveNow() {
    try {
      window.localStorage.setItem(FS_STORAGE_KEY, JSON.stringify(docRef.current));
      setSaveStatus('saved');
      notify(t('savedToast'));
    } catch (err) {
      setSaveStatus('error');
    }
  }

  function undoDoc() {
    if (!hist.past.length) return;
    var prev = hist.past[hist.past.length - 1];
    setHist({ past: hist.past.slice(0, -1), future: [fsDeep(docRef.current)].concat(hist.future).slice(0, FS_HISTORY_LIMIT) });
    setDocState(prev);
    setSel([]);
  }

  function redoDoc() {
    if (!hist.future.length) return;
    var next = hist.future[0];
    setHist({ past: hist.past.concat([fsDeep(docRef.current)]).slice(-FS_HISTORY_LIMIT), future: hist.future.slice(1) });
    setDocState(next);
    setSel([]);
  }

  function fieldFocus() {
    if (!fieldSnapRef.current) fieldSnapRef.current = fsDeep(docRef.current);
  }

  function fieldBlur() {
    var snap = fieldSnapRef.current;
    fieldSnapRef.current = null;
    if (snap && JSON.stringify(snap) !== JSON.stringify(docRef.current)) pushHistory(snap);
  }

  function pointFromEvent(e) {
    var ab = artboardRef.current;
    if (!ab) return { x: 0, y: 0 };
    var r = ab.getBoundingClientRect();
    var z = zoomRef.current || 1;
    return { x: (e.clientX - r.left) / z, y: (e.clientY - r.top) / z };
  }

  function beginSession(e, session) {
    session.doc0 = fsDeep(docRef.current);
    session.start = pointFromEvent(e);
    session.moved = false;
    sessionRef.current = session;
    window.addEventListener('pointermove', handleWindowMove);
    window.addEventListener('pointerup', handleWindowUp);
  }

  function handleWindowMove(e) {
    var s = sessionRef.current;
    if (!s) return;
    var p = pointFromEvent(e);
    var dx = p.x - s.start.x;
    var dy = p.y - s.start.y;
    if (s.type === 'marquee') {
      var mx = Math.min(s.start.x, p.x);
      var my = Math.min(s.start.y, p.y);
      s.rect = { x: mx, y: my, w: Math.abs(dx), h: Math.abs(dy) };
      s.moved = s.rect.w > 2 || s.rect.h > 2;
      setMarquee(s.rect);
      return;
    }
    if (Math.abs(dx) > 0.7 || Math.abs(dy) > 0.7) s.moved = true;
    if (s.type === 'move') {
      var ndx = dx, ndy = dy, gv = [], gh = [];
      if (docRef.current.snap !== false) {
        var snapped = fsSnapMove(s.doc0, s.ids, dx, dy, 6 / (zoomRef.current || 1));
        ndx = snapped.dx; ndy = snapped.dy; gv = snapped.gv; gh = snapped.gh;
      }
      setGuides(gv.length || gh.length ? { v: gv, h: gh } : null);
      setDocState(fsTranslateDoc(s.doc0, s.ids, ndx, ndy));
      return;
    }
    if (s.type === 'resize') {
      var b1 = fsResizeBounds(s.bounds, s.handle, dx, dy, e.shiftKey);
      var nextR = fsDeep(s.doc0);
      if (s.chartId) {
        var meta = nextR.charts[s.chartId];
        meta.frame = {
          x: b1.x, y: b1.y,
          w: Math.max(160, b1.w), h: Math.max(110, b1.h)
        };
        var fresh = replaceChartElements(nextR, s.chartId);
        if (fresh.length) setSel(fresh.map(function (el) { return el.id; }));
      } else {
        nextR = fsScaleDocBounds(nextR, s.ids, s.bounds, b1);
        s.ids.forEach(function (id) {
          var el = nextR.elements.filter(function (x) { return x.id === id; })[0];
          if (el && el.type === 'text' && e.shiftKey) fsTextFit(el);
        });
        fsSyncChartFrames(s.doc0, nextR);
      }
      setDocState(nextR);
      return;
    }
    if (s.type === 'rotate') {
      var rb = fsSelectionBounds(s.doc0.elements.filter(function (el) { return s.ids.indexOf(el.id) >= 0; }), s.doc0);
      if (!rb) return;
      var cx = rb.x + rb.w / 2, cy = rb.y + rb.h / 2;
      var a0 = Math.atan2(s.start.y - cy, s.start.x - cx);
      var a1 = Math.atan2(p.y - cy, p.x - cx);
      var delta = (a1 - a0) * 180 / Math.PI;
      if (e.shiftKey) delta = Math.round(delta / 15) * 15;
      var nextRot = fsDeep(s.doc0);
      s.ids.forEach(function (id) {
        var el = nextRot.elements.filter(function (x) { return x.id === id; })[0];
        if (el) el.rotate = ((Number(el.rotate) || 0) + delta) % 360;
      });
      setDocState(nextRot);
      return;
    }
    if (s.type === 'line') {
      var nextL = fsDeep(s.doc0);
      var lel = nextL.elements.filter(function (el) { return el.id === s.elId; })[0];
      if (!lel) return;
      if (s.handle === 'p1') { lel.x1 = p.x; lel.y1 = p.y; }
      else { lel.x2 = p.x; lel.y2 = p.y; }
      setDocState(nextL);
    }
  }

  function handleWindowUp() {
    window.removeEventListener('pointermove', handleWindowMove);
    window.removeEventListener('pointerup', handleWindowUp);
    var s = sessionRef.current;
    sessionRef.current = null;
    if (!s) return;
    setGuides(null);
    if (s.type === 'marquee') {
      setMarquee(null);
      if (!s.rect || !s.moved) {
        if (s.baseSel && s.baseSel.length) setSel(s.baseSel);
        return;
      }
      var r = s.rect;
      var hit = [];
      (docRef.current.elements || []).forEach(function (el) {
        if (el.hidden) return;
        var b = bboxOf(el);
        if (!b) return;
        if (b.x < r.x + r.w && b.x + b.w > r.x && b.y < r.y + r.h && b.y + b.h > r.y) hit.push(el.id);
      });
      var chartHits = {};
      (docRef.current.elements || []).forEach(function (el) {
        if (el.chartId && hit.indexOf(el.id) >= 0) chartHits[el.chartId] = true;
      });
      (docRef.current.elements || []).forEach(function (el) {
        if (el.chartId && chartHits[el.chartId] && hit.indexOf(el.id) < 0) hit.push(el.id);
      });
      hit = s.baseSel && s.baseSel.length ? s.baseSel.concat(hit.filter(function (id) { return s.baseSel.indexOf(id) < 0; })) : hit;
      setSel(hit);
      return;
    }
    if (s.moved && JSON.stringify(s.doc0) !== JSON.stringify(docRef.current)) pushHistory(s.doc0);
  }

  function onCanvasPointerDown(e) {
    if (e.button !== 0) return;
    if (e.target && e.target.tagName === 'TEXTAREA') return;
    var hit = e.target && e.target.closest ? e.target.closest('[data-el-id]') : null;
    if (hit) {
      var id = hit.getAttribute('data-el-id');
      var el = elById[id];
      if (!el || el.hidden) return;
      if (el.locked) {
        if (!e.shiftKey) setSel([id]);
        return;
      }
      var ids;
      if (el.chartId && !e.altKey) {
        ids = doc.elements.filter(function (x) { return x.chartId === el.chartId; }).map(function (x) { return x.id; });
      } else {
        ids = [id];
      }
      if (e.shiftKey) {
        var addIds = el.chartId && !e.altKey
          ? doc.elements.filter(function (x) { return x.chartId === el.chartId; }).map(function (x) { return x.id; })
          : [id];
        ids = sel.concat(addIds);
      }
      ids = ids.filter(function (v, i, arr) { return arr.indexOf(v) === i; });
      setSel(ids);
      var movable = ids.filter(function (x) { return elById[x] && !elById[x].locked; });
      if (movable.length) {
        e.preventDefault();
        beginSession(e, { type: 'move', ids: movable });
      }
      return;
    }
    if (!e.shiftKey) setSel([]);
    e.preventDefault();
    beginSession(e, { type: 'marquee', baseSel: e.shiftKey ? sel.slice() : [] });
  }

  function onCanvasDoubleClick(e) {
    var hit = e.target && e.target.closest ? e.target.closest('[data-el-id]') : null;
    if (!hit) return;
    var el = elById[hit.getAttribute('data-el-id')];
    if (el && el.type === 'text' && !el.locked) startEdit(el.id);
  }

  function onHandlePointerDown(e, handle) {
    if (!sel.length) return;
    e.preventDefault();
    e.stopPropagation();
    if (handle === 'p1' || handle === 'p2') {
      beginSession(e, { type: 'line', handle: handle, ids: sel.slice(), elId: sel[0] });
      return;
    }
    if (handle === 'rot') {
      beginSession(e, { type: 'rotate', ids: sel.slice() });
      return;
    }
    beginSession(e, { type: 'resize', handle: handle, ids: sel.slice(), bounds: bounds, chartId: currentChart ? currentChart.id : null });
  }

  function onWheel(e) {
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    var factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    setZoom(fsClamp(zoomRef.current * factor, 0.15, 2.5));
  }

  function zoomBy(factor) {
    setZoom(fsClamp(zoomRef.current * factor, 0.15, 2.5));
  }

  function fit() {
    var vp = viewportRef.current;
    if (!vp) return;
    var w = Math.max(120, vp.clientWidth - 56);
    var h = Math.max(120, vp.clientHeight - 56);
    setZoom(fsClamp(Math.min(w / docRef.current.width, h / docRef.current.height), 0.15, 2));
  }

  function centerPoint() {
    var vp = viewportRef.current;
    var z = zoomRef.current || 1;
    if (!vp) return { x: docRef.current.width / 2, y: docRef.current.height / 2 };
    return { x: (vp.scrollLeft + vp.clientWidth / 2) / z, y: (vp.scrollTop + vp.clientHeight / 2) / z };
  }

  function startEdit(id) {
    if (editSnapRef.current) return;
    editSnapRef.current = fsDeep(docRef.current);
    setEditingId(id);
  }

  function endEdit() {
    var snap = editSnapRef.current;
    editSnapRef.current = null;
    setEditingId(null);
    if (snap && JSON.stringify(snap) !== JSON.stringify(docRef.current)) pushHistory(snap);
  }

  function setEditingText(value) {
    var next = fsDeep(docRef.current);
    var el = next.elements.filter(function (x) { return x.id === editingId; })[0];
    if (!el) return;
    el.text = value;
    fsTextFit(el);
    setDocState(next);
  }

  function selectElement(id, additive) {
    if (additive) {
      var ids = sel.slice();
      if (ids.indexOf(id) >= 0) ids = ids.filter(function (x) { return x !== id; });
      else ids.push(id);
      setSel(ids);
    } else {
      setSel([id]);
    }
  }

  function selectChart(cid, additive) {
    if (!cid) return;
    var ids = doc.elements.filter(function (el) { return el.chartId === cid; }).map(function (el) { return el.id; });
    if (!ids.length) return;
    if (additive) {
      var merged = sel.slice();
      ids.forEach(function (id) { if (merged.indexOf(id) < 0) merged.push(id); });
      setSel(merged);
    } else {
      setSel(ids);
    }
  }

  function nudge(dx, dy) {
    if (!sel.length) return;
    var movable = sel.filter(function (id) { return elById[id] && !elById[id].locked; });
    if (!movable.length) return;
    commit(fsTranslateDoc(docRef.current, movable, dx, dy));
  }

  function duplicateSelection() {
    if (!selectedEls.length) return notify(t('noSelection'));
    var wholeChart = currentChart && selectedEls.length === doc.elements.filter(function (el) { return el.chartId === currentChart.id; }).length;
    if (wholeChart) {
      var meta = currentChart;
      var ds = doc.datasets.filter(function (d) { return d.id === meta.config.datasetId; })[0];
      var cid = fsMakeId('chart');
      var frame = { x: meta.frame.x + 18, y: meta.frame.y + 18, w: meta.frame.w, h: meta.frame.h };
      var parts = buildChart({ chartId: cid, config: fsDeep(meta.config), dataset: ds, frame: frame });
      if (parts.length) {
        var nextChart = fsDeep(docRef.current);
        nextChart.charts[cid] = { id: cid, frame: frame, config: fsDeep(meta.config) };
        nextChart.elements = nextChart.elements.concat(parts);
        commit(nextChart);
        setSel(parts.map(function (el) { return el.id; }));
        return;
      }
    }
    var next = fsDeep(docRef.current);
    var clones = [];
    selectedEls.forEach(function (el) {
      var clone = fsDeep(el);
      clone.id = fsMakeId('el');
      clone.chartId = null;
      if (clone.type === 'line' || clone.type === 'arrow') {
        clone.x1 += 16; clone.y1 += 16; clone.x2 += 16; clone.y2 += 16;
      } else {
        clone.x += 16; clone.y += 16;
      }
      clones.push(clone);
    });
    next.elements = next.elements.concat(clones);
    commit(next);
    setSel(clones.map(function (el) { return el.id; }));
  }

  function deleteSelection() {
    if (!sel.length) return;
    var next = fsDeep(docRef.current);
    var set = {};
    sel.forEach(function (id) { set[id] = true; });
    next.elements = next.elements.filter(function (el) { return !set[el.id]; });
    Object.keys(next.charts || {}).forEach(function (cid) {
      var remaining = next.elements.filter(function (el) { return el.chartId === cid; });
      if (!remaining.length) delete next.charts[cid];
    });
    commit(next);
    setSel([]);
    notify(t('deleted'));
  }

  function copySelection() {
    if (!selectedEls.length) return notify(t('nothingCopied'));
    clipboardRef.current = fsDeep(selectedEls);
    notify(t('copiedElements', { count: String(selectedEls.length) }));
  }

  function pasteClipboard() {
    if (!clipboardRef.current || !clipboardRef.current.length) return;
    var next = fsDeep(docRef.current);
    var clones = clipboardRef.current.map(function (el) {
      var clone = fsDeep(el);
      clone.id = fsMakeId('el');
      clone.chartId = null;
      if (clone.type === 'line' || clone.type === 'arrow') {
        clone.x1 += 16; clone.y1 += 16; clone.x2 += 16; clone.y2 += 16;
      } else {
        clone.x += 16; clone.y += 16;
      }
      return clone;
    });
    next.elements = next.elements.concat(clones);
    commit(next);
    setSel(clones.map(function (el) { return el.id; }));
  }

  function selectAll() {
    setSel(doc.elements.filter(function (el) { return !el.hidden; }).map(function (el) { return el.id; }));
  }

  function patchSelection(patch) {
    if (!sel.length) return;
    var next = fsDeep(docRef.current);
    var touched = false;
    next.elements.forEach(function (el) {
      if (sel.indexOf(el.id) < 0) return;
      Object.assign(el, patch);
      if (el.type === 'text' && ('text' in patch || 'fontSize' in patch || 'fontFamily' in patch || 'fontWeight' in patch)) fsTextFit(el);
      touched = true;
    });
    if (touched) setDocState(next);
  }

  function patchElement(id, patch) {
    var next = fsDeep(docRef.current);
    var el = next.elements.filter(function (x) { return x.id === id; })[0];
    if (!el) return;
    Object.assign(el, patch);
    if (el.type === 'text' && ('text' in patch || 'fontSize' in patch || 'fontFamily' in patch || 'fontWeight' in patch)) fsTextFit(el);
    setDocState(next);
  }

  function onGeom(key, value) {
    if (!selectedEls.length) return;
    var ids = sel.filter(function (id) { return elById[id] && !elById[id].locked; });
    if (!ids.length) return;
    var b = bounds;
    if (!b) return;
    if (currentChart && (key === 'w' || key === 'h')) {
      var nextC = fsDeep(docRef.current);
      var meta = nextC.charts[currentChart.id];
      if (!meta) return;
      meta.frame = {
        x: meta.frame.x, y: meta.frame.y,
        w: key === 'w' ? Math.max(160, value) : meta.frame.w,
        h: key === 'h' ? Math.max(110, value) : meta.frame.h
      };
      var parts = replaceChartElements(nextC, currentChart.id);
      setDocState(nextC);
      if (parts.length) setSel(parts.map(function (el) { return el.id; }));
      return;
    }
    var next;
    if (key === 'x') next = fsTranslateDoc(docRef.current, ids, value - b.x, 0);
    else if (key === 'y') next = fsTranslateDoc(docRef.current, ids, 0, value - b.y);
    else {
      var b1 = { x: b.x, y: b.y, w: key === 'w' ? Math.max(6, value) : b.w, h: key === 'h' ? Math.max(6, value) : b.h };
      next = fsScaleDocBounds(docRef.current, ids, b, b1);
      ids.forEach(function (id) {
        var el = next.elements.filter(function (x) { return x.id === id; })[0];
        if (el && el.type === 'text') fsTextFit(el);
      });
      fsSyncChartFrames(docRef.current, next);
    }
    setDocState(next);
  }

  function onLine(key, value) {
    if (selectedEls.length !== 1) return;
    patchElement(selectedEls[0].id, (function () { var o = {}; o[key] = value; return o; })());
  }

  function onAlign(kind) {
    var blocks = fsBlocks(doc, selectedEls.filter(function (el) { return !el.locked; }));
    if (blocks.length < 2) return;
    var union = unionBounds(blocks.map(function (b) { return b.box; }));
    if (!union) return;
    var next = fsDeep(docRef.current);
    blocks.forEach(function (block) {
      var dx = 0, dy = 0;
      if (kind === 'left') dx = union.x - block.box.x;
      else if (kind === 'hcenter') dx = union.x + union.w / 2 - (block.box.x + block.box.w / 2);
      else if (kind === 'right') dx = union.x + union.w - (block.box.x + block.box.w);
      else if (kind === 'top') dy = union.y - block.box.y;
      else if (kind === 'vcenter') dy = union.y + union.h / 2 - (block.box.y + block.box.h / 2);
      else if (kind === 'bottom') dy = union.y + union.h - (block.box.y + block.box.h);
      block.ids.forEach(function (id) {
        var el = next.elements.filter(function (x) { return x.id === id; })[0];
        if (el) translateElement(el, dx, dy);
      });
      if (block.chartId && next.charts[block.chartId]) {
        next.charts[block.chartId].frame.x += dx;
        next.charts[block.chartId].frame.y += dy;
      }
    });
    commit(next);
  }

  function onDistribute(axis) {
    var blocks = fsBlocks(doc, selectedEls.filter(function (el) { return !el.locked; }));
    if (blocks.length < 3) return;
    blocks.sort(function (a, b) { return axis === 'h' ? a.box.x - b.box.x : a.box.y - b.box.y; });
    var first = blocks[0].box, last = blocks[blocks.length - 1].box;
    var span = axis === 'h' ? (last.x + last.w) - first.x : (last.y + last.h) - first.y;
    var total = 0;
    blocks.forEach(function (b) { total += axis === 'h' ? b.box.w : b.box.h; });
    var gap = (span - total) / (blocks.length - 1);
    var cursor = axis === 'h' ? first.x : first.y;
    var next = fsDeep(docRef.current);
    blocks.forEach(function (block, i) {
      if (i > 0) {
        var dx = 0, dy = 0;
        if (axis === 'h') dx = cursor - block.box.x;
        else dy = cursor - block.box.y;
        block.ids.forEach(function (id) {
          var el = next.elements.filter(function (x) { return x.id === id; })[0];
          if (el) translateElement(el, dx, dy);
        });
        if (block.chartId && next.charts[block.chartId]) {
          next.charts[block.chartId].frame.x += dx;
          next.charts[block.chartId].frame.y += dy;
        }
      }
      cursor += (axis === 'h' ? block.box.w : block.box.h) + gap;
    });
    commit(next);
  }

  function onMatch(kind) {
    if (selectedEls.length < 1) return;
    var target = selectedEls[0];
    var tw = target.w, th = target.h;
    var next = fsDeep(docRef.current);
    selectedEls.forEach(function (el0) {
      var el = next.elements.filter(function (x) { return x.id === el0.id; })[0];
      if (!el || el.type === 'line' || el.type === 'arrow') return;
      if (kind === 'w') el.w = tw; else el.h = th;
      if (el.type === 'text') fsTextFit(el);
    });
    commit(next);
  }

  function onOrder(kind) {
    if (!sel.length) return;
    var set = {};
    sel.forEach(function (id) { set[id] = true; });
    var arr = doc.elements.slice();
    var selected = arr.filter(function (el) { return set[el.id]; });
    var rest = arr.filter(function (el) { return !set[el.id]; });
    if (kind === 'front') arr = rest.concat(selected);
    else if (kind === 'back') arr = selected.concat(rest);
    else if (kind === 'forward') {
      for (var i = arr.length - 2; i >= 0; i--) {
        if (set[arr[i].id] && !set[arr[i + 1].id]) {
          var tmp = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = tmp;
        }
      }
    } else if (kind === 'backward') {
      for (var j = 1; j < arr.length; j++) {
        if (set[arr[j].id] && !set[arr[j - 1].id]) {
          var tmp2 = arr[j]; arr[j] = arr[j - 1]; arr[j - 1] = tmp2;
        }
      }
    }
    var next = fsDeep(docRef.current);
    next.elements = arr;
    commit(next);
  }

  function toggleGroup(prop) {
    if (!sel.length) return;
    var ids = sel.slice();
    var firstChart = selectedEls.length && selectedEls[0].chartId;
    if (firstChart && selectedEls.every(function (el) { return el.chartId === firstChart; })) {
      ids = doc.elements.filter(function (el) { return el.chartId === firstChart; }).map(function (el) { return el.id; });
    }
    var all = ids.every(function (id) { return elById[id] && elById[id][prop]; });
    patchSelectionByIds(ids, (function () { var o = {}; o[prop] = !all; return o; })());
  }

  function patchSelectionByIds(ids, patch) {
    var next = fsDeep(docRef.current);
    var set = {};
    ids.forEach(function (id) { set[id] = true; });
    next.elements.forEach(function (el) { if (set[el.id]) Object.assign(el, patch); });
    commit(next);
  }

  function onToggleLock() {
    toggleGroup('locked');
  }

  function onToggleHide() {
    toggleGroup('hidden');
  }

  function onToggleLocked(id) {
    var el = elById[id];
    if (!el) return;
    var ids = el.chartId && doc.charts[el.chartId]
      ? doc.elements.filter(function (x) { return x.chartId === el.chartId; }).map(function (x) { return x.id; })
      : [id];
    var all = ids.every(function (x) { return elById[x] && elById[x].locked; });
    patchSelectionByIds(ids, { locked: !all });
  }

  function onToggleHidden(id) {
    var el = elById[id];
    if (!el) return;
    var ids = el.chartId && doc.charts[el.chartId]
      ? doc.elements.filter(function (x) { return x.chartId === el.chartId; }).map(function (x) { return x.id; })
      : [id];
    var all = ids.every(function (x) { return elById[x] && elById[x].hidden; });
    patchSelectionByIds(ids, { hidden: !all });
  }

  function addChartFromCfg(cfg) {
    var nextCfg = Object.assign({}, cfg);
    var ds = doc.datasets.filter(function (d) { return d.id === nextCfg.datasetId; })[0];
    if (!ds) return notify(t('chartNeedData'));
    nextCfg = fsNormalizeCfg(nextCfg, ds);
    if (!nextCfg.yCols.length) return notify(t('chartNeedY'));
    if (nextCfg.type === 'scatter' && numericColumnIndexes(ds).indexOf(nextCfg.xCol) < 0) {
      return notify(t('chartNeedNumericX'));
    }
    var cid = fsMakeId('chart');
    var w = Math.min(620, Math.max(320, doc.width - 120));
    var h = Math.round(w * 0.62);
    var offset = (Object.keys(doc.charts).length % 4) * 16;
    var frame = {
      x: Math.round(fsClamp((doc.width - w) / 2 + offset, 12, Math.max(12, doc.width - w - 12))),
      y: Math.round(fsClamp((doc.height - h) / 2 + offset - 24, 12, Math.max(12, doc.height - h - 12))),
      w: w, h: h
    };
    var els = buildChart({ chartId: cid, config: nextCfg, dataset: ds, frame: frame });
    if (!els.length) return notify(t('chartNeedY'));
    var next = fsDeep(docRef.current);
    next.elements = next.elements.concat(els);
    next.charts[cid] = { id: cid, frame: frame, config: fsDeep(nextCfg) };
    setChartCfg(nextCfg);
    commit(next);
    setSel(els.map(function (el) { return el.id; }));
    setRightTab('design');
    notify(t('chartAdded'));
  }

  function applyChartCfg(cid, cfg) {
    var next = fsDeep(docRef.current);
    var meta = next.charts[cid];
    if (!meta) return notify(t('chartConfigMissing'));
    var ds = next.datasets.filter(function (d) { return d.id === cfg.datasetId; })[0];
    if (!ds) return notify(t('chartNeedData'));
    var normalized = fsNormalizeCfg(cfg, ds);
    if (!normalized.yCols.length) return notify(t('chartNeedY'));
    if (normalized.type === 'scatter' && numericColumnIndexes(ds).indexOf(normalized.xCol) < 0) {
      return notify(t('chartNeedNumericX'));
    }
    meta.config = fsDeep(normalized);
    var parts = replaceChartElements(next, cid);
    if (!parts.length) return notify(t('chartNeedY'));
    setDocState(next);
    setChartCfg(normalized);
    setSel(parts.map(function (el) { return el.id; }));
    notify(t('chartUpdated'));
  }

  function addChart() {
    addChartFromCfg(chartCfg);
  }

  function applyCurrentChart() {
    if (currentChart) applyChartCfg(currentChart.id, chartCfg);
    else addChart();
  }

  function chooseChartDataset(dsId) {
    var ds = doc.datasets.filter(function (d) { return d.id === dsId; })[0];
    if (!ds) return;
    var base = fsDefaultCfg(ds);
    var cfg = Object.assign({}, chartCfg, {
      datasetId: dsId, xCol: base.xCol, yCols: base.yCols, errorCol: null, xLabel: base.xLabel
    });
    if (cfg.type === 'scatter') {
      var nums = numericColumnIndexes(ds);
      if (nums.indexOf(cfg.xCol) < 0) cfg.xCol = nums.length ? nums[0] : 0;
    }
    setChartCfg(cfg);
    if (currentChart) applyChartCfg(currentChart.id, cfg);
  }

  function onChartConfig(patch) {
    if (!currentChart) return;
    applyChartCfg(currentChart.id, Object.assign({}, currentChart.config, patch));
  }

  function onChartDataset(dsId) {
    if (!currentChart) return;
    var ds = doc.datasets.filter(function (d) { return d.id === dsId; })[0];
    if (!ds) return;
    var base = fsDefaultCfg(ds);
    var cfg = Object.assign({}, currentChart.config, {
      datasetId: dsId, xCol: base.xCol, yCols: base.yCols, errorCol: null, xLabel: base.xLabel
    });
    if (cfg.type === 'scatter') {
      var nums = numericColumnIndexes(ds);
      if (nums.indexOf(cfg.xCol) < 0) cfg.xCol = nums.length ? nums[0] : 0;
    }
    applyChartCfg(currentChart.id, cfg);
  }

  function onRebuildChart() {
    if (!currentChart) return;
    applyChartCfg(currentChart.id, currentChart.config);
  }

  function onDetachChart() {
    if (!currentChart) return;
    var cid = currentChart.id;
    var next = fsDeep(docRef.current);
    next.elements.forEach(function (el) { if (el.chartId === cid) el.chartId = null; });
    delete next.charts[cid];
    commit(next);
    notify(t('detached'));
  }

  function onPage(patch) {
    var next = fsDeep(docRef.current);
    if (patch.width != null) next.width = fsClamp(patch.width, 200, 6000);
    if (patch.height != null) next.height = fsClamp(patch.height, 200, 6000);
    if (patch.background != null) next.background = patch.background;
    if (patch.grid != null) next.grid = patch.grid;
    if (patch.snap != null) next.snap = patch.snap;
    setDocState(next);
  }

  function onPreset(key) {
    for (var i = 0; i < ARTBOARD_PRESETS.length; i++) {
      var p = ARTBOARD_PRESETS[i];
      if (p.key === key) {
        if (key === 'custom') return;
        onPage({ width: p.width, height: p.height });
        return;
      }
    }
  }

  function onName(name) {
    var next = fsDeep(docRef.current);
    next.name = name;
    setDocState(next);
  }

  function onSaveDataset(parsed) {
    if (!parsed || !parsed.ok) return;
    var next = fsDeep(docRef.current);
    var ds;
    if (editingDatasetId) {
      ds = next.datasets.filter(function (d) { return d.id === editingDatasetId; })[0];
      if (!ds) return;
      ds.columns = parsed.columns;
      ds.rows = parsed.rows;
    } else {
      ds = makeDataset(t('dataset') + ' ' + (next.datasets.length + 1), parsed);
      next.datasets.push(ds);
    }
    Object.keys(next.charts).forEach(function (cid) {
      var meta = next.charts[cid];
      if (meta.config.datasetId === ds.id) {
        meta.config = fsNormalizeCfg(meta.config, ds);
        replaceChartElements(next, cid);
      }
    });
    commit(next);
    setEditingDatasetId(null);
    if (!editingDatasetId) {
      var cfg = fsDefaultCfg(ds);
      setChartCfg(cfg);
      setLeftTab('chart');
      notify(t('datasetAdded'));
    } else {
      notify(t('datasetUpdated'));
    }
    if (currentChart && currentChart.config.datasetId === ds.id) setSel([]);
  }

  function onDeleteDataset(id) {
    if (!window.confirm(t('deleteDataset') + '?')) return;
    var next = fsDeep(docRef.current);
    var cids = {};
    Object.keys(next.charts).forEach(function (cid) {
      if (next.charts[cid].config.datasetId === id) cids[cid] = true;
    });
    Object.keys(cids).forEach(function (cid) { delete next.charts[cid]; });
    next.elements = next.elements.filter(function (el) { return !el.chartId || !cids[el.chartId]; });
    next.datasets = next.datasets.filter(function (d) { return d.id !== id; });
    if (editingDatasetId === id) setEditingDatasetId(null);
    commit(next);
    setSel([]);
    var remain = next.datasets[0];
    setChartCfg(fsDefaultCfg(remain));
    notify(t('deleted'));
  }

  function onEditDataset(id) {
    var ds = doc.datasets.filter(function (d) { return d.id === id; })[0];
    if (!ds) return;
    setDataText(fsDatasetToText(ds));
    setHeader(true);
    setEditingDatasetId(id);
    setLeftTab('data');
  }

  function onUseDataset(id) {
    var ds = doc.datasets.filter(function (d) { return d.id === id; })[0];
    if (!ds) return;
    setChartCfg(fsDefaultCfg(ds));
    setEditingDatasetId(null);
    setLeftTab('chart');
  }

  function updateDataset(id, mutator) {
    var next = fsDeep(docRef.current);
    var ds = next.datasets.filter(function (d) { return d.id === id; })[0];
    if (!ds) return false;
    if (mutator(ds, next) === false) return false;
    for (var r = 0; r < ds.rows.length; r++) {
      var row = ds.rows[r];
      while (row.length < ds.columns.length) row.push(null);
      if (row.length > ds.columns.length) row.length = ds.columns.length;
    }
    Object.keys(next.charts || {}).forEach(function (cid) {
      var meta = next.charts[cid];
      if (!meta || meta.config.datasetId !== id) return;
      meta.config = fsNormalizeCfg(meta.config, ds);
      replaceChartElements(next, cid);
    });
    commit(next);
    setSel([]);
    setChartCfg(function (prev) {
      return prev && prev.datasetId === id ? fsNormalizeCfg(prev, ds) : prev;
    });
    return true;
  }

  function onDatasetCell(id, r, c, value) {
    updateDataset(id, function (ds) {
      while (ds.rows.length <= r) ds.rows.push(new Array(ds.columns.length).fill(null));
      var nextValue = toCell(value);
      if (ds.rows[r][c] === nextValue) return false;
      ds.rows[r][c] = nextValue;
      return true;
    });
  }

  function onDatasetHeader(id, c, name) {
    updateDataset(id, function (ds) {
      var value = String(name == null ? '' : name).trim() || ('Column ' + (c + 1));
      if (ds.columns[c] === value) return false;
      ds.columns[c] = value;
      return true;
    });
  }

  function onDatasetRename(id, name) {
    updateDataset(id, function (ds) {
      var value = String(name == null ? '' : name).trim();
      if (!value || value === ds.name) return false;
      ds.name = value.slice(0, 80);
      return true;
    });
  }

  function onDatasetAddRow(id) {
    updateDataset(id, function (ds) {
      ds.rows.push(new Array(ds.columns.length).fill(null));
      return true;
    });
  }

  function onDatasetDeleteRow(id, r) {
    updateDataset(id, function (ds) {
      if (ds.rows.length <= 1 || r < 0 || r >= ds.rows.length) return false;
      ds.rows.splice(r, 1);
      return true;
    });
  }

  function onDatasetAddColumn(id) {
    updateDataset(id, function (ds) {
      ds.columns.push('Column ' + (ds.columns.length + 1));
      ds.rows.forEach(function (row) { row.push(null); });
      return true;
    });
  }

  function onDatasetDeleteColumn(id, c) {
    updateDataset(id, function (ds) {
      if (ds.columns.length <= 1 || c < 0 || c >= ds.columns.length) return false;
      ds.columns.splice(c, 1);
      ds.rows.forEach(function (row) { row.splice(c, 1); });
      return true;
    });
  }

  function onDatasetPaste(id, startRow, startCol, block) {
    if (!block || !block.length) return;
    updateDataset(id, function (ds) {
      var width = 0;
      block.forEach(function (row) { width = Math.max(width, row.length); });
      if (width < 1) return false;
      while (ds.columns.length < startCol + width) {
        ds.columns.push('Column ' + (ds.columns.length + 1));
        ds.rows.forEach(function (row) { row.push(null); });
      }
      while (ds.rows.length < startRow + block.length) {
        ds.rows.push(new Array(ds.columns.length).fill(null));
      }
      block.forEach(function (row, ri) {
        row.forEach(function (value, ci) {
          ds.rows[startRow + ri][startCol + ci] = toCell(value);
        });
      });
      return true;
    });
  }

  function onNewDataset() {
    var next = fsDeep(docRef.current);
    var ds = {
      id: fsMakeId('ds'),
      name: t('dataset') + ' ' + (next.datasets.length + 1),
      columns: ['Column 1', 'Column 2', 'Column 3'],
      rows: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    };
    next.datasets.push(ds);
    commit(next);
    setSel([]);
    setChartCfg(fsDefaultCfg(ds));
    notify(t('datasetAdded'));
    return ds.id;
  }

  function onImportDataset(parsed) {
    if (!parsed || !parsed.ok) return null;
    var next = fsDeep(docRef.current);
    var ds = makeDataset(t('dataset') + ' ' + (next.datasets.length + 1), parsed);
    next.datasets.push(ds);
    commit(next);
    setSel([]);
    setChartCfg(fsDefaultCfg(ds));
    notify(t('datasetAdded'));
    return ds.id;
  }

  function onInsert(kind) {
    var el = fsMakeInsert(kind, null, doc, centerPoint());
    if (!el) return;
    var next = fsDeep(docRef.current);
    next.elements.push(el);
    commit(next);
    setSel([el.id]);
    setRightTab('design');
  }

  function onInsertSymbol(sym) {
    var el = fsMakeInsert('symbol', sym, doc, centerPoint());
    if (!el) return;
    var next = fsDeep(docRef.current);
    next.elements.push(el);
    commit(next);
    setSel([el.id]);
  }

  function onInsertIcon(key) {
    var el = fsMakeInsert('icon', key, doc, centerPoint());
    if (!el) return;
    var next = fsDeep(docRef.current);
    next.elements.push(el);
    commit(next);
    setSel([el.id]);
  }

  function svgMarkup() {
    var svg = svgRef.current;
    if (!svg) return '';
    var clone = svg.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    clone.setAttribute('width', String(docRef.current.width));
    clone.setAttribute('height', String(docRef.current.height));
    var overlays = clone.querySelectorAll('[data-overlay]');
    for (var i = 0; i < overlays.length; i++) overlays[i].parentNode.removeChild(overlays[i]);
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
  }

  function fsDownload(name, blob) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function openLicense() {
    setLicenseError('');
    setLicenseBusy(false);
    setLicenseOpen(true);
    setMenuOpen(false);
  }

  function closeLicense() {
    if (licenseBusy) return;
    setLicenseOpen(false);
    setLicenseError('');
  }

  function changeLicenseDraft(value) {
    setLicenseDraft(value);
    if (licenseError) setLicenseError('');
  }

  function activateLicense() {
    var token = String(licenseDraft || '').trim();
    if (!token) return;
    setLicenseBusy(true);
    setLicenseError('');
    fsLicenseCheck(token).then(function (payload) {
      if (!payload) {
        setLicenseError(t('licenseInvalid'));
        setLicenseBusy(false);
        return;
      }
      fsLicenseWriteStored(token);
      setLicense({ status: 'pro', payload: payload, token: token });
      setLicenseBusy(false);
      setLicenseOpen(false);
      setLicenseDraft('');
      notify(t('licenseActivated'));
    }).catch(function () {
      setLicenseError(t('licenseError'));
      setLicenseBusy(false);
    });
  }

  function deactivateLicense() {
    fsLicenseClearStored();
    setLicense({ status: 'free', payload: null, token: null });
    notify(t('licenseRemoved'));
  }

  function exportSvg() {
    if (license.status !== 'pro') {
      openLicense();
      notify(t('licenseNeeded'));
      return;
    }
    try {
      var markup = svgMarkup();
      if (!markup) throw new Error('no svg');
      fsDownload(safeName(docRef.current.name) + '.svg', new Blob([markup], { type: 'image/svg+xml;charset=utf-8' }));
    } catch (err) {
      notify(t('exportFailed'));
    }
  }

  function exportPng() {
    var pro = license.status === 'pro';
    try {
      var markup = svgMarkup();
      if (!markup) throw new Error('no svg');
      var svgBlob = new Blob([markup], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(svgBlob);
      var img = new Image();
      img.onload = function () {
        try {
          var scale = pro ? 300 / 96 : 2;
          var canvas = document.createElement('canvas');
          canvas.width = Math.round(docRef.current.width * scale);
          canvas.height = Math.round(docRef.current.height * scale);
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = docRef.current.background || '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          if (!pro) fsWatermarkCanvas(ctx, canvas, t('watermarkText'));
          URL.revokeObjectURL(url);
          canvas.toBlob(function (blob) {
            if (!blob) return notify(t('exportFailed'));
            fsDownload(safeName(docRef.current.name) + (pro ? '@300dpi.png' : '-preview.png'), blob);
          }, 'image/png');
        } catch (err) {
          URL.revokeObjectURL(url);
          notify(t('exportFailed'));
        }
      };
      img.onerror = function () { URL.revokeObjectURL(url); notify(t('exportFailed')); };
      img.src = url;
    } catch (err) {
      notify(t('exportFailed'));
    }
  }

  function exportJson() {
    try {
      var text = JSON.stringify(docRef.current, null, 2);
      fsDownload(safeName(docRef.current.name) + '.figstudio.json', new Blob([text], { type: 'application/json;charset=utf-8' }));
    } catch (err) {
      notify(t('exportFailed'));
    }
  }

  function importFile(file) {
    if (!file) return;
    file.text().then(function (text) {
      var clean = validateDoc(JSON.parse(text));
      if (!clean) throw new Error('invalid');
      pushHistory(fsDeep(docRef.current));
      setDocState(clean);
      setSel([]);
      setChartCfg(fsDefaultCfg(clean.datasets[0]));
      notify(t('savedToast'));
    }).catch(function () {
      notify(t('importFailed'));
    });
  }

  function newFigure() {
    if (!window.confirm(t('newConfirm'))) return;
    var blank = newBlankDoc({ width: 1000, height: 700, name: t('untitled') });
    pushHistory(fsDeep(docRef.current));
    setDocState(blank);
    setSel([]);
    setChartCfg(fsDefaultCfg(blank.datasets[0]));
    setEditingDatasetId(null);
  }

  function loadDemo() {
    if (!window.confirm(t('newConfirm'))) return;
    var demo = demoDoc();
    pushHistory(fsDeep(docRef.current));
    setDocState(demo);
    setSel([]);
    setChartCfg(fsDefaultCfg(demo.datasets[0]));
    setEditingDatasetId(null);
  }

  React.useEffect(function () {
    var id = window.setTimeout(fit, 60);
    return function () { window.clearTimeout(id); };
    // eslint-disable-next-line
  }, []);

  React.useEffect(function () {
    function onKey(e) {
      var tag = (e.target && e.target.tagName ? e.target.tagName : '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target && e.target.isContentEditable)) return;
      var meta = e.ctrlKey || e.metaKey;
      var key = String(e.key || '').toLowerCase();
      if (meta && !e.altKey) {
        if (key === 'z' && !e.shiftKey) { e.preventDefault(); undoDoc(); return; }
        if (key === 'y' || (key === 'z' && e.shiftKey)) { e.preventDefault(); redoDoc(); return; }
        if (key === 'd') { e.preventDefault(); duplicateSelection(); return; }
        if (key === 'a') { e.preventDefault(); selectAll(); return; }
        if (key === 'c') { e.preventDefault(); copySelection(); return; }
        if (key === 'v') { e.preventDefault(); pasteClipboard(); return; }
        if (key === 's') { e.preventDefault(); saveNow(); return; }
        if (key === '0') { e.preventDefault(); fit(); return; }
      }
      if (key === 'delete' || key === 'backspace') { e.preventDefault(); deleteSelection(); return; }
      if (key === 'escape') { setSel([]); if (editingId) endEdit(); setMenuOpen(false); return; }
      if (key === 'arrowleft') { e.preventDefault(); nudge(e.shiftKey ? -10 : -1, 0); return; }
      if (key === 'arrowright') { e.preventDefault(); nudge(e.shiftKey ? 10 : 1, 0); return; }
      if (key === 'arrowup') { e.preventDefault(); nudge(0, e.shiftKey ? -10 : -1); return; }
      if (key === 'arrowdown') { e.preventDefault(); nudge(0, e.shiftKey ? 10 : 1); return; }
    }
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  });

  return h(FSErrorBoundary, { t: t }, fsStudioView({
    t: t,
    doc: doc,
    sel: sel,
    selectedEls: selectedEls,
    selectionCount: selectedEls.length,
    bounds: bounds,
    chart: currentChart,
    presetKey: presetKey,
    zoom: zoom,
    leftTab: leftTab,
    rightTab: rightTab,
    dataText: dataText,
    header: header,
    datasets: doc.datasets,
    editingDatasetId: editingDatasetId,
    chartCfg: chartCfg,
    toast: toast,
    saveStatus: saveStatus,
    editingId: editingId,
    guides: guides,
    marquee: marquee,
    menuOpen: menuOpen,
    canUndo: hist.past.length > 0,
    canRedo: hist.future.length > 0,
    viewportRef: viewportRef,
    artboardRef: artboardRef,
    svgRef: svgRef,
    fileInputRef: fileInputRef,
    menuRef: menuRef,
    onCanvasPointerDown: onCanvasPointerDown,
    onCanvasDoubleClick: onCanvasDoubleClick,
    onHandlePointerDown: onHandlePointerDown,
    onWheel: onWheel,
    onTab: setLeftTab,
    onRightTab: setRightTab,
    onName: onName,
    onUndo: undoDoc,
    onRedo: redoDoc,
    onZoomIn: function () { zoomBy(1.2); },
    onZoomOut: function () { zoomBy(1 / 1.2); },
    onFit: fit,
    onMenuToggle: function () { setMenuOpen(!menuOpen); },
    license: license,
    pro: license.status === 'pro',
    licenseOpen: licenseOpen,
    licenseDraft: licenseDraft,
    licenseError: licenseError,
    licenseBusy: licenseBusy,
    licensePrice: FS_LICENSE_PRICE,
    purchaseUrl: FS_PURCHASE_URL,
    onOpenLicense: openLicense,
    onLicenseDraft: changeLicenseDraft,
    onActivateLicense: activateLicense,
    onCloseLicense: closeLicense,
    onDeactivateLicense: deactivateLicense,
    onExportSvg: exportSvg,
    onExportPng: exportPng,
    onExportJson: exportJson,
    onImportClick: function () { if (fileInputRef.current) fileInputRef.current.click(); },
    onFile: importFile,
    onNew: newFigure,
    onLoadDemo: loadDemo,
    onSaveNow: saveNow,
    onDataText: setDataText,
    onHeader: setHeader,
    onSaveDataset: onSaveDataset,
    onCancelEdit: function () { setEditingDatasetId(null); },
    onSample: function () { setDataText(SAMPLE_TABLE); setHeader(true); },
    onUseDataset: onUseDataset,
    onEditDataset: onEditDataset,
    onDeleteDataset: onDeleteDataset,
    onNewDataset: onNewDataset,
    onImportDataset: onImportDataset,
    onDatasetCell: onDatasetCell,
    onDatasetHeader: onDatasetHeader,
    onDatasetPaste: onDatasetPaste,
    onDatasetAddRow: onDatasetAddRow,
    onDatasetDeleteRow: onDatasetDeleteRow,
    onDatasetAddColumn: onDatasetAddColumn,
    onDatasetDeleteColumn: onDatasetDeleteColumn,
    onDatasetRename: onDatasetRename,
    onChooseChartDataset: chooseChartDataset,
    onChartCfgChange: setChartCfg,
    onInsertChart: addChart,
    onApplyChart: applyCurrentChart,
    onGoData: function () { setLeftTab('data'); },
    onInsert: onInsert,
    onInsertSymbol: onInsertSymbol,
    onInsertIcon: onInsertIcon,
    onPreset: onPreset,
    onPage: onPage,
    onFieldFocus: fieldFocus,
    onFieldBlur: fieldBlur,
    onElement: patchElement,
    onFill: function (v) { patchSelection({ fill: v }); },
    onStroke: function (v) { patchSelection({ stroke: v }); },
    onGeom: onGeom,
    onLine: onLine,
    onOpacity: function (v) { patchSelection({ opacity: v / 100 }); },
    onStrokeWidth: function (v) { patchSelection({ strokeWidth: v }); },
    onStartEdit: startEdit,
    onOrder: onOrder,
    onAlign: onAlign,
    onDistribute: onDistribute,
    onMatch: onMatch,
    onDuplicate: duplicateSelection,
    onDelete: deleteSelection,
    onToggleLock: onToggleLock,
    onToggleHide: onToggleHide,
    onChartConfig: onChartConfig,
    onChartDataset: onChartDataset,
    onRebuildChart: onRebuildChart,
    onDetachChart: onDetachChart,
    onSelectElement: selectElement,
    onSelectChart: selectChart,
    onToggleHidden: onToggleHidden,
    onToggleLocked: onToggleLocked,
    onEditText: setEditingText,
    onEndEdit: endEdit
  }));
}

function fsInstallStudioStyles() {
  if (typeof document === 'undefined') return function () {};
  var tag = document.createElement('style');
  tag.setAttribute('data-plugin', 'dsh-figstudio');
  tag.setAttribute('data-plugin-css', 'dsh-figstudio/studio');
  tag.textContent = FIGSTUDIO_CSS;
  (document.head || document.documentElement).appendChild(tag);
  return function () { if (tag.parentNode) tag.parentNode.removeChild(tag); };
}

function apply(ctx) {
  function attempt(label, fn) {
    try {
      fn();
      return true;
    } catch (err) {
      if (typeof console !== 'undefined' && console.error) console.error('[figstudio] ' + label + ' failed', err);
      return false;
    }
  }
  attempt('locale registration', function () {
    ctx.effect(function () {
      return ctx.locale.register(FS_NS, FIGSTUDIO_LOCALE);
    }, 'figstudio: locale');
  });
  attempt('stylesheet', function () {
    ctx.effect(fsInstallStudioStyles, 'figstudio: styles');
  });
  var mainOk = attempt('main panel', function () {
    ctx.slots.inject('main', function () {
      return ctx.slots.register({
        name: 'main',
        key: FS_WORKBENCH_ID,
        locale: FS_NS,
        inject: function () { return {}; }
      }, FigureStudio);
    });
  });
  if (!mainOk) return;
  attempt('sidebar entry', function () {
    ctx.slots.inject('sidebar.panellist', function () {
      return ctx.slots.register({
        name: 'sidebar.panellist',
        id: FS_WORKBENCH_ID,
        order: 63,
        label: function () { return ctx.locale.bind(FS_NS)('title'); }
      }, function (slotProps) {
        return h(FSStudioGlyph, { size: slotProps && slotProps.size ? slotProps.size : 20 });
      });
    });
  });
}


/* Figure Studio — view layer. */

function FSErrorBoundary(props) {
  React.Component.call(this, props);
  this.state = { error: null };
}
FSErrorBoundary.prototype = Object.create(React.Component.prototype);
FSErrorBoundary.prototype.constructor = FSErrorBoundary;
FSErrorBoundary.getDerivedStateFromError = function (error) {
  return { error: error };
};
FSErrorBoundary.prototype.componentDidCatch = function (error, info) {
  if (typeof console !== 'undefined' && console.error) console.error('[figstudio]', error, info);
};
FSErrorBoundary.prototype.render = function () {
  if (this.state.error) {
    var t = this.props.t || function (k) { return k; };
    return h('div', { className: 'fs-root' },
      h('div', { className: 'fs-error' },
        h(FSIcon, { name: 'warning', size: 26 }),
        h('div', null, t('errorBoundary')),
        h('div', { style: { fontSize: '11px', opacity: .7, maxWidth: '520px', wordBreak: 'break-word' } }, String(this.state.error && this.state.error.message || this.state.error)),
        h('button', { className: 'fs-btn', type: 'button', onClick: function () { window.location.reload(); } }, t('reload'))
      )
    );
  }
  return this.props.children;
};

function fsTopIconButton(name, title, onClick, disabled, active) {
  return h('button', {
    className: 'fs-iconbtn' + (active ? ' active' : ''),
    type: 'button', title: title, disabled: !!disabled,
    onClick: onClick
  }, h(FSIcon, { name: name, size: 16 }));
}

function fsMenuButton(icon, label, onClick) {
  return h('button', { type: 'button', onClick: onClick },
    h(FSIcon, { name: icon, size: 14 }), h('span', null, label));
}

function fsStudioView(p) {
  var t = p.t;
  var doc = p.doc;
  var elements = (doc.elements || []).filter(function (el) { return !el.hidden; });
  var bounds = p.bounds;
  var zoom = p.zoom;
  var editEl = null;
  if (p.editingId) {
    editEl = (doc.elements || []).filter(function (el) { return el.id === p.editingId; })[0] || null;
  }
  var singleLine = p.selectedEls.length === 1 && (p.selectedEls[0].type === 'line' || p.selectedEls[0].type === 'arrow');
  var rotateHandle = p.selectedEls.length === 1 && p.selectedEls[0].type === 'text';
  var handleSize = 8 / zoom;
  var panelCfg = p.chartCfg;
  if (p.datasets.length && !p.datasets.some(function (d) { return d.id === panelCfg.datasetId; })) {
    panelCfg = fsDefaultCfg(p.datasets[0]);
  }
  var toast = p.toast;

  function closeMenu() { if (p.menuOpen) p.onMenuToggle(); }

  var leftBody;
  if (p.leftTab === 'chart') {
    leftBody = h(FSChartPanel, {
      t: t, cfg: panelCfg, datasets: p.datasets,
      targetChartId: p.chart ? p.chart.id : null,
      onChooseDataset: p.onChooseChartDataset,
      onChange: p.onChartCfgChange,
      onInsertChart: p.onInsertChart,
      onApplyChart: p.onApplyChart,
      onGoData: p.onGoData
    });
  } else if (p.leftTab === 'insert') {
    leftBody = h(FSInsertPanel, {
      t: t, onInsert: p.onInsert, onInsertSymbol: p.onInsertSymbol, onInsertIcon: p.onInsertIcon
    });
  } else {
    leftBody = h(FSDataPanel, {
      t: t, dataText: p.dataText, header: p.header, datasets: p.datasets,
      onDataText: p.onDataText, onHeaderFlag: p.onHeader, onSample: p.onSample,
      onNewDataset: p.onNewDataset, onImportDataset: p.onImportDataset,
      onCell: p.onDatasetCell, onHeaderCell: p.onDatasetHeader,
      onPasteBlock: p.onDatasetPaste,
      onAddRow: p.onDatasetAddRow, onDeleteRow: p.onDatasetDeleteRow,
      onAddColumn: p.onDatasetAddColumn, onDeleteColumn: p.onDatasetDeleteColumn,
      onRenameDataset: p.onDatasetRename, onDeleteDataset: p.onDeleteDataset
    });
  }

  var rightBody = p.rightTab === 'layers'
    ? h(FSLayers, {
      t: t, doc: doc, selectedIds: p.sel,
      onSelectElement: p.onSelectElement, onSelectChart: p.onSelectChart,
      onToggleHidden: p.onToggleHidden, onToggleLocked: p.onToggleLocked
    })
    : h(FSInspector, {
      t: t, doc: doc, els: p.selectedEls, bounds: bounds, chart: p.chart, presetKey: p.presetKey,
      onPreset: p.onPreset, onPage: p.onPage,
      onFieldFocus: p.onFieldFocus, onFieldBlur: p.onFieldBlur,
      onLine: p.onLine, onGeom: p.onGeom, onElement: p.onElement,
      onFill: p.onFill, onStroke: p.onStroke,
      onOpacity: p.onOpacity, onStrokeWidth: p.onStrokeWidth, onStartEdit: p.onStartEdit,
      onOrder: p.onOrder, onAlign: p.onAlign, onDistribute: p.onDistribute, onMatch: p.onMatch,
      onDuplicate: p.onDuplicate, onDelete: p.onDelete, onToggleLock: p.onToggleLock, onToggleHide: p.onToggleHide,
      onChartConfig: p.onChartConfig, onChartDataset: p.onChartDataset,
      onRebuildChart: p.onRebuildChart, onDetachChart: p.onDetachChart
    });

  var overlay = [];
  if (p.guides) {
    (p.guides.v || []).forEach(function (x, i) {
      overlay.push(h('line', {
        key: 'gv' + i, x1: x, y1: 0, x2: x, y2: doc.height,
        stroke: 'var(--dsw-alias-brand-primary)', strokeWidth: 1 / zoom,
        strokeDasharray: (4 / zoom) + ' ' + (3 / zoom)
      }));
    });
    (p.guides.h || []).forEach(function (y, i) {
      overlay.push(h('line', {
        key: 'gh' + i, x1: 0, y1: y, x2: doc.width, y2: y,
        stroke: 'var(--dsw-alias-brand-primary)', strokeWidth: 1 / zoom,
        strokeDasharray: (4 / zoom) + ' ' + (3 / zoom)
      }));
    });
  }
  if (p.marquee) {
    overlay.push(h('rect', {
      key: 'marquee', x: p.marquee.x, y: p.marquee.y, width: p.marquee.w, height: p.marquee.h,
      fill: 'var(--dsw-alias-brand-primary)', fillOpacity: 0.08,
      stroke: 'var(--dsw-alias-brand-primary)', strokeWidth: 1 / zoom
    }));
  }
  if (bounds && p.selectedEls.length) {
    overlay.push(h('rect', {
      key: 'seloutline', x: bounds.x, y: bounds.y, width: bounds.w, height: bounds.h,
      fill: 'none', stroke: 'var(--dsw-alias-brand-primary)', strokeWidth: 1.4 / zoom
    }));
    if (singleLine) {
      var lineEl = p.selectedEls[0];
      [['p1', lineEl.x1, lineEl.y1], ['p2', lineEl.x2, lineEl.y2]].forEach(function (pt) {
        overlay.push(h('circle', {
          key: pt[0], className: 'fs-handle fs-handle-' + pt[0],
          cx: pt[1], cy: pt[2], r: handleSize * 0.7,
          onPointerDown: function (e) { p.onHandlePointerDown(e, pt[0]); }
        }));
      });
    } else {
      var hs = [
        ['nw', bounds.x, bounds.y],
        ['n', bounds.x + bounds.w / 2, bounds.y],
        ['ne', bounds.x + bounds.w, bounds.y],
        ['e', bounds.x + bounds.w, bounds.y + bounds.h / 2],
        ['se', bounds.x + bounds.w, bounds.y + bounds.h],
        ['s', bounds.x + bounds.w / 2, bounds.y + bounds.h],
        ['sw', bounds.x, bounds.y + bounds.h],
        ['w', bounds.x, bounds.y + bounds.h / 2]
      ];
      hs.forEach(function (def) {
        overlay.push(h('rect', {
          key: def[0],
          className: 'fs-handle fs-handle-' + def[0],
          x: def[1] - handleSize / 2, y: def[2] - handleSize / 2,
          width: handleSize, height: handleSize,
          rx: 1.5 / zoom,
          onPointerDown: function (e) { p.onHandlePointerDown(e, def[0]); }
        }));
      });
      if (rotateHandle) {
        var cx = bounds.x + bounds.w / 2;
        overlay.push(h('line', {
          key: 'rotline', x1: cx, y1: bounds.y, x2: cx, y2: bounds.y - 22 / zoom,
          stroke: 'var(--dsw-alias-brand-primary)', strokeWidth: 1 / zoom
        }));
        overlay.push(h('circle', {
          key: 'rot', className: 'fs-handle fs-handle-rot',
          cx: cx, cy: bounds.y - 22 / zoom, r: 5 / zoom,
          onPointerDown: function (e) { p.onHandlePointerDown(e, 'rot'); }
        }));
      }
    }
  }

  var textEditor = null;
  if (editEl) {
    textEditor = h('textarea', {
      className: 'fs-textedit',
      value: editEl.text || '',
      autoFocus: true,
      spellCheck: false,
      style: {
        left: editEl.x, top: editEl.y,
        width: Math.max(28, editEl.w), height: Math.max(24, editEl.h),
        fontSize: editEl.fontSize || 14,
        fontFamily: fsFontFamily(editEl.fontFamily),
        fontWeight: editEl.fontWeight === 'bold' ? 700 : 400,
        fontStyle: editEl.italic ? 'italic' : 'normal',
        color: editEl.fill === 'none' ? '#111' : editEl.fill,
        textAlign: editEl.align || 'left',
        transform: editEl.rotate ? 'rotate(' + editEl.rotate + 'deg)' : 'none',
        transformOrigin: 'center center'
      },
      onChange: function (e) { p.onEditText(e.target.value); },
      onBlur: p.onEndEdit,
      onPointerDown: function (e) { e.stopPropagation(); },
      onKeyDown: function (e) {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); p.onEndEdit(); }
      }
    });
  }

  return h('div', { className: 'fs-root' },
    h('header', { className: 'fs-top' },
      h('div', { className: 'fs-brand' },
        h('span', { className: 'fs-brand-glyph' }, h(FSStudioGlyph, { size: 20 })),
        h('div', { style: { minWidth: 0 } },
          h('div', { className: 'fs-brand-name' }, t('title')),
          h('div', { className: 'fs-brand-sub' }, t('subtitle'))
        )
      ),
      h('input', {
        className: 'fs-docname', value: doc.name || '', placeholder: t('untitled'),
        title: doc.name || t('untitled'),
        onFocus: p.onFieldFocus, onBlur: p.onFieldBlur,
        onChange: function (e) { p.onName(e.target.value); }
      }),
      h('span', {
        className: 'fs-planbadge ' + (p.pro ? 'pro' : 'free'),
        title: p.pro ? t('licenseActive') : t('licenseIntro')
      }, p.pro ? t('proPlan') : t('freePlan')),
      h('div', { className: 'fs-spacer' }),
      h('div', { className: 'fs-group' },
        fsTopIconButton('undo', t('undo') + ' (Ctrl+Z)', p.onUndo, !p.canUndo),
        fsTopIconButton('redo', t('redo') + ' (Ctrl+Y)', p.onRedo, !p.canRedo)
      ),
      h('div', { className: 'fs-group' },
        fsTopIconButton('minus', t('zoomOut'), p.onZoomOut),
        h('button', {
          className: 'fs-zoomlabel', type: 'button', title: t('fit'),
          style: { border: 0, background: 'transparent', cursor: 'pointer', padding: '0 2px' },
          onClick: p.onFit
        }, Math.round(zoom * 100) + '%'),
        fsTopIconButton('plus', t('zoomIn'), p.onZoomIn),
        fsTopIconButton('fit', t('fit') + ' (Ctrl+0)', p.onFit)
      ),
      h('span', { className: 'fs-sep' }),
      h('div', { className: 'fs-popoverwrap', ref: p.menuRef },
        h('button', {
          className: 'fs-btn primary', type: 'button',
          onClick: p.onMenuToggle
        }, h(FSIcon, { name: 'download', size: 14 }), t('export'), h(FSIcon, { name: 'chevronDown', size: 12 })),
        p.menuOpen ? h('div', { className: 'fs-menu' },
          fsMenuButton(p.pro ? 'download' : 'lock', p.pro ? t('exportSvg') : t('exportSvg') + ' · Pro', function () { p.onExportSvg(); closeMenu(); }),
          fsMenuButton('download', p.pro ? t('exportPngPro') : t('exportPngFree'), function () { p.onExportPng(); closeMenu(); }),
          fsMenuButton('download', t('exportJson'), function () { p.onExportJson(); closeMenu(); }),
          h('div', { className: 'fs-menusep' }),
          fsMenuButton(p.pro ? 'check' : 'sparkle', t('licenseMenu') + ' · ' + (p.pro ? t('proPlan') : t('freePlan')), function () { p.onOpenLicense(); }),
          h('div', { className: 'fs-menusep' }),
          fsMenuButton('upload', t('importJson'), function () { p.onImportClick(); closeMenu(); }),
          fsMenuButton('plus', t('newFigure'), function () { p.onNew(); closeMenu(); }),
          fsMenuButton('sparkle', t('demoFigure'), function () { p.onLoadDemo(); closeMenu(); }),
          h('div', { className: 'fs-menunote' }, t('localOnly'))
        ) : null
      )
    ),
    h('div', { className: 'fs-body' },
      h('aside', { className: 'fs-panel' },
        h('div', { className: 'fs-tabs' },
          h('button', { className: 'fs-tab' + (p.leftTab === 'data' ? ' active' : ''), type: 'button', onClick: function () { p.onTab('data'); } }, t('tabData')),
          h('button', { className: 'fs-tab' + (p.leftTab === 'chart' ? ' active' : ''), type: 'button', onClick: function () { p.onTab('chart'); } }, t('tabChart')),
          h('button', { className: 'fs-tab' + (p.leftTab === 'insert' ? ' active' : ''), type: 'button', onClick: function () { p.onTab('insert'); } }, t('tabInsert'))
        ),
        h('div', { className: 'fs-panelbody' }, leftBody)
      ),
      h('section', { className: 'fs-stage' },
        h('div', {
          className: 'fs-viewport',
          ref: p.viewportRef,
          onWheel: p.onWheel
        },
          h('div', {
            className: 'fs-holder',
            style: { width: doc.width * zoom, height: doc.height * zoom }
          },
            h('div', {
              className: 'fs-artboard',
              ref: p.artboardRef,
              style: {
                width: doc.width, height: doc.height, background: doc.background,
                transform: 'scale(' + zoom + ')', transformOrigin: '0 0',
                position: 'absolute', left: 0, top: 0
              },
              onPointerDown: p.onCanvasPointerDown,
              onDoubleClick: p.onCanvasDoubleClick
            },
              doc.grid !== false ? h('div', {
                className: 'fs-grid-overlay',
                style: {
                  backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.07) 1px,transparent 1px)',
                  backgroundSize: '20px 20px'
                }
              }) : null,
              h('svg', {
                className: 'fs-artsvg',
                ref: p.svgRef,
                width: doc.width, height: doc.height,
                viewBox: '0 0 ' + doc.width + ' ' + doc.height,
                xmlns: 'http://www.w3.org/2000/svg'
              },
                h('rect', { key: 'bg', x: 0, y: 0, width: doc.width, height: doc.height, fill: doc.background }),
                elements.map(function (el) {
                  return h(React.Fragment, { key: el.id }, fsRenderElement(el));
                }),
                h('g', { key: 'overlay', 'data-overlay': '1', style: { pointerEvents: 'none' } }, overlay)
              ),
              textEditor
            )
          ),
          !elements.length ? h('div', { className: 'fs-empty-stage' },
            h('div', { className: 'fs-empty' },
              h(FSIcon, { name: 'sparkle', size: 30 }),
              h('div', null, t('emptyCanvas'))
            )
          ) : null
        )
      ),
      h('aside', { className: 'fs-panel right' },
        h('div', { className: 'fs-tabs' },
          h('button', { className: 'fs-tab' + (p.rightTab === 'design' ? ' active' : ''), type: 'button', onClick: function () { p.onRightTab('design'); } }, t('tabDesign')),
          h('button', { className: 'fs-tab' + (p.rightTab === 'layers' ? ' active' : ''), type: 'button', onClick: function () { p.onRightTab('layers'); } }, t('tabLayers'))
        ),
        h('div', { className: 'fs-panelbody' }, rightBody)
      )
    ),
    h('footer', { className: 'fs-statusbar' },
      h('span', { className: 'fs-dot' + (p.saveStatus !== 'saved' ? ' saving' : ''), title: p.saveStatus }),
      h('span', null, p.saveStatus === 'saved' ? t('saved') : p.saveStatus === 'saving' ? t('saving') : t('saveError')),
      h('span', { className: 'fs-sep' }),
      h('span', null, t('elementsCount', { count: String(doc.elements.length) })),
      p.selectionCount ? h('span', null, t('selectionCount', { count: String(p.selectedEls.length) })) : null,
      h('div', { className: 'fs-spacer' }),
      h('span', null, t('localOnly')),
      h('span', { className: 'fs-sep' }),
      h('span', { className: 'fs-zoomlabel' }, Math.round(zoom * 100) + '%')
    ),
    p.licenseOpen ? h(FSLicenseDialog, {
      t: t,
      license: p.license,
      draft: p.licenseDraft,
      error: p.licenseError,
      busy: p.licenseBusy,
      price: p.licensePrice,
      purchaseUrl: p.purchaseUrl,
      onDraft: p.onLicenseDraft,
      onActivate: p.onActivateLicense,
      onClose: p.onCloseLicense,
      onDeactivate: p.onDeactivateLicense
    }) : null,
    toast ? h('div', { className: 'fs-toast' },
      h('span', { className: 'fs-toastdot' }),
      h('span', null, toast.msg)
    ) : null,
    h('input', {
      ref: p.fileInputRef, type: 'file', accept: '.json,application/json',
      className: 'fs-sr', tabIndex: -1,
      onChange: function (e) {
        var file = e.target.files && e.target.files[0];
        e.target.value = '';
        if (file) p.onFile(file);
      }
    })
  );
}

    return { inject: ["slots", "locale"], apply: apply };
  }
});
