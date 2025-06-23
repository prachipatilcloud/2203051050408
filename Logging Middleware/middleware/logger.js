// middleware/logger.js
import axios from "axios";

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDUxMDUwNjIzQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2NTc2NCwiaWF0IjoxNzUwNjY0ODY0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiY2ZlYmFmODgtZDYzYi00MWFjLWIwMDMtNDkyM2JiM2MyNGIzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmluYXkgcmFqcHV0Iiwic3ViIjoiNzNkZWM2N2YtMDM3Yi00YzM0LWIwMDgtOGVhNDc0YWU5OTQ0In0sImVtYWlsIjoiMjIwMzA1MTA1MDYyM0BwYXJ1bHVuaXZlcnNpdHkuYWMuaW4iLCJuYW1lIjoidmluYXkgcmFqcHV0Iiwicm9sbE5vIjoiMjIwMzA1MTA1MDYyMyIsImFjY2Vzc0NvZGUiOiJUUnpnV00iLCJjbGllbnRJRCI6IjczZGVjNjdmLTAzN2ItNGMzNC1iMDA4LThlYTQ3NGFlOTk0NCIsImNsaWVudFNlY3JldCI6ImZIbVJwQXV6cFFKRnducEYifQ.WXJNmoZHV7dkzYPfVhtUisWW3RoHhq6R-b8PGkGDggg";

const VALID_STACKS = ["backend", "frontend"];
const VALID_LEVELS = ["debug", "info", "warn", "error", "fatal"];
const VALID_PACKAGES = [
  "cache", "controller", "cron_job", "dh", "domain", "handler", "repository", "route", "service",
  "auth", "config", "middleware", "utils", // shared
  "api", "component", "hook", "page", "state", "style"
];

const log = async (stack, level, pkg, message) => {
  if (
    !VALID_STACKS.includes(stack) ||
    !VALID_LEVELS.includes(level) ||
    !VALID_PACKAGES.includes(pkg)
  ) {
    console.error("Invalid log parameters.");
    return;
  }

  try {
    const res = await axios.post("http://20.244.56.144/evaluation-service/logs", {
      stack,
      level,
      package: pkg,
      message
    });
    console.log("📦 Log sent:", res.data);
  } catch (err) {
    console.error("❌ Failed to send log:", err.message);
  }
};

export default log;
