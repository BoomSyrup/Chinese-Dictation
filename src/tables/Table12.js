import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table12 extends React.Component {
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
                        <th className="start"> zh </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zhū')}> zhū </div>
                                <div className="character" onClick={() => playAudio('zhú')}> zhú </div>
                                <div className="character" onClick={() => playAudio('zhǔ')}> zhǔ </div>
                                <div className="character" onClick={() => playAudio('zhù')}> zhù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhūa')}> zhūa </div>
                                <div className="character" onClick={() => playAudio('zhúa')}> zhúa </div>
                                <div className="character" onClick={() => playAudio('zhǔa')}> zhǔa </div>
                                <div className="character" onClick={() => playAudio('zhùa')}> zhùa </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhuō')}> zhuō </div>
                                <div className="character" onClick={() => playAudio('zhuó')}> zhuó </div>
                                <div className="character" onClick={() => playAudio('zhuǒ')}> zhuǒ </div>
                                <div className="character" onClick={() => playAudio('zhuò')}> zhuò </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhūai')}> zhūai </div>
                                <div className="character" onClick={() => playAudio('zhúai')}> zhúai </div>
                                <div className="character" onClick={() => playAudio('zhǔai')}> zhǔai </div>
                                <div className="character" onClick={() => playAudio('zhùai')}> zhùai </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhūi')}> zhūi </div>
                                <div className="character" onClick={() => playAudio('zhúi')}> zhúi </div>
                                <div className="character" onClick={() => playAudio('zhǔi')}> zhǔi </div>
                                <div className="character" onClick={() => playAudio('zhùi')}> zhùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhuān')}> zhuān </div>
                                <div className="character" onClick={() => playAudio('zhuán')}> zhuán </div>
                                <div className="character" onClick={() => playAudio('zhuǎn')}> zhuǎn </div>
                                <div className="character" onClick={() => playAudio('zhuàn')}> zhuàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhūn')}> zhūn </div>
                                <div className="character" onClick={() => playAudio('zhún')}> zhún </div>
                                <div className="character" onClick={() => playAudio('zhǔn')}> zhǔn </div>
                                <div className="character" onClick={() => playAudio('zhùn')}> zhùn </div>
                            </div>
                        </th>    
                        <th>
                            <div className="toneGridXL">
                                <div className="character" onClick={() => playAudio('zhuāng')}> zhuāng </div>
                                <div className="character" onClick={() => playAudio('zhuáng')}> zhuáng </div>
                                <div className="character" onClick={() => playAudio('zhuǎng')}> zhuǎng </div>
                                <div className="character" onClick={() => playAudio('zhuàng')}> zhuàng </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> ch </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('chū')}> chū </div>
                                <div className="character" onClick={() => playAudio('chú')}> chú </div>
                                <div className="character" onClick={() => playAudio('chǔ')}> chǔ </div>
                                <div className="character" onClick={() => playAudio('chù')}> chù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chūa')}> chūa </div>
                                <div className="character" onClick={() => playAudio('chúa')}> chúa </div>
                                <div className="character" onClick={() => playAudio('chǔa')}> chǔa </div>
                                <div className="character" onClick={() => playAudio('chùa')}> chùa </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chuō')}> chuō </div>
                                <div className="character" onClick={() => playAudio('chuó')}> chuó </div>
                                <div className="character" onClick={() => playAudio('chuǒ')}> chuǒ </div>
                                <div className="character" onClick={() => playAudio('chuò')}> chuò </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chūai')}> chūai </div>
                                <div className="character" onClick={() => playAudio('chúai')}> chúai </div>
                                <div className="character" onClick={() => playAudio('chǔai')}> chǔai </div>
                                <div className="character" onClick={() => playAudio('chùai')}> chùai </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chūi')}> chūi </div>
                                <div className="character" onClick={() => playAudio('chúi')}> chúi </div>
                                <div className="character" onClick={() => playAudio('chǔi')}> chǔi </div>
                                <div className="character" onClick={() => playAudio('chùi')}> chùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chuān')}> chuān </div>
                                <div className="character" onClick={() => playAudio('chuán')}> chuán </div>
                                <div className="character" onClick={() => playAudio('chuǎn')}> chuǎn </div>
                                <div className="character" onClick={() => playAudio('chuàn')}> chuàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chūn')}> chūn </div>
                                <div className="character" onClick={() => playAudio('chún')}> chún </div>
                                <div className="character" onClick={() => playAudio('chǔn')}> chǔn </div>
                                <div className="character" onClick={() => playAudio('chùn')}> chùn </div>
                            </div>
                        </th>    
                        <th>
                            <div className="toneGridXL">
                                <div className="character" onClick={() => playAudio('chuāng')}> chuāng </div>
                                <div className="character" onClick={() => playAudio('chuáng')}> chuáng </div>
                                <div className="character" onClick={() => playAudio('chuǎng')}> chuǎng </div>
                                <div className="character" onClick={() => playAudio('chuàng')}> chuàng </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> sh </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('shū')}> shū </div>
                                <div className="character" onClick={() => playAudio('shú')}> shú </div>
                                <div className="character" onClick={() => playAudio('shǔ')}> shǔ </div>
                                <div className="character" onClick={() => playAudio('shù')}> shù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shūa')}> shūa </div>
                                <div className="character" onClick={() => playAudio('shúa')}> shúa </div>
                                <div className="character" onClick={() => playAudio('shǔa')}> shǔa </div>
                                <div className="character" onClick={() => playAudio('shùa')}> shùa </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shuō')}> shuō </div>
                                <div className="character" onClick={() => playAudio('shuó')}> shuó </div>
                                <div className="character" onClick={() => playAudio('shuǒ')}> shuǒ </div>
                                <div className="character" onClick={() => playAudio('shuò')}> shuò </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shūai')}> shūai </div>
                                <div className="character" onClick={() => playAudio('shúai')}> shúai </div>
                                <div className="character" onClick={() => playAudio('shǔai')}> shǔai </div>
                                <div className="character" onClick={() => playAudio('shùai')}> shùai </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shūi')}> shūi </div>
                                <div className="character" onClick={() => playAudio('shúi')}> shúi </div>
                                <div className="character" onClick={() => playAudio('shǔi')}> shǔi </div>
                                <div className="character" onClick={() => playAudio('shùi')}> shùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shuān')}> shuān </div>
                                <div className="character" onClick={() => playAudio('shuán')}> shuán </div>
                                <div className="character" onClick={() => playAudio('shuǎn')}> shuǎn </div>
                                <div className="character" onClick={() => playAudio('shuàn')}> shuàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shūn')}> shūn </div>
                                <div className="character" onClick={() => playAudio('shún')}> shún </div>
                                <div className="character" onClick={() => playAudio('shǔn')}> shǔn </div>
                                <div className="character" onClick={() => playAudio('shùn')}> shùn </div>
                            </div>
                        </th>    
                        <th>
                            <div className="toneGridXL">
                                <div className="character" onClick={() => playAudio('shuāng')}> shuāng </div>
                                <div className="character" onClick={() => playAudio('shuáng')}> shuáng </div>
                                <div className="character" onClick={() => playAudio('shuǎng')}> shuǎng </div>
                                <div className="character" onClick={() => playAudio('shuàng')}> shuàng </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> r </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('rū')}> rū </div>
                                <div className="character" onClick={() => playAudio('rú')}> rú </div>
                                <div className="character" onClick={() => playAudio('rǔ')}> rǔ </div>
                                <div className="character" onClick={() => playAudio('rù')}> rù </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rūa')}> rūa </div>
                                <div className="character" onClick={() => playAudio('rúa')}> rúa </div>
                                <div className="character" onClick={() => playAudio('rǔa')}> rǔa </div>
                                <div className="character" onClick={() => playAudio('rùa')}> rùa </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('ruō')}> ruō </div>
                                <div className="character" onClick={() => playAudio('ruó')}> ruó </div>
                                <div className="character" onClick={() => playAudio('ruǒ')}> ruǒ </div>
                                <div className="character" onClick={() => playAudio('ruò')}> ruò </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rūi')}> rūi </div>
                                <div className="character" onClick={() => playAudio('rúi')}> rúi </div>
                                <div className="character" onClick={() => playAudio('rǔi')}> rǔi </div>
                                <div className="character" onClick={() => playAudio('rùi')}> rùi </div>
                            </div>
                        </th>     
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('ruān')}> ruān </div>
                                <div className="character" onClick={() => playAudio('ruán')}> ruán </div>
                                <div className="character" onClick={() => playAudio('ruǎn')}> ruǎn </div>
                                <div className="character" onClick={() => playAudio('ruàn')}> ruàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rūn')}> rūn </div>
                                <div className="character" onClick={() => playAudio('rún')}> rún </div>
                                <div className="character" onClick={() => playAudio('rǔn')}> rǔn </div>
                                <div className="character" onClick={() => playAudio('rùn')}> rùn </div>
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
export default Table12