import React from 'react';
import Form from 'react-bootstrap/Form';
import sprite from '../../../images/sprite.svg';
import '../../../styles/components/sort.scss';

const Sort = () => {
    return (
        <>
        <div className="container sortContainer">
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="checkInput" label="Instantly available vehicles" />
      </Form.Group>
      <div className="sortBy">
      Sort by 
      <svg className="sortSvg">
               <use href={sprite + "#icon-sort"} />
            </svg>
            <span className="sortText">
            Publication date (ascending)
            </span>
      </div>
        </div>
        </>
    );
}

export default Sort;