import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table6 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>i</th><th>ia</th><th>iao</th><th>ie</th><th>iu*</th><th>ian</th><th>in</th><th>iang</th><th>ing</th><th>iong</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start">d</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dī')}> dī </div>
                            <div class="character" onClick={() => this.playAudio('dí')}> dí </div>
                            <div class="character" onClick={() => this.playAudio('dǐ')}> dǐ </div>
                            <div class="character" onClick={() => this.playAudio('dì')}> dì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('diāo')}> diāo </div>
                            <div class="character" onClick={() => this.playAudio('diáo')}> diáo </div>
                            <div class="character" onClick={() => this.playAudio('diǎo')}> diǎo </div>
                            <div class="character" onClick={() => this.playAudio('diào')}> diào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('diē')}> diē </div>
                            <div class="character" onClick={() => this.playAudio('dié')}> dié </div>
                            <div class="character" onClick={() => this.playAudio('diě')}> diě </div>
                            <div class="character" onClick={() => this.playAudio('diè')}> diè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dīu')}> dīu </div>
                            <div class="character" onClick={() => this.playAudio('díu')}> díu </div>
                            <div class="character" onClick={() => this.playAudio('dǐu')}> dǐu </div>
                            <div class="character" onClick={() => this.playAudio('dìu')}> dìu </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('diān')}> diān </div>
                            <div class="character" onClick={() => this.playAudio('dián')}> dián </div>
                            <div class="character" onClick={() => this.playAudio('diǎn')}> diǎn </div>
                            <div class="character" onClick={() => this.playAudio('diàn')}> diàn </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('dīng')}> dīng </div>
                            <div class="character" onClick={() => this.playAudio('díng')}> díng </div>
                            <div class="character" onClick={() => this.playAudio('dǐng')}> dǐng </div>
                            <div class="character" onClick={() => this.playAudio('dìng')}> dìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start">t</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tī')}> tī </div>
                            <div class="character" onClick={() => this.playAudio('tí')}> tí </div>
                            <div class="character" onClick={() => this.playAudio('tǐ')}> tǐ </div>
                            <div class="character" onClick={() => this.playAudio('tì')}> tì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('tiāo')}> tiāo </div>
                            <div class="character" onClick={() => this.playAudio('tiáo')}> tiáo </div>
                            <div class="character" onClick={() => this.playAudio('tiǎo')}> tiǎo </div>
                            <div class="character" onClick={() => this.playAudio('tiào')}> tiào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tiē')}> tiē </div>
                            <div class="character" onClick={() => this.playAudio('tié')}> tié </div>
                            <div class="character" onClick={() => this.playAudio('tiě')}> tiě </div>
                            <div class="character" onClick={() => this.playAudio('tiè')}> tiè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tiān')}> tiān </div>
                            <div class="character" onClick={() => this.playAudio('tián')}> tián </div>
                            <div class="character" onClick={() => this.playAudio('tiǎn')}> tiǎn </div>
                            <div class="character" onClick={() => this.playAudio('tiàn')}> tiàn </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('tīng')}> tīng </div>
                            <div class="character" onClick={() => this.playAudio('tíng')}> tíng </div>
                            <div class="character" onClick={() => this.playAudio('tǐng')}> tǐng </div>
                            <div class="character" onClick={() => this.playAudio('tìng')}> tìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start">n</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nī')}> nī </div>
                            <div class="character" onClick={() => this.playAudio('ní')}> ní </div>
                            <div class="character" onClick={() => this.playAudio('nǐ')}> nǐ </div>
                            <div class="character" onClick={() => this.playAudio('nì')}> nì </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('niāo')}> niāo </div>
                            <div class="character" onClick={() => this.playAudio('niáo')}> niáo </div>
                            <div class="character" onClick={() => this.playAudio('niǎo')}> niǎo </div>
                            <div class="character" onClick={() => this.playAudio('niào')}> niào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('niē')}> niē </div>
                            <div class="character" onClick={() => this.playAudio('nié')}> nié </div>
                            <div class="character" onClick={() => this.playAudio('niě')}> niě </div>
                            <div class="character" onClick={() => this.playAudio('niè')}> niè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nīu')}> nīu </div>
                            <div class="character" onClick={() => this.playAudio('níu')}> níu </div>
                            <div class="character" onClick={() => this.playAudio('nǐu')}> nǐu </div>
                            <div class="character" onClick={() => this.playAudio('nìu')}> nìu </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('niān')}> niān </div>
                            <div class="character" onClick={() => this.playAudio('nián')}> nián </div>
                            <div class="character" onClick={() => this.playAudio('niǎn')}> niǎn </div>
                            <div class="character" onClick={() => this.playAudio('niàn')}> niàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nīn')}> nīn </div>
                            <div class="character" onClick={() => this.playAudio('nín')}> nín </div>
                            <div class="character" onClick={() => this.playAudio('nǐn')}> nǐn </div>
                            <div class="character" onClick={() => this.playAudio('nìn')}> nìn </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('niāng')}> niāng </div>
                            <div class="character" onClick={() => this.playAudio('niáng')}> niáng </div>
                            <div class="character" onClick={() => this.playAudio('niǎng')}> niǎng </div>
                            <div class="character" onClick={() => this.playAudio('niàng')}> niàng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('nīng')}> nīng </div>
                            <div class="character" onClick={() => this.playAudio('níng')}> níng </div>
                            <div class="character" onClick={() => this.playAudio('nǐng')}> nǐng </div>
                            <div class="character" onClick={() => this.playAudio('nìng')}> nìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start">l</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lī')}> lī </div>
                            <div class="character" onClick={() => this.playAudio('lí')}> lí </div>
                            <div class="character" onClick={() => this.playAudio('lǐ')}> lǐ </div>
                            <div class="character" onClick={() => this.playAudio('lì')}> lì </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('liā')}> liā </div>
                            <div class="character" onClick={() => this.playAudio('liá')}> liá </div>
                            <div class="character" onClick={() => this.playAudio('liǎ')}> liǎ </div>
                            <div class="character" onClick={() => this.playAudio('lià')}> lià </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('liāo')}> liāo </div>
                            <div class="character" onClick={() => this.playAudio('liáo')}> liáo </div>
                            <div class="character" onClick={() => this.playAudio('liǎo')}> liǎo </div>
                            <div class="character" onClick={() => this.playAudio('liào')}> liào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('liē')}> liē </div>
                            <div class="character" onClick={() => this.playAudio('lié')}> lié </div>
                            <div class="character" onClick={() => this.playAudio('liě')}> liě </div>
                            <div class="character" onClick={() => this.playAudio('liè')}> liè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('līu')}> līu </div>
                            <div class="character" onClick={() => this.playAudio('líu')}> líu </div>
                            <div class="character" onClick={() => this.playAudio('lǐu')}> lǐu </div>
                            <div class="character" onClick={() => this.playAudio('lìu')}> lìu </div>
                        </div>
                    </th>   
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('liān')}> liān </div>
                            <div class="character" onClick={() => this.playAudio('lián')}> lián </div>
                            <div class="character" onClick={() => this.playAudio('liǎn')}> liǎn </div>
                            <div class="character" onClick={() => this.playAudio('liàn')}> liàn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('līn')}> līn </div>
                            <div class="character" onClick={() => this.playAudio('lín')}> lín </div>
                            <div class="character" onClick={() => this.playAudio('lǐn')}> lǐn </div>
                            <div class="character" onClick={() => this.playAudio('lìn')}> lìn </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('liāng')}> liāng </div>
                            <div class="character" onClick={() => this.playAudio('liáng')}> liáng </div>
                            <div class="character" onClick={() => this.playAudio('liǎng')}> liǎng </div>
                            <div class="character" onClick={() => this.playAudio('liàng')}> liàng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('līng')}> līng </div>
                            <div class="character" onClick={() => this.playAudio('líng')}> líng </div>
                            <div class="character" onClick={() => this.playAudio('lǐng')}> lǐng </div>
                            <div class="character" onClick={() => this.playAudio('lìng')}> lìng </div>
                        </div>
                    </th>  
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table6