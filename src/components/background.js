import React from 'react';
import styles from '../css/background.scss';
import Card from 'material-ui/Card';
export default class Background extends React.Component{
	render(){
		return(
		<div className={styles.container}>
      		<div className={styles.wave2}></div>
      		<div className={styles.wave3}></div>
      		<div className={styles.wave4}></div>
		</div>
		)
	}
}


