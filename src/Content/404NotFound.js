import React from 'react'
import { Link  } from 'react-router-dom'

class PageNotFound extends React.Component {
    render() {
        return (
            <div className="error-page">
                <h2 className="headline text-warning"> 404</h2>

                <div className="error-content">
                <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                <p>
                    We could not find the page you were looking for.
                    Meanwhile, you may <Link to="/">return to dashboard</Link>
                </p>

                <form className="search-form">
                    <div className="input-group">
                    <input type="text" name="search" className="form-control" placeholder="Search"/>

                    <div className="input-group-append">
                        <button type="submit" name="submit" className="btn btn-warning"><i className="fas fa-search"></i>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default PageNotFound