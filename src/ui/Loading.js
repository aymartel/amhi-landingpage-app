import React from 'react'

export const Loading = () => {
    return (<>
        <section id="hero" >

            <div className="carousel-item active" >
                <div className="carousel-container">
                    <div className="container">
                        <div className="spinner-border text-warning" role="status">
                        </div>
                        <h3 className="sr-only">Loading...</h3>
                    </div>
                </div>
            </div>

        </section>



    </>
    )
}
