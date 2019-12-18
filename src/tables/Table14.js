import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table14 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <th className="start">j</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('jū')}> jū </div>
                                <div className="character" onClick={() => playAudio('jú')}> jú </div>
                                <div className="character" onClick={() => playAudio('jǔ')}> jǔ </div>
                                <div className="character" onClick={() => playAudio('jù')}> jù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('jūe')}> jūe </div>
                                <div className="character" onClick={() => playAudio('júe')}> júe </div>
                                <div className="character" onClick={() => playAudio('jǔe')}> jǔe </div>
                                <div className="character" onClick={() => playAudio('jùe')}> jùe </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('jūan')}> jūan </div>
                                <div className="character" onClick={() => playAudio('júan')}> júan </div>
                                <div className="character" onClick={() => playAudio('jǔan')}> jǔan </div>
                                <div className="character" onClick={() => playAudio('jùan')}> jùan </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('jūn')}> jūn </div>
                                <div className="character" onClick={() => playAudio('jún')}> jún </div>
                                <div className="character" onClick={() => playAudio('jǔn')}> jǔn </div>
                                <div className="character" onClick={() => playAudio('jùn')}> jùn </div>
                            </div>
                        </th>   
                    </tr>
                    <tr>
                        <th className="start">q</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('qū')}> qū </div>
                                <div className="character" onClick={() => playAudio('qú')}> qú </div>
                                <div className="character" onClick={() => playAudio('qǔ')}> qǔ </div>
                                <div className="character" onClick={() => playAudio('qù')}> qù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('qūe')}> qūe </div>
                                <div className="character" onClick={() => playAudio('qúe')}> qúe </div>
                                <div className="character" onClick={() => playAudio('qǔe')}> qǔe </div>
                                <div className="character" onClick={() => playAudio('qùe')}> qùe </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('qūan')}> qūan </div>
                                <div className="character" onClick={() => playAudio('qúan')}> qúan </div>
                                <div className="character" onClick={() => playAudio('qǔan')}> qǔan </div>
                                <div className="character" onClick={() => playAudio('qùan')}> qùan </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('qūn')}> qūn </div>
                                <div className="character" onClick={() => playAudio('qún')}> qún </div>
                                <div className="character" onClick={() => playAudio('qǔn')}> qǔn </div>
                                <div className="character" onClick={() => playAudio('qùn')}> qùn </div>
                            </div>
                        </th>   
                    </tr>
                    <tr>
                        <th className="start">x</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('xū')}> xū </div>
                                <div className="character" onClick={() => playAudio('xú')}> xú </div>
                                <div className="character" onClick={() => playAudio('xǔ')}> xǔ </div>
                                <div className="character" onClick={() => playAudio('xù')}> xù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('xūe')}> xūe </div>
                                <div className="character" onClick={() => playAudio('xúe')}> xúe </div>
                                <div className="character" onClick={() => playAudio('xǔe')}> xǔe </div>
                                <div className="character" onClick={() => playAudio('xùe')}> xùe </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('xūan')}> xūan </div>
                                <div className="character" onClick={() => playAudio('xúan')}> xúan </div>
                                <div className="character" onClick={() => playAudio('xǔan')}> xǔan </div>
                                <div className="character" onClick={() => playAudio('xùan')}> xùan </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('xūn')}> xūn </div>
                                <div className="character" onClick={() => playAudio('xún')}> xún </div>
                                <div className="character" onClick={() => playAudio('xǔn')}> xǔn </div>
                                <div className="character" onClick={() => playAudio('xùn')}> xùn </div>
                            </div>
                        </th>   
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table14