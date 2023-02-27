import { useState } from 'react';
import styles from './ad.module.css'; //the . means wherever you are right now, just stay in this folder and look for the following file

export default function Ad() {

    const [popup, setPopup] = useState(true)

    return (
        <>
            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup__area}>
                            <div onClick={() => setPopup(false)}>Close</div>
                            Welcome
                        </div>
                    </div>
                    :<></>
        }

        </>
    )
}