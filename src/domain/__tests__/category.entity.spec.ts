import { Category } from "../category.entity";

describe("Category unit tests", () => {
  // Triple AAA (Arrange, Act, Assert) -> Input, Process, Verify
  describe("create command", () => {
    test("should create category", () => {
      const category = new Category({
        name: "Movie",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create category with description", () => {
      const created_at = new Date();
      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at,
      });

      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    });
  });

  describe("create command", () => {
    test("should create category", () => {
      const category = Category.create({
        name: "Movie",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should change name", () => {
      const category = new Category({
        name: "Movie",
      });
      category.changeName("maybe not a movie");
      expect(category.name).toBe("maybe not a movie");
    });

    test("should change description", () => {
      const category = new Category({
        name: "Movie",
        description: "Description",
      });
      category.changeDescription("maybe not a movie");
      expect(category.description).toBe("maybe not a movie");
    });

    test("should activate category", () => {
      const category = Category.create({
        name: "Movie",
        is_active: false,
      });
      category.activate();
      expect(category.is_active).toBe(true);
    });

    test("should deactivate category", () => {
      const category = Category.create({
        name: "Movie",
        is_active: true,
      });
      category.deactivate();
      expect(category.is_active).toBe(false);
    });
  });
});
