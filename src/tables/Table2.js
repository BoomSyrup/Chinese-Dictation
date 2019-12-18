import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';

class Table2 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>i</th><th>ia</th><th>iao</th><th>ie</th><th>iu*</th><th>ian</th><th>in</th><th>iang</th><th>ing</th><th>iong</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <th className="start"></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yī')}> yī </div>
                                <div className="character" onClick={() => playAudio('yí')}> yí </div>
                                <div className="character" onClick={() => playAudio('yǐ')}> yǐ </div>
                                <div className="character" onClick={() => playAudio('yì')}> yì </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yā')}> yā </div>
                                <div className="character" onClick={() => playAudio('yá')}> yá </div>
                                <div className="character" onClick={() => playAudio('yǎ')}> yǎ </div>
                                <div className="character" onClick={() => playAudio('yà')}> yà </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('yāo')}> yāo </div>
                                <div className="character" onClick={() => playAudio('yáo')}> yáo </div>
                                <div className="character" onClick={() => playAudio('yǎo')}> yǎo </div>
                                <div className="character" onClick={() => playAudio('yào')}> yào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yē')}> yē </div>
                                <div className="character" onClick={() => playAudio('yé')}> yé </div>
                                <div className="character" onClick={() => playAudio('yě')}> yě </div>
                                <div className="character" onClick={() => playAudio('yè')}> yè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yōu')}> yōu </div>
                                <div className="character" onClick={() => playAudio('yóu')}> yóu </div>
                                <div className="character" onClick={() => playAudio('yǒu')}> yǒu </div>
                                <div className="character" onClick={() => playAudio('yòu')}> yòu </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('yān')}> yān </div>
                                <div className="character" onClick={() => playAudio('yán')}> yán </div>
                                <div className="character" onClick={() => playAudio('yǎn')}> yǎn </div>
                                <div className="character" onClick={() => playAudio('yàn')}> yàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('yīn')}> yīn </div>
                                <div className="character" onClick={() => playAudio('yín')}> yín </div>
                                <div className="character" onClick={() => playAudio('yǐn')}> yǐn </div>
                                <div className="character" onClick={() => playAudio('yìn')}> yìn </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('yāng')}> yāng </div>
                                <div className="character" onClick={() => playAudio('yáng')}> yáng </div>
                                <div className="character" onClick={() => playAudio('yǎng')}> yǎng </div>
                                <div className="character" onClick={() => playAudio('yàng')}> yàng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('yīng')}> yīng </div>
                                <div className="character" onClick={() => playAudio('yíng')}> yíng </div>
                                <div className="character" onClick={() => playAudio('yǐng')}> yǐng </div>
                                <div className="character" onClick={() => playAudio('yìng')}> yìng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('yōng')}> yōng </div>
                                <div className="character" onClick={() => playAudio('yóng')}> yóng </div>
                                <div className="character" onClick={() => playAudio('yǒng')}> yǒng </div>
                                <div className="character" onClick={() => playAudio('yòng')}> yòng </div>
                            </div>
                        </th> 
                    </tr>
                    <tr>
                        <th className="start"> b </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('bī')}> bī </div>
                                <div className="character" onClick={() => playAudio('bí')}> bí </div>
                                <div className="character" onClick={() => playAudio('bǐ')}> bǐ </div>
                                <div className="character" onClick={() => playAudio('bì')}> bì </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('biāo')}> biāo </div>
                                <div className="character" onClick={() => playAudio('biáo')}> biáo </div>
                                <div className="character" onClick={() => playAudio('biǎo')}> biǎo </div>
                                <div className="character" onClick={() => playAudio('biào')}> biào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('biē')}> biē </div>
                                <div className="character" onClick={() => playAudio('bié')}> bié </div>
                                <div className="character" onClick={() => playAudio('biě')}> biě </div>
                                <div className="character" onClick={() => playAudio('biè')}> biè </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('biān')}> biān </div>
                                <div className="character" onClick={() => playAudio('bián')}> bián </div>
                                <div className="character" onClick={() => playAudio('biǎn')}> biǎn </div>
                                <div className="character" onClick={() => playAudio('biàn')}> biàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('bīn')}> bīn </div>
                                <div className="character" onClick={() => playAudio('bín')}> bín </div>
                                <div className="character" onClick={() => playAudio('bǐn')}> bǐn </div>
                                <div className="character" onClick={() => playAudio('bìn')}> bìn </div>
                            </div>
                        </th> 
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('bīng')}> bīng </div>
                                <div className="character" onClick={() => playAudio('bíng')}> bíng </div>
                                <div className="character" onClick={() => playAudio('bǐng')}> bǐng </div>
                                <div className="character" onClick={() => playAudio('bìng')}> bìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> p </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('pī')}> pī </div>
                                <div className="character" onClick={() => playAudio('pí')}> pí </div>
                                <div className="character" onClick={() => playAudio('pǐ')}> pǐ </div>
                                <div className="character" onClick={() => playAudio('pì')}> pì </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('piāo')}> piāo </div>
                                <div className="character" onClick={() => playAudio('piáo')}> piáo </div>
                                <div className="character" onClick={() => playAudio('piǎo')}> piǎo </div>
                                <div className="character" onClick={() => playAudio('piào')}> piào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('piē')}> piē </div>
                                <div className="character" onClick={() => playAudio('pié')}> pié </div>
                                <div className="character" onClick={() => playAudio('piě')}> piě </div>
                                <div className="character" onClick={() => playAudio('piè')}> piè </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('piān')}> piān </div>
                                <div className="character" onClick={() => playAudio('pián')}> pián </div>
                                <div className="character" onClick={() => playAudio('piǎn')}> piǎn </div>
                                <div className="character" onClick={() => playAudio('piàn')}> piàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('pīn')}> pīn </div>
                                <div className="character" onClick={() => playAudio('pín')}> pín </div>
                                <div className="character" onClick={() => playAudio('pǐn')}> pǐn </div>
                                <div className="character" onClick={() => playAudio('pìn')}> pìn </div>
                            </div>
                        </th> 
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('pīng')}> pīng </div>
                                <div className="character" onClick={() => playAudio('píng')}> píng </div>
                                <div className="character" onClick={() => playAudio('pǐng')}> pǐng </div>
                                <div className="character" onClick={() => playAudio('pìng')}> pìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> m </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('mī')}> mī </div>
                                <div className="character" onClick={() => playAudio('mí')}> mí </div>
                                <div className="character" onClick={() => playAudio('mǐ')}> mǐ </div>
                                <div className="character" onClick={() => playAudio('mì')}> mì </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('miāo')}> miāo </div>
                                <div className="character" onClick={() => playAudio('miáo')}> miáo </div>
                                <div className="character" onClick={() => playAudio('miǎo')}> miǎo </div>
                                <div className="character" onClick={() => playAudio('miào')}> miào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('miē')}> miē </div>
                                <div className="character" onClick={() => playAudio('mié')}> mié </div>
                                <div className="character" onClick={() => playAudio('miě')}> miě </div>
                                <div className="character" onClick={() => playAudio('miè')}> miè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('mīu')}> mīu </div>
                                <div className="character" onClick={() => playAudio('míu')}> míu </div>
                                <div className="character" onClick={() => playAudio('mǐu')}> mǐu </div>
                                <div className="character" onClick={() => playAudio('mìu')}> mìu </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('miān')}> miān </div>
                                <div className="character" onClick={() => playAudio('mián')}> mián </div>
                                <div className="character" onClick={() => playAudio('miǎn')}> miǎn </div>
                                <div className="character" onClick={() => playAudio('miàn')}> miàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('mīn')}> mīn </div>
                                <div className="character" onClick={() => playAudio('mín')}> mín </div>
                                <div className="character" onClick={() => playAudio('mǐn')}> mǐn </div>
                                <div className="character" onClick={() => playAudio('mìn')}> mìn </div>
                            </div>
                        </th> 
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('mīng')}> mīng </div>
                                <div className="character" onClick={() => playAudio('míng')}> míng </div>
                                <div className="character" onClick={() => playAudio('mǐng')}> mǐng </div>
                                <div className="character" onClick={() => playAudio('mìng')}> mìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> f </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
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
export default Table2