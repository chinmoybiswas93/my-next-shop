import userData from "../../fakeData/users.json";

export default function handler(req, res) {
  const { phone } = req.query;
  const user = userData.filter((user) => user.phone === phone);
  res.status(200).json(user);
}
