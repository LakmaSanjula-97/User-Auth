const request = require( "supertest");
const  { expect } = require( "chai");
const dotenv = require("dotenv");
const app = require("../server");
dotenv.config();

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI4ODdiZTJlNzJlYzM0OWJjOWEwNiIsImlhdCI6MTY2ODQ1MzMzMCwiZXhwIjoxNjcxMDQ1MzMwfQ.oOYkQSo2yDnhPh0Q6h38Uz7rV8KRHBwQpa1sAJzfwpM";

describe("Send Message", () => {
    it("Messages should only be posted by authorized users.", (done) => {
      request(app)
        .post("/api/message/save")
        .send(
         { 
           writerName:"minuuu",
           date:"12/11/2022",
           description:"Hello"}
        )
        .set('Authorization', `Bearer ${token}`)
        .expect(201)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
  })

  describe("Login", () => {
    it("User must use correct credentials to log in.", (done) => {
      request(app)
        .post("/api/staff/login")
        .send(
         { email:"manager@gmail.com",
          password: "123"}
        )
        .expect(200)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
  
    it("Authentic credentials must be used when logging in.", (done) => {
      request(app)
        .post("/api/staff/login")
        .send(
         { email:"manager@gmail.com",
          password: "12344"}
        )
        .expect(401)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
  })

  