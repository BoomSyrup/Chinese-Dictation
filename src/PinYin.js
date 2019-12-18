import React from 'react';
import Table1 from './tables/Table1.js';
import Table2 from './tables/Table2.js';
import Table3 from './tables/Table3.js';
import Table4 from './tables/Table4.js';
import Table5 from './tables/Table5.js';
import Table6 from './tables/Table6.js';
import Table7 from './tables/Table7.js';
import Table8 from './tables/Table8.js';
import Table9 from './tables/Table9.js';
import Table10 from './tables/Table10.js';
import Table11 from './tables/Table11.js';
import Table12 from './tables/Table12.js';
import Table13 from './tables/Table13.js';
import Table14 from './tables/Table14.js';
import Table15 from './tables/Table15.js';
import Table16 from './tables/Table16.js';
import './PinYin.css';
import './css/pushy-buttons.css'

class PinYin extends React.Component {
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
            case 3: return (
                <Table3 />
            );
            case 4: return (
                <Table4 />  
            );
            case 5: return (
                <Table5 />
            );
            case 6: return (
                <Table6 />
            );
            case 7: return (
                <Table7 />
            );
            case 8: return (
                <Table8 />
            );
            case 9: return (
                <Table9 />
            );
            case 10: return (
                <Table10 />
            );
            case 11: return (
                <Table11 />
            );
            case 12: return (
                <Table12 />
            );
            case 13: return (
                <Table13 />
            );
            case 14: return (
                <Table14 />
            );
            case 15: return (
                <Table15 />
            );
            case 16: return (
                <Table16 />
            );
            default: return (
                <Table1 />
            );
        } 
    }
    render() {
        return (
            <>
            <thead>
                {this.toRender(this.state.renderGroup)}
            </thead>
            <div className="group_menu">
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(1)}>b p m f - Basic Endings</button>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(2)}>b p m f - i Endings</button>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(3)}>b p m f - u Endings</button>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(4)}>b p m f - ü Endings</button>


                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(5)}>d t n l - Basic Endings</button>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(6)}>d t n l - i Endings</button>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(7)}>d t n l - u Endings</button>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(8)}>d t n l - ü Endings</button>


                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(9)}>z c s - Basic Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(10)}>z c s - u Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>


                <button className="pushy__btn pushy__btn--sm pushy__btn--red" id="lastButton" onClick={() => this.clickTable(11)}>zh ch sh r - Basic Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red" id="lastButton"> blank </button> </div>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" id="lastButton" onClick={() => this.clickTable(12)}>zh ch sh r - u Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red" id="lastButton"> blank </button> </div>


                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(13)}>j q x - i Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(14)}>j q x - ü Endings</button>

                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(15)}>g k h - Basic Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
                <button className="pushy__btn pushy__btn--sm pushy__btn--red" onClick={() => this.clickTable(16)}>g k h - u Endings</button>
                <div className="blank_button"> <button className="pushy__btn pushy__btn--sm pushy__btn--red"> blank </button> </div>
            </div>
            </>
        );
    }
}
export default PinYin