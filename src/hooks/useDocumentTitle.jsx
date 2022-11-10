import { useEffect } from "react";

/**
 * Updates the document title
 * @param {string} updateTitle New document title
 */
const useDocumentTitle = (updateTitle) => {
  useEffect(() => {
    const defaultTitle = document.title;
    document.title = `TrackU - ${updateTitle}`;
  }, [updateTitle]);
};

export default useDocumentTitle;
