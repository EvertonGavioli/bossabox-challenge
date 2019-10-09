const request = require("supertest");
const app = require("../src/app");

let id;

describe("Verificar se as rotas 'tools' estão respondendo adequadamente", () => {
  test("Deve retornar status '201 Created' para a rota de cadastrar uma nova ferramenta", async () => {
    const response = await request(app)
      .post("/api/tools")
      .send({
        title: "hotel",
        link: "https://github.com/typicode/hotel",
        description:
          "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        tags: [
          "node",
          "organizing",
          "webapps",
          "domain",
          "developer",
          "https",
          "proxy"
        ]
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    id = response.body.id;
    expect(response.statusCode).toBe(201);
  });

  test("Deve retornar status '200 OK' para a rota de listagem das ferramentas", async () => {
    const response = await request(app).get("/api/tools");
    expect(response.statusCode).toBe(200);
  });

  test("Deve retornar status '200 OK' para a rota de listagem das ferramentas com filtro por tag", async () => {
    const response = await request(app)
      .get("/api/tools")
      .query({ tag: "node" });
    expect(response.statusCode).toBe(200);
  });

  test("Deve retornar status '204 No Content' para a rota de deletar uma ferramenta", async () => {
    const response = await request(app).delete("/api/tools/" + id);
    expect(response.statusCode).toBe(204);
  });
});
