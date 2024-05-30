import React from 'react';
import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
	<div className={styles.information}>
		{isDraw
			? 'Ничья'
			: isGameEnded
				? `Победа: ${currentPlayer}` // Победитель - тот, кто сделал последний ход
				: `Ходит: ${currentPlayer}`}
	</div>
);

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
export default InformationLayout;
