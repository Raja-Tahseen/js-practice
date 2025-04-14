document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptAllBtn = document.getElementById("acceptAll");
  const rejectAllBtn = document.getElementById("rejectAll");
  const settingsBtn = document.getElementById("settingsBtn");
  const cookiePreferences = document.getElementById("cookiePreferences");
  const savePreferencesBtn = document.getElementById("savePreferences");
  const analyticsCookies = document.getElementById("analyticsCookies");
  const marketingCookies = document.getElementById("marketingCookies");

  // Check if cookie preferences are already set
  const cookieConsent = getCookieConsent();

  if (!cookieConsent) {
    // Show banner if no consent given yet
    cookieBanner.classList.add("visible");
  } else {
    // If consent was given previously, load the preferences
    loadCookiePreferences(cookieConsent);
  }

  // Event listeners
  acceptAllBtn.addEventListener("click", function () {
    setCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      consented: true,
    });
    cookieBanner.classList.remove("visible");
    initializeCookies();
  });

  rejectAllBtn.addEventListener("click", function () {
    setCookieConsent({
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      consented: true,
    });
    cookieBanner.classList.remove("visible");
    initializeCookies();
  });

  settingsBtn.addEventListener("click", function () {
    cookiePreferences.classList.toggle("visible");
  });

  savePreferencesBtn.addEventListener("click", function () {
    setCookieConsent({
      necessary: true,
      analytics: analyticsCookies.checked,
      marketing: marketingCookies.checked,
      consented: true,
    });
    cookieBanner.classList.remove("visible");
    cookiePreferences.classList.remove("visible");
    initializeCookies();
  });

  // Load saved preferences into settings modal
  if (cookieConsent) {
    analyticsCookies.checked = cookieConsent.analytics;
    marketingCookies.checked = cookieConsent.marketing;
  }

  // Initialize cookies based on preferences
  function initializeCookies() {
    const consent = getCookieConsent();

    if (consent.analytics) {
      // Initialize analytics cookies (e.g., Google Analytics)
      console.log("Analytics cookies initialized");
    }

    if (consent.marketing) {
      // Initialize marketing cookies (e.g., Facebook Pixel)
      console.log("Marketing cookies initialized");
    }
  }

  // Helper functions
  function getCookieConsent() {
    const consent = localStorage.getItem("cookieConsent");
    return consent ? JSON.parse(consent) : null;
  }

  function setCookieConsent(preferences) {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
  }

  function loadCookiePreferences(consent) {
    analyticsCookies.checked = consent.analytics;
    marketingCookies.checked = consent.marketing;
    initializeCookies();
  }
});
