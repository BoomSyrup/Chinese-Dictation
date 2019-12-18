import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table6 extends React.Component {
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
                        <th className="start">d</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('dī')}> dī </div>
                                <div className="character" onClick={() => playAudio('dí')}> dí </div>
                                <div className="character" onClick={() => playAudio('dǐ')}> dǐ </div>
                                <div className="character" onClick={() => playAudio('dì')}> dì </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('diāo')}> diāo </div>
                                <div className="character" onClick={() => playAudio('diáo')}> diáo </div>
                                <div className="character" onClick={() => playAudio('diǎo')}> diǎo </div>
                                <div className="character" onClick={() => playAudio('diào')}> diào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('diē')}> diē </div>
                                <div className="character" onClick={() => playAudio('dié')}> dié </div>
                                <div className="character" onClick={() => playAudio('diě')}> diě </div>
                                <div className="character" onClick={() => playAudio('diè')}> diè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('dīu')}> dīu </div>
                                <div className="character" onClick={() => playAudio('díu')}> díu </div>
                                <div className="character" onClick={() => playAudio('dǐu')}> dǐu </div>
                                <div className="character" onClick={() => playAudio('dìu')}> dìu </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('diān')}> diān </div>
                                <div className="character" onClick={() => playAudio('dián')}> dián </div>
                                <div className="character" onClick={() => playAudio('diǎn')}> diǎn </div>
                                <div className="character" onClick={() => playAudio('diàn')}> diàn </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('dīng')}> dīng </div>
                                <div className="character" onClick={() => playAudio('díng')}> díng </div>
                                <div className="character" onClick={() => playAudio('dǐng')}> dǐng </div>
                                <div className="character" onClick={() => playAudio('dìng')}> dìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start">t</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tī')}> tī </div>
                                <div className="character" onClick={() => playAudio('tí')}> tí </div>
                                <div className="character" onClick={() => playAudio('tǐ')}> tǐ </div>
                                <div className="character" onClick={() => playAudio('tì')}> tì </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('tiāo')}> tiāo </div>
                                <div className="character" onClick={() => playAudio('tiáo')}> tiáo </div>
                                <div className="character" onClick={() => playAudio('tiǎo')}> tiǎo </div>
                                <div className="character" onClick={() => playAudio('tiào')}> tiào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tiē')}> tiē </div>
                                <div className="character" onClick={() => playAudio('tié')}> tié </div>
                                <div className="character" onClick={() => playAudio('tiě')}> tiě </div>
                                <div className="character" onClick={() => playAudio('tiè')}> tiè </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('tiān')}> tiān </div>
                                <div className="character" onClick={() => playAudio('tián')}> tián </div>
                                <div className="character" onClick={() => playAudio('tiǎn')}> tiǎn </div>
                                <div className="character" onClick={() => playAudio('tiàn')}> tiàn </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('tīng')}> tīng </div>
                                <div className="character" onClick={() => playAudio('tíng')}> tíng </div>
                                <div className="character" onClick={() => playAudio('tǐng')}> tǐng </div>
                                <div className="character" onClick={() => playAudio('tìng')}> tìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start">n</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('nī')}> nī </div>
                                <div className="character" onClick={() => playAudio('ní')}> ní </div>
                                <div className="character" onClick={() => playAudio('nǐ')}> nǐ </div>
                                <div className="character" onClick={() => playAudio('nì')}> nì </div>
                            </div>
                        </th>                        
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('niāo')}> niāo </div>
                                <div className="character" onClick={() => playAudio('niáo')}> niáo </div>
                                <div className="character" onClick={() => playAudio('niǎo')}> niǎo </div>
                                <div className="character" onClick={() => playAudio('niào')}> niào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('niē')}> niē </div>
                                <div className="character" onClick={() => playAudio('nié')}> nié </div>
                                <div className="character" onClick={() => playAudio('niě')}> niě </div>
                                <div className="character" onClick={() => playAudio('niè')}> niè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('nīu')}> nīu </div>
                                <div className="character" onClick={() => playAudio('níu')}> níu </div>
                                <div className="character" onClick={() => playAudio('nǐu')}> nǐu </div>
                                <div className="character" onClick={() => playAudio('nìu')}> nìu </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('niān')}> niān </div>
                                <div className="character" onClick={() => playAudio('nián')}> nián </div>
                                <div className="character" onClick={() => playAudio('niǎn')}> niǎn </div>
                                <div className="character" onClick={() => playAudio('niàn')}> niàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('nīn')}> nīn </div>
                                <div className="character" onClick={() => playAudio('nín')}> nín </div>
                                <div className="character" onClick={() => playAudio('nǐn')}> nǐn </div>
                                <div className="character" onClick={() => playAudio('nìn')}> nìn </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('niāng')}> niāng </div>
                                <div className="character" onClick={() => playAudio('niáng')}> niáng </div>
                                <div className="character" onClick={() => playAudio('niǎng')}> niǎng </div>
                                <div className="character" onClick={() => playAudio('niàng')}> niàng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('nīng')}> nīng </div>
                                <div className="character" onClick={() => playAudio('níng')}> níng </div>
                                <div className="character" onClick={() => playAudio('nǐng')}> nǐng </div>
                                <div className="character" onClick={() => playAudio('nìng')}> nìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start">l</th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('lī')}> lī </div>
                                <div className="character" onClick={() => playAudio('lí')}> lí </div>
                                <div className="character" onClick={() => playAudio('lǐ')}> lǐ </div>
                                <div className="character" onClick={() => playAudio('lì')}> lì </div>
                            </div>
                        </th>                        
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('liā')}> liā </div>
                                <div className="character" onClick={() => playAudio('liá')}> liá </div>
                                <div className="character" onClick={() => playAudio('liǎ')}> liǎ </div>
                                <div className="character" onClick={() => playAudio('lià')}> lià </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('liāo')}> liāo </div>
                                <div className="character" onClick={() => playAudio('liáo')}> liáo </div>
                                <div className="character" onClick={() => playAudio('liǎo')}> liǎo </div>
                                <div className="character" onClick={() => playAudio('liào')}> liào </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('liē')}> liē </div>
                                <div className="character" onClick={() => playAudio('lié')}> lié </div>
                                <div className="character" onClick={() => playAudio('liě')}> liě </div>
                                <div className="character" onClick={() => playAudio('liè')}> liè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('līu')}> līu </div>
                                <div className="character" onClick={() => playAudio('líu')}> líu </div>
                                <div className="character" onClick={() => playAudio('lǐu')}> lǐu </div>
                                <div className="character" onClick={() => playAudio('lìu')}> lìu </div>
                            </div>
                        </th>   
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('liān')}> liān </div>
                                <div className="character" onClick={() => playAudio('lián')}> lián </div>
                                <div className="character" onClick={() => playAudio('liǎn')}> liǎn </div>
                                <div className="character" onClick={() => playAudio('liàn')}> liàn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('līn')}> līn </div>
                                <div className="character" onClick={() => playAudio('lín')}> lín </div>
                                <div className="character" onClick={() => playAudio('lǐn')}> lǐn </div>
                                <div className="character" onClick={() => playAudio('lìn')}> lìn </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('liāng')}> liāng </div>
                                <div className="character" onClick={() => playAudio('liáng')}> liáng </div>
                                <div className="character" onClick={() => playAudio('liǎng')}> liǎng </div>
                                <div className="character" onClick={() => playAudio('liàng')}> liàng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('līng')}> līng </div>
                                <div className="character" onClick={() => playAudio('líng')}> líng </div>
                                <div className="character" onClick={() => playAudio('lǐng')}> lǐng </div>
                                <div className="character" onClick={() => playAudio('lìng')}> lìng </div>
                            </div>
                        </th>  
                        <th><div className="blank"></div></th>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table6