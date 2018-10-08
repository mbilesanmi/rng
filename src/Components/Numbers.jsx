import React, { Component } from 'react';

import { saveAs } from 'file-saver';
import _ from 'lodash';

class Numbers extends Component {
  state = {
    numberLength: 10,
    numbers: [],
    numbersToShow: [],
    page: 1,
    pagination: {},
    quantity: 0
  };

  baseState = this.state;

  updateFormState = (event) => {
    const {
      name,
      value
    } = event.target;

    this.setState({
      [name]: value
    });
  }

  generateNumbers = (event) => {
    event.preventDefault();
    
    const {
      numberLength,
      quantity
    } = this.state;

    this.setState(this.baseState);

    let nums = [];
    for (let i = 0; i < quantity; i++) {
      const num =`0${Math.floor(Math.pow(10, numberLength-1) + Math.random() * 9 * Math.pow(10, numberLength-1))}`;
      if (_.findIndex(nums, { 'phoneNo': num }) === -1) {
        nums.push({ 'id': i+1, 'phoneNo': num });
      } else {
        i--;
      }
    }

    this.getPaginatedItems(nums);
  }
  
  saveNumbers = (nums) => {
    saveAs(new Blob(nums, {type: "text/csv;charset=utf-8"}), 'data.csv');
  }

  getPaginatedItems = (numbers) => {
    const {
      page
    } = this.state;

    const per_page = 10;
    const offset = (page - 1) * per_page;
    const paginatedNums = _.drop(numbers, offset).slice(0, per_page);

    const pagination = {
      page: page,
      perPage: per_page,
      total: numbers.length,
      totalPages: Math.ceil(numbers.length / per_page)
    };

    this.setState({
      numbers,
      numbersToShow: paginatedNums,
      pagination
    });
  }

  handlePageClick = (data) => {
    const { selected } = data;
    const {
      numbers
    } = this.state;

    this.setState({ page: Math.ceil(selected) + 1 }, () => {
      this.getPaginatedItems(numbers);
    });
  }

  setSortState = (new_sort) => {
    this.setState({
      sort: new_sort,
      order: this.state.order === 'asc' ? 'desc' : 'asc'
    }, () => {
      const {
        numbers,
        order,
        sort
      } = this.state;

      const orderedNumbers = _.orderBy(numbers, [sort], [order]);
      this.getPaginatedItems(orderedNumbers);
    });
  }

  handleSortClick = (event) => {
    let new_sort;

    if (event.target.getAttribute('name')) {
      new_sort = event.target.getAttribute('name');

      this.setSortState(new_sort);
    }
  }

  render() {
    const {
      numbers,
      numbersToShow,
      order,
      pagination,
      sort,
      quantity
    } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <p className="lead">
            This app helps you generate unique phone numbers.
            To get started, enter the amount of unique phone numbers you want to generate below.
          </p>
          <form onSubmit={this.generateNumbers} className="mb-3">
            <div className="row justify-content-md-center">
              <input
                className="col-md-2 form-control mr-3"
                id="quantity"
                max={10000}
                min={1}
                name="quantity"
                onChange={this.updateFormState}
                type="number"
                value={quantity}
                required/>
              <button className="btn btn-primary">
                Generate
              </button>
            </div>
          </form>
          {
            numbers.length > 0 &&
            <div>
              <p className="lead">Numbers generated - {numbers.length}</p>
              <p className="lead">Max Number - {_.maxBy(numbers, 'phoneNo').phoneNo}</p>
              <p className="lead">Min Number - {_.minBy(numbers, 'phoneNo').phoneNo}</p>
              <div className="row justify-content-md-center">
                <button id="saveNumbers" className="btn-outline-success" onClick={this.saveNumbers}>
                  Save number list
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
};

export default Numbers;
