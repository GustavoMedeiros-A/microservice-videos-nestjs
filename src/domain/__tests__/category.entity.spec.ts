import { Category } from "../category.entity"

describe("Category unit tests", () => {

  // Triple AAA (Arrange, Act, Assert) -> Input, Process, Verify
  describe("constructor", () => {
    test("Category need to be just Movie", () => {  
        const category = new Category({
          name: "Movie"
        });
        expect(category.category_id).toBeUndefined(); 
        expect(category.name).toBe("Movie"); 
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy(); 
        expect(category.created_at).toBeInstanceOf(Date)
    });
      
    test("should description be false", () => {

      const created_at = new Date()
      const category = new Category({
          name: "Movie",
          description: "Movie description",
          is_active: false,
          created_at
        })
        
        expect(category.category_id).toBeUndefined(); 
        expect(category.name).toBe("Movie"); 
        expect(category.description).toBe("Movie description");
        expect(category.is_active).toBeFalsy(); 
        expect(category.created_at).toBe(created_at)
      })
  })
})