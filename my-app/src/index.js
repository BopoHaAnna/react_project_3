import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameContainer } from './Components/Game/GameContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<GameContainer />
	</React.StrictMode>,
);
