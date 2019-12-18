import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table8 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
                    </tr> 
                </thead>
                <tr>
                    <th className="start"> f </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start"> b </th>                  
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start"> n </th> 
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nǖ')}> nǖ </div>
                            <div className="character" onClick={() => playAudio('nǘ')}> nǘ </div>
                            <div className="character" onClick={() => playAudio('nǚ')}> nǚ </div>
                            <div className="character" onClick={() => playAudio('nǜ')}> nǜ </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nǖe')}> nǖe </div>
                            <div className="character" onClick={() => playAudio('nǘe')}> nǘe </div>
                            <div className="character" onClick={() => playAudio('nǚe')}> nǚe </div>
                            <div className="character" onClick={() => playAudio('nǜe')}> nǜe </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start"> l </th> 
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lǖ')}> lǖ </div>
                            <div className="character" onClick={() => playAudio('lǘ')}> lǘ </div>
                            <div className="character" onClick={() => playAudio('lǚ')}> lǚ </div>
                            <div className="character" onClick={() => playAudio('lǜ')}> lǜ </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lǖe')}> lǖe </div>
                            <div className="character" onClick={() => playAudio('lǘe')}> lǘe </div>
                            <div className="character" onClick={() => playAudio('lǚe')}> lǚe </div>
                            <div className="character" onClick={() => playAudio('lǜe')}> lǜe </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table8