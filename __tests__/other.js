const R = require("../rambda")
const Ramda = require("ramda")

describe("other", () => {
  it("example", () => {
    const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"

    expect(
      R.compose(
          R.join("|"),
          R.append("foo"),
          R.takeLast(4),
          R.map(R.toLower),
          R.filter(val => val.length > 4),
          R.split("/")
        )(url)
    ).toEqual("reference|global_objects|array|slice|foo")
  })

  it("works with Ramda's flip", () => {
    expect(
      R.compose(
        R.map(Ramda.flip(R.subtract)(10)),
        R.adjust(R.add(1), 0)
      )([ 0, 2, 3, 4, 5, 6, 7, 8, 9 ])
    ).toEqual([ -9, -8, -7, -6, -5, -4, -3, -2, -1 ])
  })
})