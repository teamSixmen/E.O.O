import { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from "./Home.module.css";

function Home({setIsTrue}){

    const onClickIntoHandler = () => {
        setIsTrue(true);
    }

    return(
        <div className={styles.home}>
          <div className={styles.div}>
            <Link to='menu'>
                <div className={styles.child} onClick={onClickIntoHandler}>
                    <i className={styles.eatIn}>
                    <span className={styles.eatInTxtContainer}>
                        <p className={styles.p}>매장</p>
                        <p className={styles.eatIn1}>Eat in</p>
                    </span>
                    </i>
                </div>
            </Link>
          </div>
          <div className={styles.div1}>
            <Link to='menu'>
                <div className={styles.item}>
                    <i className={styles.eatIn}>
                    <span className={styles.eatInTxtContainer}>
                        <p className={styles.p}>포장</p>
                        <p className={styles.eatIn1}>take out</p>
                    </span>
                    </i>
                </div>
            </Link>
          </div>
          <i className={styles.i}>현금 및 기타 결제는 카운터에서 진행해주세요.</i>
          <div className={styles.div2}>
            <div className={styles.inner} />
            <i className={styles.i1}>직원호출</i>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.homeInner}>
            <div className={styles.homeInner}>
              <div className={styles.groupChild} />
              <img className={styles.icon} alt="" src="/-1@2x.png" />
            </div>
          </div>
        </div>
      );
}

export default Home;