/** @type {import("next").NextConfig} */
const nextConfig = {
  // Removing the invalid experimental key to stop the warning
  devIndicators: {
    appIsrStatus: false,
  },
};

module.exports = nextConfig;
