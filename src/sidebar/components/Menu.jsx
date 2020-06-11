import React from 'react'

// class Menu extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//       return (
//         <>
//           <div className="sidebarLeft">
//             <nav className="menu">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//                 <li>
//                   <a href="#">About</a>
//                 </li>
//               </li>
//             </nav>
//           </div>
//         </>
//       )
//   }
// }
function Menu() {
  return (
    <>
      <div className="sidebarLeft">
        <nav className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
            <li>
              <a href="#">About</a>
            </li>
          </li>
        </nav>
      </div>
    </>
  )
}
export default Menu
