import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table9 extends React.Component {
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
                        <th className="start"> z </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zā')}> zā </div>
                                <div className="character" onClick={() => playAudio('zá')}> zá </div>
                                <div className="character" onClick={() => playAudio('ză')}> ză </div>
                                <div className="character" onClick={() => playAudio('zà')}> zà </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zē')}> zē </div>
                                <div className="character" onClick={() => playAudio('zé')}> zé </div>
                                <div className="character" onClick={() => playAudio('zě')}> zě </div>
                                <div className="character" onClick={() => playAudio('zè')}> zè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zī')}> zī </div>
                                <div className="character" onClick={() => playAudio('zí')}> zí </div>
                                <div className="character" onClick={() => playAudio('zǐ')}> zǐ </div>
                                <div className="character" onClick={() => playAudio('zì')}> zì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zāi')}> zāi </div>
                                <div className="character" onClick={() => playAudio('zái')}> zái </div>
                                <div className="character" onClick={() => playAudio('zăi')}> zăi </div>
                                <div className="character" onClick={() => playAudio('zài')}> zài </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zēi')}> zēi </div>
                                <div className="character" onClick={() => playAudio('zéi')}> zéi </div>
                                <div className="character" onClick={() => playAudio('zěi')}> zěi </div>
                                <div className="character" onClick={() => playAudio('zèi')}> zèi </div>
                            </div>
                        </th> 
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zāo')}> zāo </div>
                                <div className="character" onClick={() => playAudio('záo')}> záo </div>
                                <div className="character" onClick={() => playAudio('zăo')}> zăo </div>
                                <div className="character" onClick={() => playAudio('zào')}> zào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zōu')}> zōu </div>
                                <div className="character" onClick={() => playAudio('zóu')}> zóu </div>
                                <div className="character" onClick={() => playAudio('zŏu')}> zŏu </div>
                                <div className="character" onClick={() => playAudio('zòu')}> zòu </div>
                            </div> 
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zān')}> zān </div>
                                <div className="character" onClick={() => playAudio('zán')}> zán </div>
                                <div className="character" onClick={() => playAudio('zăn')}> zăn </div>
                                <div className="character" onClick={() => playAudio('zàn')}> zàn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('zēn')}> zēn </div>
                                <div className="character" onClick={() => playAudio('zén')}> zén </div>
                                <div className="character" onClick={() => playAudio('zěn')}> zěn </div>
                                <div className="character" onClick={() => playAudio('zèn')}> zèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zāng')}> zāng </div>
                                <div className="character" onClick={() => playAudio('záng')}> záng </div>
                                <div className="character" onClick={() => playAudio('zăng')}> zăng </div>
                                <div className="character" onClick={() => playAudio('zàng')}> zàng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zēng')}> zēng </div>
                                <div className="character" onClick={() => playAudio('zéng')}> zéng </div>
                                <div className="character" onClick={() => playAudio('zěng')}> zěng </div>
                                <div className="character" onClick={() => playAudio('zèng')}> zèng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('zōng')}> zōng </div>
                                <div className="character" onClick={() => playAudio('zóng')}> zóng </div>
                                <div className="character" onClick={() => playAudio('zŏng')}> zŏng </div>
                                <div className="character" onClick={() => playAudio('zòng')}> zòng </div>
                            </div>
                        </th> 
                    </tr>
                    <tr>
                        <th className="start"> c </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cā')}> cā </div>
                                <div className="character" onClick={() => playAudio('cá')}> cá </div>
                                <div className="character" onClick={() => playAudio('că')}> că </div>
                                <div className="character" onClick={() => playAudio('cà')}> cà </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cē')}> cē </div>
                                <div className="character" onClick={() => playAudio('cé')}> cé </div>
                                <div className="character" onClick={() => playAudio('cě')}> cě </div>
                                <div className="character" onClick={() => playAudio('cè')}> cè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cī')}> cī </div>
                                <div className="character" onClick={() => playAudio('cí')}> cí </div>
                                <div className="character" onClick={() => playAudio('cǐ')}> cǐ </div>
                                <div className="character" onClick={() => playAudio('cì')}> cì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cāi')}> cāi </div>
                                <div className="character" onClick={() => playAudio('cái')}> cái </div>
                                <div className="character" onClick={() => playAudio('căi')}> căi </div>
                                <div className="character" onClick={() => playAudio('cài')}> cài </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cāo')}> cāo </div>
                                <div className="character" onClick={() => playAudio('cáo')}> cáo </div>
                                <div className="character" onClick={() => playAudio('căo')}> căo </div>
                                <div className="character" onClick={() => playAudio('cào')}> cào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cōu')}> cōu </div>
                                <div className="character" onClick={() => playAudio('cóu')}> cóu </div>
                                <div className="character" onClick={() => playAudio('cŏu')}> cŏu </div>
                                <div className="character" onClick={() => playAudio('còu')}> còu </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cān')}> cān </div>
                                <div className="character" onClick={() => playAudio('cán')}> cán </div>
                                <div className="character" onClick={() => playAudio('căn')}> căn </div>
                                <div className="character" onClick={() => playAudio('càn')}> càn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('cēn')}> cēn </div>
                                <div className="character" onClick={() => playAudio('cén')}> cén </div>
                                <div className="character" onClick={() => playAudio('cěn')}> cěn </div>
                                <div className="character" onClick={() => playAudio('cèn')}> cèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('cāng')}> cāng </div>
                                <div className="character" onClick={() => playAudio('cáng')}> cáng </div>
                                <div className="character" onClick={() => playAudio('căng')}> căng </div>
                                <div className="character" onClick={() => playAudio('càng')}> càng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('cēng')}> cēng </div>
                                <div className="character" onClick={() => playAudio('céng')}> céng </div>
                                <div className="character" onClick={() => playAudio('cěng')}> cěng </div>
                                <div className="character" onClick={() => playAudio('cèng')}> cèng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('cōng')}> cōng </div>
                                <div className="character" onClick={() => playAudio('cóng')}> cóng </div>
                                <div className="character" onClick={() => playAudio('cŏng')}> cŏng </div>
                                <div className="character" onClick={() => playAudio('còng')}> còng </div>
                            </div>
                        </th> 
                    </tr>
                    <tr>
                        <th className="start"> s </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sā')}> sā </div>
                                <div className="character" onClick={() => playAudio('sá')}> sá </div>
                                <div className="character" onClick={() => playAudio('să')}> să </div>
                                <div className="character" onClick={() => playAudio('sà')}> sà </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sē')}> sē </div>
                                <div className="character" onClick={() => playAudio('sé')}> sé </div>
                                <div className="character" onClick={() => playAudio('sě')}> sě </div>
                                <div className="character" onClick={() => playAudio('sè')}> sè </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sī')}> sī </div>
                                <div className="character" onClick={() => playAudio('sí')}> sí </div>
                                <div className="character" onClick={() => playAudio('sǐ')}> sǐ </div>
                                <div className="character" onClick={() => playAudio('sì')}> sì </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sāi')}> sāi </div>
                                <div className="character" onClick={() => playAudio('sái')}> sái </div>
                                <div className="character" onClick={() => playAudio('săi')}> săi </div>
                                <div className="character" onClick={() => playAudio('sài')}> sài </div>
                            </div>
                        </th>
                        <th><div className="blank"></div></th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sāo')}> sāo </div>
                                <div className="character" onClick={() => playAudio('sáo')}> sáo </div>
                                <div className="character" onClick={() => playAudio('săo')}> săo </div>
                                <div className="character" onClick={() => playAudio('sào')}> sào </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sōu')}> sōu </div>
                                <div className="character" onClick={() => playAudio('sóu')}> sóu </div>
                                <div className="character" onClick={() => playAudio('sŏu')}> sŏu </div>
                                <div className="character" onClick={() => playAudio('sòu')}> sòu </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sān')}> sān </div>
                                <div className="character" onClick={() => playAudio('sán')}> sán </div>
                                <div className="character" onClick={() => playAudio('săn')}> săn </div>
                                <div className="character" onClick={() => playAudio('sàn')}> sàn </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGrid">
                                <div className="character" onClick={() => playAudio('sēn')}> sēn </div>
                                <div className="character" onClick={() => playAudio('sén')}> sén </div>
                                <div className="character" onClick={() => playAudio('sěn')}> sěn </div>
                                <div className="character" onClick={() => playAudio('sèn')}> sèn </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('sāng')}> sāng </div>
                                <div className="character" onClick={() => playAudio('sáng')}> sáng </div>
                                <div className="character" onClick={() => playAudio('săng')}> săng </div>
                                <div className="character" onClick={() => playAudio('sàng')}> sàng </div>
                            </div>
                        </th>  
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('sēng')}> sēng </div>
                                <div className="character" onClick={() => playAudio('séng')}> séng </div>
                                <div className="character" onClick={() => playAudio('sěng')}> sěng </div>
                                <div className="character" onClick={() => playAudio('sèng')}> sèng </div>
                            </div>
                        </th>
                        <th>
                            <div className="toneGridBig">
                                <div className="character" onClick={() => playAudio('sōng')}> sōng </div>
                                <div className="character" onClick={() => playAudio('sóng')}> sóng </div>
                                <div className="character" onClick={() => playAudio('sŏng')}> sŏng </div>
                                <div className="character" onClick={() => playAudio('sòng')}> sòng </div>
                            </div>
                        </th> 
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table9