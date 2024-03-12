import { Uuid } from "../../shared/domain/value-objects/uuid.vo";
import { Category } from "../category.entity";

describe("Category unit tests", () => {
  // Triple AAA (Arrange, Act, Assert) -> Input, Process, Verify
  describe("create command", () => {
    test("should create category", () => {
      const category = new Category({
        name: "Movie",
      });
      expect(category.category_id).toBeInstanceOf(Uuid);
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

      expect(category.category_id).toBeInstanceOf(Uuid);
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
        cpf: "",
      });
      expect(category.category_id).toBeInstanceOf(Uuid); // Verify the instance not he value of UUID
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    describe("category_id field", () => {
      const arrange = [
        { category_id: null },
        { category_id: undefined },
        { category_id: new Uuid() },
      ];
      test.each(arrange)("category_id = %j", ({ category_id }) => {
        const category = new Category({
          name: "Category",
          category_id: category_id as any,
        });
        expect(category.category_id).toBeInstanceOf(Uuid);
        if (category_id instanceof Uuid) {
          expect(category.category_id).toBe(category_id);
        }
      });
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
        cpf: "",
      });
      category.activate();
      expect(category.is_active).toBe(true);
    });

    test("should deactivate category", () => {
      const category = Category.create({
        name: "Movie",
        is_active: true,
        cpf: "",
      });
      category.deactivate();
      expect(category.is_active).toBe(false);
    });
  });
});
