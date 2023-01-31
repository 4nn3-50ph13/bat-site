import React from 'react';
import { useCanvas } from './CanvasContext';

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return <button id="button-1b" onClick={clearCanvas}>CLEAR</button>
}