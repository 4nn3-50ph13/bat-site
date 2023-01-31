import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();
const fcolour = 'rgb(200,200,200)';

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = 1600;
    canvas.height = 1100;
    canvas.style.width = `800px`;
    canvas.style.height = `550px`;
    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = fcolour;
    context.lineWidth = 3;
    contextRef.current = context;
    // writeText({ text: t('createH'), x: window.innerWidth/2, y: 0 }, { fontWeight: 'bold', fontSize: 28, textAlign: 'center' });
    // writeText({ text: t('createS'), x: window.innerWidth/2, y: 0 }, { fontSize: 22,  offset: 30, textAlign: 'center' });
  };

  // const writeText = (info, style = {}) => {
  //   const { text, x, y } = info;
  //   const { fontWeight= '', fontSize = 20, offset=0, fontFamily = 'Raleway', textAlign = 'center', textBaseline = 'top' } = style;
   
  //   contextRef.current.beginPath();
  //   contextRef.current.font = fontWeight +' '+ fontSize + 'px ' + fontFamily;
  //   contextRef.current.textAlign = textAlign;
  //   contextRef.current.textBaseline = textBaseline;
  //   contextRef.current.fillStyle = '#bfbfc7';
  //   contextRef.current.fillText(text, x-270, y+offset);
  //   contextRef.current.stroke();
  // }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#19181C";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // writeText({ text: t('createH'), x: window.innerWidth/2, y: 25 }, { fontWeight: 'bold', fontSize: 28, textAlign: 'center' });
    // writeText({ text: t('createS'), x: window.innerWidth/2, y: 25 }, { fontSize: 22,  offset: 30, textAlign: 'center' });
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);