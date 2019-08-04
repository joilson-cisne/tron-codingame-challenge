import {
  getNumberPlayers,
  myPlayerNumber,
  getPlayerMove,
  getOccupied,
  printBoard
} from "../src/runner";

describe("Runner main", () => {
  it("Testing basic functions runner", () => {
    expect(getNumberPlayers("1 2")).toBe(1);
    expect(myPlayerNumber("1 2")).toBe(2);
    expect(getPlayerMove("2 1 2 3")).toEqual([2, 1, 2, 3]);
  });

  it("Add elements to Board", () => {
    console.log(printBoard());
    expect(getOccupied());
  });
});