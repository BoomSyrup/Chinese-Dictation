import React from 'react';
import '../PinYin.css';

class Table8 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"> f </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> b </th>                  
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> n </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character"> nǖ </div>
                            <div class="character"> nǘ </div>
                            <div class="character"> nǚ </div>
                            <div class="character"> nǜ </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character"> nǖe </div>
                            <div class="character"> nǘe </div>
                            <div class="character"> nǚe </div>
                            <div class="character"> nǜe </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> l </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character"> lǖ </div>
                            <div class="character"> lǘ </div>
                            <div class="character"> lǚ </div>
                            <div class="character"> lǜ </div>
                        </div>
                    </th>
                    <th>
                        <div class="toneGrid">
                            <div class="character"> lǖe </div>
                            <div class="character"> lǘe </div>
                            <div class="character"> lǚe </div>
                            <div class="character"> lǜe </div>
                        </div>
                    </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table8