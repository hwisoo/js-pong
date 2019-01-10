import { Haiku } from './../src/haiku.js';
describe('Haiku', function () {

  it('should return true for 3 sentences', function () {
    let testHaiku = new Haiku("dog. went. home")
    expect(testHaiku.hasThreeLines()).toEqual(true);
  });

  it('should return split line words', function () {
    let testHaiku = new Haiku("dog.went.home today")
    expect(testHaiku.returnLineWords()).toEqual([["dog"], ["went"], ["home", "today"]]);
  });

  it('should return true or false for five seven five pattern', function () {
    let testHaiku = new Haiku("ひらがなひ.らがなひらがな.ひらがなひ")
    expect(testHaiku.hasFiveSevenFive()).toEqual(true);
  });

});

//ひらがなんら.がなひらがなひ.らがなひら