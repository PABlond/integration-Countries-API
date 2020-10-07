import React, { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

export const breakpoints = {
  sm: (css: TemplateStringsArray) => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    return isMobile ? css : "";
  },
  md: (css: TemplateStringsArray) => {
    const isTablet = window.matchMedia("(max-width: 1024px)").matches;
    return isTablet ? css : "";
  },
  l: (css: TemplateStringsArray) => {
    const isDesktop = window.matchMedia("(max-width: 1200px)").matches;
    return isDesktop ? css : "";
  },
  xl: (css: TemplateStringsArray) => {
    const isBig = window.matchMedia("(min-width: 1440px)").matches;
    return isBig ? css : "";
  },
};
