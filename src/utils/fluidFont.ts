export function fluidFont(minPx: number, maxPx: number, minW = 320, maxW = 1920): string {
  const slope = (maxPx - minPx) / (maxW - minW);
  const yAxisIntersection = -minW * slope + minPx;
  
  return `clamp(${minPx}px, ${yAxisIntersection.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw, ${maxPx}px)`;
}