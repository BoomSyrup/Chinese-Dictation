import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table3 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>u</th><th>ua</th><th>uo</th><th>uai</th><th>ui*</th><th>uan</th><th>un*</th><th>uang</th><th>ueng</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wū')}> wū </div>
                            <div class="character" onClick={() => this.playAudio('wú')}> wú </div>
                            <div class="character" onClick={() => this.playAudio('wǔ')}> wǔ </div>
                            <div class="character" onClick={() => this.playAudio('wù')}> wù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wā')}> wā </div>
                            <div class="character" onClick={() => this.playAudio('wá')}> wá </div>
                            <div class="character" onClick={() => this.playAudio('wǎ')}> wǎ </div>
                            <div class="character" onClick={() => this.playAudio('wà')}> wà </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wō')}> wō </div>
                            <div class="character" onClick={() => this.playAudio('wó')}> wó </div>
                            <div class="character" onClick={() => this.playAudio('wǒ')}> wǒ </div>
                            <div class="character" onClick={() => this.playAudio('wò')}> wò </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wāi')}> wāi </div>
                            <div class="character" onClick={() => this.playAudio('wái')}> wái </div>
                            <div class="character" onClick={() => this.playAudio('wǎi')}> wǎi </div>
                            <div class="character" onClick={() => this.playAudio('wài')}> wài </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wēi')}> wēi </div>
                            <div class="character" onClick={() => this.playAudio('wéi')}> wéi </div>
                            <div class="character" onClick={() => this.playAudio('wěi')}> wěi </div>
                            <div class="character" onClick={() => this.playAudio('wèi')}> wèi </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wān')}> wān </div>
                            <div class="character" onClick={() => this.playAudio('wán')}> wán </div>
                            <div class="character" onClick={() => this.playAudio('wǎn')}> wǎn </div>
                            <div class="character" onClick={() => this.playAudio('wàn')}> wàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('wēn')}> wēn </div>
                            <div class="character" onClick={() => this.playAudio('wén')}> wén </div>
                            <div class="character" onClick={() => this.playAudio('wěn')}> wěn </div>
                            <div class="character" onClick={() => this.playAudio('wèn')}> wèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('wāng')}> wāng </div>
                            <div class="character" onClick={() => this.playAudio('wáng')}> wáng </div>
                            <div class="character" onClick={() => this.playAudio('wǎng')}> wǎng </div>
                            <div class="character" onClick={() => this.playAudio('wàng')}> wàng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('wēng')}> wēng </div>
                            <div class="character" onClick={() => this.playAudio('wéng')}> wéng </div>
                            <div class="character" onClick={() => this.playAudio('wěng')}> wěng </div>
                            <div class="character" onClick={() => this.playAudio('wèng')}> wèng </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="start"> b </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bū')}> bū </div>
                            <div class="character" onClick={() => this.playAudio('bú')}> bú </div>
                            <div class="character" onClick={() => this.playAudio('bǔ')}> bǔ </div>
                            <div class="character" onClick={() => this.playAudio('bù')}> bù </div>
                        </div>
                    </th>                       
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> p </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pū')}> pū </div>
                            <div class="character" onClick={() => this.playAudio('pú')}> pú </div>
                            <div class="character" onClick={() => this.playAudio('pǔ')}> pǔ </div>
                            <div class="character" onClick={() => this.playAudio('pù')}> pù </div>
                        </div>
                    </th>                       
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> m </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mū')}> mū </div>
                            <div class="character" onClick={() => this.playAudio('mú')}> mú </div>
                            <div class="character" onClick={() => this.playAudio('mǔ')}> mǔ </div>
                            <div class="character" onClick={() => this.playAudio('mù')}> mù </div>
                        </div>
                    </th>                       
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> f </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fū')}> fū </div>
                            <div class="character" onClick={() => this.playAudio('fú')}> fú </div>
                            <div class="character" onClick={() => this.playAudio('fǔ')}> fǔ </div>
                            <div class="character" onClick={() => this.playAudio('fù')}> fù </div>
                        </div>
                    </th>     
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table3