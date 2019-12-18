import React from 'react';
import '../PinYin.css';
import PinYin from '../PinYin';

class Table1 extends PinYin {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"> </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ā')}> ā </div>
                            <div class="character" onClick={() => this.playAudio('á')}> á </div>
                            <div class="character" onClick={() => this.playAudio('ă')}> ă </div>
                            <div class="character" onClick={() => this.playAudio('à')}> à </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ō')}> ō </div>
                            <div class="character" onClick={() => this.playAudio('ó')}> ó </div>
                            <div class="character" onClick={() => this.playAudio('ŏ')}> ŏ </div>
                            <div class="character" onClick={() => this.playAudio('ò')}> ò </div>
                        </div>
                    </th>     
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ē')}> ē </div>
                            <div class="character" onClick={() => this.playAudio('é')}> é </div>
                            <div class="character" onClick={() => this.playAudio('ě')}> ě </div>
                            <div class="character" onClick={() => this.playAudio('è')}> è </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ēr')}> ēr </div>
                            <div class="character" onClick={() => this.playAudio('ér')}> ér </div>
                            <div class="character" onClick={() => this.playAudio('ěr')}> ěr </div>
                            <div class="character" onClick={() => this.playAudio('èr')}> èr </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('āi')}> āi </div>
                            <div class="character" onClick={() => this.playAudio('ái')}> ái </div>
                            <div class="character" onClick={() => this.playAudio('ăi')}> ăi </div>
                            <div class="character" onClick={() => this.playAudio('ài')}> ài </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ēi')}> ēi </div>
                            <div class="character" onClick={() => this.playAudio('éi')}> éi </div>
                            <div class="character" onClick={() => this.playAudio('ěi')}> ěi </div>
                            <div class="character" onClick={() => this.playAudio('èi')}> èi </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('āo')}> āo </div>
                            <div class="character" onClick={() => this.playAudio('áo')}> áo </div>
                            <div class="character" onClick={() => this.playAudio('ăo')}> ăo </div>
                            <div class="character" onClick={() => this.playAudio('ào')}> ào </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ōu')}> ōu </div>
                            <div class="character" onClick={() => this.playAudio('óu')}> óu </div>
                            <div class="character" onClick={() => this.playAudio('ŏu')}> ŏu </div>
                            <div class="character" onClick={() => this.playAudio('òu')}> òu </div>
                        </div> 
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ān')}> ān </div>
                            <div class="character" onClick={() => this.playAudio('án')}> án </div>
                            <div class="character" onClick={() => this.playAudio('ăn')}> ăn </div>
                            <div class="character" onClick={() => this.playAudio('àn')}> àn </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('ēn')}> ēn </div>
                            <div class="character" onClick={() => this.playAudio('én')}> én </div>
                            <div class="character" onClick={() => this.playAudio('ěn')}> ěn </div>
                            <div class="character" onClick={() => this.playAudio('èn')}> èn </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('āng')}> āng </div>
                            <div class="character" onClick={() => this.playAudio('áng')}> áng </div>
                            <div class="character" onClick={() => this.playAudio('ăng')}> ăng </div>
                            <div class="character" onClick={() => this.playAudio('àng')}> àng </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('ēng')}> ēng </div>
                            <div class="character" onClick={() => this.playAudio('éng')}> éng </div>
                            <div class="character" onClick={() => this.playAudio('ěng')}> ěng </div>
                            <div class="character" onClick={() => this.playAudio('èng')}> èng </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start">b</th>
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bā')}> bā </div>
                            <div class="character" onClick={() => this.playAudio('bá')}> bá </div>
                            <div class="character" onClick={() => this.playAudio('bă')}> bă </div>
                            <div class="character" onClick={() => this.playAudio('bà')}> bà </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bō')}> bō </div>
                            <div class="character" onClick={() => this.playAudio('bó')}> bó </div>
                            <div class="character" onClick={() => this.playAudio('bŏ')}> bŏ </div>
                            <div class="character" onClick={() => this.playAudio('bò')}> bò </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bāi')}> bāi </div>
                            <div class="character" onClick={() => this.playAudio('bái')}> bái </div>
                            <div class="character" onClick={() => this.playAudio('băi')}> băi </div>
                            <div class="character" onClick={() => this.playAudio('bài')}> bài </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bēi')}> bēi </div>
                            <div class="character" onClick={() => this.playAudio('béi')}> béi </div>
                            <div class="character" onClick={() => this.playAudio('běi')}> běi </div>
                            <div class="character" onClick={() => this.playAudio('bèi')}> bèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bāo')}> bāo </div>
                            <div class="character" onClick={() => this.playAudio('báo')}> báo </div>
                            <div class="character" onClick={() => this.playAudio('băo')}> băo </div>
                            <div class="character" onClick={() => this.playAudio('bào')}> bào </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bān')}> bān </div>
                            <div class="character" onClick={() => this.playAudio('bán')}> bán </div>
                            <div class="character" onClick={() => this.playAudio('băn')}> băn </div>
                            <div class="character" onClick={() => this.playAudio('bàn')}> bàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('bēn')}> bēn </div>
                            <div class="character" onClick={() => this.playAudio('bén')}> bén </div>
                            <div class="character" onClick={() => this.playAudio('běn')}> běn </div>
                            <div class="character" onClick={() => this.playAudio('bèn')}> bèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('bāng')}> bāng </div>
                            <div class="character" onClick={() => this.playAudio('báng')}> báng </div>
                            <div class="character" onClick={() => this.playAudio('băng')}> băng </div>
                            <div class="character" onClick={() => this.playAudio('bàng')}> bàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('bēng')}> bēng </div>
                            <div class="character" onClick={() => this.playAudio('béng')}> béng </div>
                            <div class="character" onClick={() => this.playAudio('běng')}> běng </div>
                            <div class="character" onClick={() => this.playAudio('bèng')}> bèng </div>
                        </div>
                    </th>
                <th><div class="blank"></div></th>
                </tr> 
                <tr>                        
                    <th class="start"> p </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pā')}> pā </div>
                            <div class="character" onClick={() => this.playAudio('pá')}> pá </div>
                            <div class="character" onClick={() => this.playAudio('pă')}> pă </div>
                            <div class="character" onClick={() => this.playAudio('pà')}> pà </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pō')}> pō </div>
                            <div class="character" onClick={() => this.playAudio('pó')}> pó </div>
                            <div class="character" onClick={() => this.playAudio('pŏ')}> pŏ </div>
                            <div class="character" onClick={() => this.playAudio('pò')}> pò </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pāi')}> pāi </div>
                            <div class="character" onClick={() => this.playAudio('pái')}> pái </div>
                            <div class="character" onClick={() => this.playAudio('păi')}> păi </div>
                            <div class="character" onClick={() => this.playAudio('pài')}> pài </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pēi')}> pēi </div>
                            <div class="character" onClick={() => this.playAudio('péi')}> péi </div>
                            <div class="character" onClick={() => this.playAudio('pěi')}> pěi </div>
                            <div class="character" onClick={() => this.playAudio('pèi')}> pèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pāo')}> pāo </div>
                            <div class="character" onClick={() => this.playAudio('páo')}> páo </div>
                            <div class="character" onClick={() => this.playAudio('păo')}> păo </div>
                            <div class="character" onClick={() => this.playAudio('pào')}> pào </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pōu')}> pōu </div>
                            <div class="character" onClick={() => this.playAudio('póu')}> póu </div>
                            <div class="character" onClick={() => this.playAudio('pŏu')}> pŏu </div>
                            <div class="character" onClick={() => this.playAudio('pòu')}> pòu </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pān')}> pān </div>
                            <div class="character" onClick={() => this.playAudio('pán')}> pán </div>
                            <div class="character" onClick={() => this.playAudio('păn')}> păn </div>
                            <div class="character" onClick={() => this.playAudio('pàn')}> pàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('pēn')}> pēn </div>
                            <div class="character" onClick={() => this.playAudio('pén')}> pén </div>
                            <div class="character" onClick={() => this.playAudio('pěn')}> pěn </div>
                            <div class="character" onClick={() => this.playAudio('pèn')}> pèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('pāng')}> pāng </div>
                            <div class="character" onClick={() => this.playAudio('páng')}> páng </div>
                            <div class="character" onClick={() => this.playAudio('păng')}> păng </div>
                            <div class="character" onClick={() => this.playAudio('pàng')}> pàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('pēng')}> pēng </div>
                            <div class="character" onClick={() => this.playAudio('péng')}> péng </div>
                            <div class="character" onClick={() => this.playAudio('pěng')}> pěng </div>
                            <div class="character" onClick={() => this.playAudio('pèng')}> pèng </div>
                        </div>
                    </th>
                <th><div class="blank"></div></th>
                </tr> 
                <tr>                        
                    <th class="start"> m </th>                   
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mā')}> mā </div>
                            <div class="character" onClick={() => this.playAudio('má')}> má </div>
                            <div class="character" onClick={() => this.playAudio('mă')}> mă </div>
                            <div class="character" onClick={() => this.playAudio('mà')}> mà </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mō')}> mō </div>
                            <div class="character" onClick={() => this.playAudio('mó')}> mó </div>
                            <div class="character" onClick={() => this.playAudio('mŏ')}> mŏ </div>
                            <div class="character" onClick={() => this.playAudio('mò')}> mò </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mē')}> mē </div>
                            <div class="character" onClick={() => this.playAudio('mé')}> mé </div>
                            <div class="character" onClick={() => this.playAudio('mě')}> mě </div>
                            <div class="character" onClick={() => this.playAudio('mè')}> mè </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('māi')}> māi </div>
                            <div class="character" onClick={() => this.playAudio('mái')}> mái </div>
                            <div class="character" onClick={() => this.playAudio('măi')}> măi </div>
                            <div class="character" onClick={() => this.playAudio('mài')}> mài </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mēi')}> mēi </div>
                            <div class="character" onClick={() => this.playAudio('méi')}> méi </div>
                            <div class="character" onClick={() => this.playAudio('měi')}> měi </div>
                            <div class="character" onClick={() => this.playAudio('mèi')}> mèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('māo')}> māo </div>
                            <div class="character" onClick={() => this.playAudio('máo')}> máo </div>
                            <div class="character" onClick={() => this.playAudio('măo')}> măo </div>
                            <div class="character" onClick={() => this.playAudio('mào')}> mào </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mōu')}> mōu </div>
                            <div class="character" onClick={() => this.playAudio('móu')}> móu </div>
                            <div class="character" onClick={() => this.playAudio('mŏu')}> mŏu </div>
                            <div class="character" onClick={() => this.playAudio('mòu')}> mòu </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mān')}> mān </div>
                            <div class="character" onClick={() => this.playAudio('mán')}> mán </div>
                            <div class="character" onClick={() => this.playAudio('măn')}> măn </div>
                            <div class="character" onClick={() => this.playAudio('màn')}> màn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('mēn')}> mēn </div>
                            <div class="character" onClick={() => this.playAudio('mén')}> mén </div>
                            <div class="character" onClick={() => this.playAudio('měn')}> měn </div>
                            <div class="character" onClick={() => this.playAudio('mèn')}> mèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('māng')}> māng </div>
                            <div class="character" onClick={() => this.playAudio('máng')}> máng </div>
                            <div class="character" onClick={() => this.playAudio('măng')}> măng </div>
                            <div class="character" onClick={() => this.playAudio('màng')}> màng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('mēng')}> mēng </div>
                            <div class="character" onClick={() => this.playAudio('méng')}> méng </div>
                            <div class="character" onClick={() => this.playAudio('měng')}> měng </div>
                            <div class="character" onClick={() => this.playAudio('mèng')}> mèng </div>
                        </div>
                    </th>
                <th><div class="blank"></div></th>
                </tr> 
                <tr>                        
                    <th class="start"> f </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fā')}> fā </div>
                            <div class="character" onClick={() => this.playAudio('fá')}> fá </div>
                            <div class="character" onClick={() => this.playAudio('fă')}> fă </div>
                            <div class="character" onClick={() => this.playAudio('fà')}> fà </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fō')}> fō </div>
                            <div class="character" onClick={() => this.playAudio('fó')}> fó </div>
                            <div class="character" onClick={() => this.playAudio('fŏ')}> fŏ </div>
                            <div class="character" onClick={() => this.playAudio('fò')}> fò </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fēi')}> fēi </div>
                            <div class="character" onClick={() => this.playAudio('féi')}> féi </div>
                            <div class="character" onClick={() => this.playAudio('fěi')}> fěi </div>
                            <div class="character" onClick={() => this.playAudio('fèi')}> fèi </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fōu')}> fōu </div>
                            <div class="character" onClick={() => this.playAudio('fóu')}> fóu </div>
                            <div class="character" onClick={() => this.playAudio('fŏu')}> fŏu </div>
                            <div class="character" onClick={() => this.playAudio('fòu')}> fòu </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fān')}> fān </div>
                            <div class="character" onClick={() => this.playAudio('fán')}> fán </div>
                            <div class="character" onClick={() => this.playAudio('făn')}> făn </div>
                            <div class="character" onClick={() => this.playAudio('fàn')}> fàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character" onClick={() => this.playAudio('fēn')}> fēn </div>
                            <div class="character" onClick={() => this.playAudio('fén')}> fén </div>
                            <div class="character" onClick={() => this.playAudio('fěn')}> fěn </div>
                            <div class="character" onClick={() => this.playAudio('fèn')}> fèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('fāng')}> fāng </div>
                            <div class="character" onClick={() => this.playAudio('fáng')}> fáng </div>
                            <div class="character" onClick={() => this.playAudio('făng')}> făng </div>
                            <div class="character" onClick={() => this.playAudio('fàng')}> fàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGridBig">
                            <div class="character" onClick={() => this.playAudio('fēng')}> fēng </div>
                            <div class="character" onClick={() => this.playAudio('féng')}> féng </div>
                            <div class="character" onClick={() => this.playAudio('fěng')}> fěng </div>
                            <div class="character" onClick={() => this.playAudio('fèng')}> fèng </div>
                        </div>
                    </th>
                <th><div class="blank"></div></th>
                </tr> 
            </table>
        );
    }
}
export default Table1