import React from 'react';
import styles from '../css/background.scss';
import Card from 'material-ui/Card';
export default class Background extends React.Component{
	render(){
		return(
		<div className={styles.container}>
			<Card className={styles.waves} zDepth={2} backgroundColor={'#B71C1C'}>
				<p className={styles.title}>Trendr.</p>
				<div className={styles.wave3}></div>
				<div className={styles.wave2}></div>
			</Card>}
		</div>
		)
	}
}


