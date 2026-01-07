import { useEffect } from "react";

function useDocumentHead({ title, description }) {
  useEffect(() => {
    // Update the document title
    if (title) {
      document.title = title;
    }

    // Update the meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');

      // If the meta description tag doesn't exist, create and append it.
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
}

export default useDocumentHead;
