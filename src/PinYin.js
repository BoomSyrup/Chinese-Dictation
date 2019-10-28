import React from 'react';
import './PinYin.css';

class Table extends React.Component{
    finals() {
        return (
            <tr>
                <th></th> <th>a</th> <th>o</th> <th>e</th> <th>-i</th> <th>er</th> <th>ai</th> <th>ei</th> <th>ao</th> <th>ou</th> <th>an</th> <th>en</th> <th>ang</th> <th>eng</th> <th>ong</th><th>i</th><th>ia</th><th>iao</th> <th>ie</th> <th>iu</th> <th>ian</th> <th>in</th> <th>iang</th> <th>ing</th> <th>iong</th><th>u</th><th>ua</th><th>uo</th><th>uai</th> <th>ui</th> <th>uan</th><th>un</th><th>uang</th><th>ueng</th> <th>ü</th> <th>üe</th> <th>üan</th> <th>ün</th>
            </tr> 
        );
    }
    basic(){
        return(
            <tr>
                <th> </th> <th>a</th> <th>o</th> <th>e</th> <th></th> <th>er</th> <th>ai</th> <th>ei</th> <th>ao</th> <th>ou</th> <th>an</th> <th>en</th> <th>ang</th> <th>eng</th> <th>ong</th><th>yi</th><th>ya</th><th>yao</th> <th>ye</th> <th>you</th> <th>yan</th> <th>yin</th> <th>yang</th> <th>ying</th> <th>yong</th><th>wu</th><th>wa</th><th>wo</th><th>wai</th> <th>wei</th> <th>wan</th><th>wen</th><th>wang</th><th>weng</th> <th>yu</th> <th>yue</th> <th>yuan</th> <th>yun</th>
            </tr>
        );
    }
    render() {
        return (
            <table>
                <thead>
                    {this.finals()}
                </thead>
                <tbody>
                    {this.basic()}  
                </tbody>
            </table>
        );
    }
}
export default Table