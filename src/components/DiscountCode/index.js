import React, { Component } from 'react';

class DiscountCode extends Component {
  render() {
    return (
      <div className="discount section-one">
        {/* TODO: DISABLED FOR NOW */}

        <div className="discount__header section-one__headers">Discount Code</div>
        <div className="discount__contents section-one__contents">
          <p className="discount__text col-12">
            If you have a discount code, please enter it in the box below
          </p>
          <div className="col-12 align-items-lg-center">
            <label className="discount__label" htmlFor="discountCode">
              Code:
            </label>
            <input
              id="discountCode"
              type="text"
              value=""
              className="input discount__input"
              disabled
            />

            <button type="button" className="btn btn-dark discount__btn" disabled>
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscountCode;
