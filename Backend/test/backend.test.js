const request = require( "supertest");
const  { expect } = require( "chai");
const dotenv = require("dotenv");
const app = require("../server");
const crypto = require ("crypto");
const algorithm = "aes-256-cbc"; 
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

  const token1 = "";

  describe("Send Message by manager", () => {
    const initVector = crypto.randomBytes(16);

    const Securitykey = crypto.randomBytes(32);
    const description = "aaaa";
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  
    let encryptedData = cipher.update(description, "utf-8", "hex");
  
    encryptedData += cipher.final("hex");
    it("It should be possible for authorized managers to send messages.", (done) => {
      request(app)
        .post("/api/message/save")
        .send(
         { 
            writerName:"minuuu",
            date:"123",
            description:encryptedData}
        )
        .set('Authorization', `Bearer ${token}`)
        .expect(201)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
    it("No message should be posted by an unauthorised user.", (done) => {
      request(app)
        .post("/api/message/save")
        .send(
         { 
            writerName:"Tani",
            date:"08/11/2022",
            description:encryptedData
          }
        )
        .set('Authorization', `Bearer ${token1}`)
        .expect(401)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
  })

  const tokenmanager = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmI4OGIxZTJlNzJlYzM0OWJjOWEwYSIsImlhdCI6MTY2ODQ1NjY0NCwiZXhwIjoxNjcxMDQ4NjQ0fQ.odhZwL1txVKUDqRc0Ui6h3xKTGtVLrAMepn7z80DqEk";
  const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmUwMzQ5ZTgyYzVkYTZmMzJlZGY0NCIsImlhdCI6MTY2ODQ1NzE0MywiZXhwIjoxNjcxMDQ5MTQzfQ.xP5xiImGGw8KXD5mxstL4us5CbnvIR2vjORMJUDYuyY";
  describe("Upload File by manager", () => {
    it("Authorized manager should be able to upload file", (done) => {
      request(app)
        .post("/api/file/upload")
        .send(
         { 
            title:"report",
            doc:"https://icon-library.com/images/anonymous-avatar-icon/anonymous"}
        )
        .set('Authorization', `Bearer ${tokenmanager}`)
        .expect(201)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
    it("unauthorized user should not be able to upload file", (done) => {
      request(app)
        .post("/api/file/upload")
        .send(
         { 
            title:"report",
            doc:"https://icon-library.com/images/anonymous-avatar-icon/anonymous"}
          
        )
        .set('Authorization', `Bearer ${token2}`)
        .expect(401)
        .then((res) => {
         
          done();
        })
        .catch((err) => done(err));
    });
  })


  describe("Encryption", () => {
    it("should be encrypted", () => {
      const initVector = crypto.randomBytes(16);

      const Securitykey = crypto.randomBytes(32);
      const description = "aaaa";
      const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    
      let encryptedData = cipher.update(description, "utf-8", "hex");
    
      encryptedData += cipher.final("hex");
    });

  })