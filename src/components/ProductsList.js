import React, { PureComponent } from 'react'
import { fetchAllProducts } from '../actions/products.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  render() {
    const {products} = this.props
    console.log('aaaaaaaa', products)

    return (
      <div>
        <h1>All products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>&euro; {product.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}

// const mapStateToProps = function (state) {
//   return {
//     products: state.Products
//   }
// }

const mapStateToProps = ({ products }) => ({ products })


export default connect(mapStateToProps, { fetchAllProducts })(ProductsList)
