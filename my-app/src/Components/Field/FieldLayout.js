import React from 'react';
import styles from './field.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.field}>
		{field.map((cell, index) => (
			<button
				key={index}
				className={styles.button}
				onClick={() => handleCellClick(index)}
			>
				{cell}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
};
export default FieldLayout;
