import * as React from 'react'
import { Link } from 'gatsby'

const Pagenation = ({path, pageContext}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? path : `${path}/${(currentPage - 1).toString()}`
  const nextPage = `${path}/${(currentPage + 1).toString()}`
  return (
    <div className="has-text-centered" style={{ margin: "20px" }}>
      {!isFirst ? (
        <Link to={prevPage} rel="prev" className="btn" style={{ margin: "5px" }}>
          Prev
        </Link>
      ) :
        <div className="btn-disable" style={{ margin: "5px" }}>
          Prev
        </div>
      }
      <span className="aldrich" style={{margin: "10px", fontSize: "12px"}}>page {currentPage} of {numPages}</span>
      {!isLast ? (
        <Link to={nextPage} rel="next" className="btn" style={{ margin: "5px" }}>
          Next
        </Link>
      ) :
        <div className="btn-disable" style={{ margin: "5px" }}>
          Next
        </div>
      }
    </div>
  )
}

export default Pagenation
