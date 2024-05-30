import React, { useState } from 'react';
import GameLayout from './GameLayout';

export const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); // 0 или Х
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleResertButton = () => {
		setCurrentPlayer('X'); // замени на победителя
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setField={setField}
			setCurrentPlayer={setCurrentPlayer}
			setIsGameEnded={setIsGameEnded}
			handleResertButton={handleResertButton}
		/>
	);
};

export default GameContainer;
