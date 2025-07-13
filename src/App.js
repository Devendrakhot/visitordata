// import { useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import Dashboard from "./pages/Dashboard";

function App() {
  // useEffect(() => {
  //   const trackVisitor = async () => {
  //     const params = new URLSearchParams(window.location.search);

  //     // ✅ Extract all tracking info from query string
  //     const utmParams = {
  //       utm_source: params.get("utm_source"),
  //       utm_medium: params.get("utm_medium"),
  //       gclid: params.get("gclid"),
  //       fbclid: params.get("fbclid"),
  //     };

  //     const assetId = params.get("asset_id") || "unknown-asset";
  //     const adAccountId = params.get("ad_account_id") || "unknown-account";

  //     // ✅ Maintain session across reloads
  //     let sessionId = localStorage.getItem("session_id");
  //     if (!sessionId) {
  //       sessionId = uuidv4();
  //       localStorage.setItem("session_id", sessionId);
  //     }

  //     try {
  //       const res = await fetch("http://localhost:5000/api/track", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           userAgent: navigator.userAgent,
  //           utmParams,
  //           targetUrl: window.location.href,
  //           assetId,
  //           adAccountId,
  //           sessionId,
  //           sessionStart: new Date(),
  //         }),
  //       });

  //       const result = await res.json();
  //       console.log("📦 Backend Response:", result);
  //     } catch (err) {
  //       console.error("❌ Visitor tracking failed:", err);
  //     }
  //   };

  //   trackVisitor();
  // }, []);

  return <Dashboard />;
}

export default App;
