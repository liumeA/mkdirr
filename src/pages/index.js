import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import intl from '../util/init';
import { Button } from 'antd';


export default function(props) {


  return (

    <div className={styles.normal}>
      <div className={styles.welcome}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>

          {formatMessage({ id: intl.hello })}
        </li>
      </ul>
    </div>
  );
}
