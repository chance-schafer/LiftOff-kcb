export const getMyBusinesses = async (jwt) => {
  try {
    const response = await fetch(
      "https://liftoff-kcb-backend-production-bb79.up.railway.app/api/users//me/owned-businesses",
      {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      }
    );
    if (response.ok) {
      const jsonResponse = response.json();
      return jsonResponse;
    } else {
      console.log("auth failed");
    }
  } catch (e) {
    console.log(e);
  }
};
