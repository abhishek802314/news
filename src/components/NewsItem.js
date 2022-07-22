import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className='my-3'>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {description}...
                    </Card.Text>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                    <Button href={newsUrl} target='_blank' variant="dark btn-sm">Read More</Button>
                </Card.Body>
            </Card >
        </div >
    )

}

export default NewsItem


