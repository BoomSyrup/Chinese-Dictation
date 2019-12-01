import React from 'react';
import Table1 from './Table1.js';
import Table2 from './Table2.js'
import './PinYin.css';
import Button from 'react-bootstrap/Button' 
import './css/pushy-buttons.css'

class PinYin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { renderGroup: 1 };
        this.clickTable = this.clickTable.bind(this);
    }

    clickTable(num) {
        this.setState(state => ({
            renderGroup: num
        }));
    }

    toRender(param) {
        switch(param) {
            case 1 : return (                      
                <Table1 />
            );
            case 2 : return (
                <Table2 />
            );
        } 
    }
    render() {
        return (
            <>
            <thead>
                {this.toRender(this.state.renderGroup)}
            </thead>
            <div class="group_menu">
                <div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(1)}>b p m f - Basic Endings</button>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(2)}>b p m f - i Endings</button>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(3)}>b p m f - u Endings</button>
                </div>
                <div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(4)}>d t n l - Basic Endings</button>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(5)}>d t n l - i Endings</button>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(6)}>d t n l - u Endings</button>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(7)}>d t n l - ü Endings</button>
                </div>
                <div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(8)}>z c s - Basic Endings</button>
                    <div class="blank_button"> <button class="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(9)}>z c s - u Endings</button>
                </div>
                <div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(10)}>zh ch sh - Basic Endings</button>
                    <div class="blank_button"> <button class="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(11)}>zh ch sh - u Endings</button>
                </div>
                <div>
                    <div class="blank_button"> <button class="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(12)}>j q x - i Endings</button>
                    <div class="blank_button"> <button class="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(13)}>j q x - ü Endings</button>
                </div>
                <div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(14)}>d t n l - Basic Endings</button>
                    <div class="blank_button"> <button class="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                    <button class="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(15)}>d t n l - u Endings</button>
                </div>
            </div>
            </>
        );
    }
}
export default PinYin

/* <tr>
    <th></th><th>a</th><th>o</th><th>e</th><th>-i</th><th>er</th><th>ai</th><th>ei</th><th>ao</th><th>ou</th><th>an</th><th>en</th><th>ang</th><th>eng</th><th>ong</th><th>i</th><th>ia</th><th>iao</th><th>ie</th><th>iu</th><th>ian</th><th>in</th><th>iang</th><th>ing</th><th>iong</th><th>u</th><th>ua</th><th>uo</th><th>uai</th><th>ui</th><th>uan</th><th>un</th><th>uang</th><th>ueng</th><th>ü</th><th>üe</th><th>üan</th><th>ün</th>
</tr>  */