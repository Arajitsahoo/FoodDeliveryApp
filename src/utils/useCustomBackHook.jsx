import { useEffect } from 'react';

const useCustomBackHook = (data) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (data) {
        event.preventDefault();
        event.returnValue = ''; // Required for Chrome to show the confirmation dialog
      }
    };

    // Add the beforeunload event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [data]); // Re-run effect when `data` changes
};

export default useCustomBackHook;
