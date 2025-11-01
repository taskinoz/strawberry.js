import { describe, it, expect } from "bun:test";
import strawberry from ".";

describe("Test strawberry function", () => {
  it("should return the correct count of character for 'r' in 'strawberry'", () => {
    const result = strawberry("r", "strawberry");
    expect(result).toBe(3);
  });

  it("should return the correct count of character for 'a' in 'banana'", () => {
    const result = strawberry("a", "banana");
    expect(result).toBe(3);
  });

  it("should return 0 when character is not present", () => {
    const result = strawberry("x", "banana");
    expect(result).toBe(0);
  });

  it("should be case insensitive by default", () => {
    const result = strawberry("A", "banana");
    expect(result).toBe(3);
  });

  it("should be case sensitive when specified", () => {
    const result = strawberry("A", "GrApEfRuIt", true); // 1
    expect(result).toBe(1);
  });
});
