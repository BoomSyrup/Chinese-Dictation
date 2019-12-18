import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';

class Table2 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>i</th><th>ia</th><th>iao</th><th>ie</th><th>iu*</th><th>ian</th><th>in</th><th>iang</th><th>ing</th><th>iong</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('yī')}> yī </div>
                            <div class="character" onClick={() => playAudio('yí')}> yí </div>
                            <div class="character" onClick={() => playAudio('yǐ')}> yǐ </div>
                            <div class="character" onClick={() => playAudio('yì')}> yì </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('yā')}> yā </div>
                            <div class="character" onClick={() => playAudio('yá')}> yá </div>
                            <div class="character" onClick={() => playAudio('yǎ')}> yǎ </div>
                            <div class="character" onClick={() => playAudio('yà')}> yà </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('yāo')}> yāo </div>
                            <div class="character" onClick={() => playAudio('yáo')}> yáo </div>
                            <div class="character" onClick={() => playAudio('yǎo')}> yǎo </div>
                            <div class="character" onClick={() => playAudio('yào')}> yào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('yē')}> yē </div>
                            <div class="character" onClick={() => playAudio('yé')}> yé </div>
                            <div class="character" onClick={() => playAudio('yě')}> yě </div>
                            <div class="character" onClick={() => playAudio('yè')}> yè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('yōu')}> yōu </div>
                            <div class="character" onClick={() => playAudio('yóu')}> yóu </div>
                            <div class="character" onClick={() => playAudio('yǒu')}> yǒu </div>
                            <div class="character" onClick={() => playAudio('yòu')}> yòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('yān')}> yān </div>
                            <div class="character" onClick={() => playAudio('yán')}> yán </div>
                            <div class="character" onClick={() => playAudio('yǎn')}> yǎn </div>
                            <div class="character" onClick={() => playAudio('yàn')}> yàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('yīn')}> yīn </div>
                            <div class="character" onClick={() => playAudio('yín')}> yín </div>
                            <div class="character" onClick={() => playAudio('yǐn')}> yǐn </div>
                            <div class="character" onClick={() => playAudio('yìn')}> yìn </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('yāng')}> yāng </div>
                            <div class="character" onClick={() => playAudio('yáng')}> yáng </div>
                            <div class="character" onClick={() => playAudio('yǎng')}> yǎng </div>
                            <div class="character" onClick={() => playAudio('yàng')}> yàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('yīng')}> yīng </div>
                            <div class="character" onClick={() => playAudio('yíng')}> yíng </div>
                            <div class="character" onClick={() => playAudio('yǐng')}> yǐng </div>
                            <div class="character" onClick={() => playAudio('yìng')}> yìng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('yōng')}> yōng </div>
                            <div class="character" onClick={() => playAudio('yóng')}> yóng </div>
                            <div class="character" onClick={() => playAudio('yǒng')}> yǒng </div>
                            <div class="character" onClick={() => playAudio('yòng')}> yòng </div>
                        </div>
                    </th> 
                </tr>
                <tr>
                    <th class="start"> b </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('bī')}> bī </div>
                            <div class="character" onClick={() => playAudio('bí')}> bí </div>
                            <div class="character" onClick={() => playAudio('bǐ')}> bǐ </div>
                            <div class="character" onClick={() => playAudio('bì')}> bì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('biāo')}> biāo </div>
                            <div class="character" onClick={() => playAudio('biáo')}> biáo </div>
                            <div class="character" onClick={() => playAudio('biǎo')}> biǎo </div>
                            <div class="character" onClick={() => playAudio('biào')}> biào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('biē')}> biē </div>
                            <div class="character" onClick={() => playAudio('bié')}> bié </div>
                            <div class="character" onClick={() => playAudio('biě')}> biě </div>
                            <div class="character" onClick={() => playAudio('biè')}> biè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('biān')}> biān </div>
                            <div class="character" onClick={() => playAudio('bián')}> bián </div>
                            <div class="character" onClick={() => playAudio('biǎn')}> biǎn </div>
                            <div class="character" onClick={() => playAudio('biàn')}> biàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('bīn')}> bīn </div>
                            <div class="character" onClick={() => playAudio('bín')}> bín </div>
                            <div class="character" onClick={() => playAudio('bǐn')}> bǐn </div>
                            <div class="character" onClick={() => playAudio('bìn')}> bìn </div>
                        </div>
                    </th> 
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('bīng')}> bīng </div>
                            <div class="character" onClick={() => playAudio('bíng')}> bíng </div>
                            <div class="character" onClick={() => playAudio('bǐng')}> bǐng </div>
                            <div class="character" onClick={() => playAudio('bìng')}> bìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> p </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('pī')}> pī </div>
                            <div class="character" onClick={() => playAudio('pí')}> pí </div>
                            <div class="character" onClick={() => playAudio('pǐ')}> pǐ </div>
                            <div class="character" onClick={() => playAudio('pì')}> pì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('piāo')}> piāo </div>
                            <div class="character" onClick={() => playAudio('piáo')}> piáo </div>
                            <div class="character" onClick={() => playAudio('piǎo')}> piǎo </div>
                            <div class="character" onClick={() => playAudio('piào')}> piào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('piē')}> piē </div>
                            <div class="character" onClick={() => playAudio('pié')}> pié </div>
                            <div class="character" onClick={() => playAudio('piě')}> piě </div>
                            <div class="character" onClick={() => playAudio('piè')}> piè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('piān')}> piān </div>
                            <div class="character" onClick={() => playAudio('pián')}> pián </div>
                            <div class="character" onClick={() => playAudio('piǎn')}> piǎn </div>
                            <div class="character" onClick={() => playAudio('piàn')}> piàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('pīn')}> pīn </div>
                            <div class="character" onClick={() => playAudio('pín')}> pín </div>
                            <div class="character" onClick={() => playAudio('pǐn')}> pǐn </div>
                            <div class="character" onClick={() => playAudio('pìn')}> pìn </div>
                        </div>
                    </th> 
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('pīng')}> pīng </div>
                            <div class="character" onClick={() => playAudio('píng')}> píng </div>
                            <div class="character" onClick={() => playAudio('pǐng')}> pǐng </div>
                            <div class="character" onClick={() => playAudio('pìng')}> pìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> m </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('mī')}> mī </div>
                            <div class="character" onClick={() => playAudio('mí')}> mí </div>
                            <div class="character" onClick={() => playAudio('mǐ')}> mǐ </div>
                            <div class="character" onClick={() => playAudio('mì')}> mì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('miāo')}> miāo </div>
                            <div class="character" onClick={() => playAudio('miáo')}> miáo </div>
                            <div class="character" onClick={() => playAudio('miǎo')}> miǎo </div>
                            <div class="character" onClick={() => playAudio('miào')}> miào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('miē')}> miē </div>
                            <div class="character" onClick={() => playAudio('mié')}> mié </div>
                            <div class="character" onClick={() => playAudio('miě')}> miě </div>
                            <div class="character" onClick={() => playAudio('miè')}> miè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('mīu')}> mīu </div>
                            <div class="character" onClick={() => playAudio('míu')}> míu </div>
                            <div class="character" onClick={() => playAudio('mǐu')}> mǐu </div>
                            <div class="character" onClick={() => playAudio('mìu')}> mìu </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('miān')}> miān </div>
                            <div class="character" onClick={() => playAudio('mián')}> mián </div>
                            <div class="character" onClick={() => playAudio('miǎn')}> miǎn </div>
                            <div class="character" onClick={() => playAudio('miàn')}> miàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => playAudio('mīn')}> mīn </div>
                            <div class="character" onClick={() => playAudio('mín')}> mín </div>
                            <div class="character" onClick={() => playAudio('mǐn')}> mǐn </div>
                            <div class="character" onClick={() => playAudio('mìn')}> mìn </div>
                        </div>
                    </th> 
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => playAudio('mīng')}> mīng </div>
                            <div class="character" onClick={() => playAudio('míng')}> míng </div>
                            <div class="character" onClick={() => playAudio('mǐng')}> mǐng </div>
                            <div class="character" onClick={() => playAudio('mìng')}> mìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> f </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
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
export default Table2