// TAHAMS Typography guidelines - Simplified dynamic preview controller (16 Configurations + Swap Layout)

document.addEventListener("DOMContentLoaded", () => {
  
  // Font Pairing Config Database (16 configurations)
  const fontPairings = {
    shadow: {
      displayFamily: "'Inter', sans-serif",
      bodyFamily: "'Mr De Haviland', cursive"
    },
    stories: {
      displayFamily: "'Grand Hotel', cursive",
      bodyFamily: "'Inter', sans-serif"
    },
    memory: {
      displayFamily: "'Cormorant Garamond', serif",
      bodyFamily: "'Bricolage Grotesque', sans-serif"
    },
    sky: {
      displayFamily: "'Instrument Serif', serif",
      bodyFamily: "'Monsieur La Doulaise', cursive"
    },
    editorial: {
      displayFamily: "'Plus Jakarta Sans', sans-serif",
      bodyFamily: "'Cormorant Garamond', serif"
    },
    wide_promo: {
      displayFamily: "'Syncopate', sans-serif",
      bodyFamily: "'Montserrat', sans-serif"
    },
    condensed: {
      displayFamily: "'Bebas Neue', sans-serif",
      bodyFamily: "'Inter', sans-serif"
    },
    soft_lifestyle: {
      displayFamily: "'Lora', serif",
      bodyFamily: "'Outfit', sans-serif"
    },
    calligraphy: {
      displayFamily: "'Outfit', sans-serif",
      bodyFamily: "'Pinyon Script', cursive"
    },
    playful_brush: {
      displayFamily: "'Montserrat', sans-serif",
      bodyFamily: "'Pacifico', cursive"
    },
    handwritten: {
      displayFamily: "'Plus Jakarta Sans', sans-serif",
      bodyFamily: "'Caveat', cursive"
    },
    retro_cursive: {
      displayFamily: "'Bricolage Grotesque', sans-serif",
      bodyFamily: "'Sacramento', cursive"
    },
    embellish: {
      displayFamily: "'Six Caps', sans-serif",
      bodyFamily: "'Montserrat', sans-serif"
    },
    noticing: {
      displayFamily: "'Cormorant Garamond', serif",
      bodyFamily: "'Montserrat', sans-serif"
    },
    healing_nature: {
      displayFamily: "'Mr De Haviland', cursive",
      bodyFamily: "'Outfit', sans-serif"
    },
    healing_time: {
      displayFamily: "'Instrument Serif', serif",
      bodyFamily: "'Pinyon Script', cursive"
    },
    healing_myself: {
      displayFamily: "'Lora', serif",
      bodyFamily: "'Alex Brush', cursive"
    },
    sunday_vibes: {
      displayFamily: "'Syncopate', sans-serif",
      bodyFamily: "'Plus Jakarta Sans', sans-serif"
    },
    take_time: {
      displayFamily: "'Bricolage Grotesque', sans-serif",
      bodyFamily: "'Outfit', sans-serif"
    },
    hidden_gem: {
      displayFamily: "'Syncopate', sans-serif",
      bodyFamily: "'Monsieur La Doulaise', cursive"
    },
    stronger_with: {
      displayFamily: "'Mr De Haviland', cursive",
      bodyFamily: "'Space Grotesk', sans-serif"
    },
    capture_moment: {
      displayFamily: "'Instrument Serif', serif",
      bodyFamily: "'Monsieur La Doulaise', cursive"
    },
    nothing_doing: {
      displayFamily: "'Six Caps', sans-serif",
      bodyFamily: "'Alex Brush', cursive"
    },
    beautiful_sunset: {
      displayFamily: "'Instrument Serif', serif",
      bodyFamily: "'Cormorant Garamond', serif"
    },
    capture_moments: {
      displayFamily: "'Lora', serif",
      bodyFamily: "'Monsieur La Doulaise', cursive"
    },
    romance_untold: {
      displayFamily: "'Lora', serif",
      bodyFamily: "'Lora', serif"
    },
    remember_this: {
      displayFamily: "'Plus Jakarta Sans', sans-serif",
      bodyFamily: "'Pinyon Script', cursive"
    },
    explore_unexplored: {
      displayFamily: "'Bricolage Grotesque', sans-serif",
      bodyFamily: "'Plus Jakarta Sans', sans-serif"
    },
    sea_energy: {
      displayFamily: "'Cormorant Garamond', serif",
      bodyFamily: "'Mr De Haviland', cursive"
    },
    one_day: {
      displayFamily: "'Plus Jakarta Sans', sans-serif",
      bodyFamily: "'Lora', serif"
    },
    tertawa_keramaian: {
      displayFamily: "'Bricolage Grotesque', sans-serif",
      bodyFamily: "'Pinyon Script', cursive"
    },
    finding_stillness: {
      displayFamily: "'Bricolage Grotesque', sans-serif",
      bodyFamily: "'Cormorant Garamond', serif"
    },
    modern_bangla: {
      displayFamily: "'Anek Bangla', sans-serif",
      bodyFamily: "'Hind Siliguri', sans-serif"
    },
    literary_bangla: {
      displayFamily: "'Tiro Bangla', serif",
      bodyFamily: "'Noto Serif Bengali', serif"
    },
    signature_bangla: {
      displayFamily: "'Galada', cursive",
      bodyFamily: "'Noto Sans Bengali', sans-serif"
    },
    playful_bangla: {
      displayFamily: "'Baloo Da 2', sans-serif",
      bodyFamily: "'Mina', sans-serif"
    },
    handwritten_bangla: {
      displayFamily: "'Atma', cursive",
      bodyFamily: "'Hind Siliguri', sans-serif"
    },
  };

  const primaryInput = document.getElementById("primary-input");
  const secondaryInput = document.getElementById("secondary-input");
  const primaryInputBn = document.getElementById("primary-input-bn");
  const secondaryInputBn = document.getElementById("secondary-input-bn");
  
  const detailParagraphInput = document.getElementById("detail-paragraph-input");
  const detailParagraphInputBn = document.getElementById("detail-paragraph-input-bn");
  const detailMetaInput = document.getElementById("detail-meta-input");
  const detailMetaInputBn = document.getElementById("detail-meta-input-bn");
  
  const layoutBtns = document.querySelectorAll(".layout-btn");
  const layoutBtnsBn = document.querySelectorAll(".layout-btn-bn");
  const themeToggle = document.getElementById("theme-toggle");

  let activeLayoutEn = "primary-display"; // or "primary-cursive"
  let activeLayoutBn = "primary-display"; // or "primary-cursive"

  // Main layout rendering and style engine
  const renderPairings = () => {
    const primaryTextEn = primaryInput.value.trim() || "current";
    const secondaryTextEn = secondaryInput.value.trim() || "against the";
    
    const primaryTextBn = primaryInputBn.value.trim() || "বিপরীতে";
    const secondaryTextBn = secondaryInputBn.value.trim() || "স্রোতের";
    
    for (const [key, config] of Object.entries(fontPairings)) {
      const card = document.querySelector(`.pairing-card[data-pairing="${key}"]`);
      if (!card) continue;
      
      const pLine = card.querySelector(".line-primary");
      const sLine = card.querySelector(".line-secondary");
      
      const isBangla = key.endsWith("_bangla");
      
      if (pLine) pLine.textContent = isBangla ? primaryTextBn : primaryTextEn;
      if (sLine) sLine.textContent = isBangla ? secondaryTextBn : secondaryTextEn;
      
      // Apply card-specific color settings
      const pColorPreview = card.querySelector(".primary-color-preview");
      const sColorPreview = card.querySelector(".secondary-color-preview");
      if (pLine && pColorPreview) pLine.style.color = pColorPreview.style.backgroundColor;
      if (sLine && sColorPreview) sLine.style.color = sColorPreview.style.backgroundColor;
      
      // Reset text transformations
      if (pLine) {
        pLine.style.textTransform = "none";
        pLine.style.letterSpacing = "normal";
        pLine.style.fontStyle = "normal";
        pLine.style.marginTop = "0";
      }
      if (sLine) {
        sLine.style.textTransform = "none";
        sLine.style.letterSpacing = "normal";
        sLine.style.fontStyle = "normal";
        sLine.style.marginBottom = "0.25rem";
      }
      
      const currentActiveLayout = isBangla ? activeLayoutBn : activeLayoutEn;
      
      // Determine font sizing and positioning maps based on active layout toggle
      if (currentActiveLayout === "primary-display") {
        // Line Primary is Dominant Display (Font 1)
        if (pLine) {
          pLine.style.fontFamily = config.displayFamily;
          pLine.style.fontSize = "3.2rem";
          pLine.style.fontWeight = "800";
        }
        
        // Line Secondary is Accent Cursive/Serif (Font 2)
        if (sLine) {
          sLine.style.fontFamily = config.bodyFamily;
          sLine.style.fontSize = "1.8rem";
          sLine.style.fontWeight = "400";
        }
        
        // Custom key scaling
        if (sLine) {
          if (config.bodyFamily.includes("cursive") || config.bodyFamily.includes("De Haviland") || config.bodyFamily.includes("La Doulaise") || config.bodyFamily.includes("Sacramento")) {
            sLine.style.fontSize = "2.4rem";
            sLine.style.marginBottom = "-0.2rem";
          } else if (config.bodyFamily.includes("Cormorant")) {
            sLine.style.fontStyle = "italic";
            sLine.style.fontSize = "1.6rem";
            sLine.style.fontWeight = "500";
          }
        }
        
        if (pLine) {
          if (key === "wide_promo") {
            pLine.style.textTransform = "uppercase";
            pLine.style.letterSpacing = "4px";
            pLine.style.fontSize = "2.2rem";
          } else if (key === "condensed") {
            pLine.style.textTransform = "uppercase";
            pLine.style.fontSize = "4.2rem";
            pLine.style.fontWeight = "400";
            pLine.style.letterSpacing = "1px";
          } else if (key === "embellish") {
            pLine.style.textTransform = "uppercase";
            pLine.style.fontSize = "6rem";
            pLine.style.fontWeight = "400";
            pLine.style.letterSpacing = "1px";
            pLine.style.marginTop = "-0.5rem";
          }
        }
      } else {
        // Line Primary is Cursive Accent/Serif (Font 2)
        if (pLine) {
          pLine.style.fontFamily = config.bodyFamily;
          pLine.style.fontSize = "3.6rem";
          pLine.style.fontWeight = "400";
          
          if (config.bodyFamily.includes("cursive") || config.bodyFamily.includes("De Haviland") || config.bodyFamily.includes("La Doulaise") || config.bodyFamily.includes("Sacramento")) {
            pLine.style.fontSize = "4.4rem";
            pLine.style.marginTop = "-0.3rem";
          } else if (config.bodyFamily.includes("Cormorant")) {
            pLine.style.fontStyle = "italic";
            pLine.style.fontSize = "3.2rem";
            pLine.style.fontWeight = "600";
          }
        }
        
        // Line Secondary is Bold Display (Font 1)
        if (sLine) {
          sLine.style.fontFamily = config.displayFamily;
          sLine.style.fontSize = "1.3rem";
          sLine.style.fontWeight = "800";
          sLine.style.textTransform = "none";
          sLine.style.letterSpacing = "1px";
          sLine.style.marginBottom = "0.5rem";
          
          if (key === "wide_promo") {
            sLine.style.textTransform = "uppercase";
            sLine.style.letterSpacing = "4px";
            sLine.style.fontSize = "1.1rem";
          } else if (key === "condensed") {
            sLine.style.textTransform = "uppercase";
            sLine.style.fontSize = "1.8rem";
             sLine.style.fontWeight = "400";
           } else if (key === "embellish") {
             sLine.style.textTransform = "uppercase";
             sLine.style.fontSize = "2.8rem";
             sLine.style.fontWeight = "400";
             sLine.style.letterSpacing = "0.5px";
             sLine.style.marginBottom = "0.2rem";
           }
         }
       }
 
       // Specific Bangla layout tweaks
       if (key.endsWith("_bangla")) {
         if (pLine) {
           pLine.style.lineHeight = "1.4";
           pLine.style.textTransform = "none";
           pLine.style.letterSpacing = "normal";
           
           if (currentActiveLayout === "primary-display") {
             if (key === "signature_bangla") {
               pLine.style.fontSize = "3.6rem";
             } else if (key === "playful_bangla") {
               pLine.style.fontSize = "3.2rem";
             } else if (key === "handwritten_bangla") {
               pLine.style.fontSize = "3.2rem";
             }
           } else {
             // Accent layout active (Line primary is bodyFamily)
             if (key === "literary_bangla") {
               pLine.style.fontSize = "2.8rem";
             } else if (key === "signature_bangla") {
               pLine.style.fontSize = "2.6rem";
             }
           }
         }
         
         if (sLine) {
           sLine.style.lineHeight = "1.4";
           sLine.style.textTransform = "none";
           sLine.style.letterSpacing = "normal";
           
           if (currentActiveLayout === "primary-display") {
             // Line secondary is bodyFamily
             if (key === "signature_bangla") {
               sLine.style.fontSize = "2.0rem";
             } else if (key === "playful_bangla") {
               sLine.style.fontSize = "1.8rem";
             }
           } else {
             // Accent layout active (Line secondary is displayFamily)
             if (key === "signature_bangla") {
               sLine.style.fontSize = "3.2rem";
             } else if (key === "playful_bangla") {
               sLine.style.fontSize = "2.8rem";
             } else if (key === "handwritten_bangla") {
               sLine.style.fontSize = "2.8rem";
             }
           }
         }
       }
     }
     
     // Update detail specimens
    const detailStory = document.getElementById("preview-detail-story");
    const detailStoryBn = document.getElementById("preview-detail-story-bn");
    const detailMeta = document.getElementById("preview-detail-meta");
    const detailMetaBn = document.getElementById("preview-detail-meta-bn");
    
    if (detailStory && detailParagraphInput) detailStory.textContent = detailParagraphInput.value;
    if (detailStoryBn && detailParagraphInputBn) detailStoryBn.textContent = detailParagraphInputBn.value;
    if (detailMeta && detailMetaInput) detailMeta.textContent = detailMetaInput.value.toUpperCase();
    if (detailMetaBn && detailMetaInputBn) detailMetaBn.textContent = detailMetaInputBn.value.toUpperCase();
    updateAllCardColors();
  };

  // Input event listeners
  primaryInput.addEventListener("input", renderPairings);
  secondaryInput.addEventListener("input", renderPairings);
  primaryInputBn.addEventListener("input", renderPairings);
  secondaryInputBn.addEventListener("input", renderPairings);
  detailParagraphInput.addEventListener("input", renderPairings);
  detailParagraphInputBn.addEventListener("input", renderPairings);
  detailMetaInput.addEventListener("input", renderPairings);
  detailMetaInputBn.addEventListener("input", renderPairings);

  // Toggle layout event listeners (English)
  layoutBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      layoutBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeLayoutEn = btn.getAttribute("data-layout");
      renderPairings();
    });
  });

  // Toggle layout event listeners (Bengali)
  layoutBtnsBn.forEach(btn => {
    btn.addEventListener("click", () => {
      layoutBtnsBn.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeLayoutBn = btn.getAttribute("data-layout");
      renderPairings();
    });
  });

  // Navigation link active toggles
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Theme switcher
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    document.querySelector('meta[name="color-scheme"]').content = newTheme;
    localStorage.setItem("color-scheme", newTheme);
  });

  const updateCardColors = (card) => {
    const pPreview = card.querySelector(".primary-color-preview");
    const sPreview = card.querySelector(".secondary-color-preview");
    if (!pPreview || !sPreview) return;
    
    const primaryColor = pPreview.style.backgroundColor;
    const secondaryColor = sPreview.style.backgroundColor;
    
    const pLines = card.querySelectorAll(".line-primary");
    const sLines = card.querySelectorAll(".line-secondary");
    
    pLines.forEach(line => {
      if (line.classList.contains("tech-tag-red") || line.classList.contains("bar-line")) {
        line.style.backgroundColor = primaryColor;
      } else {
        line.style.color = primaryColor;
      }
    });
    
    sLines.forEach(line => {
      if (line.classList.contains("tech-tag-red") || line.classList.contains("bar-line")) {
        line.style.backgroundColor = secondaryColor;
      } else {
        line.style.color = secondaryColor;
      }
    });
  };

  const updateAllCardColors = () => {
    const cards = document.querySelectorAll(".pairing-card, .detail-style-card");
    cards.forEach(card => updateCardColors(card));
  };

  // Initialize color indicators and drop downs
  const initColorPickers = () => {
    const cards = document.querySelectorAll(".pairing-card, .detail-style-card");
    cards.forEach(card => {
      const pPreview = card.querySelector(".primary-color-preview");
      const sPreview = card.querySelector(".secondary-color-preview");
      if (!pPreview || !sPreview) return;
      
      const pDropdown = pPreview.nextElementSibling;
      const sDropdown = sPreview.nextElementSibling;
      
      // Color options click
      pDropdown.querySelectorAll(".color-opt").forEach(opt => {
        opt.addEventListener("click", (e) => {
          e.stopPropagation();
          pPreview.style.backgroundColor = opt.getAttribute("data-color");
          renderPairings();
        });
      });
      
      sDropdown.querySelectorAll(".color-opt").forEach(opt => {
        opt.addEventListener("click", (e) => {
          e.stopPropagation();
          sPreview.style.backgroundColor = opt.getAttribute("data-color");
          renderPairings();
        });
      });
      
      // Swap button click
      const swapBtn = card.querySelector(".swap-colors-btn");
      if (swapBtn) {
        swapBtn.addEventListener("click", () => {
          const tempColor = pPreview.style.backgroundColor;
          pPreview.style.backgroundColor = sPreview.style.backgroundColor;
          sPreview.style.backgroundColor = tempColor;
          renderPairings();
        });
      }
    });
  };

  // Run initial render
  initColorPickers();
  renderPairings();
});
