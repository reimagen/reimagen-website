// src/components/ImageModal.jsx
import React from 'react';

const ImageModal = ({ src, alt, onClose, isOpen, modalYOffset = 0 }) => {
  if (!isOpen) return null;

  const shouldUseDynamicOffset = modalYOffset !== 0;

  const outerDivClasses = `fixed inset-0 z-50 flex justify-center bg-black bg-opacity-75 p-4
    ${shouldUseDynamicOffset ? '' : 'items-center'}
  `;

  const innerDivClasses = `max-w-screen-lg max-h-[90vh] overflow-hidden rounded-lg shadow-xl flex flex-col items-center justify-center
    ${shouldUseDynamicOffset ? 'absolute' : 'relative'}
  `;

  return (
    <div className={outerDivClasses} onClick={onClose}>
      <div
        className={innerDivClasses}
        style={shouldUseDynamicOffset ? { top: `${modalYOffset}px` } : {}}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;