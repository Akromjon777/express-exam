import JWT from "jsonwebtoken";
// Jsonwentoken auth
export default {
    sing: (payload) => JWT.sign(payload, process.env.SECRET_KEY),
    verify: (token) => JWT.verify(token, process.env.SECRET_KEY)
}