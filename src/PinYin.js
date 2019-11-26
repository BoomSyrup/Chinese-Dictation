import React from 'react';
import Table1 from './Table1.js';
import './PinYin.css';

class PinYin extends React.Component{
    render() {
        return (
            <table>
                <thead>
                    <Table1 />
                </thead>
            </table>
        );
    }
}
export default PinYin

{/* <tr>
    <th></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th><th>i</th><th>ia</th><th>iao</th><th>ie</th><th>iu</th><th>ian</th><th>in</th><th>iang</th><th>ing</th><th>iong</th><th>u</th><th>ua</th><th>uo</th><th>uai</th><th>ui</th><th>uan</th><th>un</th><th>uang</th><th>ueng</th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
</tr>  */}