import React from 'react';
import '../PinYin.css';

class Table4 extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr class="letter_head">
                        <th class="start"></th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
                    </tr> 
                </thead>
                <tr>
                    <th class="start"></th>
                    <th>
                        <div class="toneGrid">
                            <div class="character"> yū </div>
                            <div class="character"> yú </div>
                            <div class="character"> yǔ </div>
                            <div class="character"> yù </div>
                        </div>
                    </th>                        
                    <th>
                        <div class="toneGrid">
                            <div class="character"> yūe </div>
                            <div class="character"> yúe </div>
                            <div class="character"> yǔe </div>
                            <div class="character"> yùe </div>
                        </div>
                    </th>  
                    <th>
                        <div class="toneGridBig">
                            <div class="character"> yūan </div>
                            <div class="character"> yúan </div>
                            <div class="character"> yǔan </div>
                            <div class="character"> yùan </div>
                        </div>
                    </th> 
                    <th>
                        <div class="toneGrid">
                            <div class="character"> yūn </div>
                            <div class="character"> yún </div>
                            <div class="character"> yǔn </div>
                            <div class="character"> yùn </div>
                        </div>
                    </th>   
                </tr>
                <tr>
                    <th class="start"> b </th>                  
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> p </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> m </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
                <tr>
                    <th class="start"> f </th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                    <th><div class="blank"></div></th>
                </tr>
            </table>
        );
    }
}
export default Table4