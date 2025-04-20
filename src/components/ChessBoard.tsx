import React from 'react';
import { ChessPiece } from './ChessPiece';

interface ChessBoardProps {
  position?: string; // FEN нотация или упрощенная расстановка
  interactive?: boolean;
  className?: string;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({ 
  position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR', // Начальная позиция
  interactive = false,
  className = ''
}) => {
  // Функция для преобразования FEN нотации в массив доски
  const parseFEN = (fen: string) => {
    const fenParts = fen.split(' ');
    const rows = fenParts[0].split('/');
    
    let board = [];
    
    for (const row of rows) {
      let boardRow = [];
      for (const char of row) {
        if (isNaN(parseInt(char))) {
          // Буква - это фигура
          boardRow.push(char);
        } else {
          // Число - количество пустых клеток
          for (let i = 0; i < parseInt(char); i++) {
            boardRow.push(null);
          }
        }
      }
      board.push(boardRow);
    }
    
    return board;
  };

  // Преобразуем FEN в массив доски
  const board = parseFEN(position);
  
  // Функция для определения типа и цвета фигуры по символу из FEN
  const getPieceDetails = (piece: string | null) => {
    if (!piece) return { piece: null, color: null };
    
    const pieceMap: Record<string, PieceType> = {
      'p': 'pawn', 'n': 'knight', 'b': 'bishop', 
      'r': 'rook', 'q': 'queen', 'k': 'king'
    };
    
    const type = pieceMap[piece.toLowerCase()];
    const color = piece === piece.toLowerCase() ? 'black' : 'white';
    
    return { piece: type, color };
  };

  // Создаем буквенные и цифровые метки для доски
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
  
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-chess-dark">
        {/* Шахматная доска */}
        <div className="w-full h-full grid grid-cols-8 grid-rows-8">
          {board.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {row.map((cell, colIndex) => {
                const isLight = (rowIndex + colIndex) % 2 === 1;
                const { piece, color } = getPieceDetails(cell);
                
                return (
                  <div 
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={`flex items-center justify-center ${isLight ? 'bg-chess-board-light' : 'bg-chess-board-dark'}`}
                  >
                    {piece && color && <ChessPiece piece={piece} color={color} />}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        
        {/* Координаты доски */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around px-2 text-xs">
          {files.map(file => (
            <span key={file} className="text-chess-dark font-bold">{file}</span>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-around py-1 text-xs">
          {ranks.map(rank => (
            <span key={rank} className="text-chess-dark font-bold ml-1">{rank}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
