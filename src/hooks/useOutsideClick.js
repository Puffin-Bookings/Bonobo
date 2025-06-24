import { useEffect } from 'react';

function useOutsideClick(refOrRefs, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      const refs = Array.isArray(refOrRefs) ? refOrRefs : [refOrRefs];
      if (refs.every(ref => ref.current && !ref.current.contains(event.target))) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [refOrRefs, callback]);
}

export default useOutsideClick;