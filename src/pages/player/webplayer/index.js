import { useEffect, useState } from "react";
import WebPlayer from "./WebPlayer";
import WebPlayerLogin from "./WebPlayerLogin";

function Main() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const getUser = (hash) => {
    const user = {};
    hash
      .slice(1)
      .split("&")
      .forEach((e) => {
        const data = e.split("=");
        user[data[0]] = data[1];
      });
    return user;
  };
  useEffect(() => {
    const hash = window.location.hash;
    const user = getUser(hash);
    setUser(user);
    console.log(user);
    if (user.access_token !== undefined) {
      setLoading(false);
      window.location.hash = "#";
    }
  }, []);
  return (
    <div>
      {loading === false ? <WebPlayer user={user} /> : <WebPlayerLogin />}
    </div>
  );
}

export default Main;
