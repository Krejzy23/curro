import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Zásady ochrany osobních údajů | CURRO";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Zásady ochrany osobních údajů aplikace CURRO."
      );
    }
  }, []);

  return <div>...</div>;
};

export default PrivacyPolicy;