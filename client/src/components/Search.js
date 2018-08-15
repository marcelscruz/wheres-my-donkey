import React, { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
  }

  onSearchChange = e => {
    const search = e.target.value
    this.setState({
      search,
    })
  }

  onSubmit = e => {
    e.preventDefault()

    console.log(this.state.search)
  }

  render() {
    return (
      <div>
        <form>
          <input
            autoFocus={true}
            onChange={this.onSearchChange}
            placeholder="We don't think it's necessary, but you can search for something else"
            type="text"
            value={this.state.search}
          />
        </form>

        <button onClick={this.onSubmit}>Search</button>
      </div>
    )
  }
}

export default Search
