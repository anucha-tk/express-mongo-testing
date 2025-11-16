import supertest from "supertest";
import app from "../../src/app";

describe("app", () => {
	test("should return 200", async () => {
		const res = await supertest(app).get("/v1.0/hello");
		expect(res.status).toBe(200);
	});
});
