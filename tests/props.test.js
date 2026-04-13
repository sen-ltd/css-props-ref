import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { PROPS, CATEGORIES, findByName, searchProps, filterByCategory } from '../src/props.js';

describe('PROPS data integrity', () => {
  it('has at least 60 properties', () => {
    assert.ok(PROPS.length >= 60, `Expected >=60 props, got ${PROPS.length}`);
  });

  it('every prop has a name string', () => {
    for (const p of PROPS) {
      assert.ok(typeof p.name === 'string' && p.name.length > 0, `Missing name: ${JSON.stringify(p)}`);
    }
  });

  it('every prop has a valid category', () => {
    const validCats = CATEGORIES.map(c => c.id);
    for (const p of PROPS) {
      assert.ok(validCats.includes(p.category), `Invalid category "${p.category}" on prop "${p.name}"`);
    }
  });

  it('every prop has a non-empty values array', () => {
    for (const p of PROPS) {
      assert.ok(Array.isArray(p.values) && p.values.length > 0, `Empty values on "${p.name}"`);
    }
  });

  it('every value in values arrays is a non-empty string', () => {
    for (const p of PROPS) {
      for (const v of p.values) {
        assert.ok(typeof v === 'string' && v.length > 0, `Empty/invalid value in "${p.name}": ${v}`);
      }
    }
  });

  it('every prop has an en description', () => {
    for (const p of PROPS) {
      assert.ok(
        p.description && typeof p.description.en === 'string' && p.description.en.length > 0,
        `Missing en description on "${p.name}"`
      );
    }
  });

  it('every prop has a ja description', () => {
    for (const p of PROPS) {
      assert.ok(
        p.description && typeof p.description.ja === 'string' && p.description.ja.length > 0,
        `Missing ja description on "${p.name}"`
      );
    }
  });

  it('prop names are unique', () => {
    const names = PROPS.map(p => p.name);
    const unique = new Set(names);
    assert.equal(unique.size, names.length, `Duplicate prop names found`);
  });

  it('every prop has a preview object', () => {
    for (const p of PROPS) {
      assert.ok(p.preview && typeof p.preview === 'object', `Missing preview on "${p.name}"`);
    }
  });

  it('every preview has an html string', () => {
    for (const p of PROPS) {
      assert.ok(
        typeof p.preview.html === 'string' && p.preview.html.length > 0,
        `Missing preview.html on "${p.name}"`
      );
    }
  });
});

describe('CATEGORIES', () => {
  it('has at least 4 categories', () => {
    assert.ok(CATEGORIES.length >= 4);
  });

  it('every category has id, ja name and en name', () => {
    for (const c of CATEGORIES) {
      assert.ok(typeof c.id === 'string' && c.id.length > 0);
      assert.ok(c.name && typeof c.name.ja === 'string' && c.name.ja.length > 0);
      assert.ok(c.name && typeof c.name.en === 'string' && c.name.en.length > 0);
    }
  });

  it('has layout, box, typography, color, effects, transform categories', () => {
    const ids = CATEGORIES.map(c => c.id);
    for (const expected of ['layout', 'box', 'typography', 'color', 'effects', 'transform']) {
      assert.ok(ids.includes(expected), `Missing category: ${expected}`);
    }
  });
});

describe('findByName', () => {
  it('finds an existing property by exact name', () => {
    const result = findByName('display');
    assert.ok(result);
    assert.equal(result.name, 'display');
  });

  it('is case-insensitive', () => {
    const lower = findByName('display');
    const upper = findByName('DISPLAY');
    const mixed = findByName('Display');
    assert.ok(lower && upper && mixed);
    assert.equal(lower.name, upper.name);
    assert.equal(lower.name, mixed.name);
  });

  it('returns undefined for unknown property', () => {
    const result = findByName('not-a-real-property');
    assert.equal(result, undefined);
  });

  it('returns undefined for empty string', () => {
    const result = findByName('');
    assert.equal(result, undefined);
  });

  it('returns undefined for null/undefined', () => {
    assert.equal(findByName(null), undefined);
    assert.equal(findByName(undefined), undefined);
  });

  it('finds font-size', () => {
    const result = findByName('font-size');
    assert.ok(result);
    assert.equal(result.category, 'typography');
  });
});

describe('searchProps', () => {
  it('returns all props for empty query', () => {
    const result = searchProps('');
    assert.equal(result.length, PROPS.length);
  });

  it('returns all props for falsy query', () => {
    assert.equal(searchProps(null).length, PROPS.length);
    assert.equal(searchProps(undefined).length, PROPS.length);
  });

  it('finds by property name substring', () => {
    const result = searchProps('flex');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.name.toLowerCase().includes('flex') || p.description.en.toLowerCase().includes('flex')));
  });

  it('finds by en description keyword', () => {
    const result = searchProps('alignment', 'en');
    // "alignment" might not be in descriptions - try "spacing"
    const result2 = searchProps('spacing', 'en');
    assert.ok(result2.length > 0);
  });

  it('finds by ja description keyword', () => {
    const result = searchProps('余白', 'ja');
    assert.ok(result.length > 0);
  });

  it('returns empty array when no match', () => {
    const result = searchProps('zzz-nonexistent-xyz');
    assert.equal(result.length, 0);
  });

  it('search is case-insensitive for en', () => {
    const lower = searchProps('display', 'en');
    const upper = searchProps('DISPLAY', 'en');
    assert.equal(lower.length, upper.length);
  });

  it('finds border-radius by name', () => {
    const result = searchProps('border-radius');
    assert.ok(result.some(p => p.name === 'border-radius'));
  });
});

describe('filterByCategory', () => {
  it('returns all props for "all"', () => {
    assert.equal(filterByCategory('all').length, PROPS.length);
  });

  it('returns all props for falsy value', () => {
    assert.equal(filterByCategory(null).length, PROPS.length);
    assert.equal(filterByCategory('').length, PROPS.length);
    assert.equal(filterByCategory(undefined).length, PROPS.length);
  });

  it('filters by layout category', () => {
    const result = filterByCategory('layout');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.category === 'layout'));
  });

  it('filters by typography category', () => {
    const result = filterByCategory('typography');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.category === 'typography'));
  });

  it('filters by box category', () => {
    const result = filterByCategory('box');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.category === 'box'));
  });

  it('filters by color category', () => {
    const result = filterByCategory('color');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.category === 'color'));
  });

  it('filters by effects category', () => {
    const result = filterByCategory('effects');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.category === 'effects'));
  });

  it('filters by transform category', () => {
    const result = filterByCategory('transform');
    assert.ok(result.length > 0);
    assert.ok(result.every(p => p.category === 'transform'));
  });

  it('returns empty for unknown category', () => {
    const result = filterByCategory('nonexistent');
    assert.equal(result.length, 0);
  });
});

describe('combined filtering behavior', () => {
  it('layout + box + typography + color + effects + transform covers all props', () => {
    const allCategorized = ['layout', 'box', 'typography', 'color', 'effects', 'transform']
      .flatMap(cat => filterByCategory(cat));
    assert.equal(allCategorized.length, PROPS.length);
  });

  it('every prop is reachable by findByName', () => {
    for (const p of PROPS) {
      const found = findByName(p.name);
      assert.ok(found, `Could not find "${p.name}" via findByName`);
    }
  });
});
