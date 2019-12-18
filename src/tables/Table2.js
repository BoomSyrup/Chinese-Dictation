import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table2 extends PinYin {
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
                            <div class="character" onClick={() => this.playAudio('yī')}> yī </div>
                            <div class="character" onClick={() => this.playAudio('yí')}> yí </div>
                            <div class="character" onClick={() => this.playAudio('yǐ')}> yǐ </div>
                            <div class="character" onClick={() => this.playAudio('yì')}> yì </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yā')}> yā </div>
                            <div class="character" onClick={() => this.playAudio('yá')}> yá </div>
                            <div class="character" onClick={() => this.playAudio('yǎ')}> yǎ </div>
                            <div class="character" onClick={() => this.playAudio('yà')}> yà </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('yāo')}> yāo </div>
                            <div class="character" onClick={() => this.playAudio('yáo')}> yáo </div>
                            <div class="character" onClick={() => this.playAudio('yǎo')}> yǎo </div>
                            <div class="character" onClick={() => this.playAudio('yào')}> yào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yē')}> yē </div>
                            <div class="character" onClick={() => this.playAudio('yé')}> yé </div>
                            <div class="character" onClick={() => this.playAudio('yě')}> yě </div>
                            <div class="character" onClick={() => this.playAudio('yè')}> yè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yōu')}> yōu </div>
                            <div class="character" onClick={() => this.playAudio('yóu')}> yóu </div>
                            <div class="character" onClick={() => this.playAudio('yǒu')}> yǒu </div>
                            <div class="character" onClick={() => this.playAudio('yòu')}> yòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('yān')}> yān </div>
                            <div class="character" onClick={() => this.playAudio('yán')}> yán </div>
                            <div class="character" onClick={() => this.playAudio('yǎn')}> yǎn </div>
                            <div class="character" onClick={() => this.playAudio('yàn')}> yàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('yīn')}> yīn </div>
                            <div class="character" onClick={() => this.playAudio('yín')}> yín </div>
                            <div class="character" onClick={() => this.playAudio('yǐn')}> yǐn </div>
                            <div class="character" onClick={() => this.playAudio('yìn')}> yìn </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('yāng')}> yāng </div>
                            <div class="character" onClick={() => this.playAudio('yáng')}> yáng </div>
                            <div class="character" onClick={() => this.playAudio('yǎng')}> yǎng </div>
                            <div class="character" onClick={() => this.playAudio('yàng')}> yàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('yīng')}> yīng </div>
                            <div class="character" onClick={() => this.playAudio('yíng')}> yíng </div>
                            <div class="character" onClick={() => this.playAudio('yǐng')}> yǐng </div>
                            <div class="character" onClick={() => this.playAudio('yìng')}> yìng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('yōng')}> yōng </div>
                            <div class="character" onClick={() => this.playAudio('yóng')}> yóng </div>
                            <div class="character" onClick={() => this.playAudio('yǒng')}> yǒng </div>
                            <div class="character" onClick={() => this.playAudio('yòng')}> yòng </div>
                        </div>
                    </th> 
                </tr>
                <tr>
                    <th class="start"> b </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bī')}> bī </div>
                            <div class="character" onClick={() => this.playAudio('bí')}> bí </div>
                            <div class="character" onClick={() => this.playAudio('bǐ')}> bǐ </div>
                            <div class="character" onClick={() => this.playAudio('bì')}> bì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('biāo')}> biāo </div>
                            <div class="character" onClick={() => this.playAudio('biáo')}> biáo </div>
                            <div class="character" onClick={() => this.playAudio('biǎo')}> biǎo </div>
                            <div class="character" onClick={() => this.playAudio('biào')}> biào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('biē')}> biē </div>
                            <div class="character" onClick={() => this.playAudio('bié')}> bié </div>
                            <div class="character" onClick={() => this.playAudio('biě')}> biě </div>
                            <div class="character" onClick={() => this.playAudio('biè')}> biè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('biān')}> biān </div>
                            <div class="character" onClick={() => this.playAudio('bián')}> bián </div>
                            <div class="character" onClick={() => this.playAudio('biǎn')}> biǎn </div>
                            <div class="character" onClick={() => this.playAudio('biàn')}> biàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bīn')}> bīn </div>
                            <div class="character" onClick={() => this.playAudio('bín')}> bín </div>
                            <div class="character" onClick={() => this.playAudio('bǐn')}> bǐn </div>
                            <div class="character" onClick={() => this.playAudio('bìn')}> bìn </div>
                        </div>
                    </th> 
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('bīng')}> bīng </div>
                            <div class="character" onClick={() => this.playAudio('bíng')}> bíng </div>
                            <div class="character" onClick={() => this.playAudio('bǐng')}> bǐng </div>
                            <div class="character" onClick={() => this.playAudio('bìng')}> bìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> p </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pī')}> pī </div>
                            <div class="character" onClick={() => this.playAudio('pí')}> pí </div>
                            <div class="character" onClick={() => this.playAudio('pǐ')}> pǐ </div>
                            <div class="character" onClick={() => this.playAudio('pì')}> pì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('piāo')}> piāo </div>
                            <div class="character" onClick={() => this.playAudio('piáo')}> piáo </div>
                            <div class="character" onClick={() => this.playAudio('piǎo')}> piǎo </div>
                            <div class="character" onClick={() => this.playAudio('piào')}> piào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('piē')}> piē </div>
                            <div class="character" onClick={() => this.playAudio('pié')}> pié </div>
                            <div class="character" onClick={() => this.playAudio('piě')}> piě </div>
                            <div class="character" onClick={() => this.playAudio('piè')}> piè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('piān')}> piān </div>
                            <div class="character" onClick={() => this.playAudio('pián')}> pián </div>
                            <div class="character" onClick={() => this.playAudio('piǎn')}> piǎn </div>
                            <div class="character" onClick={() => this.playAudio('piàn')}> piàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pīn')}> pīn </div>
                            <div class="character" onClick={() => this.playAudio('pín')}> pín </div>
                            <div class="character" onClick={() => this.playAudio('pǐn')}> pǐn </div>
                            <div class="character" onClick={() => this.playAudio('pìn')}> pìn </div>
                        </div>
                    </th> 
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('pīng')}> pīng </div>
                            <div class="character" onClick={() => this.playAudio('píng')}> píng </div>
                            <div class="character" onClick={() => this.playAudio('pǐng')}> pǐng </div>
                            <div class="character" onClick={() => this.playAudio('pìng')}> pìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> m </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mī')}> mī </div>
                            <div class="character" onClick={() => this.playAudio('mí')}> mí </div>
                            <div class="character" onClick={() => this.playAudio('mǐ')}> mǐ </div>
                            <div class="character" onClick={() => this.playAudio('mì')}> mì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('miāo')}> miāo </div>
                            <div class="character" onClick={() => this.playAudio('miáo')}> miáo </div>
                            <div class="character" onClick={() => this.playAudio('miǎo')}> miǎo </div>
                            <div class="character" onClick={() => this.playAudio('miào')}> miào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('miē')}> miē </div>
                            <div class="character" onClick={() => this.playAudio('mié')}> mié </div>
                            <div class="character" onClick={() => this.playAudio('miě')}> miě </div>
                            <div class="character" onClick={() => this.playAudio('miè')}> miè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mīu')}> mīu </div>
                            <div class="character" onClick={() => this.playAudio('míu')}> míu </div>
                            <div class="character" onClick={() => this.playAudio('mǐu')}> mǐu </div>
                            <div class="character" onClick={() => this.playAudio('mìu')}> mìu </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('miān')}> miān </div>
                            <div class="character" onClick={() => this.playAudio('mián')}> mián </div>
                            <div class="character" onClick={() => this.playAudio('miǎn')}> miǎn </div>
                            <div class="character" onClick={() => this.playAudio('miàn')}> miàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mīn')}> mīn </div>
                            <div class="character" onClick={() => this.playAudio('mín')}> mín </div>
                            <div class="character" onClick={() => this.playAudio('mǐn')}> mǐn </div>
                            <div class="character" onClick={() => this.playAudio('mìn')}> mìn </div>
                        </div>
                    </th> 
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('mīng')}> mīng </div>
                            <div class="character" onClick={() => this.playAudio('míng')}> míng </div>
                            <div class="character" onClick={() => this.playAudio('mǐng')}> mǐng </div>
                            <div class="character" onClick={() => this.playAudio('mìng')}> mìng </div>
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