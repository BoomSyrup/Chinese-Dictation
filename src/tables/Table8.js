import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table8 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"> f </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> b </th>                  
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> n </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nǖ')}> nǖ </div>
                            <div class="character" onClick={() => this.playAudio('nǘ')}> nǘ </div>
                            <div class="character" onClick={() => this.playAudio('nǚ')}> nǚ </div>
                            <div class="character" onClick={() => this.playAudio('nǜ')}> nǜ </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nǖe')}> nǖe </div>
                            <div class="character" onClick={() => this.playAudio('nǘe')}> nǘe </div>
                            <div class="character" onClick={() => this.playAudio('nǚe')}> nǚe </div>
                            <div class="character" onClick={() => this.playAudio('nǜe')}> nǜe </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> l </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lǖ')}> lǖ </div>
                            <div class="character" onClick={() => this.playAudio('lǘ')}> lǘ </div>
                            <div class="character" onClick={() => this.playAudio('lǚ')}> lǚ </div>
                            <div class="character" onClick={() => this.playAudio('lǜ')}> lǜ </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lǖe')}> lǖe </div>
                            <div class="character" onClick={() => this.playAudio('lǘe')}> lǘe </div>
                            <div class="character" onClick={() => this.playAudio('lǚe')}> lǚe </div>
                            <div class="character" onClick={() => this.playAudio('lǜe')}> lǜe </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table8