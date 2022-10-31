//Yksilötestaukset
const {summa, kerto, jako, vahennys} = require('./aritmeettiset')
test('2 + 3 = 5', () => {
  expect(summa(2,3)).toBe(5);})

test('2 * 3 = 6', () => {
  expect(kerto(2,3)).toBe(6);});

  test('6 / 2 = 3', () => {
    expect(jako(6,2)).toBe(3);});

    test('6 - 2 = 4', () => {
      expect(vahennys(6,2)).toBe(4);
});
//Joukkotestit
test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(

)
