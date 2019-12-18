import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table4 extends React.Component {
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
                        <th className="start"></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yū')}> yū </div>
                                <div className="character" onClick={() => playAudio('yú')}> yú </div>
                                <div className="character" onClick={() => playAudio('yǔ')}> yǔ </div>
                                <div className="character" onClick={() => playAudio('yù')}> yù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yūe')}> yūe </div>
                                <div className="character" onClick={() => playAudio('yúe')}> yúe </div>
                                <div className="character" onClick={() => playAudio('yǔe')}> yǔe </div>
                                <div className="character" onClick={() => playAudio('yùe')}> yùe </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('yūan')}> yūan </div>
                                <div className="character" onClick={() => playAudio('yúan')}> yúan </div>
                                <div className="character" onClick={() => playAudio('yǔan')}> yǔan </div>
                                <div className="character" onClick={() => playAudio('yùan')}> yùan </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yūn')}> yūn </div>
                                <div className="character" onClick={() => playAudio('yún')}> yún </div>
                                <div className="character" onClick={() => playAudio('yǔn')}> yǔn </div>
                                <div className="character" onClick={() => playAudio('yùn')}> yùn </div>
                            </div>
                        </th>   
                    </tr>
                    <tr>
                        <th className="start"> b </th>                  
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> p </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> m </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> f </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table4