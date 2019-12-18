import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table11 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <th className="start"> zh </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zhā')}> zhā </div>
                                <div className="character" onClick={() => playAudio('zhá')}> zhá </div>
                                <div className="character" onClick={() => playAudio('zhă')}> zhă </div>
                                <div className="character" onClick={() => playAudio('zhà')}> zhà </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zhē')}> zhē </div>
                                <div className="character" onClick={() => playAudio('zhé')}> zhé </div>
                                <div className="character" onClick={() => playAudio('zhě')}> zhě </div>
                                <div className="character" onClick={() => playAudio('zhè')}> zhè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zhī')}> zhī </div>
                                <div className="character" onClick={() => playAudio('zhí')}> zhí </div>
                                <div className="character" onClick={() => playAudio('zhǐ')}> zhǐ </div>
                                <div className="character" onClick={() => playAudio('zhì')}> zhì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhāi')}> zhāi </div>
                                <div className="character" onClick={() => playAudio('zhái')}> zhái </div>
                                <div className="character" onClick={() => playAudio('zhăi')}> zhăi </div>
                                <div className="character" onClick={() => playAudio('zhài')}> zhài </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhēi')}> zhēi </div>
                                <div className="character" onClick={() => playAudio('zhéi')}> zhéi </div>
                                <div className="character" onClick={() => playAudio('zhěi')}> zhěi </div>
                                <div className="character" onClick={() => playAudio('zhèi')}> zhèi </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhāo')}> zhāo </div>
                                <div className="character" onClick={() => playAudio('zháo')}> zháo </div>
                                <div className="character" onClick={() => playAudio('zhăo')}> zhăo </div>
                                <div className="character" onClick={() => playAudio('zhào')}> zhào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhōu')}> zhōu </div>
                                <div className="character" onClick={() => playAudio('zhóu')}> zhóu </div>
                                <div className="character" onClick={() => playAudio('zhŏu')}> zhŏu </div>
                                <div className="character" onClick={() => playAudio('zhòu')}> zhòu </div>
                            </div> 
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhān')}> zhān </div>
                                <div className="character" onClick={() => playAudio('zhán')}> zhán </div>
                                <div className="character" onClick={() => playAudio('zhăn')}> zhăn </div>
                                <div className="character" onClick={() => playAudio('zhàn')}> zhàn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhēn')}> zhēn </div>
                                <div className="character" onClick={() => playAudio('zhén')}> zhén </div>
                                <div className="character" onClick={() => playAudio('zhěn')}> zhěn </div>
                                <div className="character" onClick={() => playAudio('zhèn')}> zhèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhāng')}> zhāng </div>
                                <div className="character" onClick={() => playAudio('zháng')}> zháng </div>
                                <div className="character" onClick={() => playAudio('zhăng')}> zhăng </div>
                                <div className="character" onClick={() => playAudio('zhàng')}> zhàng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhēng')}> zhēng </div>
                                <div className="character" onClick={() => playAudio('zhéng')}> zhéng </div>
                                <div className="character" onClick={() => playAudio('zhěng')}> zhěng </div>
                                <div className="character" onClick={() => playAudio('zhèng')}> zhèng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zhōng')}> zhōng </div>
                                <div className="character" onClick={() => playAudio('zhóng')}> zhóng </div>
                                <div className="character" onClick={() => playAudio('zhŏng')}> zhŏng </div>
                                <div className="character" onClick={() => playAudio('zhòng')}> zhòng </div>
                            </div>
                        </th> 
                    </tr>
                    <tr>
                        <th className="start"> ch </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('chā')}> chā </div>
                                <div className="character" onClick={() => playAudio('chá')}> chá </div>
                                <div className="character" onClick={() => playAudio('chă')}> chă </div>
                                <div className="character" onClick={() => playAudio('chà')}> chà </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('chē')}> chē </div>
                                <div className="character" onClick={() => playAudio('ché')}> ché </div>
                                <div className="character" onClick={() => playAudio('chě')}> chě </div>
                                <div className="character" onClick={() => playAudio('chè')}> chè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('chī')}> chī </div>
                                <div className="character" onClick={() => playAudio('chí')}> chí </div>
                                <div className="character" onClick={() => playAudio('chǐ')}> chǐ </div>
                                <div className="character" onClick={() => playAudio('chì')}> chì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chāi')}> chāi </div>
                                <div className="character" onClick={() => playAudio('chái')}> chái </div>
                                <div className="character" onClick={() => playAudio('chăi')}> chăi </div>
                                <div className="character" onClick={() => playAudio('chài')}> chài </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chāo')}> chāo </div>
                                <div className="character" onClick={() => playAudio('cháo')}> cháo </div>
                                <div className="character" onClick={() => playAudio('chăo')}> chăo </div>
                                <div className="character" onClick={() => playAudio('chào')}> chào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chōu')}> chōu </div>
                                <div className="character" onClick={() => playAudio('chóu')}> chóu </div>
                                <div className="character" onClick={() => playAudio('chŏu')}> chŏu </div>
                                <div className="character" onClick={() => playAudio('chòu')}> chòu </div>
                            </div> 
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chān')}> chān </div>
                                <div className="character" onClick={() => playAudio('chán')}> chán </div>
                                <div className="character" onClick={() => playAudio('chăn')}> chăn </div>
                                <div className="character" onClick={() => playAudio('chàn')}> chàn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chēn')}> chēn </div>
                                <div className="character" onClick={() => playAudio('chén')}> chén </div>
                                <div className="character" onClick={() => playAudio('chěn')}> chěn </div>
                                <div className="character" onClick={() => playAudio('chèn')}> chèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chāng')}> chāng </div>
                                <div className="character" onClick={() => playAudio('cháng')}> cháng </div>
                                <div className="character" onClick={() => playAudio('chăng')}> chăng </div>
                                <div className="character" onClick={() => playAudio('chàng')}> chàng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chēng')}> chēng </div>
                                <div className="character" onClick={() => playAudio('chéng')}> chéng </div>
                                <div className="character" onClick={() => playAudio('chěng')}> chěng </div>
                                <div className="character" onClick={() => playAudio('chèng')}> chèng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('chōng')}> chōng </div>
                                <div className="character" onClick={() => playAudio('chóng')}> chóng </div>
                                <div className="character" onClick={() => playAudio('chŏng')}> chŏng </div>
                                <div className="character" onClick={() => playAudio('chòng')}> chòng </div>
                            </div>
                        </th> 
                    </tr>
                    <tr>
                        <th className="start"> sh </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('shā')}> shā </div>
                                <div className="character" onClick={() => playAudio('shá')}> shá </div>
                                <div className="character" onClick={() => playAudio('shă')}> shă </div>
                                <div className="character" onClick={() => playAudio('shà')}> shà </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('shē')}> shē </div>
                                <div className="character" onClick={() => playAudio('shé')}> shé </div>
                                <div className="character" onClick={() => playAudio('shě')}> shě </div>
                                <div className="character" onClick={() => playAudio('shè')}> shè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('shī')}> shī </div>
                                <div className="character" onClick={() => playAudio('shí')}> shí </div>
                                <div className="character" onClick={() => playAudio('shǐ')}> shǐ </div>
                                <div className="character" onClick={() => playAudio('shì')}> shì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shāi')}> shāi </div>
                                <div className="character" onClick={() => playAudio('shái')}> shái </div>
                                <div className="character" onClick={() => playAudio('shăi')}> shăi </div>
                                <div className="character" onClick={() => playAudio('shài')}> shài </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shēi')}> shēi </div>
                                <div className="character" onClick={() => playAudio('shéi')}> shéi </div>
                                <div className="character" onClick={() => playAudio('shěi')}> shěi </div>
                                <div className="character" onClick={() => playAudio('shèi')}> shèi </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shāo')}> shāo </div>
                                <div className="character" onClick={() => playAudio('sháo')}> sháo </div>
                                <div className="character" onClick={() => playAudio('shăo')}> shăo </div>
                                <div className="character" onClick={() => playAudio('shào')}> shào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shōu')}> shōu </div>
                                <div className="character" onClick={() => playAudio('shóu')}> shóu </div>
                                <div className="character" onClick={() => playAudio('shŏu')}> shŏu </div>
                                <div className="character" onClick={() => playAudio('shòu')}> shòu </div>
                            </div> 
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shān')}> shān </div>
                                <div className="character" onClick={() => playAudio('shán')}> shán </div>
                                <div className="character" onClick={() => playAudio('shăn')}> shăn </div>
                                <div className="character" onClick={() => playAudio('shàn')}> shàn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shēn')}> shēn </div>
                                <div className="character" onClick={() => playAudio('shén')}> shén </div>
                                <div className="character" onClick={() => playAudio('shěn')}> shěn </div>
                                <div className="character" onClick={() => playAudio('shèn')}> shèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shāng')}> shāng </div>
                                <div className="character" onClick={() => playAudio('sháng')}> sháng </div>
                                <div className="character" onClick={() => playAudio('shăng')}> shăng </div>
                                <div className="character" onClick={() => playAudio('shàng')}> shàng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('shēng')}> shēng </div>
                                <div className="character" onClick={() => playAudio('shéng')}> shéng </div>
                                <div className="character" onClick={() => playAudio('shěng')}> shěng </div>
                                <div className="character" onClick={() => playAudio('shèng')}> shèng </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                    </tr>
                    <tr>
                        <th className="start"> r </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('rē')}> rē </div>
                                <div className="character" onClick={() => playAudio('ré')}> ré </div>
                                <div className="character" onClick={() => playAudio('rě')}> rě </div>
                                <div className="character" onClick={() => playAudio('rè')}> rè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('rī')}> rī </div>
                                <div className="character" onClick={() => playAudio('rí')}> rí </div>
                                <div className="character" onClick={() => playAudio('rǐ')}> rǐ </div>
                                <div className="character" onClick={() => playAudio('rì')}> rì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rāo')}> rāo </div>
                                <div className="character" onClick={() => playAudio('ráo')}> ráo </div>
                                <div className="character" onClick={() => playAudio('răo')}> răo </div>
                                <div className="character" onClick={() => playAudio('rào')}> rào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rōu')}> rōu </div>
                                <div className="character" onClick={() => playAudio('róu')}> róu </div>
                                <div className="character" onClick={() => playAudio('rŏu')}> rŏu </div>
                                <div className="character" onClick={() => playAudio('ròu')}> ròu </div>
                            </div> 
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rān')}> rān </div>
                                <div className="character" onClick={() => playAudio('rán')}> rán </div>
                                <div className="character" onClick={() => playAudio('răn')}> răn </div>
                                <div className="character" onClick={() => playAudio('ràn')}> ràn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rēn')}> rēn </div>
                                <div className="character" onClick={() => playAudio('rén')}> rén </div>
                                <div className="character" onClick={() => playAudio('rěn')}> rěn </div>
                                <div className="character" onClick={() => playAudio('rèn')}> rèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rāng')}> rāng </div>
                                <div className="character" onClick={() => playAudio('ráng')}> ráng </div>
                                <div className="character" onClick={() => playAudio('răng')}> răng </div>
                                <div className="character" onClick={() => playAudio('ràng')}> ràng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rēng')}> rēng </div>
                                <div className="character" onClick={() => playAudio('réng')}> réng </div>
                                <div className="character" onClick={() => playAudio('rěng')}> rěng </div>
                                <div className="character" onClick={() => playAudio('rèng')}> rèng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('rōng')}> rōng </div>
                                <div className="character" onClick={() => playAudio('róng')}> róng </div>
                                <div className="character" onClick={() => playAudio('rŏng')}> rŏng </div>
                                <div className="character" onClick={() => playAudio('ròng')}> ròng </div>
                            </div>
                        </th> 
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table11