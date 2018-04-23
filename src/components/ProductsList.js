import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ProductList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  render() {
    const { products } = this.props
    return (
      <div>
        <h1>All Products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (
              <tr key={ product.id }>
                <td>{ product.name }</td>
                <td> &euro; { product.price}.00</td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductList
