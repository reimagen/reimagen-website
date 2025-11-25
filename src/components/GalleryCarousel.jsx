import { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/galleryCarousel.css';

const SWIPER_SCRIPT_ID = 'swiper-bundle-script';
const SWIPER_STYLE_ID = 'swiper-bundle-style';
const SWIPER_JS = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const SWIPER_CSS = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

const ensureStylesheet = () => {
  if (typeof document === 'undefined') return Promise.resolve();
  if (document.getElementById(SWIPER_STYLE_ID)) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.id = SWIPER_STYLE_ID;
    link.rel = 'stylesheet';
    link.href = SWIPER_CSS;
    link.onload = () => resolve();
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

const ensureScript = () => {
  if (typeof document === 'undefined') return Promise.resolve();
  if (document.getElementById(SWIPER_SCRIPT_ID)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SWIPER_SCRIPT_ID;
    script.src = SWIPER_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export default function GalleryCarousel({ items = [] }) {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [orientations, setOrientations] = useState({});
  const slidesKey = useMemo(() => items.map((item) => item.src).join('|'), [items]);

  useEffect(() => {
    setOrientations((prev) => {
      const next = {};
      items.forEach((item) => {
        if (prev[item.src]) {
          next[item.src] = prev[item.src];
        }
      });
      return next;
    });
  }, [items]);

  useEffect(() => {
    if (!items.length || typeof window === 'undefined') return undefined;

    let cancelled = false;

    const initSwiper = async () => {
      await Promise.all([ensureStylesheet(), ensureScript()]);
      if (cancelled || !swiperRef.current || !window.Swiper) return;

      swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: false,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: swiperRef.current.querySelector('.swiper-pagination'),
          clickable: true,
        },
        on: undefined,
      });
    };

    initSwiper();

    return () => {
      cancelled = true;
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, [items.length, slidesKey]);

  useEffect(() => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.updateSlides();
      swiperInstanceRef.current.update();
    }
  }, [orientations]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="gallery-swiper-wrapper">
      <div className="swiper gallery-swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {items.map((item) => (
            <div
              className={`swiper-slide gallery-swiper-slide--${orientations[item.src] || 'portrait'}`}
              key={item.src}
            >
              <div className="gallery-swiper-media">
                {item.format?.toLowerCase() === 'video' ? (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                      const video = event.currentTarget;
                      if (!video.videoWidth || !video.videoHeight) return;
                      setOrientations((prev) => {
                        if (prev[item.src]) return prev;
                        const nextOrientation =
                          video.videoWidth >= video.videoHeight ? 'landscape' : 'portrait';
                        return { ...prev, [item.src]: nextOrientation };
                      });
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    onLoad={(event) => {
                      const media = event.currentTarget;
                      if (!media.naturalWidth || !media.naturalHeight) return;
                      setOrientations((prev) => {
                        if (prev[item.src]) return prev;
                        const nextOrientation =
                          media.naturalWidth >= media.naturalHeight ? 'landscape' : 'portrait';
                        return { ...prev, [item.src]: nextOrientation };
                      });
                    }}
                  />
                )}
              </div>
              <div className="info">
                <span className="gallery-swiper-model-pill" title="Model">
                  Model: {item.model || 'Custom'}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}
