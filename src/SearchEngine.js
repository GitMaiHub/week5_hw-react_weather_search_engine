import React from "react";
import "./SearchEngine.css";
export default function SearchEngine(props) {
    return (
        <div className="SearchEngine">
            <form>
                <div className="row">
<div className="col-md-9">
    <input type="search" placeholder="Enter a city..." className="form-control" />
</div>
<div className="col-md-3 d-grid d-md-block">
    <input type="submit" value="Search" className="btn btn-success" />
</div>

                </div>
            </form>
        </div>
    )
}