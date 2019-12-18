import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table3 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>u</th><th>ua</th><th>uo</th><th>uai</th><th>ui*</th><th>uan</th><th>un*</th><th>uang</th><th>ueng</th>
                    </tr> 
                </thead>
                <tr>
                    <th className="start"></th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wū')}> wū </div>
                            <div className="character" onClick={() => playAudio('wú')}> wú </div>
                            <div className="character" onClick={() => playAudio('wǔ')}> wǔ </div>
                            <div className="character" onClick={() => playAudio('wù')}> wù </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wā')}> wā </div>
                            <div className="character" onClick={() => playAudio('wá')}> wá </div>
                            <div className="character" onClick={() => playAudio('wǎ')}> wǎ </div>
                            <div className="character" onClick={() => playAudio('wà')}> wà </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wō')}> wō </div>
                            <div className="character" onClick={() => playAudio('wó')}> wó </div>
                            <div className="character" onClick={() => playAudio('wǒ')}> wǒ </div>
                            <div className="character" onClick={() => playAudio('wò')}> wò </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wāi')}> wāi </div>
                            <div className="character" onClick={() => playAudio('wái')}> wái </div>
                            <div className="character" onClick={() => playAudio('wǎi')}> wǎi </div>
                            <div className="character" onClick={() => playAudio('wài')}> wài </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wēi')}> wēi </div>
                            <div className="character" onClick={() => playAudio('wéi')}> wéi </div>
                            <div className="character" onClick={() => playAudio('wěi')}> wěi </div>
                            <div className="character" onClick={() => playAudio('wèi')}> wèi </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wān')}> wān </div>
                            <div className="character" onClick={() => playAudio('wán')}> wán </div>
                            <div className="character" onClick={() => playAudio('wǎn')}> wǎn </div>
                            <div className="character" onClick={() => playAudio('wàn')}> wàn </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('wēn')}> wēn </div>
                            <div className="character" onClick={() => playAudio('wén')}> wén </div>
                            <div className="character" onClick={() => playAudio('wěn')}> wěn </div>
                            <div className="character" onClick={() => playAudio('wèn')}> wèn </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('wāng')}> wāng </div>
                            <div className="character" onClick={() => playAudio('wáng')}> wáng </div>
                            <div className="character" onClick={() => playAudio('wǎng')}> wǎng </div>
                            <div className="character" onClick={() => playAudio('wàng')}> wàng </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('wēng')}> wēng </div>
                            <div className="character" onClick={() => playAudio('wéng')}> wéng </div>
                            <div className="character" onClick={() => playAudio('wěng')}> wěng </div>
                            <div className="character" onClick={() => playAudio('wèng')}> wèng </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th className="start"> b </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bū')}> bū </div>
                            <div className="character" onClick={() => playAudio('bú')}> bú </div>
                            <div className="character" onClick={() => playAudio('bǔ')}> bǔ </div>
                            <div className="character" onClick={() => playAudio('bù')}> bù </div>
                        </div>
                    </th>                       
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start"> p </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pū')}> pū </div>
                            <div className="character" onClick={() => playAudio('pú')}> pú </div>
                            <div className="character" onClick={() => playAudio('pǔ')}> pǔ </div>
                            <div className="character" onClick={() => playAudio('pù')}> pù </div>
                        </div>
                    </th>                       
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start"> m </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mū')}> mū </div>
                            <div className="character" onClick={() => playAudio('mú')}> mú </div>
                            <div className="character" onClick={() => playAudio('mǔ')}> mǔ </div>
                            <div className="character" onClick={() => playAudio('mù')}> mù </div>
                        </div>
                    </th>                       
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start"> f </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fū')}> fū </div>
                            <div className="character" onClick={() => playAudio('fú')}> fú </div>
                            <div className="character" onClick={() => playAudio('fǔ')}> fǔ </div>
                            <div className="character" onClick={() => playAudio('fù')}> fù </div>
                        </div>
                    </th>     
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table3