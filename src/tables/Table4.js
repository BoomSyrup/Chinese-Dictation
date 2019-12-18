import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table4 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yū')}> yū </div>
                            <div class="character" onClick={() => this.playAudio('yú')}> yú </div>
                            <div class="character" onClick={() => this.playAudio('yǔ')}> yǔ </div>
                            <div class="character" onClick={() => this.playAudio('yù')}> yù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yūe')}> yūe </div>
                            <div class="character" onClick={() => this.playAudio('yúe')}> yúe </div>
                            <div class="character" onClick={() => this.playAudio('yǔe')}> yǔe </div>
                            <div class="character" onClick={() => this.playAudio('yùe')}> yùe </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('yūan')}> yūan </div>
                            <div class="character" onClick={() => this.playAudio('yúan')}> yúan </div>
                            <div class="character" onClick={() => this.playAudio('yǔan')}> yǔan </div>
                            <div class="character" onClick={() => this.playAudio('yùan')}> yùan </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yūn')}> yūn </div>
                            <div class="character" onClick={() => this.playAudio('yún')}> yún </div>
                            <div class="character" onClick={() => this.playAudio('yǔn')}> yǔn </div>
                            <div class="character" onClick={() => this.playAudio('yùn')}> yùn </div>
                        </div>
                    </th>   
                </tr>
                <tr>
                    <th class="start"> b </th>                  
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> p </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> m </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> f </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table4