import React from 'react'

const Newsitems =(props)=> {
    let{title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display :'flex',
            justifyContent : 'flex-end',
            position  : 'absolute',
            left : '0',
          }}>
        <span className="badge rounded-pill bg-danger " >{source}</span>
        </div>
  <img src={!imageUrl?"https://media.gettyimages.com/vectors/abstract-globe-background-vector-id1311148884?s=612x612":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
}

export default Newsitems
