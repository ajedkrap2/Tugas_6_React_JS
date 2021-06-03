
import React, { Component } from 'react'
import "../Styles/Header.css"
import {Link} from "react-router-dom"

const PagesLink = (props) => {
    let {name, link, last = false} = props
    return (
      <td>
        <h2>
          <Link to={link} className="link" >
            {name}
          </Link>
            {last ? "" : " | "}
        </h2>
      </td>
    )
  }


class Header extends Component {
  render() {
    return (
      <div id="header">
        <table style={{width: '100%'}}>
          <tbody>
            <tr>
              <center>
                <PagesLink name="Home" link="/home"/>
                <PagesLink name="Menu Makanan" link="/menu_makanan"/>
                <PagesLink name="Menu Minuman" link="/menu_minuman"/>
                <PagesLink name="Kontak" link="/kontak" last/>
              </center>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Header;
