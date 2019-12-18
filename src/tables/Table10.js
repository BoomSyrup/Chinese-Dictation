import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table10 extends React.Component {
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
                        <th className="start"> z </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zū')}> zū </div>
                                <div className="character" onClick={() => playAudio('zú')}> zú </div>
                                <div className="character" onClick={() => playAudio('zǔ')}> zǔ </div>
                                <div className="character" onClick={() => playAudio('zù')}> zù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zuō')}> zuō </div>
                                <div className="character" onClick={() => playAudio('zuó')}> zuó </div>
                                <div className="character" onClick={() => playAudio('zuǒ')}> zuǒ </div>
                                <div className="character" onClick={() => playAudio('zuò')}> zuò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zūi')}> zūi </div>
                                <div className="character" onClick={() => playAudio('zúi')}> zúi </div>
                                <div className="character" onClick={() => playAudio('zǔi')}> zǔi </div>
                                <div className="character" onClick={() => playAudio('zùi')}> zùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zuān')}> zuān </div>
                                <div className="character" onClick={() => playAudio('zuán')}> zuán </div>
                                <div className="character" onClick={() => playAudio('zuǎn')}> zuǎn </div>
                                <div className="character" onClick={() => playAudio('zuàn')}> zuàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zūn')}> zūn </div>
                                <div className="character" onClick={() => playAudio('zún')}> zún </div>
                                <div className="character" onClick={() => playAudio('zǔn')}> zǔn </div>
                                <div className="character" onClick={() => playAudio('zùn')}> zùn </div>
                            </div>
                        </th>    
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> c </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cū')}> cū </div>
                                <div className="character" onClick={() => playAudio('cú')}> cú </div>
                                <div className="character" onClick={() => playAudio('cǔ')}> cǔ </div>
                                <div className="character" onClick={() => playAudio('cù')}> cù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cuō')}> cuō </div>
                                <div className="character" onClick={() => playAudio('cuó')}> cuó </div>
                                <div className="character" onClick={() => playAudio('cuǒ')}> cuǒ </div>
                                <div className="character" onClick={() => playAudio('cuò')}> cuò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cūi')}> cūi </div>
                                <div className="character" onClick={() => playAudio('cúi')}> cúi </div>
                                <div className="character" onClick={() => playAudio('cǔi')}> cǔi </div>
                                <div className="character" onClick={() => playAudio('cùi')}> cùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('cuān')}> cuān </div>
                                <div className="character" onClick={() => playAudio('cuán')}> cuán </div>
                                <div className="character" onClick={() => playAudio('cuǎn')}> cuǎn </div>
                                <div className="character" onClick={() => playAudio('cuàn')}> cuàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cūn')}> cūn </div>
                                <div className="character" onClick={() => playAudio('cún')}> cún </div>
                                <div className="character" onClick={() => playAudio('cǔn')}> cǔn </div>
                                <div className="character" onClick={() => playAudio('cùn')}> cùn </div>
                            </div>
                        </th>    
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> s </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sū')}> sū </div>
                                <div className="character" onClick={() => playAudio('sú')}> sú </div>
                                <div className="character" onClick={() => playAudio('sǔ')}> sǔ </div>
                                <div className="character" onClick={() => playAudio('sù')}> sù </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('suō')}> suō </div>
                                <div className="character" onClick={() => playAudio('suó')}> suó </div>
                                <div className="character" onClick={() => playAudio('suǒ')}> suǒ </div>
                                <div className="character" onClick={() => playAudio('suò')}> suò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sūi')}> sūi </div>
                                <div className="character" onClick={() => playAudio('súi')}> súi </div>
                                <div className="character" onClick={() => playAudio('sǔi')}> sǔi </div>
                                <div className="character" onClick={() => playAudio('sùi')}> sùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('suān')}> suān </div>
                                <div className="character" onClick={() => playAudio('suán')}> suán </div>
                                <div className="character" onClick={() => playAudio('suǎn')}> suǎn </div>
                                <div className="character" onClick={() => playAudio('suàn')}> suàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sūn')}> sūn </div>
                                <div className="character" onClick={() => playAudio('sún')}> sún </div>
                                <div className="character" onClick={() => playAudio('sǔn')}> sǔn </div>
                                <div className="character" onClick={() => playAudio('sùn')}> sùn </div>
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
export default Table10