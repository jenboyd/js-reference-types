'use strict';

const paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

const collFuncs = require('../lib/lab.js');

xdescribe('collections lab', () => {

  describe('normalized words', () => {

    const normalizedWords = [
      'A', 'AMERICA', 'AND', 'AND', 'AND', 'BLESSINGS', 'COMMON',
      'CONSTITUTION', 'DEFENCE', 'DO', 'DOMESTIC', 'ESTABLISH',
      'ESTABLISH', 'FOR', 'FOR', 'FORM', 'GENERAL', 'IN',
      'INSURE', 'JUSTICE', 'LIBERTY', 'MORE', 'OF', 'OF', 'OF',
      'ORDAIN', 'ORDER', 'OUR', 'OURSELVES', 'PEOPLE', 'PERFECT',
      'POSTERITY', 'PROMOTE', 'PROVIDE', 'SECURE', 'STATES',
      'STATES', 'THE', 'THE', 'THE', 'THE', 'THE', 'THE', 'THIS',
      'TO', 'TO', 'TRANQUILITY', 'UNION', 'UNITED', 'UNITED',
      'WE', 'WELFARE',
    ];

    it('has the correct length', () => {
      expect(collFuncs.getNormalizedWords(paragraph).length).toBe(52);
    });

    it('matches expected array', () => {
      expect(collFuncs.getNormalizedWords(paragraph).sort())
        .toEqual(normalizedWords.sort());
    });

  });

  describe('unique words', () => {

    const sortedUniqueWords = [
      'A', 'AMERICA', 'AND', 'BLESSINGS', 'COMMON',
      'CONSTITUTION', 'DEFENCE', 'DO', 'DOMESTIC', 'ESTABLISH',
      'FOR', 'FORM', 'GENERAL', 'IN', 'INSURE', 'JUSTICE',
      'LIBERTY', 'MORE', 'OF', 'ORDAIN', 'ORDER', 'OUR',
      'OURSELVES', 'PEOPLE', 'PERFECT', 'POSTERITY', 'PROMOTE',
      'PROVIDE', 'SECURE', 'STATES', 'THE', 'THIS', 'TO',
      'TRANQUILITY', 'UNION', 'UNITED', 'WE', 'WELFARE',
    ];

    it('has the correct length', () => {
      expect(collFuncs.getUniqueWords(paragraph).length).toBe(38);
    });

    it('matches expected array', () => {
      expect(collFuncs.getUniqueWords(paragraph).sort())
        .toEqual(sortedUniqueWords);
    });

  });

  describe('word count', () => {

    it('has the correct word count', () => {
      expect(collFuncs.wordCount(paragraph)).toBe(52);
    });

    it('has the correct unique word count', () => {
      expect(collFuncs.wordCount(paragraph, true)).toBe(38);
    });

  });

});
