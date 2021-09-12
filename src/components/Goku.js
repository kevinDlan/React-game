import React, { Component } from 'react';
import goku from '../img/goku.png';
import countHit from './CountHit';

class Goku extends Component {


    render() {
        const {name,vie,frapper,hocState} = this.props
        const lifeValue = vie > 0 ? (<td><span className="badge bg-success fw-bold">{vie}%</span></td>) : (<td><span className="badge bg-danger fw-bold">Combatant Mort</span></td>);
        const canFight = vie > 0 ? (<button onClick={frapper} className="btn btn-success m-3">{name} Frappe</button>):(<button disabled className="btn btn-danger m-3">{name} Mort</button>);
        return (
           <div className="col">
                <img className="mb-1" width="300px" height="300px" src={goku} alt="goku" /><br />
                {canFight}
                <table className="table table-striped">
                   <thead>
                       <tr key="">
                           <th scope="col">Coups</th>
                           <th scope="col">Vie</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr key="">
                           <td>{hocState.hits}</td>
                           {lifeValue}
                       </tr>
                   </tbody>
                </table>
            </div>
        )
    }
}

export default  countHit(Goku,20);