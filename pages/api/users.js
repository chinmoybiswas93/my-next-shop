import userData from "../../fakeData/users.json";

export default function handler(req, res) {
  res.status(200).json(userData);
}
