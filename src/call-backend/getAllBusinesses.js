// Get array of all businesses
// when testing, comment out export
export const getAllBusinesses = async () => {
  try {
    const response = await fetch(
      "https://liftoff-kcb-backend-production-bb79.up.railway.app/api/businesses"
    );
    if (response.ok) {
      const jsonResponse = response.json();
      return jsonResponse;
    } else {
      console.log("Authentication Failed");
    }
  } catch (e) {
    console.log(e);
  }
};
