import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AllPuppies extends Component {

  componentDidMount () {
    this.props.onLoadPuppies();
  }

  render () {
    return (
      <div>
        {
          this.props.allPuppies.map(puppy => {
            return (
              <ul key={puppy.id} className="list-unstyled">
                <li>
                  <Link to={"/puppies/" + puppy.id}> { puppy.name }</Link>
                </li>
              </ul>
            );
          })
        }
      </div>
    );
  }
}
