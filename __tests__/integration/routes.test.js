const request = require("supertest");
const app = require("../../src/app");

describe("Starting routes test", () => {
  test("Acess list route and check for successful return", async () => {
    const response = await request(app).get("/api/tools");
    expect(response.statusCode).toBe(200);
  });
});
