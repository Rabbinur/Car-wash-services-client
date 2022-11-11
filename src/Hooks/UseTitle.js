import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Car wash&Service`;
  }, [title]);
};
export default useTitle;
