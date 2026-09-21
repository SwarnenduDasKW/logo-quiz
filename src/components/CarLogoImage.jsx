import React, { useState, useEffect } from 'react';

export default function CarLogoImage({
  logo,
  revealed = false,
  className = "w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const [useRemote, setUseRemote] = useState(false);

  // Reset error state when switching to a different logo
  useEffect(() => {
    setImageFailed(false);
    setUseRemote(false);
  }, [logo?.id]);

  if (!logo) return null;

  // Primary source: local high-res file downloaded from 1000logos.net
  // Secondary source: remote 1000logos.net URL
  // Ultimate fallback: generated procedural SVG
  const primarySrc = logo.imageUrl || `/logos/${logo.slug}.png`;
  const remoteSrc = logo.remoteUrl;

  const currentSrc = useRemote ? remoteSrc : primarySrc;

  if (imageFailed) {
    // Ultimate fallback: generated SVG
    return (
      <div className="w-full h-full flex items-center justify-center p-2">
        {logo.renderLogo ? logo.renderLogo(revealed) : (
          <span className="text-slate-400 font-bold text-sm">{logo.name}</span>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <img
        src={currentSrc}
        alt={`${logo.name} Official Logo (1000Logos)`}
        className={className}
        loading="eager"
        onError={() => {
          if (!useRemote && remoteSrc) {
            // Try remote 1000logos URL before falling back to SVG
            setUseRemote(true);
          } else {
            // Fall back to generated SVG
            setImageFailed(true);
          }
        }}
      />
    </div>
  );
}
