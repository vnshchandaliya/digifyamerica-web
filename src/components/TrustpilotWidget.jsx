import { useEffect } from "react";

export default function TrustpilotWidget() {
  useEffect(() => {
    // Re-load Trustpilot script when component mounts
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(
        document.getElementById("trustpilot-widget"),
        true
      );
    }
  }, []);

  return (
    <div className="flex justify-center p-4">
      <div
        id="trustpilot-widget"
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6ffb0d04a076446a9ad"
        data-businessunit-id="YOUR_BUSINESS_UNIT_ID"
        data-style-height="240px"
        data-style-width="100%"
        data-theme="light"
      >
        <a
          href="https://www.trustpilot.com/review/digifyamerica.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
}
