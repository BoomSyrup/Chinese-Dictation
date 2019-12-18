import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table9 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"> z </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zā')}> zā </div>
                            <div class="character" onClick={() => this.playAudio('zá')}> zá </div>
                            <div class="character" onClick={() => this.playAudio('ză')}> ză </div>
                            <div class="character" onClick={() => this.playAudio('zà')}> zà </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zē')}> zē </div>
                            <div class="character" onClick={() => this.playAudio('zé')}> zé </div>
                            <div class="character" onClick={() => this.playAudio('zě')}> zě </div>
                            <div class="character" onClick={() => this.playAudio('zè')}> zè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zī')}> zī </div>
                            <div class="character" onClick={() => this.playAudio('zí')}> zí </div>
                            <div class="character" onClick={() => this.playAudio('zǐ')}> zǐ </div>
                            <div class="character" onClick={() => this.playAudio('zì')}> zì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zāi')}> zāi </div>
                            <div class="character" onClick={() => this.playAudio('zái')}> zái </div>
                            <div class="character" onClick={() => this.playAudio('zăi')}> zăi </div>
                            <div class="character" onClick={() => this.playAudio('zài')}> zài </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zēi')}> zēi </div>
                            <div class="character" onClick={() => this.playAudio('zéi')}> zéi </div>
                            <div class="character" onClick={() => this.playAudio('zěi')}> zěi </div>
                            <div class="character" onClick={() => this.playAudio('zèi')}> zèi </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zāo')}> zāo </div>
                            <div class="character" onClick={() => this.playAudio('záo')}> záo </div>
                            <div class="character" onClick={() => this.playAudio('zăo')}> zăo </div>
                            <div class="character" onClick={() => this.playAudio('zào')}> zào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zōu')}> zōu </div>
                            <div class="character" onClick={() => this.playAudio('zóu')}> zóu </div>
                            <div class="character" onClick={() => this.playAudio('zŏu')}> zŏu </div>
                            <div class="character" onClick={() => this.playAudio('zòu')}> zòu </div>
                        </div> 
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zān')}> zān </div>
                            <div class="character" onClick={() => this.playAudio('zán')}> zán </div>
                            <div class="character" onClick={() => this.playAudio('zăn')}> zăn </div>
                            <div class="character" onClick={() => this.playAudio('zàn')}> zàn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zēn')}> zēn </div>
                            <div class="character" onClick={() => this.playAudio('zén')}> zén </div>
                            <div class="character" onClick={() => this.playAudio('zěn')}> zěn </div>
                            <div class="character" onClick={() => this.playAudio('zèn')}> zèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zāng')}> zāng </div>
                            <div class="character" onClick={() => this.playAudio('záng')}> záng </div>
                            <div class="character" onClick={() => this.playAudio('zăng')}> zăng </div>
                            <div class="character" onClick={() => this.playAudio('zàng')}> zàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zēng')}> zēng </div>
                            <div class="character" onClick={() => this.playAudio('zéng')}> zéng </div>
                            <div class="character" onClick={() => this.playAudio('zěng')}> zěng </div>
                            <div class="character" onClick={() => this.playAudio('zèng')}> zèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zōng')}> zōng </div>
                            <div class="character" onClick={() => this.playAudio('zóng')}> zóng </div>
                            <div class="character" onClick={() => this.playAudio('zŏng')}> zŏng </div>
                            <div class="character" onClick={() => this.playAudio('zòng')}> zòng </div>
                        </div>
                    </th> 
                </tr>
                <tr>
                    <th class="start"> c </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cā')}> cā </div>
                            <div class="character" onClick={() => this.playAudio('cá')}> cá </div>
                            <div class="character" onClick={() => this.playAudio('că')}> că </div>
                            <div class="character" onClick={() => this.playAudio('cà')}> cà </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cē')}> cē </div>
                            <div class="character" onClick={() => this.playAudio('cé')}> cé </div>
                            <div class="character" onClick={() => this.playAudio('cě')}> cě </div>
                            <div class="character" onClick={() => this.playAudio('cè')}> cè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cī')}> cī </div>
                            <div class="character" onClick={() => this.playAudio('cí')}> cí </div>
                            <div class="character" onClick={() => this.playAudio('cǐ')}> cǐ </div>
                            <div class="character" onClick={() => this.playAudio('cì')}> cì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cāi')}> cāi </div>
                            <div class="character" onClick={() => this.playAudio('cái')}> cái </div>
                            <div class="character" onClick={() => this.playAudio('căi')}> căi </div>
                            <div class="character" onClick={() => this.playAudio('cài')}> cài </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cāo')}> cāo </div>
                            <div class="character" onClick={() => this.playAudio('cáo')}> cáo </div>
                            <div class="character" onClick={() => this.playAudio('căo')}> căo </div>
                            <div class="character" onClick={() => this.playAudio('cào')}> cào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cōu')}> cōu </div>
                            <div class="character" onClick={() => this.playAudio('cóu')}> cóu </div>
                            <div class="character" onClick={() => this.playAudio('cŏu')}> cŏu </div>
                            <div class="character" onClick={() => this.playAudio('còu')}> còu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cān')}> cān </div>
                            <div class="character" onClick={() => this.playAudio('cán')}> cán </div>
                            <div class="character" onClick={() => this.playAudio('căn')}> căn </div>
                            <div class="character" onClick={() => this.playAudio('càn')}> càn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('cēn')}> cēn </div>
                            <div class="character" onClick={() => this.playAudio('cén')}> cén </div>
                            <div class="character" onClick={() => this.playAudio('cěn')}> cěn </div>
                            <div class="character" onClick={() => this.playAudio('cèn')}> cèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('cāng')}> cāng </div>
                            <div class="character" onClick={() => this.playAudio('cáng')}> cáng </div>
                            <div class="character" onClick={() => this.playAudio('căng')}> căng </div>
                            <div class="character" onClick={() => this.playAudio('càng')}> càng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('cēng')}> cēng </div>
                            <div class="character" onClick={() => this.playAudio('céng')}> céng </div>
                            <div class="character" onClick={() => this.playAudio('cěng')}> cěng </div>
                            <div class="character" onClick={() => this.playAudio('cèng')}> cèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('cōng')}> cōng </div>
                            <div class="character" onClick={() => this.playAudio('cóng')}> cóng </div>
                            <div class="character" onClick={() => this.playAudio('cŏng')}> cŏng </div>
                            <div class="character" onClick={() => this.playAudio('còng')}> còng </div>
                        </div>
                    </th> 
                </tr>
                <tr>
                    <th class="start"> s </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sā')}> sā </div>
                            <div class="character" onClick={() => this.playAudio('sá')}> sá </div>
                            <div class="character" onClick={() => this.playAudio('să')}> să </div>
                            <div class="character" onClick={() => this.playAudio('sà')}> sà </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sē')}> sē </div>
                            <div class="character" onClick={() => this.playAudio('sé')}> sé </div>
                            <div class="character" onClick={() => this.playAudio('sě')}> sě </div>
                            <div class="character" onClick={() => this.playAudio('sè')}> sè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sī')}> sī </div>
                            <div class="character" onClick={() => this.playAudio('sí')}> sí </div>
                            <div class="character" onClick={() => this.playAudio('sǐ')}> sǐ </div>
                            <div class="character" onClick={() => this.playAudio('sì')}> sì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sāi')}> sāi </div>
                            <div class="character" onClick={() => this.playAudio('sái')}> sái </div>
                            <div class="character" onClick={() => this.playAudio('săi')}> săi </div>
                            <div class="character" onClick={() => this.playAudio('sài')}> sài </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sāo')}> sāo </div>
                            <div class="character" onClick={() => this.playAudio('sáo')}> sáo </div>
                            <div class="character" onClick={() => this.playAudio('săo')}> săo </div>
                            <div class="character" onClick={() => this.playAudio('sào')}> sào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sōu')}> sōu </div>
                            <div class="character" onClick={() => this.playAudio('sóu')}> sóu </div>
                            <div class="character" onClick={() => this.playAudio('sŏu')}> sŏu </div>
                            <div class="character" onClick={() => this.playAudio('sòu')}> sòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sān')}> sān </div>
                            <div class="character" onClick={() => this.playAudio('sán')}> sán </div>
                            <div class="character" onClick={() => this.playAudio('săn')}> săn </div>
                            <div class="character" onClick={() => this.playAudio('sàn')}> sàn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('sēn')}> sēn </div>
                            <div class="character" onClick={() => this.playAudio('sén')}> sén </div>
                            <div class="character" onClick={() => this.playAudio('sěn')}> sěn </div>
                            <div class="character" onClick={() => this.playAudio('sèn')}> sèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('sāng')}> sāng </div>
                            <div class="character" onClick={() => this.playAudio('sáng')}> sáng </div>
                            <div class="character" onClick={() => this.playAudio('săng')}> săng </div>
                            <div class="character" onClick={() => this.playAudio('sàng')}> sàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('sēng')}> sēng </div>
                            <div class="character" onClick={() => this.playAudio('séng')}> séng </div>
                            <div class="character" onClick={() => this.playAudio('sěng')}> sěng </div>
                            <div class="character" onClick={() => this.playAudio('sèng')}> sèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('sōng')}> sōng </div>
                            <div class="character" onClick={() => this.playAudio('sóng')}> sóng </div>
                            <div class="character" onClick={() => this.playAudio('sŏng')}> sŏng </div>
                            <div class="character" onClick={() => this.playAudio('sòng')}> sòng </div>
                        </div>
                    </th> 
                </tr>
            </table>
        );
    }
}
export default Table9