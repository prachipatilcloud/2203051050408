// export const register = (req,res) =>{
//   const {email, name, mobileNo, githubUsername, rollNo, collegeName, accessCode}=  req.body;


//   // return res.status(200).json({msg: ""})

// }



import log from "../middleware/logger.js";

export const register = async (req, res) => {
  const { email, name, mobileNo, githubUsername, rollNo, collegeName, accessCode } = req.body;

  try {
    if (!email || !name || !githubUsername) {
      await log("backend", "error", "handler", "Missing required registration fields");
      return res.status(400).json({ error: "Required fields are missing" });
    }

    await log("backend", "info", "handler", "User registered successfully");
    return res.status(200).json({ message: "Registered successfully" });

  } catch (err) {
    await log("backend", "fatal", "handler", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};
