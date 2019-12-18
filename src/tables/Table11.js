import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table11 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"> zh </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zhā')}> zhā </div>
                            <div class="character" onClick={() => this.playAudio('zhá')}> zhá </div>
                            <div class="character" onClick={() => this.playAudio('zhă')}> zhă </div>
                            <div class="character" onClick={() => this.playAudio('zhà')}> zhà </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zhē')}> zhē </div>
                            <div class="character" onClick={() => this.playAudio('zhé')}> zhé </div>
                            <div class="character" onClick={() => this.playAudio('zhě')}> zhě </div>
                            <div class="character" onClick={() => this.playAudio('zhè')}> zhè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('zhī')}> zhī </div>
                            <div class="character" onClick={() => this.playAudio('zhí')}> zhí </div>
                            <div class="character" onClick={() => this.playAudio('zhǐ')}> zhǐ </div>
                            <div class="character" onClick={() => this.playAudio('zhì')}> zhì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhāi')}> zhāi </div>
                            <div class="character" onClick={() => this.playAudio('zhái')}> zhái </div>
                            <div class="character" onClick={() => this.playAudio('zhăi')}> zhăi </div>
                            <div class="character" onClick={() => this.playAudio('zhài')}> zhài </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhēi')}> zhēi </div>
                            <div class="character" onClick={() => this.playAudio('zhéi')}> zhéi </div>
                            <div class="character" onClick={() => this.playAudio('zhěi')}> zhěi </div>
                            <div class="character" onClick={() => this.playAudio('zhèi')}> zhèi </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhāo')}> zhāo </div>
                            <div class="character" onClick={() => this.playAudio('zháo')}> zháo </div>
                            <div class="character" onClick={() => this.playAudio('zhăo')}> zhăo </div>
                            <div class="character" onClick={() => this.playAudio('zhào')}> zhào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhōu')}> zhōu </div>
                            <div class="character" onClick={() => this.playAudio('zhóu')}> zhóu </div>
                            <div class="character" onClick={() => this.playAudio('zhŏu')}> zhŏu </div>
                            <div class="character" onClick={() => this.playAudio('zhòu')}> zhòu </div>
                        </div> 
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhān')}> zhān </div>
                            <div class="character" onClick={() => this.playAudio('zhán')}> zhán </div>
                            <div class="character" onClick={() => this.playAudio('zhăn')}> zhăn </div>
                            <div class="character" onClick={() => this.playAudio('zhàn')}> zhàn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhēn')}> zhēn </div>
                            <div class="character" onClick={() => this.playAudio('zhén')}> zhén </div>
                            <div class="character" onClick={() => this.playAudio('zhěn')}> zhěn </div>
                            <div class="character" onClick={() => this.playAudio('zhèn')}> zhèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhāng')}> zhāng </div>
                            <div class="character" onClick={() => this.playAudio('zháng')}> zháng </div>
                            <div class="character" onClick={() => this.playAudio('zhăng')}> zhăng </div>
                            <div class="character" onClick={() => this.playAudio('zhàng')}> zhàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhēng')}> zhēng </div>
                            <div class="character" onClick={() => this.playAudio('zhéng')}> zhéng </div>
                            <div class="character" onClick={() => this.playAudio('zhěng')}> zhěng </div>
                            <div class="character" onClick={() => this.playAudio('zhèng')}> zhèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('zhōng')}> zhōng </div>
                            <div class="character" onClick={() => this.playAudio('zhóng')}> zhóng </div>
                            <div class="character" onClick={() => this.playAudio('zhŏng')}> zhŏng </div>
                            <div class="character" onClick={() => this.playAudio('zhòng')}> zhòng </div>
                        </div>
                    </th> 
                </tr>
                <tr>
                    <th class="start"> ch </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('chā')}> chā </div>
                            <div class="character" onClick={() => this.playAudio('chá')}> chá </div>
                            <div class="character" onClick={() => this.playAudio('chă')}> chă </div>
                            <div class="character" onClick={() => this.playAudio('chà')}> chà </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('chē')}> chē </div>
                            <div class="character" onClick={() => this.playAudio('ché')}> ché </div>
                            <div class="character" onClick={() => this.playAudio('chě')}> chě </div>
                            <div class="character" onClick={() => this.playAudio('chè')}> chè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('chī')}> chī </div>
                            <div class="character" onClick={() => this.playAudio('chí')}> chí </div>
                            <div class="character" onClick={() => this.playAudio('chǐ')}> chǐ </div>
                            <div class="character" onClick={() => this.playAudio('chì')}> chì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chāi')}> chāi </div>
                            <div class="character" onClick={() => this.playAudio('chái')}> chái </div>
                            <div class="character" onClick={() => this.playAudio('chăi')}> chăi </div>
                            <div class="character" onClick={() => this.playAudio('chài')}> chài </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chāo')}> chāo </div>
                            <div class="character" onClick={() => this.playAudio('cháo')}> cháo </div>
                            <div class="character" onClick={() => this.playAudio('chăo')}> chăo </div>
                            <div class="character" onClick={() => this.playAudio('chào')}> chào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chōu')}> chōu </div>
                            <div class="character" onClick={() => this.playAudio('chóu')}> chóu </div>
                            <div class="character" onClick={() => this.playAudio('chŏu')}> chŏu </div>
                            <div class="character" onClick={() => this.playAudio('chòu')}> chòu </div>
                        </div> 
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chān')}> chān </div>
                            <div class="character" onClick={() => this.playAudio('chán')}> chán </div>
                            <div class="character" onClick={() => this.playAudio('chăn')}> chăn </div>
                            <div class="character" onClick={() => this.playAudio('chàn')}> chàn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chēn')}> chēn </div>
                            <div class="character" onClick={() => this.playAudio('chén')}> chén </div>
                            <div class="character" onClick={() => this.playAudio('chěn')}> chěn </div>
                            <div class="character" onClick={() => this.playAudio('chèn')}> chèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chāng')}> chāng </div>
                            <div class="character" onClick={() => this.playAudio('cháng')}> cháng </div>
                            <div class="character" onClick={() => this.playAudio('chăng')}> chăng </div>
                            <div class="character" onClick={() => this.playAudio('chàng')}> chàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chēng')}> chēng </div>
                            <div class="character" onClick={() => this.playAudio('chéng')}> chéng </div>
                            <div class="character" onClick={() => this.playAudio('chěng')}> chěng </div>
                            <div class="character" onClick={() => this.playAudio('chèng')}> chèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('chōng')}> chōng </div>
                            <div class="character" onClick={() => this.playAudio('chóng')}> chóng </div>
                            <div class="character" onClick={() => this.playAudio('chŏng')}> chŏng </div>
                            <div class="character" onClick={() => this.playAudio('chòng')}> chòng </div>
                        </div>
                    </th> 
                </tr>
                <tr>
                    <th class="start"> sh </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('shā')}> shā </div>
                            <div class="character" onClick={() => this.playAudio('shá')}> shá </div>
                            <div class="character" onClick={() => this.playAudio('shă')}> shă </div>
                            <div class="character" onClick={() => this.playAudio('shà')}> shà </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('shē')}> shē </div>
                            <div class="character" onClick={() => this.playAudio('shé')}> shé </div>
                            <div class="character" onClick={() => this.playAudio('shě')}> shě </div>
                            <div class="character" onClick={() => this.playAudio('shè')}> shè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('shī')}> shī </div>
                            <div class="character" onClick={() => this.playAudio('shí')}> shí </div>
                            <div class="character" onClick={() => this.playAudio('shǐ')}> shǐ </div>
                            <div class="character" onClick={() => this.playAudio('shì')}> shì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shāi')}> shāi </div>
                            <div class="character" onClick={() => this.playAudio('shái')}> shái </div>
                            <div class="character" onClick={() => this.playAudio('shăi')}> shăi </div>
                            <div class="character" onClick={() => this.playAudio('shài')}> shài </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shēi')}> shēi </div>
                            <div class="character" onClick={() => this.playAudio('shéi')}> shéi </div>
                            <div class="character" onClick={() => this.playAudio('shěi')}> shěi </div>
                            <div class="character" onClick={() => this.playAudio('shèi')}> shèi </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shāo')}> shāo </div>
                            <div class="character" onClick={() => this.playAudio('sháo')}> sháo </div>
                            <div class="character" onClick={() => this.playAudio('shăo')}> shăo </div>
                            <div class="character" onClick={() => this.playAudio('shào')}> shào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shōu')}> shōu </div>
                            <div class="character" onClick={() => this.playAudio('shóu')}> shóu </div>
                            <div class="character" onClick={() => this.playAudio('shŏu')}> shŏu </div>
                            <div class="character" onClick={() => this.playAudio('shòu')}> shòu </div>
                        </div> 
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shān')}> shān </div>
                            <div class="character" onClick={() => this.playAudio('shán')}> shán </div>
                            <div class="character" onClick={() => this.playAudio('shăn')}> shăn </div>
                            <div class="character" onClick={() => this.playAudio('shàn')}> shàn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shēn')}> shēn </div>
                            <div class="character" onClick={() => this.playAudio('shén')}> shén </div>
                            <div class="character" onClick={() => this.playAudio('shěn')}> shěn </div>
                            <div class="character" onClick={() => this.playAudio('shèn')}> shèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shāng')}> shāng </div>
                            <div class="character" onClick={() => this.playAudio('sháng')}> sháng </div>
                            <div class="character" onClick={() => this.playAudio('shăng')}> shăng </div>
                            <div class="character" onClick={() => this.playAudio('shàng')}> shàng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('shēng')}> shēng </div>
                            <div class="character" onClick={() => this.playAudio('shéng')}> shéng </div>
                            <div class="character" onClick={() => this.playAudio('shěng')}> shěng </div>
                            <div class="character" onClick={() => this.playAudio('shèng')}> shèng </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> r </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('rē')}> rē </div>
                            <div class="character" onClick={() => this.playAudio('ré')}> ré </div>
                            <div class="character" onClick={() => this.playAudio('rě')}> rě </div>
                            <div class="character" onClick={() => this.playAudio('rè')}> rè </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('rī')}> rī </div>
                            <div class="character" onClick={() => this.playAudio('rí')}> rí </div>
                            <div class="character" onClick={() => this.playAudio('rǐ')}> rǐ </div>
                            <div class="character" onClick={() => this.playAudio('rì')}> rì </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rāo')}> rāo </div>
                            <div class="character" onClick={() => this.playAudio('ráo')}> ráo </div>
                            <div class="character" onClick={() => this.playAudio('răo')}> răo </div>
                            <div class="character" onClick={() => this.playAudio('rào')}> rào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rōu')}> rōu </div>
                            <div class="character" onClick={() => this.playAudio('róu')}> róu </div>
                            <div class="character" onClick={() => this.playAudio('rŏu')}> rŏu </div>
                            <div class="character" onClick={() => this.playAudio('ròu')}> ròu </div>
                        </div> 
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rān')}> rān </div>
                            <div class="character" onClick={() => this.playAudio('rán')}> rán </div>
                            <div class="character" onClick={() => this.playAudio('răn')}> răn </div>
                            <div class="character" onClick={() => this.playAudio('ràn')}> ràn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rēn')}> rēn </div>
                            <div class="character" onClick={() => this.playAudio('rén')}> rén </div>
                            <div class="character" onClick={() => this.playAudio('rěn')}> rěn </div>
                            <div class="character" onClick={() => this.playAudio('rèn')}> rèn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rāng')}> rāng </div>
                            <div class="character" onClick={() => this.playAudio('ráng')}> ráng </div>
                            <div class="character" onClick={() => this.playAudio('răng')}> răng </div>
                            <div class="character" onClick={() => this.playAudio('ràng')}> ràng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rēng')}> rēng </div>
                            <div class="character" onClick={() => this.playAudio('réng')}> réng </div>
                            <div class="character" onClick={() => this.playAudio('rěng')}> rěng </div>
                            <div class="character" onClick={() => this.playAudio('rèng')}> rèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('rōng')}> rōng </div>
                            <div class="character" onClick={() => this.playAudio('róng')}> róng </div>
                            <div class="character" onClick={() => this.playAudio('rŏng')}> rŏng </div>
                            <div class="character" onClick={() => this.playAudio('ròng')}> ròng </div>
                        </div>
                    </th> 
                </tr>
            </table>
        );
    }
}
export default Table11