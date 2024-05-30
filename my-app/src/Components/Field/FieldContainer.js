import React from 'react';
import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	isGameEnded,
	setIsDraw,
}) => {
	const checkWinner = (field) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
				return true;
			}
		}
		return false;
	};

	const handleCellClick = (index) => {
		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			if (checkWinner(newField)) {
				setIsGameEnded(true); // Если есть победитель, завершаем игру
			} else if (newField.every((cell) => cell !== '')) {
				setIsDraw(true); // Если все поля заполнены, устанавливаем ничью
				setIsGameEnded(true); // Завершаем игру
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	return (
		<FieldLayout
			field={field}
			handleCellClick={handleCellClick}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
		/>
	);
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.func,
};
export default FieldContainer;
