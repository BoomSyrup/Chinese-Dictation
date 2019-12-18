import React from 'react';
import '../PinYin.css';
import {playAudio} from '../audio';

class Table1 extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr className="letter_head">
                        <th className="start"></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th>
                    </tr> 
                </thead>
                <tr>
                    <th className="start"> </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ā')}> ā </div>
                            <div className="character" onClick={() => playAudio('á')}> á </div>
                            <div className="character" onClick={() => playAudio('ă')}> ă </div>
                            <div className="character" onClick={() => playAudio('à')}> à </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ō')}> ō </div>
                            <div className="character" onClick={() => playAudio('ó')}> ó </div>
                            <div className="character" onClick={() => playAudio('ŏ')}> ŏ </div>
                            <div className="character" onClick={() => playAudio('ò')}> ò </div>
                        </div>
                    </th>     
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ē')}> ē </div>
                            <div className="character" onClick={() => playAudio('é')}> é </div>
                            <div className="character" onClick={() => playAudio('ě')}> ě </div>
                            <div className="character" onClick={() => playAudio('è')}> è </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ēr')}> ēr </div>
                            <div className="character" onClick={() => playAudio('ér')}> ér </div>
                            <div className="character" onClick={() => playAudio('ěr')}> ěr </div>
                            <div className="character" onClick={() => playAudio('èr')}> èr </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('āi')}> āi </div>
                            <div className="character" onClick={() => playAudio('ái')}> ái </div>
                            <div className="character" onClick={() => playAudio('ăi')}> ăi </div>
                            <div className="character" onClick={() => playAudio('ài')}> ài </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ēi')}> ēi </div>
                            <div className="character" onClick={() => playAudio('éi')}> éi </div>
                            <div className="character" onClick={() => playAudio('ěi')}> ěi </div>
                            <div className="character" onClick={() => playAudio('èi')}> èi </div>
                        </div>
                    </th> 
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('āo')}> āo </div>
                            <div className="character" onClick={() => playAudio('áo')}> áo </div>
                            <div className="character" onClick={() => playAudio('ăo')}> ăo </div>
                            <div className="character" onClick={() => playAudio('ào')}> ào </div>
                        </div>
                    </th>  
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ōu')}> ōu </div>
                            <div className="character" onClick={() => playAudio('óu')}> óu </div>
                            <div className="character" onClick={() => playAudio('ŏu')}> ŏu </div>
                            <div className="character" onClick={() => playAudio('òu')}> òu </div>
                        </div> 
                    </th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ān')}> ān </div>
                            <div className="character" onClick={() => playAudio('án')}> án </div>
                            <div className="character" onClick={() => playAudio('ăn')}> ăn </div>
                            <div className="character" onClick={() => playAudio('àn')}> àn </div>
                        </div>
                    </th>  
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('ēn')}> ēn </div>
                            <div className="character" onClick={() => playAudio('én')}> én </div>
                            <div className="character" onClick={() => playAudio('ěn')}> ěn </div>
                            <div className="character" onClick={() => playAudio('èn')}> èn </div>
                        </div>
                    </th>
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('āng')}> āng </div>
                            <div className="character" onClick={() => playAudio('áng')}> áng </div>
                            <div className="character" onClick={() => playAudio('ăng')}> ăng </div>
                            <div className="character" onClick={() => playAudio('àng')}> àng </div>
                        </div>
                    </th>  
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('ēng')}> ēng </div>
                            <div className="character" onClick={() => playAudio('éng')}> éng </div>
                            <div className="character" onClick={() => playAudio('ěng')}> ěng </div>
                            <div className="character" onClick={() => playAudio('èng')}> èng </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                </tr>
                <tr>
                    <th className="start">b</th>
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bā')}> bā </div>
                            <div className="character" onClick={() => playAudio('bá')}> bá </div>
                            <div className="character" onClick={() => playAudio('bă')}> bă </div>
                            <div className="character" onClick={() => playAudio('bà')}> bà </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bō')}> bō </div>
                            <div className="character" onClick={() => playAudio('bó')}> bó </div>
                            <div className="character" onClick={() => playAudio('bŏ')}> bŏ </div>
                            <div className="character" onClick={() => playAudio('bò')}> bò </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bāi')}> bāi </div>
                            <div className="character" onClick={() => playAudio('bái')}> bái </div>
                            <div className="character" onClick={() => playAudio('băi')}> băi </div>
                            <div className="character" onClick={() => playAudio('bài')}> bài </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bēi')}> bēi </div>
                            <div className="character" onClick={() => playAudio('béi')}> béi </div>
                            <div className="character" onClick={() => playAudio('běi')}> běi </div>
                            <div className="character" onClick={() => playAudio('bèi')}> bèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bāo')}> bāo </div>
                            <div className="character" onClick={() => playAudio('báo')}> báo </div>
                            <div className="character" onClick={() => playAudio('băo')}> băo </div>
                            <div className="character" onClick={() => playAudio('bào')}> bào </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bān')}> bān </div>
                            <div className="character" onClick={() => playAudio('bán')}> bán </div>
                            <div className="character" onClick={() => playAudio('băn')}> băn </div>
                            <div className="character" onClick={() => playAudio('bàn')}> bàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('bēn')}> bēn </div>
                            <div className="character" onClick={() => playAudio('bén')}> bén </div>
                            <div className="character" onClick={() => playAudio('běn')}> běn </div>
                            <div className="character" onClick={() => playAudio('bèn')}> bèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('bāng')}> bāng </div>
                            <div className="character" onClick={() => playAudio('báng')}> báng </div>
                            <div className="character" onClick={() => playAudio('băng')}> băng </div>
                            <div className="character" onClick={() => playAudio('bàng')}> bàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('bēng')}> bēng </div>
                            <div className="character" onClick={() => playAudio('béng')}> béng </div>
                            <div className="character" onClick={() => playAudio('běng')}> běng </div>
                            <div className="character" onClick={() => playAudio('bèng')}> bèng </div>
                        </div>
                    </th>
                <th><div className="blank"></div></th>
                </tr> 
                <tr>                        
                    <th className="start"> p </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pā')}> pā </div>
                            <div className="character" onClick={() => playAudio('pá')}> pá </div>
                            <div className="character" onClick={() => playAudio('pă')}> pă </div>
                            <div className="character" onClick={() => playAudio('pà')}> pà </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pō')}> pō </div>
                            <div className="character" onClick={() => playAudio('pó')}> pó </div>
                            <div className="character" onClick={() => playAudio('pŏ')}> pŏ </div>
                            <div className="character" onClick={() => playAudio('pò')}> pò </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pāi')}> pāi </div>
                            <div className="character" onClick={() => playAudio('pái')}> pái </div>
                            <div className="character" onClick={() => playAudio('păi')}> păi </div>
                            <div className="character" onClick={() => playAudio('pài')}> pài </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pēi')}> pēi </div>
                            <div className="character" onClick={() => playAudio('péi')}> péi </div>
                            <div className="character" onClick={() => playAudio('pěi')}> pěi </div>
                            <div className="character" onClick={() => playAudio('pèi')}> pèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pāo')}> pāo </div>
                            <div className="character" onClick={() => playAudio('páo')}> páo </div>
                            <div className="character" onClick={() => playAudio('păo')}> păo </div>
                            <div className="character" onClick={() => playAudio('pào')}> pào </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pōu')}> pōu </div>
                            <div className="character" onClick={() => playAudio('póu')}> póu </div>
                            <div className="character" onClick={() => playAudio('pŏu')}> pŏu </div>
                            <div className="character" onClick={() => playAudio('pòu')}> pòu </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pān')}> pān </div>
                            <div className="character" onClick={() => playAudio('pán')}> pán </div>
                            <div className="character" onClick={() => playAudio('păn')}> păn </div>
                            <div className="character" onClick={() => playAudio('pàn')}> pàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('pēn')}> pēn </div>
                            <div className="character" onClick={() => playAudio('pén')}> pén </div>
                            <div className="character" onClick={() => playAudio('pěn')}> pěn </div>
                            <div className="character" onClick={() => playAudio('pèn')}> pèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('pāng')}> pāng </div>
                            <div className="character" onClick={() => playAudio('páng')}> páng </div>
                            <div className="character" onClick={() => playAudio('păng')}> păng </div>
                            <div className="character" onClick={() => playAudio('pàng')}> pàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('pēng')}> pēng </div>
                            <div className="character" onClick={() => playAudio('péng')}> péng </div>
                            <div className="character" onClick={() => playAudio('pěng')}> pěng </div>
                            <div className="character" onClick={() => playAudio('pèng')}> pèng </div>
                        </div>
                    </th>
                <th><div className="blank"></div></th>
                </tr> 
                <tr>                        
                    <th className="start"> m </th>                   
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mā')}> mā </div>
                            <div className="character" onClick={() => playAudio('má')}> má </div>
                            <div className="character" onClick={() => playAudio('mă')}> mă </div>
                            <div className="character" onClick={() => playAudio('mà')}> mà </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mō')}> mō </div>
                            <div className="character" onClick={() => playAudio('mó')}> mó </div>
                            <div className="character" onClick={() => playAudio('mŏ')}> mŏ </div>
                            <div className="character" onClick={() => playAudio('mò')}> mò </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mē')}> mē </div>
                            <div className="character" onClick={() => playAudio('mé')}> mé </div>
                            <div className="character" onClick={() => playAudio('mě')}> mě </div>
                            <div className="character" onClick={() => playAudio('mè')}> mè </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('māi')}> māi </div>
                            <div className="character" onClick={() => playAudio('mái')}> mái </div>
                            <div className="character" onClick={() => playAudio('măi')}> măi </div>
                            <div className="character" onClick={() => playAudio('mài')}> mài </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mēi')}> mēi </div>
                            <div className="character" onClick={() => playAudio('méi')}> méi </div>
                            <div className="character" onClick={() => playAudio('měi')}> měi </div>
                            <div className="character" onClick={() => playAudio('mèi')}> mèi </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('māo')}> māo </div>
                            <div className="character" onClick={() => playAudio('máo')}> máo </div>
                            <div className="character" onClick={() => playAudio('măo')}> măo </div>
                            <div className="character" onClick={() => playAudio('mào')}> mào </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mōu')}> mōu </div>
                            <div className="character" onClick={() => playAudio('móu')}> móu </div>
                            <div className="character" onClick={() => playAudio('mŏu')}> mŏu </div>
                            <div className="character" onClick={() => playAudio('mòu')}> mòu </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mān')}> mān </div>
                            <div className="character" onClick={() => playAudio('mán')}> mán </div>
                            <div className="character" onClick={() => playAudio('măn')}> măn </div>
                            <div className="character" onClick={() => playAudio('màn')}> màn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('mēn')}> mēn </div>
                            <div className="character" onClick={() => playAudio('mén')}> mén </div>
                            <div className="character" onClick={() => playAudio('měn')}> měn </div>
                            <div className="character" onClick={() => playAudio('mèn')}> mèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('māng')}> māng </div>
                            <div className="character" onClick={() => playAudio('máng')}> máng </div>
                            <div className="character" onClick={() => playAudio('măng')}> măng </div>
                            <div className="character" onClick={() => playAudio('màng')}> màng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('mēng')}> mēng </div>
                            <div className="character" onClick={() => playAudio('méng')}> méng </div>
                            <div className="character" onClick={() => playAudio('měng')}> měng </div>
                            <div className="character" onClick={() => playAudio('mèng')}> mèng </div>
                        </div>
                    </th>
                <th><div className="blank"></div></th>
                </tr> 
                <tr>                        
                    <th className="start"> f </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fā')}> fā </div>
                            <div className="character" onClick={() => playAudio('fá')}> fá </div>
                            <div className="character" onClick={() => playAudio('fă')}> fă </div>
                            <div className="character" onClick={() => playAudio('fà')}> fà </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fō')}> fō </div>
                            <div className="character" onClick={() => playAudio('fó')}> fó </div>
                            <div className="character" onClick={() => playAudio('fŏ')}> fŏ </div>
                            <div className="character" onClick={() => playAudio('fò')}> fò </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>
                    <th><div className="blank"></div></th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fēi')}> fēi </div>
                            <div className="character" onClick={() => playAudio('féi')}> féi </div>
                            <div className="character" onClick={() => playAudio('fěi')}> fěi </div>
                            <div className="character" onClick={() => playAudio('fèi')}> fèi </div>
                        </div>
                    </th>
                    <th><div className="blank"></div></th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fōu')}> fōu </div>
                            <div className="character" onClick={() => playAudio('fóu')}> fóu </div>
                            <div className="character" onClick={() => playAudio('fŏu')}> fŏu </div>
                            <div className="character" onClick={() => playAudio('fòu')}> fòu </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fān')}> fān </div>
                            <div className="character" onClick={() => playAudio('fán')}> fán </div>
                            <div className="character" onClick={() => playAudio('făn')}> făn </div>
                            <div className="character" onClick={() => playAudio('fàn')}> fàn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGrid">
                            <div className="character" onClick={() => playAudio('fēn')}> fēn </div>
                            <div className="character" onClick={() => playAudio('fén')}> fén </div>
                            <div className="character" onClick={() => playAudio('fěn')}> fěn </div>
                            <div className="character" onClick={() => playAudio('fèn')}> fèn </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('fāng')}> fāng </div>
                            <div className="character" onClick={() => playAudio('fáng')}> fáng </div>
                            <div className="character" onClick={() => playAudio('făng')}> făng </div>
                            <div className="character" onClick={() => playAudio('fàng')}> fàng </div>
                        </div>
                    </th>                        
                    <th>
                        <div className="toneGridBig">
                            <div className="character" onClick={() => playAudio('fēng')}> fēng </div>
                            <div className="character" onClick={() => playAudio('féng')}> féng </div>
                            <div className="character" onClick={() => playAudio('fěng')}> fěng </div>
                            <div className="character" onClick={() => playAudio('fèng')}> fèng </div>
                        </div>
                    </th>
                <th><div className="blank"></div></th>
                </tr> 
            </table>
        );
    }
}
export default Table1