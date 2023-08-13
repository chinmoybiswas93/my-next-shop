import fs from "fs";
import path from "path";
const usersFilePath = path.join(process.cwd(), "fakeData", "users.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, password } = req.body;
    const userData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    console.log(userData);
    const duplicatePhone = userData.find((user) => user.phone === phone);

    if (duplicatePhone) {
      return res.status(400).json({ message: "Duplicate Phone Number" });
    }

    // Add the new user
    const newUser = {
      id: userData.length + 1,
      name,
      phone,
      password,
    };

    console.log("New User Found:", newUser);

    userData.push(newUser);

    console.log("Udating File");
    // Write the updated user data back to the file
    fs.writeFileSync(usersFilePath, JSON.stringify(userData, null, 2), "utf-8");
    console.log("Udating File successfull");
    return res.status(201).json(newUser); // Return the newly created user
  }

  return res.status(405).end(); // Method Not Allowed for other HTTP methods
}
