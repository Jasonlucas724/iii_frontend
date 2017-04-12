/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";

class NavBar extends React.PureComponent {

  handleScroll = (num) => {
    window.scroll(0,num);
  }
  render() {
    const navStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      height:"100px",
      alignItems:"center",
      paddingRight:"10px",
      textDecoration:"none",
      color:"#000000",
      fontSize:".90em",
      fontFamily:"Josefin Sans",
      fontStyle:"light",
      fontWeight:"300",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
    const headStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    }
    const logoStyle={
      marginTop:"10px",
      height:"80px",
      width:"auto"
    }
    const linkStyle={
      display:"flex",
      flexDirection:"row",
      paddingRight:"10px",
      textDecoration:"none",
      color:"#000000",
      fontSize:".75em",
      fontFamily:"Josefin Sans",
      fontStyle:"light",
      fontWeight:"300",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",

    }
    return (

      <div style={headStyle}>
        <img style={logoStyle} src="http://h4z.it/Image/f02f70_llustration3.png"/>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
              Photography
          </Link>
          <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>
              Design
          </Link>
          <Link onTouchTap={()=>this.handleScroll(2100)} style={linkStyle}>
              Art
          </Link>
          <Link onTouchTap={()=>this.handleScroll(3250)} style style={linkStyle}>
              Development
          </Link>
          <Link to="/Blog" style={linkStyle}>
              Blog
          </Link>
          <Link to="/Contact" style={linkStyle}>
              Contact
          </Link>
          <Link to="/Dashboard" style={linkStyle}>
              Dashboard
          </Link>

          </nav>
      </div>
    );
  }
}

export default NavBar;
