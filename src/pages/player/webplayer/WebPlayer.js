import axios from "axios";
import { useEffect, useState } from "react";

function WebPlayer({ user }) {
  // console.log(user);
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `${user.token_type} ${user.access_token}`,
      },
    })
      .then(function (response) {
        // handle success
        setUserData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("error", error);
      });
  }, []);
  return (
    <div>
      {userData === undefined ? (
        <h1>Loadingsss</h1>
      ) : (
        <>
          <h1>{userData.display_name}</h1> <h2>{userData.email}</h2>
        </>
      )}
    </div>
  );
}

export default WebPlayer;
