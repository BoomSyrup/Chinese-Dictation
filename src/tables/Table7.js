import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio'

class Table7 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>u</th><th>ua</th><th>uo</th><th>uai</th><th>ui*</th><th>uan</th><th>un*</th><th>uang</th><th>ueng</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <th className="start"> d </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('dū')}> dū </div>
                                <div className="character" onClick={() => playAudio('dú')}> dú </div>
                                <div className="character" onClick={() => playAudio('dǔ')}> dǔ </div>
                                <div className="character" onClick={() => playAudio('dù')}> dù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('duō')}> duō </div>
                                <div className="character" onClick={() => playAudio('duó')}> duó </div>
                                <div className="character" onClick={() => playAudio('duǒ')}> duǒ </div>
                                <div className="character" onClick={() => playAudio('duò')}> duò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('dūi')}> dūi </div>
                                <div className="character" onClick={() => playAudio('dúi')}> dúi </div>
                                <div className="character" onClick={() => playAudio('dǔi')}> dǔi </div>
                                <div className="character" onClick={() => playAudio('dùi')}> dùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('duān')}> duān </div>
                                <div className="character" onClick={() => playAudio('duán')}> duán </div>
                                <div className="character" onClick={() => playAudio('duǎn')}> duǎn </div>
                                <div className="character" onClick={() => playAudio('duàn')}> duàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('dūn')}> dūn </div>
                                <div className="character" onClick={() => playAudio('dún')}> dún </div>
                                <div className="character" onClick={() => playAudio('dǔn')}> dǔn </div>
                                <div className="character" onClick={() => playAudio('dùn')}> dùn </div>
                            </div>
                        </th>    
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> t </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tū')}> tū </div>
                                <div className="character" onClick={() => playAudio('tú')}> tú </div>
                                <div className="character" onClick={() => playAudio('tǔ')}> tǔ </div>
                                <div className="character" onClick={() => playAudio('tù')}> tù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tuō')}> tuō </div>
                                <div className="character" onClick={() => playAudio('tuó')}> tuó </div>
                                <div className="character" onClick={() => playAudio('tuǒ')}> tuǒ </div>
                                <div className="character" onClick={() => playAudio('tuò')}> tuò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tūi')}> tūi </div>
                                <div className="character" onClick={() => playAudio('túi')}> túi </div>
                                <div className="character" onClick={() => playAudio('tǔi')}> tǔi </div>
                                <div className="character" onClick={() => playAudio('tùi')}> tùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('tuān')}> tuān </div>
                                <div className="character" onClick={() => playAudio('tuán')}> tuán </div>
                                <div className="character" onClick={() => playAudio('tuǎn')}> tuǎn </div>
                                <div className="character" onClick={() => playAudio('tuàn')}> tuàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tūn')}> tūn </div>
                                <div className="character" onClick={() => playAudio('tún')}> tún </div>
                                <div className="character" onClick={() => playAudio('tǔn')}> tǔn </div>
                                <div className="character" onClick={() => playAudio('tùn')}> tùn </div>
                            </div>
                        </th>    
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> n </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('nū')}> nū </div>
                                <div className="character" onClick={() => playAudio('nú')}> nú </div>
                                <div className="character" onClick={() => playAudio('nǔ')}> nǔ </div>
                                <div className="character" onClick={() => playAudio('nù')}> nù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('nuō')}> nuō </div>
                                <div className="character" onClick={() => playAudio('nuó')}> nuó </div>
                                <div className="character" onClick={() => playAudio('nuǒ')}> nuǒ </div>
                                <div className="character" onClick={() => playAudio('nuò')}> nuò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('nuān')}> nuān </div>
                                <div className="character" onClick={() => playAudio('nuán')}> nuán </div>
                                <div className="character" onClick={() => playAudio('nuǎn')}> nuǎn </div>
                                <div className="character" onClick={() => playAudio('nuàn')}> nuàn </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> l </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('lū')}> lū </div>
                                <div className="character" onClick={() => playAudio('lú')}> lú </div>
                                <div className="character" onClick={() => playAudio('lǔ')}> lǔ </div>
                                <div className="character" onClick={() => playAudio('lù')}> lù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('luō')}> luō </div>
                                <div className="character" onClick={() => playAudio('luó')}> luó </div>
                                <div className="character" onClick={() => playAudio('luǒ')}> luǒ </div>
                                <div className="character" onClick={() => playAudio('luò')}> luò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>    
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('luān')}> luān </div>
                                <div className="character" onClick={() => playAudio('luán')}> luán </div>
                                <div className="character" onClick={() => playAudio('luǎn')}> luǎn </div>
                                <div className="character" onClick={() => playAudio('luàn')}> luàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('lūn')}> lūn </div>
                                <div className="character" onClick={() => playAudio('lún')}> lún </div>
                                <div className="character" onClick={() => playAudio('lǔn')}> lǔn </div>
                                <div className="character" onClick={() => playAudio('lùn')}> lùn </div>
                            </div>
                        </th>    
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table7