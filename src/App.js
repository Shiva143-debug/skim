import './App.css'
import {Component} from 'react'

class App extends Component {
  state = {is: true, amount: 0}

  handleCheckboxChange = event => {
    const {is} = this.state
    this.setState({is: event.target.value})
    console.log(is)
    if (event.target.value === '3') {
      this.setState({amount: 528.0})
    } else if (event.target.value === '2') {
      this.setState({amount: 345.0})
    } else if (event.target.value === '1') {
      this.setState({amount: 195.0})
    }
  }

  render() {
    const {is, amount} = this.state
    return (
      <div className="container">
        <h1>Bundle&Save</h1>
        <div className={is === '1' ? 'selected' : 'one'}>
          <input
            type="radio"
            id="1"
            value="1"
            checked={is === '1'}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="1" className="label">
            1 pair <br />
            DKK 195.00
            {is === '1' ? (
              <div>
                <div className="flex">
                  <p className="p">size</p>
                  <p className="p">colour</p>
                </div>
                <div className="flex">
                  <p>#1</p>
                  <div>
                    <select className="select">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>white</option>
                      <option>blue</option>
                      <option>green </option>
                      <option>yellow</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : null}
          </label>
          <label htmlFor="1" className="label">
            50% OFF
          </label>
        </div>

        <div className={is === '2' ? 'selected' : 'one'}>
          <input
            type="radio"
            id="2"
            value="2"
            checked={is === '2'}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="2" className="label">
            2 pair <br />
            DKK 345.00
            {is === '2' ? (
              <div>
                <div className="flex">
                  <p className="p">size</p>
                  <p className="p">colour</p>
                </div>
                <div className="flex">
                  <p>#1</p>
                  <div>
                    <select className="select">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>white</option>
                      <option>blue</option>
                      <option>green </option>
                      <option>yellow</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <p>#2</p>
                  <div>
                    <select className="select">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>white</option>
                      <option>blue</option>
                      <option>green </option>
                      <option>yellow</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : null}
          </label>

          <label htmlFor="2" className="label">
            <span>Most Popular</span>
            <br />
            40% OFF
          </label>
        </div>
        <div className={is === '3' ? 'selected' : 'one'}>
          <input
            type="radio"
            id="3"
            value="3"
            checked={is === '3'}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="3" className="label">
            3 pair <br />
            DKK 528.00
            {is === '3' ? (
              <div>
                <div className="flex">
                  <p className="p">size</p>
                  <p className="p">colour</p>
                </div>
                <div className="flex">
                  <p>#1</p>
                  <div>
                    <select className="select">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>white</option>
                      <option>blue</option>
                      <option>green </option>
                      <option>yellow</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <p>#2</p>
                  <div>
                    <select className="select">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>white</option>
                      <option>blue</option>
                      <option>green </option>
                      <option>yellow</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <p>#3</p>
                  <div>
                    <select className="select">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>white</option>
                      <option>blue</option>
                      <option>green </option>
                      <option>yellow</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : null}
          </label>
          <label htmlFor="3" className="label">
            60% OFF
          </label>
        </div>
        <div className="bottom">
          <p className="day">Free 2 Day Shipping</p>
          <p>Total: DKK {amount}.00</p>
          {/* {is === '3' ? <p> Total:DKK 528.00</p> : null}
          {is === '2' ? <p> Total:DKK 345.00</p> : null}
          {is === '1' ? <p> Total:DKK 195.00</p> : null} */}
        </div>
        <button type="button" className="button">
          +Add to Cart
        </button>
        <p className="end">powered by Pumper</p>
      </div>
    )
  }
}
export default App
