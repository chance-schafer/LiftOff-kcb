// Get array of all businesses
export const getAllBusinesses = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/businesses");
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
