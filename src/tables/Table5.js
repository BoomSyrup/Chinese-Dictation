import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table5 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start">d</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dā')}> dā </div>
                            <div class="character" onClick={() => this.playAudio('dá')}> dá </div>
                            <div class="character" onClick={() => this.playAudio('dă')}> dă </div>
                            <div class="character" onClick={() => this.playAudio('dà')}> dà </div>
                        </div>
                    </th>    
                    <th><div class="blank"></div></th>                    
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dē')}> dē </div>
                            <div class="character" onClick={() => this.playAudio('dé')}> dé </div>
                            <div class="character" onClick={() => this.playAudio('dě')}> dě </div>
                            <div class="character" onClick={() => this.playAudio('dè')}> dè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>          
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dāi')}> dāi </div>
                            <div class="character" onClick={() => this.playAudio('dái')}> dái </div>
                            <div class="character" onClick={() => this.playAudio('dăi')}> dăi </div>
                            <div class="character" onClick={() => this.playAudio('dài')}> dài </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dēi')}> dēi </div>
                            <div class="character" onClick={() => this.playAudio('déi')}> déi </div>
                            <div class="character" onClick={() => this.playAudio('děi')}> děi </div>
                            <div class="character" onClick={() => this.playAudio('dèi')}> dèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dāo')}> dāo </div>
                            <div class="character" onClick={() => this.playAudio('dáo')}> dáo </div>
                            <div class="character" onClick={() => this.playAudio('dăo')}> dăo </div>
                            <div class="character" onClick={() => this.playAudio('dào')}> dào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dōu')}> dōu </div>
                            <div class="character" onClick={() => this.playAudio('dóu')}> dóu </div>
                            <div class="character" onClick={() => this.playAudio('dŏu')}> dŏu </div>
                            <div class="character" onClick={() => this.playAudio('dòu')}> dòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dān')}> dān </div>
                            <div class="character" onClick={() => this.playAudio('dán')}> dán </div>
                            <div class="character" onClick={() => this.playAudio('dăn')}> dăn </div>
                            <div class="character" onClick={() => this.playAudio('dàn')}> dàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('dēn')}> dēn </div>
                            <div class="character" onClick={() => this.playAudio('dén')}> dén </div>
                            <div class="character" onClick={() => this.playAudio('děn')}> děn </div>
                            <div class="character" onClick={() => this.playAudio('dèn')}> dèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('dāng')}> dāng </div>
                            <div class="character" onClick={() => this.playAudio('dáng')}> dáng </div>
                            <div class="character" onClick={() => this.playAudio('dăng')}> dăng </div>
                            <div class="character" onClick={() => this.playAudio('dàng')}> dàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('dēng')}> dēng </div>
                            <div class="character" onClick={() => this.playAudio('déng')}> déng </div>
                            <div class="character" onClick={() => this.playAudio('děng')}> děng </div>
                            <div class="character" onClick={() => this.playAudio('dèng')}> dèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('dōng')}> dōng </div>
                            <div class="character" onClick={() => this.playAudio('dóng')}> dóng </div>
                            <div class="character" onClick={() => this.playAudio('dǒng')}> dǒng </div>
                            <div class="character" onClick={() => this.playAudio('dòng')}> dòng </div>
                        </div>
                    </th>
                </tr> 
                <tr>
                    <th class="start">t</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tā')}> tā </div>
                            <div class="character" onClick={() => this.playAudio('tá')}> tá </div>
                            <div class="character" onClick={() => this.playAudio('tă')}> tă </div>
                            <div class="character" onClick={() => this.playAudio('tà')}> tà </div>
                        </div>
                    </th>    
                    <th><div class="blank"></div></th>                    
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tē')}> tē </div>
                            <div class="character" onClick={() => this.playAudio('té')}> té </div>
                            <div class="character" onClick={() => this.playAudio('tě')}> tě </div>
                            <div class="character" onClick={() => this.playAudio('tè')}> tè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>          
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tāi')}> tāi </div>
                            <div class="character" onClick={() => this.playAudio('tái')}> tái </div>
                            <div class="character" onClick={() => this.playAudio('tăi')}> tăi </div>
                            <div class="character" onClick={() => this.playAudio('tài')}> tài </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>                         
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tāo')}> tāo </div>
                            <div class="character" onClick={() => this.playAudio('táo')}> táo </div>
                            <div class="character" onClick={() => this.playAudio('tăo')}> tăo </div>
                            <div class="character" onClick={() => this.playAudio('tào')}> tào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tōu')}> tōu </div>
                            <div class="character" onClick={() => this.playAudio('tóu')}> tóu </div>
                            <div class="character" onClick={() => this.playAudio('tŏu')}> tŏu </div>
                            <div class="character" onClick={() => this.playAudio('tòu')}> tòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('tān')}> tān </div>
                            <div class="character" onClick={() => this.playAudio('tán')}> tán </div>
                            <div class="character" onClick={() => this.playAudio('tăn')}> tăn </div>
                            <div class="character" onClick={() => this.playAudio('tàn')}> tàn </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>                    
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('tāng')}> tāng </div>
                            <div class="character" onClick={() => this.playAudio('táng')}> táng </div>
                            <div class="character" onClick={() => this.playAudio('tăng')}> tăng </div>
                            <div class="character" onClick={() => this.playAudio('tàng')}> tàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('tēng')}> tēng </div>
                            <div class="character" onClick={() => this.playAudio('téng')}> téng </div>
                            <div class="character" onClick={() => this.playAudio('těng')}> těng </div>
                            <div class="character" onClick={() => this.playAudio('tèng')}> tèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('tōng')}> tōng </div>
                            <div class="character" onClick={() => this.playAudio('tóng')}> tóng </div>
                            <div class="character" onClick={() => this.playAudio('tǒng')}> tǒng </div>
                            <div class="character" onClick={() => this.playAudio('tòng')}> tòng </div>
                        </div>
                    </th>
                </tr> 
                <tr>
                    <th class="start">n</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nā')}> nā </div>
                            <div class="character" onClick={() => this.playAudio('ná')}> ná </div>
                            <div class="character" onClick={() => this.playAudio('nă')}> nă </div>
                            <div class="character" onClick={() => this.playAudio('nà')}> nà </div>
                        </div>
                    </th>    
                    <th><div class="blank"></div></th>                    
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nē')}> nē </div>
                            <div class="character" onClick={() => this.playAudio('né')}> né </div>
                            <div class="character" onClick={() => this.playAudio('ně')}> ně </div>
                            <div class="character" onClick={() => this.playAudio('nè')}> nè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>          
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nāi')}> nāi </div>
                            <div class="character" onClick={() => this.playAudio('nái')}> nái </div>
                            <div class="character" onClick={() => this.playAudio('năi')}> năi </div>
                            <div class="character" onClick={() => this.playAudio('nài')}> nài </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nēi')}> nēi </div>
                            <div class="character" onClick={() => this.playAudio('néi')}> néi </div>
                            <div class="character" onClick={() => this.playAudio('něi')}> něi </div>
                            <div class="character" onClick={() => this.playAudio('nèi')}> nèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nāo')}> nāo </div>
                            <div class="character" onClick={() => this.playAudio('náo')}> náo </div>
                            <div class="character" onClick={() => this.playAudio('năo')}> năo </div>
                            <div class="character" onClick={() => this.playAudio('nào')}> nào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nōu')}> nōu </div>
                            <div class="character" onClick={() => this.playAudio('nóu')}> nóu </div>
                            <div class="character" onClick={() => this.playAudio('nŏu')}> nŏu </div>
                            <div class="character" onClick={() => this.playAudio('nòu')}> nòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nān')}> nān </div>
                            <div class="character" onClick={() => this.playAudio('nán')}> nán </div>
                            <div class="character" onClick={() => this.playAudio('năn')}> năn </div>
                            <div class="character" onClick={() => this.playAudio('nàn')}> nàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('nēn')}> nēn </div>
                            <div class="character" onClick={() => this.playAudio('nén')}> nén </div>
                            <div class="character" onClick={() => this.playAudio('něn')}> něn </div>
                            <div class="character" onClick={() => this.playAudio('nèn')}> nèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('nāng')}> nāng </div>
                            <div class="character" onClick={() => this.playAudio('náng')}> náng </div>
                            <div class="character" onClick={() => this.playAudio('năng')}> năng </div>
                            <div class="character" onClick={() => this.playAudio('nàng')}> nàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('nēng')}> nēng </div>
                            <div class="character" onClick={() => this.playAudio('néng')}> néng </div>
                            <div class="character" onClick={() => this.playAudio('něng')}> něng </div>
                            <div class="character" onClick={() => this.playAudio('nèng')}> nèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('nōng')}> nōng </div>
                            <div class="character" onClick={() => this.playAudio('nóng')}> nóng </div>
                            <div class="character" onClick={() => this.playAudio('nǒng')}> nǒng </div>
                            <div class="character" onClick={() => this.playAudio('nòng')}> nòng </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="start">l</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lā')}> lā </div>
                            <div class="character" onClick={() => this.playAudio('lá')}> lá </div>
                            <div class="character" onClick={() => this.playAudio('lă')}> lă </div>
                            <div class="character" onClick={() => this.playAudio('là')}> là </div>
                        </div>
                    </th>    
                    <th><div class="blank"></div></th>                    
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lē')}> lē </div>
                            <div class="character" onClick={() => this.playAudio('lé')}> lé </div>
                            <div class="character" onClick={() => this.playAudio('lě')}> lě </div>
                            <div class="character" onClick={() => this.playAudio('lè')}> lè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>          
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lāi')}> lāi </div>
                            <div class="character" onClick={() => this.playAudio('lái')}> lái </div>
                            <div class="character" onClick={() => this.playAudio('lăi')}> lăi </div>
                            <div class="character" onClick={() => this.playAudio('lài')}> lài </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lēi')}> lēi </div>
                            <div class="character" onClick={() => this.playAudio('léi')}> léi </div>
                            <div class="character" onClick={() => this.playAudio('lěi')}> lěi </div>
                            <div class="character" onClick={() => this.playAudio('lèi')}> lèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lāo')}> lāo </div>
                            <div class="character" onClick={() => this.playAudio('láo')}> láo </div>
                            <div class="character" onClick={() => this.playAudio('lăo')}> lăo </div>
                            <div class="character" onClick={() => this.playAudio('lào')}> lào </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lōu')}> lōu </div>
                            <div class="character" onClick={() => this.playAudio('lóu')}> lóu </div>
                            <div class="character" onClick={() => this.playAudio('lŏu')}> lŏu </div>
                            <div class="character" onClick={() => this.playAudio('lòu')}> lòu </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('lān')}> lān </div>
                            <div class="character" onClick={() => this.playAudio('lán')}> lán </div>
                            <div class="character" onClick={() => this.playAudio('lăn')}> lăn </div>
                            <div class="character" onClick={() => this.playAudio('làn')}> làn </div>
                        </div>
                    </th>                        
                    <th><div class="blank"></div></th>                
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('lāng')}> lāng </div>
                            <div class="character" onClick={() => this.playAudio('láng')}> láng </div>
                            <div class="character" onClick={() => this.playAudio('lăng')}> lăng </div>
                            <div class="character" onClick={() => this.playAudio('làng')}> làng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('lēng')}> lēng </div>
                            <div class="character" onClick={() => this.playAudio('léng')}> léng </div>
                            <div class="character" onClick={() => this.playAudio('lěng')}> lěng </div>
                            <div class="character" onClick={() => this.playAudio('lèng')}> lèng </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('lōng')}> lōng </div>
                            <div class="character" onClick={() => this.playAudio('lóng')}> lóng </div>
                            <div class="character" onClick={() => this.playAudio('lǒng')}> lǒng </div>
                            <div class="character" onClick={() => this.playAudio('lòng')}> lòng </div>
                        </div>
                    </th>
                </tr>  
            </table>
        );
    }
}
export default Table5