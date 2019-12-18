import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table12 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>u</th><th>ua</th><th>uo</th><th>uai</th><th>ui*</th><th>uan</th><th>un*</th><th>uang</th><th>ueng</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"> zh </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zhū')}> zhū </div>
                            <div class="character" onClick={() => this.playAudio('zhú')}> zhú </div>
                            <div class="character" onClick={() => this.playAudio('zhǔ')}> zhǔ </div>
                            <div class="character" onClick={() => this.playAudio('zhù')}> zhù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhūa')}> zhūa </div>
                            <div class="character" onClick={() => this.playAudio('zhúa')}> zhúa </div>
                            <div class="character" onClick={() => this.playAudio('zhǔa')}> zhǔa </div>
                            <div class="character" onClick={() => this.playAudio('zhùa')}> zhùa </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhuō')}> zhuō </div>
                            <div class="character" onClick={() => this.playAudio('zhuó')}> zhuó </div>
                            <div class="character" onClick={() => this.playAudio('zhuǒ')}> zhuǒ </div>
                            <div class="character" onClick={() => this.playAudio('zhuò')}> zhuò </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhūai')}> zhūai </div>
                            <div class="character" onClick={() => this.playAudio('zhúai')}> zhúai </div>
                            <div class="character" onClick={() => this.playAudio('zhǔai')}> zhǔai </div>
                            <div class="character" onClick={() => this.playAudio('zhùai')}> zhùai </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhūi')}> zhūi </div>
                            <div class="character" onClick={() => this.playAudio('zhúi')}> zhúi </div>
                            <div class="character" onClick={() => this.playAudio('zhǔi')}> zhǔi </div>
                            <div class="character" onClick={() => this.playAudio('zhùi')}> zhùi </div>
                        </div>
                    </th>     
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhuān')}> zhuān </div>
                            <div class="character" onClick={() => this.playAudio('zhuán')}> zhuán </div>
                            <div class="character" onClick={() => this.playAudio('zhuǎn')}> zhuǎn </div>
                            <div class="character" onClick={() => this.playAudio('zhuàn')}> zhuàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhūn')}> zhūn </div>
                            <div class="character" onClick={() => this.playAudio('zhún')}> zhún </div>
                            <div class="character" onClick={() => this.playAudio('zhǔn')}> zhǔn </div>
                            <div class="character" onClick={() => this.playAudio('zhùn')}> zhùn </div>
                        </div>
                    </th>    
                    <th>
                        <div class="toneGridXL">
                            <div class="character" onClick={() => this.playAudio('zhuāng')}> zhuāng </div>
                            <div class="character" onClick={() => this.playAudio('zhuáng')}> zhuáng </div>
                            <div class="character" onClick={() => this.playAudio('zhuǎng')}> zhuǎng </div>
                            <div class="character" onClick={() => this.playAudio('zhuàng')}> zhuàng </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> ch </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('chū')}> chū </div>
                            <div class="character" onClick={() => this.playAudio('chú')}> chú </div>
                            <div class="character" onClick={() => this.playAudio('chǔ')}> chǔ </div>
                            <div class="character" onClick={() => this.playAudio('chù')}> chù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chūa')}> chūa </div>
                            <div class="character" onClick={() => this.playAudio('chúa')}> chúa </div>
                            <div class="character" onClick={() => this.playAudio('chǔa')}> chǔa </div>
                            <div class="character" onClick={() => this.playAudio('chùa')}> chùa </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chuō')}> chuō </div>
                            <div class="character" onClick={() => this.playAudio('chuó')}> chuó </div>
                            <div class="character" onClick={() => this.playAudio('chuǒ')}> chuǒ </div>
                            <div class="character" onClick={() => this.playAudio('chuò')}> chuò </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chūai')}> chūai </div>
                            <div class="character" onClick={() => this.playAudio('chúai')}> chúai </div>
                            <div class="character" onClick={() => this.playAudio('chǔai')}> chǔai </div>
                            <div class="character" onClick={() => this.playAudio('chùai')}> chùai </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chūi')}> chūi </div>
                            <div class="character" onClick={() => this.playAudio('chúi')}> chúi </div>
                            <div class="character" onClick={() => this.playAudio('chǔi')}> chǔi </div>
                            <div class="character" onClick={() => this.playAudio('chùi')}> chùi </div>
                        </div>
                    </th>     
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chuān')}> chuān </div>
                            <div class="character" onClick={() => this.playAudio('chuán')}> chuán </div>
                            <div class="character" onClick={() => this.playAudio('chuǎn')}> chuǎn </div>
                            <div class="character" onClick={() => this.playAudio('chuàn')}> chuàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chūn')}> chūn </div>
                            <div class="character" onClick={() => this.playAudio('chún')}> chún </div>
                            <div class="character" onClick={() => this.playAudio('chǔn')}> chǔn </div>
                            <div class="character" onClick={() => this.playAudio('chùn')}> chùn </div>
                        </div>
                    </th>    
                    <th>
                        <div class="toneGridXL">
                            <div class="character" onClick={() => this.playAudio('chuāng')}> chuāng </div>
                            <div class="character" onClick={() => this.playAudio('chuáng')}> chuáng </div>
                            <div class="character" onClick={() => this.playAudio('chuǎng')}> chuǎng </div>
                            <div class="character" onClick={() => this.playAudio('chuàng')}> chuàng </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> sh </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('shū')}> shū </div>
                            <div class="character" onClick={() => this.playAudio('shú')}> shú </div>
                            <div class="character" onClick={() => this.playAudio('shǔ')}> shǔ </div>
                            <div class="character" onClick={() => this.playAudio('shù')}> shù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shūa')}> shūa </div>
                            <div class="character" onClick={() => this.playAudio('shúa')}> shúa </div>
                            <div class="character" onClick={() => this.playAudio('shǔa')}> shǔa </div>
                            <div class="character" onClick={() => this.playAudio('shùa')}> shùa </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shuō')}> shuō </div>
                            <div class="character" onClick={() => this.playAudio('shuó')}> shuó </div>
                            <div class="character" onClick={() => this.playAudio('shuǒ')}> shuǒ </div>
                            <div class="character" onClick={() => this.playAudio('shuò')}> shuò </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shūai')}> shūai </div>
                            <div class="character" onClick={() => this.playAudio('shúai')}> shúai </div>
                            <div class="character" onClick={() => this.playAudio('shǔai')}> shǔai </div>
                            <div class="character" onClick={() => this.playAudio('shùai')}> shùai </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shūi')}> shūi </div>
                            <div class="character" onClick={() => this.playAudio('shúi')}> shúi </div>
                            <div class="character" onClick={() => this.playAudio('shǔi')}> shǔi </div>
                            <div class="character" onClick={() => this.playAudio('shùi')}> shùi </div>
                        </div>
                    </th>     
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shuān')}> shuān </div>
                            <div class="character" onClick={() => this.playAudio('shuán')}> shuán </div>
                            <div class="character" onClick={() => this.playAudio('shuǎn')}> shuǎn </div>
                            <div class="character" onClick={() => this.playAudio('shuàn')}> shuàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shūn')}> shūn </div>
                            <div class="character" onClick={() => this.playAudio('shún')}> shún </div>
                            <div class="character" onClick={() => this.playAudio('shǔn')}> shǔn </div>
                            <div class="character" onClick={() => this.playAudio('shùn')}> shùn </div>
                        </div>
                    </th>    
                    <th>
                        <div class="toneGridXL">
                            <div class="character" onClick={() => this.playAudio('shuāng')}> shuāng </div>
                            <div class="character" onClick={() => this.playAudio('shuáng')}> shuáng </div>
                            <div class="character" onClick={() => this.playAudio('shuǎng')}> shuǎng </div>
                            <div class="character" onClick={() => this.playAudio('shuàng')}> shuàng </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> r </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('rū')}> rū </div>
                            <div class="character" onClick={() => this.playAudio('rú')}> rú </div>
                            <div class="character" onClick={() => this.playAudio('rǔ')}> rǔ </div>
                            <div class="character" onClick={() => this.playAudio('rù')}> rù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rūa')}> rūa </div>
                            <div class="character" onClick={() => this.playAudio('rúa')}> rúa </div>
                            <div class="character" onClick={() => this.playAudio('rǔa')}> rǔa </div>
                            <div class="character" onClick={() => this.playAudio('rùa')}> rùa </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('ruō')}> ruō </div>
                            <div class="character" onClick={() => this.playAudio('ruó')}> ruó </div>
                            <div class="character" onClick={() => this.playAudio('ruǒ')}> ruǒ </div>
                            <div class="character" onClick={() => this.playAudio('ruò')}> ruò </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rūi')}> rūi </div>
                            <div class="character" onClick={() => this.playAudio('rúi')}> rúi </div>
                            <div class="character" onClick={() => this.playAudio('rǔi')}> rǔi </div>
                            <div class="character" onClick={() => this.playAudio('rùi')}> rùi </div>
                        </div>
                    </th>     
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('ruān')}> ruān </div>
                            <div class="character" onClick={() => this.playAudio('ruán')}> ruán </div>
                            <div class="character" onClick={() => this.playAudio('ruǎn')}> ruǎn </div>
                            <div class="character" onClick={() => this.playAudio('ruàn')}> ruàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rūn')}> rūn </div>
                            <div class="character" onClick={() => this.playAudio('rún')}> rún </div>
                            <div class="character" onClick={() => this.playAudio('rǔn')}> rǔn </div>
                            <div class="character" onClick={() => this.playAudio('rùn')}> rùn </div>
                        </div>
                    </th>    
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table12