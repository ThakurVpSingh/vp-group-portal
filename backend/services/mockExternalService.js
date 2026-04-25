export const provisionInSecondarySystem = async (userData) => {
  console.log(`[EXTERNAL_SERVICE_SIMULATION] Starting provisioning for: ${userData.email}`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log(`[EXTERNAL_SERVICE_SIMULATION] Successfully provisioned: ${userData.email}`);
        resolve({ success: true, externalId: `EXT_${Math.floor(Math.random() * 10000)}` });
      } else {
        console.log(`[EXTERNAL_SERVICE_SIMULATION] Failed to provision: ${userData.email}`);
        reject({ success: false, message: 'External system unavailable' });
      }
    }, 1500);
  });
};
