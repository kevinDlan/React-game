import React,{Component} from 'react';

const countHit = (WrappedComponent, power)=> {
    class CountHit extends Component {
        state = {
            hits : 0
        }
    
        frapper = ()=>{
            this.setState( prevState => {
               return {
                   hits: prevState.hits+1
                }  
            })
        }

        componentDidUpdate(prevProps, prevState) 
        {
            if(this.state !== prevState)
            {
              const compName = WrappedComponent.name;
              this.props.reduceHandle(compName,power)
            }
        }

        render() {
            return <WrappedComponent frapper = {this.frapper} hocState={this.state} {...this.props}/>
        }
    }
    return CountHit;
}

export default  countHit
