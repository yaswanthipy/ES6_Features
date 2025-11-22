const mergeProfiles = (profile, updates) => {
  return {
    ...profile,
    ...updates,
    address: {
      ...profile.address,
      ...updates.address
    }
  };
};


const profile = {
  name: "Harika",
  age: 25,
  address: { city: "Quatar", zipcode: "101" }
};

const updates = {
  age: 28,
  address: { zipcode: "109", country: "Arabia" }
};


console.log(mergeProfiles(profile, updates));
