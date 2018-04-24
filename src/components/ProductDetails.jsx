import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  }

  render() {
    const { product } = this.props

    return (
      <div>
        <h1>{ product.name }</h1>
        <img alt="" src={ product.image } />
        <p>{ product.description }</p>
        <p>&euro;{ product.price },00</p>
        <button>Buy this product</button>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    product: state.products.find(p => p.id === Number(props.match.params.id))
  }
}

export default connect(mapStateToProps)(ProductDetails)
