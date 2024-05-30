import React from 'react';
import FieldContainer from '../Field/FieldContainer';
import InformationContainer from '../Information/InformationContainer';
import styles from './game.module.css';
import PropTypes from 'prop-types';

const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	handleResertButton,
	setIsDraw,
}) => (
	<div className={styles.container}>
		<InformationContainer
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
		<FieldContainer
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setIsGameEnded={setIsGameEnded}
			isGameEnded={isGameEnded}
			setIsDraw={setIsDraw}
		/>
		<button className={styles.resetButton} onClick={() => handleResertButton()}>
			Начать заново
		</button>
	</div>
);

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	handleResertButton: PropTypes.func,
	setIsDraw: PropTypes.func,
};
export default GameLayout;
