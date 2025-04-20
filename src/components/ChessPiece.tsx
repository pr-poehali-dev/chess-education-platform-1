import React from 'react';

type PieceType = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';
type PieceColor = 'white' | 'black';

interface ChessPieceProps {
  piece: PieceType;
  color: PieceColor;
  className?: string;
}

export const ChessPiece: React.FC<ChessPieceProps> = ({ piece, color, className = '' }) => {
  // Эмодзи для шахматных фигур
  const pieces = {
    white: {
      pawn: '♙',
      knight: '♘',
      bishop: '♗',
      rook: '♖',
      queen: '♕',
      king: '♔',
    },
    black: {
      pawn: '♟',
      knight: '♞',
      bishop: '♝',
      rook: '♜',
      queen: '♛',
      king: '♚',
    },
  };

  return (
    <span 
      className={`inline-block text-4xl ${color === 'white' ? 'text-white' : 'text-chess-dark'} ${className}`} 
      style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.2)' }}
    >
      {pieces[color][piece]}
    </span>
  );
};
