import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from "uuid";

describe("Uuid unit tests", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

  test("should thorw error when uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("Should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
  });

  test("Should accept a valid uuid", () => {
    const uuid = new Uuid("550e8400-e29b-41d4-a716-446655440000");
    expect(uuid.id).toBe("550e8400-e29b-41d4-a716-446655440000");
  });
});
