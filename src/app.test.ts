import request from "supertest";
import app from "./app";

describe("Test URLs", () => {
    it("Given a random URL, when getting the app, then should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });

    it("Given an existent URL, when getting the app, then should return 200", (done) => {
        request(app).get("/status").expect(200, done);
    });
});
