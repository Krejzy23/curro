import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Podmínky použití | CURRO";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Podmínky použití aplikace CURRO."
      );
    }
  }, []);

  return <div>...</div>;
};

export default Terms;