import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';


class Table5 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tr>
                    <th className="start">d</th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dā')}> dā </div>
                            <div className="character" onClick={() => playAudio('dá')}> dá </div>
                            <div className="character" onClick={() => playAudio('dă')}> dă </div>
                            <div className="character" onClick={() => playAudio('dà')}> dà </div>
                        </div>
                    </th>    
                    <th><div className="blank"></div></th>                    
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dē')}> dē </div>
                            <div className="character" onClick={() => playAudio('dé')}> dé </div>
                            <div className="character" onClick={() => playAudio('dě')}> dě </div>
                            <div className="character" onClick={() => playAudio('dè')}> dè </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>          
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dāi')}> dāi </div>
                            <div className="character" onClick={() => playAudio('dái')}> dái </div>
                            <div className="character" onClick={() => playAudio('dăi')}> dăi </div>
                            <div className="character" onClick={() => playAudio('dài')}> dài </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dēi')}> dēi </div>
                            <div className="character" onClick={() => playAudio('déi')}> déi </div>
                            <div className="character" onClick={() => playAudio('děi')}> děi </div>
                            <div className="character" onClick={() => playAudio('dèi')}> dèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dāo')}> dāo </div>
                            <div className="character" onClick={() => playAudio('dáo')}> dáo </div>
                            <div className="character" onClick={() => playAudio('dăo')}> dăo </div>
                            <div className="character" onClick={() => playAudio('dào')}> dào </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dōu')}> dōu </div>
                            <div className="character" onClick={() => playAudio('dóu')}> dóu </div>
                            <div className="character" onClick={() => playAudio('dŏu')}> dŏu </div>
                            <div className="character" onClick={() => playAudio('dòu')}> dòu </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dān')}> dān </div>
                            <div className="character" onClick={() => playAudio('dán')}> dán </div>
                            <div className="character" onClick={() => playAudio('dăn')}> dăn </div>
                            <div className="character" onClick={() => playAudio('dàn')}> dàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('dēn')}> dēn </div>
                            <div className="character" onClick={() => playAudio('dén')}> dén </div>
                            <div className="character" onClick={() => playAudio('děn')}> děn </div>
                            <div className="character" onClick={() => playAudio('dèn')}> dèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('dāng')}> dāng </div>
                            <div className="character" onClick={() => playAudio('dáng')}> dáng </div>
                            <div className="character" onClick={() => playAudio('dăng')}> dăng </div>
                            <div className="character" onClick={() => playAudio('dàng')}> dàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('dēng')}> dēng </div>
                            <div className="character" onClick={() => playAudio('déng')}> déng </div>
                            <div className="character" onClick={() => playAudio('děng')}> děng </div>
                            <div className="character" onClick={() => playAudio('dèng')}> dèng </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('dōng')}> dōng </div>
                            <div className="character" onClick={() => playAudio('dóng')}> dóng </div>
                            <div className="character" onClick={() => playAudio('dǒng')}> dǒng </div>
                            <div className="character" onClick={() => playAudio('dòng')}> dòng </div>
                        </div>
                    </th>
                </tr> 
                <tr>
                    <th className="start">t</th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('tā')}> tā </div>
                            <div className="character" onClick={() => playAudio('tá')}> tá </div>
                            <div className="character" onClick={() => playAudio('tă')}> tă </div>
                            <div className="character" onClick={() => playAudio('tà')}> tà </div>
                        </div>
                    </th>    
                    <th><div className="blank"></div></th>                    
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('tē')}> tē </div>
                            <div className="character" onClick={() => playAudio('té')}> té </div>
                            <div className="character" onClick={() => playAudio('tě')}> tě </div>
                            <div className="character" onClick={() => playAudio('tè')}> tè </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>          
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('tāi')}> tāi </div>
                            <div className="character" onClick={() => playAudio('tái')}> tái </div>
                            <div className="character" onClick={() => playAudio('tăi')}> tăi </div>
                            <div className="character" onClick={() => playAudio('tài')}> tài </div>
                        </div>
                    </th>                        
                    <th><div className="blank"></div></th>                         
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('tāo')}> tāo </div>
                            <div className="character" onClick={() => playAudio('táo')}> táo </div>
                            <div className="character" onClick={() => playAudio('tăo')}> tăo </div>
                            <div className="character" onClick={() => playAudio('tào')}> tào </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('tōu')}> tōu </div>
                            <div className="character" onClick={() => playAudio('tóu')}> tóu </div>
                            <div className="character" onClick={() => playAudio('tŏu')}> tŏu </div>
                            <div className="character" onClick={() => playAudio('tòu')}> tòu </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('tān')}> tān </div>
                            <div className="character" onClick={() => playAudio('tán')}> tán </div>
                            <div className="character" onClick={() => playAudio('tăn')}> tăn </div>
                            <div className="character" onClick={() => playAudio('tàn')}> tàn </div>
                        </div>
                    </th>                        
                    <th><div className="blank"></div></th>                    
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('tāng')}> tāng </div>
                            <div className="character" onClick={() => playAudio('táng')}> táng </div>
                            <div className="character" onClick={() => playAudio('tăng')}> tăng </div>
                            <div className="character" onClick={() => playAudio('tàng')}> tàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('tēng')}> tēng </div>
                            <div className="character" onClick={() => playAudio('téng')}> téng </div>
                            <div className="character" onClick={() => playAudio('těng')}> těng </div>
                            <div className="character" onClick={() => playAudio('tèng')}> tèng </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('tōng')}> tōng </div>
                            <div className="character" onClick={() => playAudio('tóng')}> tóng </div>
                            <div className="character" onClick={() => playAudio('tǒng')}> tǒng </div>
                            <div className="character" onClick={() => playAudio('tòng')}> tòng </div>
                        </div>
                    </th>
                </tr> 
                <tr>
                    <th className="start">n</th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nā')}> nā </div>
                            <div className="character" onClick={() => playAudio('ná')}> ná </div>
                            <div className="character" onClick={() => playAudio('nă')}> nă </div>
                            <div className="character" onClick={() => playAudio('nà')}> nà </div>
                        </div>
                    </th>    
                    <th><div className="blank"></div></th>                    
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nē')}> nē </div>
                            <div className="character" onClick={() => playAudio('né')}> né </div>
                            <div className="character" onClick={() => playAudio('ně')}> ně </div>
                            <div className="character" onClick={() => playAudio('nè')}> nè </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>          
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nāi')}> nāi </div>
                            <div className="character" onClick={() => playAudio('nái')}> nái </div>
                            <div className="character" onClick={() => playAudio('năi')}> năi </div>
                            <div className="character" onClick={() => playAudio('nài')}> nài </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nēi')}> nēi </div>
                            <div className="character" onClick={() => playAudio('néi')}> néi </div>
                            <div className="character" onClick={() => playAudio('něi')}> něi </div>
                            <div className="character" onClick={() => playAudio('nèi')}> nèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nāo')}> nāo </div>
                            <div className="character" onClick={() => playAudio('náo')}> náo </div>
                            <div className="character" onClick={() => playAudio('năo')}> năo </div>
                            <div className="character" onClick={() => playAudio('nào')}> nào </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nōu')}> nōu </div>
                            <div className="character" onClick={() => playAudio('nóu')}> nóu </div>
                            <div className="character" onClick={() => playAudio('nŏu')}> nŏu </div>
                            <div className="character" onClick={() => playAudio('nòu')}> nòu </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nān')}> nān </div>
                            <div className="character" onClick={() => playAudio('nán')}> nán </div>
                            <div className="character" onClick={() => playAudio('năn')}> năn </div>
                            <div className="character" onClick={() => playAudio('nàn')}> nàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('nēn')}> nēn </div>
                            <div className="character" onClick={() => playAudio('nén')}> nén </div>
                            <div className="character" onClick={() => playAudio('něn')}> něn </div>
                            <div className="character" onClick={() => playAudio('nèn')}> nèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('nāng')}> nāng </div>
                            <div className="character" onClick={() => playAudio('náng')}> náng </div>
                            <div className="character" onClick={() => playAudio('năng')}> năng </div>
                            <div className="character" onClick={() => playAudio('nàng')}> nàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('nēng')}> nēng </div>
                            <div className="character" onClick={() => playAudio('néng')}> néng </div>
                            <div className="character" onClick={() => playAudio('něng')}> něng </div>
                            <div className="character" onClick={() => playAudio('nèng')}> nèng </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('nōng')}> nōng </div>
                            <div className="character" onClick={() => playAudio('nóng')}> nóng </div>
                            <div className="character" onClick={() => playAudio('nǒng')}> nǒng </div>
                            <div className="character" onClick={() => playAudio('nòng')}> nòng </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th className="start">l</th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lā')}> lā </div>
                            <div className="character" onClick={() => playAudio('lá')}> lá </div>
                            <div className="character" onClick={() => playAudio('lă')}> lă </div>
                            <div className="character" onClick={() => playAudio('là')}> là </div>
                        </div>
                    </th>    
                    <th><div className="blank"></div></th>                    
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lē')}> lē </div>
                            <div className="character" onClick={() => playAudio('lé')}> lé </div>
                            <div className="character" onClick={() => playAudio('lě')}> lě </div>
                            <div className="character" onClick={() => playAudio('lè')}> lè </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>          
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lāi')}> lāi </div>
                            <div className="character" onClick={() => playAudio('lái')}> lái </div>
                            <div className="character" onClick={() => playAudio('lăi')}> lăi </div>
                            <div className="character" onClick={() => playAudio('lài')}> lài </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lēi')}> lēi </div>
                            <div className="character" onClick={() => playAudio('léi')}> léi </div>
                            <div className="character" onClick={() => playAudio('lěi')}> lěi </div>
                            <div className="character" onClick={() => playAudio('lèi')}> lèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lāo')}> lāo </div>
                            <div className="character" onClick={() => playAudio('láo')}> láo </div>
                            <div className="character" onClick={() => playAudio('lăo')}> lăo </div>
                            <div className="character" onClick={() => playAudio('lào')}> lào </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lōu')}> lōu </div>
                            <div className="character" onClick={() => playAudio('lóu')}> lóu </div>
                            <div className="character" onClick={() => playAudio('lŏu')}> lŏu </div>
                            <div className="character" onClick={() => playAudio('lòu')}> lòu </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('lān')}> lān </div>
                            <div className="character" onClick={() => playAudio('lán')}> lán </div>
                            <div className="character" onClick={() => playAudio('lăn')}> lăn </div>
                            <div className="character" onClick={() => playAudio('làn')}> làn </div>
                        </div>
                    </th>                        
                    <th><div className="blank"></div></th>                
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('lāng')}> lāng </div>
                            <div className="character" onClick={() => playAudio('láng')}> láng </div>
                            <div className="character" onClick={() => playAudio('lăng')}> lăng </div>
                            <div className="character" onClick={() => playAudio('làng')}> làng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('lēng')}> lēng </div>
                            <div className="character" onClick={() => playAudio('léng')}> léng </div>
                            <div className="character" onClick={() => playAudio('lěng')}> lěng </div>
                            <div className="character" onClick={() => playAudio('lèng')}> lèng </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('lōng')}> lōng </div>
                            <div className="character" onClick={() => playAudio('lóng')}> lóng </div>
                            <div className="character" onClick={() => playAudio('lǒng')}> lǒng </div>
                            <div className="character" onClick={() => playAudio('lòng')}> lòng </div>
                        </div>
                    </th>
                </tr>  
            </table>
        );
    }
}
export default Table5