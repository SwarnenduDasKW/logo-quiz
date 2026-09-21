import React, { useState } from 'react';
import { Search, Filter, Sparkles, MapPin, Calendar, Check, ExternalLink } from 'lucide-react';
import { CAR_LOGOS } from '../data/carLogos';
import CarLogoImage from './CarLogoImage';

export default function StudyMode({ onTestBrand }) {
  const [search, setSearch] = useState('');
  const [countryFilter, setCountryFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [revealedIds, setRevealedIds] = useState(new Set());

  // Unique countries
  const countries = ['All', ...Array.from(new Set(CAR_LOGOS.map((c) => c.country)))];

  const filteredLogos = CAR_LOGOS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.country.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = countryFilter === 'All' || item.country === countryFilter;
    const matchesLevel = levelFilter === 'All' || item.difficulty === Number(levelFilter);
    return matchesSearch && matchesCountry && matchesLevel;
  });

  const toggleReveal = (id) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const revealAll = () => {
    setRevealedIds(new Set(CAR_LOGOS.map((c) => c.id)));
  };

  const hideAll = () => {
    setRevealedIds(new Set());
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Top Header & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-quiz font-black text-white flex items-center gap-2">
            <span>The 50 Famous Car Logos Catalog</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Explore all 50 automobile marks, test your recall, and study brand heritage.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search brand or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Filter Chips & Batch Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        {/* Country Filter */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Filter size={12} /> Country:
          </span>
          {countries.slice(0, 8).map((c) => (
            <button
              key={c}
              onClick={() => setCountryFilter(c)}
              className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-all shrink-0 ${
                countryFilter === c
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Batch Toggle Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={revealAll}
            className="text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 active:scale-95"
          >
            Reveal All Names
          </button>
          <button
            onClick={hideAll}
            className="text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 active:scale-95"
          >
            Hide All Names
          </button>
        </div>
      </div>

      {/* 50 Logos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredLogos.map((item) => {
          const isRevealed = revealedIds.has(item.id);
          return (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg transition-all hover:-translate-y-1 group"
            >
              {/* Badge & Number */}
              <div className="w-full flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                <span>#{item.id}</span>
                <span className="text-slate-400 font-semibold">{item.countryFlag} {item.country}</span>
              </div>

              {/* White Logo Box */}
              <div
                onClick={() => toggleReveal(item.id)}
                className="w-full aspect-square max-w-[170px] bg-white rounded-2xl p-4 shadow-md flex items-center justify-center cursor-pointer transition-transform group-hover:scale-105 my-2"
                title="Click to toggle brand name"
              >
                <CarLogoImage logo={item} revealed={isRevealed} />
              </div>

              {/* Brand Name / Reveal Toggle */}
              <div className="w-full text-center mt-2">
                {isRevealed ? (
                  <div>
                    <h3 className="font-quiz font-black text-lg text-white mb-0.5">{item.name}</h3>
                    <p className="text-[11px] text-slate-400 font-medium line-clamp-2 leading-relaxed">
                      {item.trivia}
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleReveal(item.id)}
                    className="w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-xs font-bold transition-all border border-slate-700"
                  >
                    Tap to Reveal Brand
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
